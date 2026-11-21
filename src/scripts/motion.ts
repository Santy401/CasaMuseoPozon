import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

let lenis: Lenis | null = null;
let mm: gsap.MatchMedia | null = null;
let splits: SplitText[] = [];
let introDone = false;
/** Las escenas fijas (pin) ocultan la barra superior mientras duran. */
let navLocked = false;
let navLockEnd = 0;

function lockChrome(active: boolean) {
  navLocked = active;
  document.getElementById("mobile-dock")?.classList.toggle("is-scene-hidden", active);
}

/** Se resuelve cuando termina el preloader (o de inmediato si no se muestra). */
let ready: Promise<void> = Promise.resolve();

/** Selectores de contenido que se revelan automáticamente al entrar en pantalla. */
const REVEAL_SELECTOR = [
  "main section h2",
  "main section h3",
  "main section p",
  "main section .grid > *",
  "main section figure",
  "main section form",
  "main section ul > li",
  "main section [class*='rounded-']",
  "main section a[class*='px-']",
  "main section img",
  "main > div > .grid > *",
].join(",");

/** Nunca animar contenido que el CSS mantiene oculto a propósito o que es fijo. */
const SKIP_ANCESTOR =
  "[class*='opacity-0'], [class*='invisible'], .hidden, [hidden], [aria-hidden='true'], dialog, details:not([open]) > :not(summary), .fixed, .sticky, [data-no-anim], [data-hero], [data-page-hero], [data-timeline], [data-cs]";

/* ---------------------------------------------------------------- Lenis */
function startLenis() {
  if (lenis || reducedQuery.matches) return;
  lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    anchors: { offset: -90 },
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ------------------------------------------------------------ Preloader */
function runPreloader(): Promise<void> {
  const pre = document.getElementById("preloader");
  if (!introDone) {
    try { if (sessionStorage.getItem("pozon-intro")) introDone = true; } catch { /* sin storage */ }
  }
  // Solo en la primera carga real: nunca durante una navegación con cortina ni si ya se vio en la sesión.
  if (!pre || introDone || curtainActive || reducedQuery.matches) {
    pre?.remove();
    introDone = true;
    return Promise.resolve();
  }

  const logo = document.getElementById("pl-logo");
  const bar = document.getElementById("pl-bar");
  const count = document.getElementById("pl-count");
  const caption = document.getElementById("pl-caption");
  const state = { v: 0 };
  document.body.style.overflow = "hidden";
  lenis?.stop();

  const loaded = new Promise<void>((res) =>
    document.readyState === "complete" ? res() : window.addEventListener("load", () => res(), { once: true }),
  );

  return new Promise<void>((resolve) => {
    const intro = gsap.timeline({ defaults: { ease: "power2.out" } });
    intro
      .to(logo, { opacity: 1, duration: 1.1 }, 0)
      .fromTo(caption, { opacity: 0 }, { opacity: 1, duration: 0.9 }, 0.3)
      .to(state, {
        v: 100,
        duration: 1.8,
        ease: "power1.inOut",
        onUpdate: () => {
          if (count) count.textContent = String(Math.round(state.v));
          if (bar) gsap.set(bar, { scaleX: state.v / 100 });
        },
      }, 0.2);

    Promise.all([loaded, new Promise<void>((r) => intro.eventCallback("onComplete", () => r()))]).then(() => {
      gsap
        .timeline({
          onComplete: () => {
            pre.remove();
            document.body.style.overflow = "";
            lenis?.start();
            introDone = true;
            try { sessionStorage.setItem("pozon-intro", "1"); } catch { /* sin storage */ }
            resolve();
          },
        })
        .to(pre.querySelectorAll("#pl-logo, #pl-caption, #pl-count, #pl-bar"), { opacity: 0, duration: 0.4, ease: "power1.in" }, 0)
        .to(pre, { yPercent: -100, duration: 0.95, ease: "power4.inOut" }, 0.35);
    });
  });
}

/* ------------------------------------------- Cortina entre páginas */
const PAGE_NAMES: Record<string, string> = {
  "/": "Inicio", "/quienes-somos": "Quiénes somos", "/propuesta-valor": "Propuesta de valor", "/socios": "Socios",
  "/representante-legal": "Representante legal", "/portafolio": "Portafolio", "/como-apoyar": "Cómo apoyar",
  "/modelo-museal": "Modelo museal", "/nodos-museales": "Nodos museales", "/recorrido-museal": "Recorrido museal",
  "/turismo-comunitario": "Turismo comunitario", "/coleccion": "Colección", "/red-museologica": "Red museológica",
  "/pedagogia-territorial": "Pedagogía territorial", "/catedra-identidad": "Cátedra de identidad",
  "/escuela-museologica": "Escuela de museología", "/proyectos-sociales": "Proyectos sociales", "/eventos": "Eventos",
  "/noticias": "Noticias", "/galeria": "Galería", "/revista": "Revista El Pozón", "/infraestructura": "Infraestructura",
  "/politica-privacidad": "Privacidad", "/gci-lab": "GCI Lab", "/bienestar-territorial": "Bienestar territorial",
};

function pageName(to: string): string {
  try {
    const path = new URL(to, location.origin).pathname.replace(/\/$/, "") || "/";
    if (PAGE_NAMES[path]) return PAGE_NAMES[path];
    const last = path.split("/").filter(Boolean).pop() ?? "";
    return last ? last.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase()) : "Casa Museo";
  } catch {
    return "Casa Museo";
  }
}

