# Skill: Crear una Página Nueva
## Casa Museo Pozón

Usa este skill cuando necesites crear una **nueva ruta** del sitio (una nueva entrada debajo de `src/pages/`).

---

## ✅ Checklist antes de crear

- [ ] ¿Ya existe una sección en el index que deba convertirse en página separada?
- [ ] ¿Cuál es la URL deseada? (Ejemplo: `/nuevo-programa`)
- [ ] ¿Dónde debe aparecer en el navbar? (¿bajo qué dropdown?)
- [ ] ¿Tiene imágenes propias o se usan las existentes en `public/`?

---

## 🏗️ Template de página interna

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
    <meta name="description" content="[Descripción SEO de 150-160 chars sobre esta sección del museo]" />
    <title>[Nombre Sección] | Casa Museo Pozón</title>
    <ClientRouter />
  </head>
  <body class="bg-museum-cream font-sans overflow-x-hidden">
    <SocialSidebar />
    <Navbar />

    <main>

      <!-- ═══════════════════════════════════════════
           HERO HEADER DE PÁGINA
           Siempre con min-h-[60vh], centrado, con fade
      ═══════════════════════════════════════════ -->
      <section class="relative min-h-[60vh] flex items-center justify-center bg-museum-cream pt-20">
        <!-- Decorativo fondo sutil -->
        <div class="absolute inset-0 bg-gradient-to-b from-museum-gold/5 to-transparent pointer-events-none"></div>
        
        <div class="relative z-20 text-center px-8" transition:animate="fade">
          <span class="text-museum-gold font-bold tracking-[0.5em] text-[10px] md:text-xs mb-8 uppercase block">
            [Subtítulo descriptivo / contexto]
          </span>
          <h1 class="text-6xl md:text-8xl font-display text-museum-dark mb-10 leading-none">
            [Primera <br/> <span class="text-museum-gold">Palabra Clave]</span>
          </h1>
          <div class="w-24 h-1 bg-museum-gold mx-auto"></div>
        </div>
      </section>

      <!-- Sub-navegación opcional (para páginas con múltiples secciones) -->
      <div class="sticky top-20 bg-white/90 backdrop-blur-md z-40 border-b border-zinc-100 py-4 hidden md:block">
        <div class="max-w-7xl mx-auto flex justify-center gap-8">
          <a href="#seccion-1" class="text-[10px] font-bold tracking-widest uppercase text-museum-dark/60 hover:text-museum-gold transition-colors">01. Primera</a>
          <a href="#seccion-2" class="text-[10px] font-bold tracking-widest uppercase text-museum-dark/60 hover:text-museum-gold transition-colors">02. Segunda</a>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════
           SECCIONES DE CONTENIDO
           Alternar bg: museum-cream / white / museum-dark
      ═══════════════════════════════════════════ -->
      <section id="seccion-1" class="py-32 px-8 md:px-16 lg:px-24 bg-white border-b border-zinc-50">
        <div class="max-w-7xl mx-auto">
          <!-- Contenido aquí -->
        </div>
      </section>

      <!-- Sección oscura (cuando corresponde) -->
      <section id="seccion-2" class="py-32 px-8 md:px-16 lg:px-24 bg-museum-dark text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-96 h-96 bg-museum-gold/5 blur-3xl rounded-full pointer-events-none"></div>
        <div class="max-w-7xl mx-auto relative z-10">
          <!-- Contenido aquí -->
        </div>
      </section>

      <!-- ═══════════════════════════════════════════
           FOOTER DE PÁGINA — botón volver
      ═══════════════════════════════════════════ -->
      <section class="py-24 text-center">
        <a href="/" class="group inline-flex items-center gap-6 px-12 py-6 border border-museum-dark/20 rounded-full hover:bg-museum-dark hover:text-white transition-all duration-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:-translate-x-2 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"/></svg>
          <span class="text-xs font-bold uppercase tracking-[0.3em]">Volver al Inicio</span>
        </a>
      </section>

    </main>

    <Footer />
  </body>
</html>
```

---

## 🔗 Después de crear la página

1. **Agregar al navbar** (`src/components/navbar.astro`):
   ```js
   const navItems = [
     // ...
     { 
       name: "Sección Padre", 
       children: [
         { name: "Nueva Página", href: "/nueva-url" },
         // ...
       ]
     },
   ```

2. **Si la página tenía sección en el index**, actualizar el link de esa sección para apuntar a la nueva URL en lugar del ancla `#`.

3. **Verificar el `<title>`** sigue el patrón: `[Nombre] | Casa Museo Pozón`

---

## 📐 Layouts más usados en páginas internas

### Layout 2 columnas texto + imagen
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
  <div><!-- Texto, headings, párrafos --></div>
  <div class="sticky top-32"><!-- Imagen o elemento visual --></div>
</div>
```

### Layout texto centrado + cards
```html
<div class="flex flex-col items-center text-center mb-20">
  <h2>...</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
  <!-- 3 tarjetas -->
</div>
```

### Layout inverso (imagen izquierda, texto derecha)
```html
<div class="flex flex-col lg:flex-row-reverse gap-20 items-center">
  <div class="w-full lg:w-1/2"><!-- Texto --></div>
  <div class="w-full lg:w-1/2"><!-- Visual --></div>
</div>
```
