# AGENT.md — Casa Museo Pozón
> Archivo de referencia para agentes de IA que trabajen en este proyecto.  
> Última actualización: 2026-04-27

---

## 🏛️ IDENTIDAD DEL PROYECTO

| Campo | Valor |
|---|---|
| **Nombre** | Fundación Casa Museo del Pozón |
| **Sitio** | Landing institucional + páginas internas |
| **Ubicación** | Barrio El Pozón, Cartagena de Indias, Colombia |
| **Founding** | Est. 2024 |
| **Email** | fundacioncasamuseopozon@gmail.com |
| **Teléfono** | (+57) 312 615 3148 / Fijo: 605 692 1750 |
| **Cuenta donaciones** | Banco Caja Social — Ahorros: 24154765394 |

### Redes sociales oficiales
- Facebook: https://www.facebook.com/casamuseopozon
- Instagram: https://www.instagram.com/casamuseopozon/
- YouTube: https://www.youtube.com/@casamuseopozon
- TikTok: https://www.tiktok.com/@casamuseopozon

### Misión institucional
Revitalizar, preservar y promover el patrimonio cultural, histórico y biocultural del territorio pozonero. Fomentar la participación comunitaria, la sostenibilidad ambiental y el tejido social.

---

## ⚙️ STACK TECNOLÓGICO

| Tecnología | Versión | Uso |
|---|---|---|
| **Astro** | ^6.1.9 | Framework principal (SSG/SSR) |
| **React** | ^19.2.5 | Islas interactivas con `@astrojs/react` |
| **TailwindCSS** | ^4.2.4 | Utilidades CSS (via `@tailwindcss/vite`) |
| **GSAP** | ^3.15.0 | Animaciones avanzadas (scroll, timelines) |
| **TypeScript** | (vía Astro) | Tipado en frontmatter y scripts |
| **pnpm** | — | Package manager |
| **Node.js** | ≥22.12.0 | Entorno de ejecución |
| **ESLint + Prettier** | — | Linting y formato de código |

### Configuración Astro (`astro.config.mjs`)
```js
integrations: [react()]
vite.plugins: [tailwindcss()]
```

### Comandos principales
```bash
pnpm run dev      # Servidor de desarrollo
pnpm run build    # Build de producción
pnpm run preview  # Preview del build
pnpm run lint     # ESLint sobre src/pages/
pnpm run format   # Prettier sobre todo el proyecto
```

---

## 🎨 SISTEMA DE DISEÑO

### Paleta de colores (tokens globales en `src/styles/global.css`)

| Token CSS | Valor Hex | Uso |
|---|---|---|
| `--color-museum-dark` | `#1a1a1a` | Texto principal, fondos oscuros, navbar dark mode |
| `--color-museum-gold` | `#c4a052` | Acento principal, CTAs, decoración, hovers |
| `--color-museum-cream` | `#f5f0e8` | Fondo global del sitio, secciones cálidas |
| `--color-museum-gray` | `#2d2d2d` | Texto secundario, elementos de gris oscuro |

**Alias Tailwind usados en código:**
- `bg-museum-cream` / `bg-museum-dark` / `bg-museum-gold`
- `text-museum-dark` / `text-museum-gold` / `text-museum-cream`
- `border-museum-gold` / `border-museum-dark`
- Opacidades con `/`: `text-museum-dark/70`, `bg-museum-gold/10`, etc.

**Colores de apoyo (sin token, Tailwind nativo):**
- `bg-white` — Secciones alternas (contraste con cream)
- `bg-zinc-50` / `bg-zinc-100` — Fondos de tarjetas neutras
- `text-white/60` — Texto claro sobre fondos oscuros
- `text-green-900/60` — Nodo Huerta (temática botánica)

### Tipografía

| Rol | Fuente | Clase Tailwind | Uso |
|---|---|---|---|
| **Display (títulos)** | Playfair Display, serif | `font-display` | `<h1>`, `<h2>`, grandes títulos seccionales |
| **Cuerpo (texto)** | Inter, sans-serif | `font-body` (base) / sin clase = default | Párrafos, etiquetas, formularios |

