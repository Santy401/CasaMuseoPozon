# Skill: Añadir Componente Reutilizable
## Casa Museo Pozón

Usa este skill cuando necesites crear un **componente que se reutiliza en múltiples páginas**, ubicado en `src/components/`.

---

## ✅ ¿Cuándo crear un componente vs. inline?

| Situación | Decisión |
|---|---|
| Se usa en 3+ lugares distintos | ✅ Crear componente |
| Es un bloque de UI autocontenido (card, badge, modal) | ✅ Crear componente |
| Es contenido de una sola sección | ❌ Mantener inline en el view |
| Requiere props/slots variables | ✅ Crear componente con props |

---

## 🏗️ Template base de componente

```astro
---
// Props del componente (si aplica)
interface Props {
  titulo: string;
  descripcion?: string;
  href?: string;
  icono?: string; // nombre descriptivo del icono
}

const { titulo, descripcion = "", href = "#", icono } = Astro.props;
---

<!-- Markup del componente -->
<div class="[clases del componente]">
  <!-- Slot para contenido flexible -->
  <slot />
  
  <!-- O prop-driven content -->
  <h3 class="font-display text-2xl text-museum-dark mb-4">{titulo}</h3>
  {descripcion && (
    <p class="text-museum-dark/60 text-sm font-light leading-relaxed">{descripcion}</p>
  )}
</div>

<style>
  /* Solo si necesitas CSS que no puede expresarse con Tailwind */
</style>
```

---

## 📦 Componentes existentes (no duplicar)

| Componente | Archivo | Descripción |
|---|---|---|
| Navbar | `src/components/navbar.astro` | Navegación global con dropdowns y menú móvil |
| Footer | `src/components/footer.astro` | Pie de página con redes y copyright |
| SocialSidebar | `src/components/SocialSidebar.astro` | Barra lateral fija con redes sociales (desktop) |

---

## 🧩 Tipos de componentes recomendados para crear

### Tarjeta de Persona (Socio / Miembro)
```astro
---
interface Props {
  nombre: string;
  cargo: string;
  foto?: string;
  descripcion?: string;
}
const { nombre, cargo, foto, descripcion } = Astro.props;
---
<div class="bg-white rounded-2xl overflow-hidden shadow-xl shadow-museum-dark/5 hover:-translate-y-2 transition-all duration-500 group">
  {foto && (
    <div class="aspect-[3/4] overflow-hidden">
      <img src={foto} alt={nombre} class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
    </div>
  )}
  <div class="p-8">
    <p class="text-[10px] font-bold text-museum-gold uppercase tracking-[0.2em] mb-2">{cargo}</p>
    <h3 class="font-display text-xl text-museum-dark mb-3">{nombre}</h3>
    {descripcion && (
      <p class="text-xs text-museum-dark/50 font-light leading-relaxed">{descripcion}</p>
    )}
  </div>
</div>
```

### Badge / Etiqueta
```astro
---
interface Props {
  texto: string;
  variante?: 'gold' | 'dark' | 'outline';
}
const { texto, variante = 'gold' } = Astro.props;

const clases = {
  gold: 'bg-museum-gold text-museum-cream',
  dark: 'bg-museum-dark text-white',
  outline: 'border border-museum-gold/30 text-museum-gold'
};
---
<span class={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${clases[variante]}`}>
  {texto}
</span>
```

### Sección con header estándar (slot)
```astro
---
interface Props {
  id: string;
  label: string;
  titulo: string;
  enfasis?: string;
  fondo?: 'cream' | 'white' | 'dark';
}
const { id, label, titulo, enfasis, fondo = 'white' } = Astro.props;

const fondos = {
  cream: 'bg-museum-cream',
  white: 'bg-white',
  dark: 'bg-museum-dark text-white'
};
---
<section {id} class={`py-24 md:py-32 px-8 md:px-16 lg:px-24 ${fondos[fondo]}`}>
  <div class="max-w-7xl mx-auto">
    <span class="text-museum-gold font-bold tracking-[0.4em] text-[10px] uppercase block mb-6">{label}</span>
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-display mb-8">
      {titulo}
      {enfasis && <span class="text-museum-gold block mt-2">{enfasis}</span>}
    </h2>
    <div class="w-20 h-1 bg-museum-gold mb-10"></div>
    <slot />
  </div>
</section>
```

---

## 📋 Reglas de nombrado de componentes

| Regla | Ejemplo ✅ | Ejemplo ❌ |
|---|---|---|
| PascalCase para el archivo | `TarjetaSocio.astro` | `tarjeta-socio.astro` |
| Descriptivo y en español o inglés | `TarjetaEvento.astro` | `Card.astro` |
| En `src/components/` | `src/components/TarjetaSocio.astro` | `src/views/TarjetaSocio.astro` |
| Import siempre desde `../components/` | ✅ | No importar con rutas relativas complejas |

---

## 🔧 Cómo usar el componente en una página

```astro
---
import TarjetaSocio from "../components/TarjetaSocio.astro";
// o desde una página:
import TarjetaSocio from "../../components/TarjetaSocio.astro";
---

<TarjetaSocio
  nombre="Lic. Ana Patricia Bustamante"
  cargo="Coordinadora Cultural"
  foto="/Socios/ana-bustamante.jpg"
  descripcion="Licenciada en Artes con énfasis en Gestión Cultural..."
/>
```
