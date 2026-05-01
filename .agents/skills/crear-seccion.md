# Skill: Crear una Sección
## Casa Museo Pozón

Usa este skill cuando necesites **agregar contenido a una página ya existente**: ya sea al index (`src/pages/index.astro`) mediante un nuevo view, o directamente dentro de una página interna existente.

---

## ✅ Tipos de sección y dónde va

| Tipo | Dónde crear | Cómo importar |
|---|---|---|
| Sección nueva del index | `src/views/NombreSección.astro` | Importar en `src/pages/index.astro` |
| Sección dentro de página existente | Directamente en el `.astro` de la página | No se importa, va inline |
| Sub-sección dentro de un view | Dentro del mismo view existente | — |

---

## 🧱 Anatomía de una sección

```astro
<!-- ZONA DE CONTENIDO  -->
<section id="[id-unico]" class="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[FONDO]">
  <!-- Decorativo ambiental (opcional) -->
  <div class="absolute top-0 right-0 w-96 h-96 bg-museum-gold/5 blur-3xl rounded-full pointer-events-none"></div>

  <div class="max-w-7xl mx-auto">
    
    <!-- Label de sección -->
    <span class="text-museum-gold font-bold tracking-[0.4em] text-[10px] md:text-xs mb-6 uppercase block">
      [Categoría / Subtítulo]
    </span>

    <!-- Heading principal de sección (H2) -->
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-display text-museum-dark mb-8">
      Título <span class="text-museum-gold block mt-2">Énfasis</span>
    </h2>

    <!-- Divider gold -->
    <div class="w-20 h-1 bg-museum-gold mb-10"></div>

    <!-- Cuerpo de la sección -->
    <!-- ver patrones disponibles abajo -->

  </div>
</section>
```

---

## 🎨 Esquemas de fondo disponibles

| Fondo | Clases | Cuándo usar |
|---|---|---|
| Cream (cálido) | `bg-museum-cream` | Secciones narrativas/editoriales |
| Blanco | `bg-white` | Alternancia con cream, tarjetas limpias |
| Oscuro | `bg-museum-dark text-white` | Máximo contraste: contacto, cierres de sección |
| Zinc claro | `bg-zinc-50` | Fondo neutro para listas y grids |

**Regla de alternancia:** No poner dos secciones con el mismo fondo seguidas. El ritmo del scroll debe sentirse variado.

---

## 🧩 Patrones de contenido by tipo

### 1. Sección de introducción (texto + imagen)
```html
<div class="flex flex-col lg:flex-row gap-16 items-center">
  <div class="w-full lg:w-1/2">
    <!-- Texto introductorio -->
    <p class="text-museum-dark/80 text-lg leading-relaxed mb-6 font-light">...</p>
    <!-- CTA "leer más" -->
    <a href="/" class="group flex items-center gap-4 text-museum-gold font-bold tracking-[0.2em] text-xs uppercase hover:text-museum-dark transition-colors w-max">
      <span class="w-12 h-[1px] bg-museum-gold group-hover:bg-museum-dark transition-colors"></span>
      Ver Más
    </a>
  </div>
  <div class="w-full lg:w-1/2">
    <!-- Imagen con marco decorativo -->
    <div class="aspect-[4/5] bg-museum-cream rounded-2xl overflow-hidden relative shadow-2xl group">
      <div class="absolute inset-0 border border-museum-gold/30 m-4 rounded-xl z-20 transition-transform duration-700 group-hover:scale-[0.98]"></div>
      <img src="/imagen.webp" alt="..." class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    </div>
  </div>
</div>
```

### 2. Grid de tarjetas (2 o 4 tarjetas)
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="bg-white p-10 rounded-2xl shadow-xl shadow-museum-dark/5 hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-museum-gold/20">
    <!-- Icono -->
    <div class="flex justify-between items-start mb-6">
      <span class="text-museum-gold">
        <svg><!-- Lucide 32x32 --></svg>
      </span>
      <span class="text-[10px] font-bold text-museum-gold/40 tracking-widest uppercase">Pilar 01</span>
    </div>
    <h3 class="font-display text-2xl text-museum-dark mb-4">Título tarjeta</h3>
    <p class="text-museum-dark/60 text-sm font-light leading-relaxed">Descripción...</p>
  </div>
  <!-- más tarjetas... -->
</div>
```

### 3. Grid de 3 columnas (features simples)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
  <div class="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-museum-gold/30 transition-all group">
    <h4 class="font-display text-xl mb-4 group-hover:text-museum-gold">Título</h4>
    <p class="text-xs font-light text-museum-dark/50 leading-relaxed">Descripción...</p>
  </div>
</div>
```

### 4. Sección de impacto con números
```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
  <div>
    <p class="text-5xl md:text-6xl font-display text-museum-gold mb-3">1.200+</p>
    <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-museum-dark/50">Visitantes anuales</p>
  </div>
  <!-- más métricas -->
</div>
```

### 5. Sección con sidebar sticky (contenido largo)
```html
<div class="flex flex-col lg:flex-row gap-16 items-start">
  <div class="w-full lg:w-2/5 sticky top-32">
    <!-- Intro/contexto -->
  </div>
  <div class="w-full lg:w-3/5">
    <!-- Contenido scrollable / grid de tarjetas -->
  </div>
</div>
```

### 6. Lista de items con border-left gold
```html
<div class="space-y-6">
  <div class="border-l-2 border-museum-gold pl-6">
    <h4 class="font-bold text-sm uppercase tracking-wider mb-2">Título del item</h4>
    <p class="text-sm text-museum-dark/60 font-light">Descripción del item...</p>
  </div>
</div>
```

### 7. Tags/chips decorativos
```html
<div class="flex flex-wrap gap-3">
  {items.map(item => (
    <span class="bg-white px-4 py-2 rounded-full text-[10px] font-medium text-museum-dark/60 border border-museum-gold/10 shadow-sm">
      {item}
    </span>
  ))}
</div>
```

### 8. Cita o texto destacado
```html
<blockquote class="border-l border-museum-gold/60 pl-8 mb-14 max-w-lg">
  <p class="text-museum-dark font-display text-2xl md:text-3xl mb-3">
    "Frase de impacto institucional"
  </p>
  <cite class="text-museum-dark/60 font-light italic">— Fuente</cite>
</blockquote>
```

---

## 🔗 Agregar sección al index

Cuando se crea un nuevo `src/views/NuevaSección.astro`:

```astro
<!-- En src/pages/index.astro -->
---
import NuevaSección from "../views/NuevaSección.astro";
// ...resto de imports
---

<main>
  <!-- ...otras secciones -->
  <NuevaSección />
  <!-- ...otras secciones -->
</main>
```

---

## 🎯 Reglas de id para anclas

Cada sección debe tener un `id` en kebab-case que coincida con la navegación:

| id | href en navbar |
|---|---|
| `id="inicio"` | `href="/"` |
| `id="quienes-somos"` | `href="/#quienes-somos"` |
| `id="contacto"` | `href="/#contacto"` |
| `id="nueva-seccion"` | `href="/#nueva-seccion"` |