**Escala de tamaños usados:**
- Hero H1: `text-7xl md:text-8xl lg:text-[10rem]`  
- H2 seccional: `text-4xl md:text-5xl lg:text-6xl`  
- H3 subtítulo: `text-2xl md:text-3xl`  
- Etiquetas/tags: `text-[10px] md:text-xs` con `tracking-[0.4em]` o `tracking-widest`  
- Cuerpo: `text-sm` / `text-base` / `text-lg`  
- Microtexto legal/footer: `text-[8px]` / `text-[9px]`

**Estilos de peso más usados:**
- `font-bold` — Etiquetas, subheadings, CTA
- `font-black` — Énfasis extremo (SÍGUENOS, tags de navegación social)
- `font-light` — Párrafos de cuerpo extenso
- `font-display` — Nombre de tipografía, sólo headings

### Espaciado y layout

| Patrón | Valor |
|---|---|
| Padding seccional | `py-24 md:py-32 px-8 md:px-16 lg:px-24` |
| Contenedor máximo | `max-w-7xl mx-auto` |
| Gaps de grid | `gap-8` / `gap-12` / `gap-16` / `gap-20` / `gap-24` |
| Border radius premium | `rounded-sm` (CTAs), `rounded-2xl`, `rounded-3xl`, `rounded-[2.5rem]`, `rounded-[3rem]` |
| Sombras | `shadow-xl shadow-museum-dark/5`, `shadow-2xl`, `shadow-lg shadow-museum-gold/10` |

---

## 🧩 COMPONENTES GLOBALES

### `src/components/navbar.astro`
- Sticky, `top-0 z-[100]`, fondo `bg-museum-cream/95 backdrop-blur-md`
- Logo: `/Logo.webp` (w-20 móvil / w-28 desktop)
- Menú desktop: texto `text-[11px] font-bold tracking-[0.15em] uppercase`
- Dropdowns con `group-hover`, `invisible → opacity-100`, `translate-y-2 → 0`
- CTA fijo: `"Visítanos"` → `bg-museum-gold text-museum-cream`, `rounded-sm`
- Menú móvil: Side drawer desde la izquierda, backdrop blur, `z-[110/120]`
- Script `initNavbar()` reinicializa en `astro:after-swap` (ViewTransitions)

**Estructura de navegación:**
```
Inicio → /
Institucional (dropdown):
  - Sala Memoria Ancestral → /quienes-somos
  - Socios → /socios
  - Representante Legal → /#representante
  - Portafolio → /#portafolio
Experiencia (dropdown):
  - Modelo Museal → /modelo-museal
  - Nodos Museales → /#nodos-museales
  - Recorrido Museal → /#recorrido-museal
Comunidad (dropdown):
  - Proyectos Sociales → /#proyectos-sociales
  - Eventos → /#eventos
Contacto → /#contacto
```

### `src/components/SocialSidebar.astro`
- `fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-[150]`
- Solo visible en `lg:` (desktop)
- Iconos SVG Lucide, tamaño 22×22, `stroke-width="1.8"`
- Efecto hover: `hover:scale-150` + `hover:drop-shadow-[0_0_8px_rgba(202,160,84,0.4)]`
- Color base: `text-museum-gold/60` → hover `text-museum-gold`
- Decoradores lineales: gradiente gold arriba y abajo
- Texto vertical: `[writing-mode:vertical-lr] rotate-180`, "SÍGUENOS"
- Atributo `transition:persist` (Astro ViewTransitions)

### `src/components/footer.astro`
- `bg-white border-t border-zinc-100`
- Logo `/Logo.webp` con `grayscale hover:grayscale-0 transition-all duration-700`
- Links: Instagram, Facebook, YouTube en texto uppercase `tracking-[0.2em]`
- Copyright + ciudad en `text-[8px] uppercase tracking-widest text-museum-dark/30`

---

## 📄 ARQUITECTURA DE PÁGINAS

### Página principal (`src/pages/index.astro`)
Estructura monolítica de scroll con secciones importadas de `src/views/`:

```
<SocialSidebar />  ← persiste entre rutas
<Navbar />
<main>
  <Inicio />          id="inicio"
  <QuienesSomos />    id="quienes-somos"
  <ModeloMuseal />    id="modelo-museal"
  <NodosMuseales />   id="nodos-museales"
  <RecorridoMuseal /> id="recorrido-museal"
  <ProyectosSociales /> id="proyectos-sociales"
  <Portafolio />      id="portafolio"
  <Eventos />         id="eventos"
  <RepresentanteLegal /> id="representante"
  <Contacto />        id="contacto"
</main>
<Footer />
```