function curtainEls() {
  const root = document.getElementById("page-curtain");
  return {
    root,
    bars: root ? gsap.utils.toArray<HTMLElement>(".curtain-bars span", root) : [],
    logo: document.getElementById("curtain-logo"),
    kicker: root?.querySelector<HTMLElement>(".curtain-kicker") ?? null,
    title: document.getElementById("curtain-title"),
    line: root?.querySelector<HTMLElement>(".curtain-line") ?? null,
  };
}

let curtainFailsafe: number | undefined;
let curtainActive = false;

function curtainIn(label: string): Promise<void> {
  const { root, bars, logo, kicker, title, line } = curtainEls();
  if (!root || reducedQuery.matches) return Promise.resolve();
  curtainActive = true;
  root.style.pointerEvents = "auto";
  if (title) title.textContent = label;
  gsap.killTweensOf([bars, logo, kicker, title, line]);
  gsap.set(root, { visibility: "visible" });
  gsap.set(bars, { scaleY: 0, transformOrigin: "50% 100%" });
  gsap.set([logo, kicker], { opacity: 0, y: 18 });
  gsap.set(title, { yPercent: 110 });
  gsap.set(line, { scaleX: 0 });
  return new Promise((resolve) => {
    gsap
      .timeline({ onComplete: resolve })
      .to(bars, { scaleY: 1, duration: 0.7, ease: "power4.inOut", stagger: { each: 0.06, from: "center" } }, 0)
      .to(logo, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.38)
      .to(kicker, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.46)
      .to(title, { yPercent: 0, duration: 0.7, ease: "power4.out" }, 0.5)
      .to(line, { scaleX: 1, duration: 0.7, ease: "power3.inOut" }, 0.6);
    window.clearTimeout(curtainFailsafe);
    curtainFailsafe = window.setTimeout(curtainOut, 6000);
  });
}

function curtainOut() {
  const { root, bars, logo, kicker, title, line } = curtainEls();
  window.clearTimeout(curtainFailsafe);
  if (!root || !curtainActive) return;
  curtainActive = false;
  gsap.killTweensOf([bars, logo, kicker, title, line]);
  gsap
    .timeline({
      onComplete: () => {
        root.style.pointerEvents = "none";
        gsap.set(root, { visibility: "hidden" });
        gsap.set(bars, { scaleY: 0 });
      },
    })
    .to(title, { yPercent: -110, duration: 0.45, ease: "power3.in" }, 0)
    .to([logo, kicker], { opacity: 0, y: -14, duration: 0.35, ease: "power2.in" }, 0)
    .to(line, { scaleX: 0, transformOrigin: "right", duration: 0.4, ease: "power3.in" }, 0)
    .set(bars, { transformOrigin: "50% 0%" }, 0.35)
    .to(bars, { scaleY: 0, duration: 0.75, ease: "power4.inOut", stagger: { each: 0.06, from: "edges" } }, 0.4);
}

document.addEventListener("astro:before-preparation", (e) => {
  const event = e as Event & { loader: () => Promise<void>; to: URL };
  const original = event.loader;
  const label = pageName(String(event.to));
  event.loader = async () => {
    await curtainIn(label);
    await original();
  };
});

