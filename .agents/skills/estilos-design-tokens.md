# Skill: Design Tokens y Estilos
## Casa Museo Pozón

Referencia rápida del sistema de diseño. Consulta este archivo cuando tengas dudas sobre colores, tipografía, animaciones, espaciados o cualquier elemento visual.

---

## 🎨 PALETA DE COLORES

### Tokens principales (definidos en `src/styles/global.css`)

```css
@theme {
  --color-museum-dark:  #1a1a1a;  /* Negro cálido — texto, fondos oscuros */
  --color-museum-gold:  #c4a052;  /* Oro caribeño — acento principal */
  --color-museum-cream: #f5f0e8;  /* Crema marfil — fondo base */
  --color-museum-gray:  #2d2d2d;  /* Gris oscuro — uso secundario */
}
```

### Clases Tailwind derivadas (usadas como `[color]-[opacity]`)

| Uso del color | Clase(s) Tailwind |
|---|---|
| Fondo principal del sitio | `bg-museum-cream` |
| Fondo de secciones alternas | `bg-white` |
| Fondo de secciones oscuras | `bg-museum-dark` |
| Acento / decoración gold | `bg-museum-gold` |
| Texto oscuro principal | `text-museum-dark` |
| Texto en secciones oscuras | `text-white` |
| Texto gold / labels | `text-museum-gold` |
| Texto sobre cream (principal) | `text-museum-cream` |
| Texto secundario suave | `text-museum-dark/70` |
| Texto tenue | `text-museum-dark/60`, `/50`, `/40`, `/30` |
| Divisores sutiles | `border-museum-gold/10`, `/20`, `/30` |
| Fondos con transparencia | `bg-museum-gold/5`, `/10` |
| Sombras sutiles | `shadow-museum-dark/5`, `shadow-museum-gold/10` |

### Colores de soporte (Tailwind nativo, sin token)
- `bg-zinc-50` / `bg-zinc-100` — Tarjetas neutras
- `border-zinc-100` / `border-zinc-50` — Divisores ligerísimos
- `text-white/60`, `text-white/50`, `text-white/40` — Texto en secciones dark
- `text-green-900/60` — Nodo Huerta (temática agro-botanical)
- `bg-green-900/10` — Iconos Huerta

---

## 🔤 TIPOGRAFÍA

### Fuentes del proyecto
| Fuente | Variable CSS | Clase Tailwind | Importada desde |
|---|---|---|---|
| **Playfair Display** | `--font-display` | `font-display` | Google Fonts (auto Astro) |
| **Inter** | `--font-body` | base (body) | Google Fonts (auto Astro) |

### Jerarquía de headings

| Nivel | Tamaño | Fuente | Uso |
|---|---|---|---|
| H1 de hero | `text-7xl md:text-8xl lg:text-[10rem]` | `font-display` | Hero de la landing, nombre del museo |
| H1 de página interna | `text-6xl md:text-8xl` | `font-display` | Hero de páginas internas |
| H2 seccional | `text-4xl md:text-5xl lg:text-6xl` | `font-display` | Inicio de cada sección principal |
| H2 compacto | `text-3xl md:text-4xl` | `font-display` | Sub-secciones, nodos individuales |
| H3 de tarjeta | `text-2xl` | `font-display` | Títulos de cards |
| H4 de ítem | `text-xl` | `font-display` | Cards simples, ítems de lista |
| Label de sección | `text-[10px] md:text-xs` | `font-bold tracking-[0.4em] uppercase` | Categoría / subtítulo encima del heading |
| Cuerpo largo | `text-lg font-light leading-relaxed` | Inter | Párrafos principales |
| Cuerpo estándar | `text-base` | Inter | Párrafos normales |
| Cuerpo pequeño | `text-sm` | Inter | Notas, descripciones de cards |
| Microtexto | `text-xs` | Inter | Etiquetas, metadatos |
| Supertexto | `text-[10px]` | Inter bold | Tags, breadcrumbs, CTA text |
| Footer legal | `text-[8px] text-[9px]` | Inter | Copyright, datos legales |

### Tracking (letter-spacing) más usados
| Clase | Uso |
|---|---|
| `tracking-[0.4em]` | Labels de sección (categoría) |
| `tracking-[0.2em]` | Subtítulos, CTAs |
| `tracking-[0.15em]` | Links del navbar |
| `tracking-widest` | Tags, sub-nav, microtexto de énfasis |
| `tracking-wider` | Texto con espaciado intermedio |

---

## 📐 ESPACIADO Y LAYOUT

### Padding de secciones
```
py-24 md:py-32 px-8 md:px-16 lg:px-24
```
Este es el **padding estándar de todas las secciones**. No usar menos de `py-16` salvo excepciones.

### Contenedor de contenido
```html
<div class="max-w-7xl mx-auto">
```
Siempre dentro de las secciones, centrado horizontalmente.

### Gap en grids
| Situación | Gap |
|---|---|
| Grid de 2+ cols tight | `gap-8` |
| Grid de tarjetas | `gap-8` / `gap-10` |
| Layout col principal | `gap-16` / `gap-20` |
| Layout con mucho espacio | `gap-24` |
| Entre elementos de una col | `space-y-8` / `space-y-12` |