### Páginas internas (rutas propias)
| Ruta | Archivo | Descripción |
|---|---|---|
| `/quienes-somos` | `src/pages/quienes-somos.astro` | Historia, misión, fotos institucionales |
| `/socios` | `src/pages/socios.astro` | Junta directiva y miembros activos |
| `/modelo-museal` | `src/pages/modelo-museal.astro` | Los 4 pilares del modelo museal |
| `/nodos-museales` | `src/pages/nodos-museales.astro` | 4 nodos: Cartográfico, Memoteca, Lab, Huerta |
| `/recorrido-museal` | `src/pages/recorrido-museal.astro` | Ruta de recorrido por el museo |
| `/proyectos-sociales` | `src/pages/proyectos-sociales.astro` | Proyectos comunitarios activos |
| `/portafolio` | `src/pages/portafolio.astro` | Portafolio institucional |
| `/eventos` | `src/pages/eventos.astro` | Crónicas y eventos pasados/futuros |
| `/representante-legal` | `src/pages/representante-legal.astro` | Perfil Alicia Martínez |

### Template de página interna (patrón estándar)
```astro
---
import { ClientRouter } from 'astro:transitions';
import "../styles/global.css";
import SocialSidebar from "../components/SocialSidebar.astro";
import Navbar from "../components/navbar.astro";
import Footer from "../components/footer.astro";
---
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>[Nombre de Página] | Casa Museo Pozón</title>
    <ClientRouter />
  </head>
  <body class="bg-museum-cream font-sans overflow-x-hidden">
    <SocialSidebar />
    <Navbar />
    <main>
      <!-- Hero Header de página -->
      <section class="relative min-h-[60vh] flex items-center justify-center bg-museum-cream pt-20">
        <div class="relative z-20 text-center px-8" transition:animate="fade">
          <span class="text-museum-gold font-bold tracking-[0.5em] text-[10px] md:text-xs mb-8 uppercase block">
            [Subtítulo descriptivo]
          </span>
          <h1 class="text-6xl md:text-8xl font-display text-museum-dark mb-10 leading-none">
            [Título] <br/> <span class="text-museum-gold">[Énfasis]</span>
          </h1>
          <div class="w-24 h-1 bg-museum-gold mx-auto"></div>
        </div>
      </section>
      <!-- Contenido -->
    </main>
    <Footer />
  </body>
</html>
```

---

## 🧱 PATRONES DE UI RECURRENTES

### Sección con alternancia de fondos
- Impar: `bg-museum-cream` o `bg-white`
- Par: `bg-museum-dark text-white` (ejemplo: secciones oscuras)
- Siempre con: `py-24 md:py-32 px-8 md:px-16 lg:px-24`

### Etiqueta de categoría (label sobre headings)
```html
<span class="text-museum-gold font-bold tracking-[0.4em] text-[10px] md:text-xs mb-6 uppercase block">
  [Categoría]
</span>
```

### Heading de sección H2 estándar
```html
<h2 class="text-4xl md:text-5xl lg:text-6xl font-display text-museum-dark mb-8">
  Título <span class="text-museum-gold block mt-2">Énfasis en Gold</span>
</h2>
```

### Línea decorativa gold (divider)
```html
<div class="w-20 h-1 bg-museum-gold mb-10"></div>
```

### CTA Primario (gold)
```html
<a href="#" class="bg-museum-gold text-museum-cream px-10 py-5 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-museum-dark transition-all duration-500 shadow-xl shadow-museum-gold/10">
  Texto CTA
</a>
```

### CTA Secundario (outline)
```html
<a href="#" class="border border-museum-dark/30 text-museum-dark px-10 py-5 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-museum-dark hover:text-white transition-all duration-500">
  Texto CTA
</a>
```

### "Leer más" con línea decorativa
```html
<a href="/" class="group flex items-center gap-4 text-museum-gold font-bold tracking-[0.2em] text-xs uppercase hover:text-museum-dark transition-colors w-max">
  <span class="w-12 h-[1px] bg-museum-gold group-hover:bg-museum-dark transition-colors"></span>
  Texto del enlace
</a>
```