/* ------------------------------------------------------------- Reveals */
function pickRevealTargets(): HTMLElement[] {
  const chosen: HTMLElement[] = [];
  document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
    if (el.closest(SKIP_ANCESTOR)) return;
    if (el.matches("[data-parallax], [data-scrub-words], [data-split], [data-count]")) return;
    if (chosen.some((c) => c.contains(el))) return;
    if (el.closest("[data-parallax-wrap]") && el.tagName === "IMG") return;
    chosen.push(el);
  });
  return chosen;
}

function setupReveals(isDesktop: boolean) {
  const targets = pickRevealTargets();
  const distance = isDesktop ? 48 : 26;
  gsap.set(targets, { opacity: 0, y: distance });
  ScrollTrigger.batch(targets, {
    start: "top 90%",
    once: true,
    batchMax: 6,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.09,
        overwrite: true,
        clearProps: "opacity,transform",
      }),
  });
}

function setupParallax(isDesktop: boolean) {
  const travel = isDesktop ? 7 : 4;
  const zoom = isDesktop ? 1.14 : 1.09;
  document.querySelectorAll<HTMLElement>("main section .overflow-hidden").forEach((wrap) => {
    const img = wrap.querySelector<HTMLImageElement>(":scope > img.object-cover, :scope > picture img.object-cover");
    if (!img || wrap.closest("[data-hero], [data-page-hero]")) return;
    wrap.setAttribute("data-parallax-wrap", "");
    img.setAttribute("data-parallax", "");
    gsap.fromTo(
      img,
      { yPercent: -travel, scale: zoom },
      {
        yPercent: travel,
        scale: zoom,
        ease: "none",
        scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: 0.6 },
      },
    );
  });
}

function markAutoSplit() {
  document.querySelectorAll<HTMLElement>("main section h2").forEach((h) => {
    if (h.closest(SKIP_ANCESTOR) || h.closest("[data-cs], [data-stack]")) return;
    if (h.querySelector("img, svg")) return;
    h.setAttribute("data-split", "");
  });
}

function setupSplitHeadings() {
  markAutoSplit();
  document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "split-line",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }),
    });
    splits.push(split);
  });
}

function setupScrubWords() {
  document.querySelectorAll<HTMLElement>("[data-scrub-words]").forEach((el) => {
    const section = el.closest<HTMLElement>("[data-scrub-pin]");
    const split = SplitText.create(el, { type: "words,chars", charsClass: "scrub-char" });
    splits.push(split);
    const chars = split.chars;
    gsap.set(chars, { opacity: 0.12 });

    // Con la escena fija, la frase ocupa la pantalla y se ilumina letra por letra al hacer scroll.
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: section
        ? {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * 1.7)}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onToggle: (self) => lockChrome(self.isActive),
            onLeave: (self) => { navLockEnd = self.end; },
          }
        : { trigger: el, start: "top 82%", end: "bottom 45%", scrub: 0.5 },
    });
    tl.to(chars, { opacity: 1, stagger: { each: 1 / chars.length, from: "start" }, duration: 1 }, 0);
  });
}