### Border radius por tipo
| Elemento | Border radius |
|---|---|
| Botones CTA / tags simples | `rounded-sm` |
| Tarjetas standard | `rounded-2xl` |
| Tarjetas grandes | `rounded-3xl` |
| Mapas, videos embed | `rounded-[2.5rem]` |
| Contenedores especiales | `rounded-[3rem]` |
| Círculos de íconos | `rounded-full` |
| Imágenes con marco | `rounded-2xl` |

---

## ✨ ANIMACIONES Y TRANSICIONES

### Duraciones estándar
| Situación | Duración |
|---|---|
| Transiciones rápidas (color, opacidad) | `duration-200` / `duration-300` |
| Hover estándar | `duration-300` / `duration-500` |
| Transformaciones premium | `duration-500` / `duration-700` |
| Imágenes con zoom | `duration-1000` |
| Page transitions | `duration-300` (Astro ViewTransitions) |

### Hover patterns
```css
/* Lift de tarjeta */
hover:-translate-y-2 transition-all duration-500

/* Zoom de imagen */
group-hover:scale-110 transition-transform duration-1000

/* Scale de ícono social */
hover:scale-150 transition-all duration-500

/* Glow de ícono */
hover:drop-shadow-[0_0_8px_rgba(202,160,84,0.4)]

/* Flecha con animación */
group-hover:translate-x-1 transition-transform

/* Flecha volver */
group-hover:-translate-x-2 transition-transform

/* Imagen marco interior */
group-hover:scale-[0.98] transition-transform duration-700

/* Descubrir fondo oscuro */
group-hover:bg-transparent transition-colors duration-700

/* Grayscale a color */
grayscale hover:grayscale-0 transition-all duration-700
```

### Dropdown de navbar
```css
/* Estado base (oculto) */
opacity-0 invisible translate-y-2

/* Estado hover (visible) */
group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300
```

### Page transitions (Astro)
Todo `<head>` debe tener:
```html
<ClientRouter />
```

El hero de páginas internas usa:
```html
<div transition:animate="fade">
```

El SocialSidebar usa:
```html
<div transition:persist>
```

---

## 🖼️ IMÁGENES

### Patrones de uso

```html
<!-- Imagen de fondo (hero, sección) -->
<img src="..." alt="..." class="w-full h-full object-cover object-center" />

<!-- Imagen con overlay de gradiente -->
<div class="absolute inset-0 bg-gradient-to-r from-museum-cream via-museum-cream/60 to-transparent"></div>

<!-- Logo con opacidad y revelación hover -->
<img src="/Logo.webp" alt="..." class="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" />

<!-- Imagen de persona (portrait) -->
<img src="..." alt="..." class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
```

### Formatos preferidos
| Formato | Cuándo |
|---|---|
| `.webp` | Fotos, imágenes complejas (mejor compresión) |
| `.png` | Imágenes con transparencia |
| `.svg` | Íconos y logos vectoriales |

---

## 🔲 FORMAS DECORATIVAS

### Blob/orb de ambiente
```html
<div class="absolute top-0 right-0 w-96 h-96 bg-museum-gold/5 blur-3xl rounded-full pointer-events-none"></div>
```

### Banda diagonal decorativa (fondo de sección)
```html
<div class="absolute top-0 right-0 w-1/3 h-full bg-museum-gold/5 -skew-x-12 transform translate-x-1/2 pointer-events-none"></div>
```

### Línea decorativa vertical (sidebar)
```html
<div class="w-px h-24 bg-gradient-to-b from-transparent via-museum-gold/60 to-museum-gold/30"></div>
```

### Divisor horizontal gold
```html
<div class="w-20 h-1 bg-museum-gold mb-10"></div>
```

### Borde izquierdo gold (blockquote / lista)
```html
<div class="border-l border-museum-gold/60 pl-8">...</div>
```

```html
<div class="border-l-2 border-museum-gold pl-4">...</div>
```

---

## 🔤 TEXTO EN MAYÚSCULAS

Muchos textos del sitio usan la combinación:
```
uppercase font-bold tracking-[0.X em]
```

Esta es la **firma tipográfica del museo**. Las etiquetas, CTA y sub-headings siempre en uppercase con espaciado amplio. No usar sentencecase donde deba ir uppercase.

---

## 📱 RESPONSIVIDAD

Breakpoints Tailwind usados:
| Breakpoint | Píxeles | Uso |
|---|---|---|
| Sin prefijo | < 768px | Móvil (base) |
| `md:` | ≥ 768px | Tablet |
| `lg:` | ≥ 1024px | Desktop |
| `xl:` | ≥ 1280px | Desktop grande (raro) |

**Regla de oro:** Siempre diseñar mobile-first. El layout base es columna única; usar `md:` y `lg:` para grids y flexbox divididos.

```html
<!-- Ejemplo: columna en móvil, 2 cols en desktop -->
<div class="flex flex-col lg:flex-row gap-16">
  ...
</div>

<!-- Grid responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  ...
</div>
```