### Tarjeta con hover lift
```html
<div class="bg-white p-10 rounded-2xl shadow-xl shadow-museum-dark/5 hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-museum-gold/20">
  <!-- contenido -->
</div>
```

### Tarjeta con marco de imagen decorativo
```html
<div class="aspect-[4/5] bg-museum-cream rounded-2xl overflow-hidden relative shadow-2xl group">
  <div class="absolute inset-0 border border-museum-gold/30 m-4 rounded-xl z-20 transition-transform duration-700 group-hover:scale-[0.98]"></div>
  <img src="/imagen.webp" alt="..." class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
  <div class="absolute inset-0 bg-museum-dark/10 group-hover:bg-transparent transition-colors duration-700"></div>
</div>
```

### Ícono con fondo contorneado (Lucide style)
```html
<div class="w-12 h-12 bg-museum-gold/10 rounded-xl flex items-center justify-center text-museum-gold">
  <!-- SVG Lucide 22x22, stroke-width="2" -->
</div>
```

### Grid de 2 columnas con offset alterno (stagger)
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div><!-- tarjeta 1 --></div>
  <div class="md:mt-12"><!-- tarjeta 2 offset --></div>
  <div><!-- tarjeta 3 --></div>
  <div class="md:mt-12"><!-- tarjeta 4 offset --></div>
</div>
```

### Fondo decorativo blur (ambiente)
```html
<div class="absolute top-0 right-0 w-96 h-96 bg-museum-gold/5 blur-3xl rounded-full pointer-events-none"></div>
```

### Sub-nav de página (sticky)
```html
<div class="sticky top-20 bg-white/90 backdrop-blur-md z-40 border-b border-zinc-100 py-4 hidden md:block">
  <div class="max-w-7xl mx-auto flex justify-center gap-8">
    <a href="#seccion" class="text-[10px] font-bold tracking-widest uppercase text-museum-dark/60 hover:text-museum-gold transition-colors">01. Sección</a>
  </div>