function setupCounters() {
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const end = parseFloat(el.dataset.count || "0");
    const suffix = el.dataset.suffix ?? "";
    const state = { v: 0 };
    el.textContent = `0${suffix}`;
    gsap.to(state, {
      v: end,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(state.v).toLocaleString("es-CO")}${suffix}`;
      },
    });
  });
}

/* ---------------------------------------------------------------- Hero */
function setupHero(isDesktop: boolean) {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;
  const media = hero.querySelector<HTMLElement>("[data-hero-media]");
  const content = hero.querySelector<HTMLElement>("[data-hero-content]");
  const intro = hero.querySelectorAll<HTMLElement>("[data-hero-in]");
  const heroTitle = hero.querySelector<HTMLElement>("[data-hero-title]");

  const tl = gsap.timeline({ defaults: { ease: "power3.out" }, paused: true });
  tl.from(media, { scale: 1.2, duration: 2.4, ease: "power2.out" }, 0);
  if (heroTitle) {
    const split = SplitText.create(heroTitle, { type: "lines", mask: "lines" });
    splits.push(split);
    tl.from(split.lines, { yPercent: 108, duration: 1.25, stagger: 0.14, ease: "power4.out" }, 0.2);
  }
  tl.from(intro, { opacity: 0, y: 32, duration: 1, stagger: 0.1 }, 0.45);
  ready.then(() => tl.play());

  const scrub = { trigger: hero, start: "top top", end: "bottom top", scrub: true };
  if (media) gsap.to(media, { yPercent: isDesktop ? 18 : 10, scale: 1.1, ease: "none", scrollTrigger: scrub });
  if (content) gsap.to(content, { yPercent: isDesktop ? -14 : -6, opacity: 0.1, ease: "none", scrollTrigger: { ...scrub, end: "70% top" } });
}

/* --------------------------------------- Cabecera de páginas internas */
function setupPageHero() {
  if (document.querySelector("[data-hero]")) return;
  const first = document.querySelector<HTMLElement>("main section");
  if (!first || !first.querySelector("h1")) return;
  first.setAttribute("data-page-hero", "");

  const h1 = first.querySelector<HTMLElement>("h1")!;
  const layers = first.querySelectorAll<HTMLElement>(":scope > .absolute");
  const wrap = h1.parentElement && h1.parentElement !== first ? h1.parentElement : h1;
  const siblings = wrap === h1 ? [] : Array.from(wrap.children);
  const preH1 = siblings.filter((c) => c.compareDocumentPosition(h1) & Node.DOCUMENT_POSITION_FOLLOWING && !c.contains(h1));

  const split = SplitText.create(h1, { type: "lines", mask: "lines" });
  splits.push(split);
  const tl = gsap.timeline({ defaults: { ease: "power3.out" }, paused: true });
  if (layers.length) tl.from(layers, { opacity: 0, scale: 1.08, duration: 1.6 }, 0);
  tl.from(split.lines, { yPercent: 108, duration: 1.15, stagger: 0.13, ease: "power4.out" }, 0.2);
  if (preH1.length) tl.from(preH1, { opacity: 0, y: 22, duration: 0.9, stagger: 0.08 }, 0.1);
  const after = siblings.filter((c) => c.compareDocumentPosition(h1) & Node.DOCUMENT_POSITION_PRECEDING);
  if (after.length) tl.from(after, { opacity: 0, y: 26, duration: 0.9, stagger: 0.1 }, 0.55);
  ready.then(() => tl.play());

  if (layers.length) {
    gsap.to(layers, { yPercent: 14, ease: "none", scrollTrigger: { trigger: first, start: "top top", end: "bottom top", scrub: true } });
  }
  gsap.to(wrap, { yPercent: -10, opacity: 0.2, ease: "none", scrollTrigger: { trigger: first, start: "top top", end: "bottom top", scrub: true } });
}


/* ----------------------------------- Escena fija: colección (sticky) */
function setupCollection() {
  document.querySelectorAll<HTMLElement>("[data-cs]").forEach((root) => {
    const texts = gsap.utils.toArray<HTMLElement>("[data-cs-text]", root);
    const imgs = gsap.utils.toArray<HTMLElement>("[data-cs-img]", root);
    const dots = gsap.utils.toArray<HTMLElement>(".cs-dot", root);
    const n = texts.length;
    if (!n || n !== imgs.length) return;
    root.setAttribute("data-pinned", "");

    gsap.set(texts, { opacity: 0, y: 36 });
    gsap.set(imgs, { opacity: 0, scale: 0.86, rotateY: -38, y: 20, transformPerspective: 1400 });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: () => `+=${n * 85}%`,
        pin: true,
        scrub: 0.7,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onToggle: (self) => lockChrome(self.isActive),
        onLeave: (self) => { navLockEnd = self.end; },
        onUpdate: (self) => {
          const idx = Math.min(n - 1, Math.floor(self.progress * n));
          dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
        },
      },
    });
    // Cada pieza ocupa una unidad de la línea de tiempo: entra, permanece y sale girando.
    texts.forEach((t, i) => {
      const last = i === n - 1;
      tl.to(t, { opacity: 1, y: 0, duration: 0.25 }, i)
        .to(imgs[i], { opacity: 1, scale: 1, rotateY: 0, y: 0, duration: 0.3 }, i);
      if (!last) {
        tl.to(t, { opacity: 0, y: -36, duration: 0.2 }, i + 0.78)
          .to(imgs[i], { opacity: 0, scale: 0.9, rotateY: 38, y: -10, duration: 0.22 }, i + 0.78);
      }
    });
    dots[0]?.classList.add("is-active");
  });
}

/* ------------------------------------ Tarjetas apiladas (nodos) */
function setupStack() {
  document.querySelectorAll<HTMLElement>("[data-stack]").forEach((root) => {
    const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]", root);
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.94,
        ease: "none",
        scrollTrigger: { trigger: next, start: "top 82%", end: "top 22%", scrub: true },
      });
    });
  });
}


/* --------------------- Capítulos: numeración editorial + riel de índice */
function setupChapters() {
  if (document.querySelector("[data-hero]")) return; // el home tiene su propia narrativa
  const main = document.querySelector("main");
  if (!main) return;
  const sections = Array.from(main.querySelectorAll<HTMLElement>("section")).filter((sec) => {
    if (sec.hasAttribute("data-page-hero") || sec.closest("[data-cs], [data-stack]")) return false;
    const h = sec.querySelector("h2");
    return !!h && !h.closest(".hidden");
  });
  if (sections.length < 3) return;

  const slug = (t: string) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
  const items = sections.map((sec, i) => {
    const h = sec.querySelector("h2")!;
    const label = (h.textContent ?? "").replace(/\s+/g, " ").trim().replace(/^["“]|["”]$/g, "");
    if (!sec.id) sec.id = `cap-${i + 1}-${slug(label)}`;
    return { sec, label, n: i + 1 };
  });

  // Riel lateral
  const rail = document.createElement("nav");
  rail.id = "chapter-rail";
  rail.setAttribute("aria-label", "Índice de la página");
  rail.innerHTML = `<ol>${items.map((it) => `<li><a href="#${it.sec.id}" data-cap="${it.sec.id}"><span class="cap-label">${it.label}</span><span class="cap-dot"><i>${String(it.n).padStart(2, "0")}</i></span></a></li>`).join("")}</ol>`;
  document.body.appendChild(rail);
  rail.querySelectorAll<HTMLAnchorElement>("a").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(a.dataset.cap!);
      if (!target) return;
      if (lenis) lenis.scrollTo(target, { offset: -70 });
      else target.scrollIntoView({ behavior: "smooth" });
    }),
  );
  const links = Array.from(rail.querySelectorAll<HTMLElement>("a"));
  items.forEach(({ sec }, i) => {
    ScrollTrigger.create({
      trigger: sec,
      start: "top 55%",
      end: "bottom 55%",
      onToggle: (self) => { if (self.isActive) links.forEach((l, j) => l.classList.toggle("is-active", i === j)); },
    });
  });
  // Visible solo al pasar el hero y mientras no haya una escena fija
  ScrollTrigger.create({
    start: () => window.innerHeight * 0.6,
    end: "max",
    onToggle: (self) => rail.classList.toggle("is-visible", self.isActive),
  });
}

function setupTimeline() {
  document.querySelectorAll<HTMLElement>("[data-timeline]").forEach((root) => {
    const list = root.querySelector<HTMLElement>("[data-timeline-list]") ?? root;
    const line = root.querySelector<HTMLElement>("[data-timeline-line]");
    const head = root.querySelector<HTMLElement>("[data-timeline-head]");
    const items = gsap.utils.toArray<HTMLElement>("[data-timeline-item]", root);
    const yearEl = root.querySelector<HTMLElement>("[data-tl-year]");
    const countEl = root.querySelector<HTMLElement>("[data-tl-count]");
    const progressEl = root.querySelector<HTMLElement>("[data-tl-progress]");
    root.classList.add("tl-ready");

    const draw = { trigger: list, start: "top 60%", end: "bottom 70%", scrub: 0.4 };
    if (line) gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: "none", transformOrigin: "top", scrollTrigger: draw });
    // Punto luminoso que viaja por la línea
    if (head) gsap.fromTo(head, { top: "0%" }, { top: "100%", ease: "none", scrollTrigger: draw });
    if (progressEl) gsap.to(progressEl, { scaleX: 1, ease: "none", scrollTrigger: draw });

    // El año grande cambia con un deslizamiento al activarse cada hito
    let current = yearEl?.textContent ?? "";
    const setYear = (year: string, index: string) => {
      if (countEl) countEl.textContent = index.padStart(2, "0");
      if (!yearEl || year === current) return;
      current = year;
      gsap.killTweensOf(yearEl);
      gsap
        .timeline()
        .to(yearEl, { yPercent: -100, duration: 0.3, ease: "power2.in" })
        .add(() => { yearEl.textContent = year; })
        .fromTo(yearEl, { yPercent: 100 }, { yPercent: 0, duration: 0.55, ease: "power3.out" });
    };

    items.forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 58%",
        end: "bottom 42%",
        onToggle: (self) => {
          if (self.isActive) {
            // Solo un hito activo a la vez
            items.forEach((other) => other !== item && other.classList.remove("is-active"));
            item.classList.add("is-active");
            setYear(item.dataset.year ?? "", item.dataset.index ?? "1");
          } else {
            item.classList.remove("is-active");
          }
        },
      });
      gsap.from(item, {
        opacity: 0,
        y: 48,
        duration: 1,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: item, start: "top 90%", once: true },
      });
    });
  });
}

function setupHorizontal() {
  document.querySelectorAll<HTMLElement>("[data-hscroll]").forEach((root) => {
    const track = root.querySelector<HTMLElement>("[data-hscroll-track]");
    if (!track) return;
    root.setAttribute("data-pinned", "");
    const distance = () => Math.max(0, track.scrollWidth - root.clientWidth);
    gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top+=0",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onToggle: (self) => lockChrome(self.isActive),
        onLeave: (self) => { navLockEnd = self.end; },
      },
    });
  });
}

/* ------------------------------------------------------ Botones magnéticos */
function setupMagnetic() {
  if (!finePointer.matches) return;
  document.querySelectorAll<HTMLElement>(".btn-magnetic, main a[class*='px-10'], main a[class*='px-12']").forEach((btn) => {
    const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.22);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
    });
    btn.addEventListener("pointerleave", () => { xTo(0); yTo(0); });
  });
}

/* ------------------------------------- Foco de luz que sigue al cursor */
function setupSpotlight() {
  if (!finePointer.matches) return;
  document.querySelectorAll<HTMLElement>("[data-spotlight]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* ------------------------------------------------------ Navbar y progreso */
function setupChrome() {
  const bar = document.getElementById("scroll-progress");
  if (bar) {
    gsap.to(bar, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.2 } });
  }

  const dock = document.getElementById("mobile-dock");
  if (dock) {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => dock.classList.toggle("is-visible", self.scroll() > window.innerHeight * 0.7),
    });
  }

  const nav = document.getElementById("site-nav");
  if (nav) {
    const overlay = nav.classList.contains("nav-overlay");
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const solidAfter = () => (hero ? Math.max(120, hero.offsetHeight - nav.offsetHeight - 40) : 0);
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const y = self.scroll();
        const hide = navLocked || (self.direction === 1 && y > solidAfter() + 240 && y > navLockEnd + 450);
        gsap.to(nav, { yPercent: hide ? -110 : 0, duration: 0.45, ease: "power3.out", overwrite: true });
        nav.classList.toggle("is-scrolled", y > 24);
        if (overlay) nav.classList.toggle("is-solid", y > solidAfter());
      },
    });
  }
}

/* ------------------------------------------------------------------ Init */
function cleanup() {
  lockChrome(false);
  document.getElementById("chapter-rail")?.remove();
  
  navLockEnd = 0;
  mm?.revert();
  mm = null;
  splits.forEach((s) => s.revert());
  splits = [];
}

function init() {
  cleanup();

  if (reducedQuery.matches) {
    document.getElementById("preloader")?.remove();
    return;
  }
  startLenis();
  const viaCurtain = curtainActive;
  ready = runPreloader().then(() => {
    if (!viaCurtain) return;
    curtainOut();
    return new Promise<void>((r) => window.setTimeout(r, 450));
  });

  mm = gsap.matchMedia();
  mm.add({ isDesktop: "(min-width: 1024px)", isMobile: "(max-width: 1023px)" }, (c) => {
    const isDesktop = !!c.conditions?.isDesktop;
    // Orden de creación = orden en la página: primero las escenas fijas (pin) y luego lo que viene después.
    setupChrome();
    setupHero(isDesktop);
    setupPageHero();
    setupScrubWords();
    setupCollection();
    setupSplitHeadings();
    setupCounters();
    setupTimeline();
    setupHorizontal();
    setupStack();
    setupChapters();
    setupMagnetic();
    setupSpotlight();
    setupParallax(isDesktop);
    setupReveals(isDesktop);
    ScrollTrigger.sort();
    requestAnimationFrame(() => ScrollTrigger.refresh());
  });

  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
}

document.addEventListener("astro:before-swap", cleanup);
document.addEventListener("astro:after-swap", () => {
  if (introDone) document.getElementById("preloader")?.remove();
});
document.addEventListener("astro:page-load", init);

reducedQuery.addEventListener("change", () => {
  if (reducedQuery.matches) {
    lenis?.destroy();
    lenis = null;
  }
  init();
});
