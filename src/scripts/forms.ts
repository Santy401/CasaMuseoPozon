import gsap from "gsap";

const WA = "573126153148";
const EMAIL = "fundacioncasamuseopozon@gmail.com";

const tipos: Record<string, string> = {
  general: "Consulta general",
  reserva: "Reserva de visita guiada",
  donacion: "Alianza o donación",
};

function showDone(form: HTMLFormElement, message: string) {
  const done = form.parentElement?.querySelector<HTMLElement>("[data-form-done]");
  const msg = done?.querySelector<HTMLElement>("[data-form-done-msg]");
  if (!done) return;
  if (msg) msg.textContent = message;
  done.hidden = false;
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.fromTo(done, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
  }
}

function bindContacto(form: HTMLFormElement) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitter = (e as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "email" ? "email" : "whatsapp";
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const correo = String(data.get("correo") ?? "").trim();
    const tipo = tipos[String(data.get("tipo"))] ?? "Consulta";
    const mensaje = String(data.get("mensaje") ?? "").trim();

    const cuerpo = `Hola, soy ${nombre}.\nTipo de solicitud: ${tipo}\n\n${mensaje}\n\nMi correo: ${correo}`;
    const url =
      channel === "email"
        ? `mailto:${EMAIL}?subject=${encodeURIComponent(`${tipo} — ${nombre}`)}&body=${encodeURIComponent(cuerpo)}`
        : `https://wa.me/${WA}?text=${encodeURIComponent(cuerpo)}`;

    if (channel === "email") window.location.href = url;
    else window.open(url, "_blank", "noopener");
    showDone(form, channel === "email" ? "Se abrió tu correo con el mensaje listo. Solo falta presionar «Enviar»." : "Se abrió WhatsApp con tu mensaje listo. Solo falta presionar «Enviar».");
    form.reset();
  });
}

function bindNewsletter(form: HTMLFormElement) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const correo = String(new FormData(form).get("correo") ?? "").trim();
    const body = `Hola, quiero recibir el boletín informativo de la Casa Museo El Pozón.\n\nMi correo: ${correo}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Suscripción al boletín")}&body=${encodeURIComponent(body)}`;
    showDone(form, "Se abrió tu correo con la solicitud de suscripción. Solo falta enviarla.");
    form.reset();
  });
}

function init() {
  document.querySelectorAll<HTMLFormElement>("form[data-form]").forEach((form) => {
    if (form.dataset.bound) return;
    form.dataset.bound = "1";
    if (form.dataset.form === "contacto") bindContacto(form);
    if (form.dataset.form === "newsletter") bindNewsletter(form);
  });
}

document.addEventListener("astro:page-load", init);