</div>
```

---

## 🖼️ ASSETS DISPONIBLES

| Archivo | Uso |
|---|---|
| `/Logo.webp` | Logo principal del museo (navbar, footer) |
| `/CLogo3.webp` | Mini logo flotante en hero (corner badge) |
| `/Secsion1.png` | Imagen de fondo hero (interior del museo) |
| `/hero_bg.png` | Background alternativo de hero |
| `/Quienes Somos Index.webp` | Foto institucional — sección Quiénes Somos |
| `/Quienes somos1.png` | Foto institucional — página Quiénes Somos |
| `/Quienes Somos2.webp` | Foto institucional — página Quiénes Somos |
| `/creator.png` | Foto del representante legal / fundador |
| `/A.C.O.png` | Logotipo ACO (aliado/organización) |
| `/favicon.ico` | Icono del sitio |
| `/favicon.svg` | Versión SVG del favicon |
| `/Socios/` | Carpeta de fotos de miembros de la junta |
| `/pdfs/` | Carpeta de documentos institucionales descargables |

---

## 🌐 ICONOGRAFÍA

Se usa **Lucide Icons** como SVG inline (no dependencia npm, copiar paths directamente):
- `stroke-width="1.8"` o `"2"` según contexto
- Tamaños: `22x22` (sidebar/navbar), `18x18` (contacto), `32x32` (tarjetas de pilares), `36x36` (nodo central)
- Color siempre via `currentColor` y clase Tailwind en el contenedor padre

---

## 🎭 ANIMACIONES Y TRANSICIONES

| Técnica | Implementación |
|---|---|
| **Page transitions** | `<ClientRouter />` de `astro:transitions` en todo `<head>` |
| **Fade de hero** | `transition:animate="fade"` en el contenido centrado del hero |
| **Persist sidebar** | `transition:persist` en `<SocialSidebar />` |
| **Hover lift** | `hover:-translate-y-2 transition-all duration-500` en tarjetas |
| **Scale imagen** | `group-hover:scale-110 transition-transform duration-1000` |
| **Dropdown nav** | `opacity-0 invisible translate-y-2` → `group-hover:opacity-100 visible translate-y-0` |
| **Social icons** | `hover:scale-150 transition-all duration-500 hover:drop-shadow` |
| **Scroll suave** | `scroll-behavior: smooth` en `html` global |
| **GSAP** | Disponible para animaciones complejas (scroll-triggered, count-up, timelines) |

---

## 🧠 VISIÓN ESTRATÉGICA Y TONO

### Filosofía visual
- **Premium y editorial**: El museo no es un sitio genérico. Cada página debe sentirse como una revista de cultura de alto nivel.
- **Calidez afro-caribeña**: La paleta cream/gold evoca la tierra, el barro y el oro del Caribe colombiano.
- **Espacio entre elementos**: Usar generosos paddings. El silencio visual es intencional y elegante.
- **Tipografía como arte**: Los headlines con Playfair Display son el ancla visual de cada sección.

### Tono de voz
- Institucional pero humano
- Épico pero comunitario
- Evitar tecnicismos; usar lenguaje del territorio ("memoria viva", "tejido social", "sentipensante")
- Las etiquetas siempre en `MAYÚSCULAS con espaciado amplio`

### Secciones narrativas (orden de storytelling del index)
1. **Bienvenida** (Inicio) — Impacto máximo, nombre del museo gigante
2. **Quiénes Somos** — Misión y mirada institucional
3. **Modelo Museal** — Los 4 pilares estratégicos
4. **Nodos Museales** — Espacios físicos del ecosistema
5. **Recorrido Museal** — La experiencia de visita
6. **Proyectos Sociales** — Impacto comunitario
7. **Portafolio** — Documentos y recursos descargables
8. **Eventos** — Crónicas y vida cultural
9. **Representante Legal** — Alicia Martínez, fundadora
10. **Contacto** — Cómo llegar, formulario y donaciones

---

## 📁 ESTRUCTURA DE CARPETAS

```
MuseoPozon/
├── AGENT.md                    ← Este archivo
├── agents/                     ← Instrucciones para IA
│   ├── skills/                 ← Skills específicos por tarea
│   │   ├── crear-pagina.md
│   │   ├── crear-seccion.md
│   │   ├── anadir-componente.md
│   │   └── estilos-design-tokens.md
│   └── instrucciones-generales.md
├── astro.config.mjs
├── package.json
├── public/
│   ├── Logo.webp
│   ├── CLogo3.webp
│   ├── Secsion1.png
│   ├── Socios/
│   └── pdfs/
└── src/
    ├── components/
    │   ├── navbar.astro
    │   ├── footer.astro
    │   └── SocialSidebar.astro
    ├── pages/
    │   ├── index.astro
    │   ├── quienes-somos.astro
    │   ├── socios.astro
    │   ├── modelo-museal.astro
    │   ├── nodos-museales.astro
    │   ├── recorrido-museal.astro
    │   ├── proyectos-sociales.astro
    │   ├── portafolio.astro
    │   ├── eventos.astro
    │   └── representante-legal.astro
    ├── styles/
    │   └── global.css           ← Tokens de color y tipografía
    └── views/
        ├── Inicio.astro
        ├── QuienesSomos.astro
        ├── ModeloMuseal.astro
        ├── NodosMuseales.astro
        ├── RecorridoMuseal.astro
        ├── ProyectosSociales.astro
        ├── Portafolio.astro
        ├── Eventos.astro
        ├── RepresentanteLegal.astro
        └── Contacto.astro
```

---

## ⚠️ REGLAS CRÍTICAS PARA LA IA

1. **SIEMPRE usar los tokens de color** (`museum-dark`, `museum-gold`, `museum-cream`) — nunca hardcodear hex.
2. **SIEMPRE usar `font-display`** para headings H1/H2/H3 importantes.
3. **Incluir `<ClientRouter />`** en el `<head>` de cada nueva página.
4. **Incluir `<SocialSidebar />`** con `transition:persist` en toda página nueva.
5. **Nunca romper el layout responsive**: usar siempre breakpoints `md:` y `lg:`.
6. **El `max-w-7xl mx-auto`** es el contenedor estándar de contenido.
7. **Las páginas internas heredan el hero con H1**, jamás usar `<h2>` como heading principal.
8. **Los íconos son SVG inline Lucide** — no usar librerías de iconos externas.
9. **Ver los archivos en `agents/skills/`** antes de comenzar cualquier tarea específica.
10. **El idioma del sitio es español** — `lang="es"` en el `<html>` de páginas internas.
