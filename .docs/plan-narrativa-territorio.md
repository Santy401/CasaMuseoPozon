# Plan: Sección Narrativa del Territorio - Salas Interactivas

## Estructura de datos (`src/data/salas.ts`)

```typescript
export interface Objeto {
  id: string;
  nombre: string;
  descripcion: string;
  imagen?: string;
  pdf?: string;
}

export interface Estantes {
  id: string;
  nombre: string;
  objetos: Objeto[];
}

export interface Sala {
  id: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  estantes: Estantes[];
}
```

## Implementación técnica

### 1. Componente `<SalaInteractiva />`
- Cada sala es un `<details>` o div con estado `open` manejado por JS
- Al hacer click en la sala → expande el área de estantes
- Transición suave con CSS (`grid-template-rows` o `max-height`)

### 2. Componente `<Estantes />`
- Grid de tarjetas para cada estante
- Cada estante tiene un header clickeable que despliega sus objetos

### 3. Componente `<ObjetoCard />`
- Tarjeta con imagen, nombre, descripción
- Badge de categoría (opcional)
- Enlace a PDF si existe

## Mejoras sugeridas

| Mejora | Descripción |
|--------|-------------|
| **Filtros** | Por tipo de objeto, época, material |
| **Breadcrumbs** | `Sala 1 > Estante A > Objeto X` |
| **Contador** | "12 objetos en 3 estantes" |
| **Lightbox** | Click en imagen → vista ampliada |
| **Búsqueda** | Input para filtrar objetos por nombre |
| **PDF por objeto** | Descargar ficha técnica individual |
| **Estado URL** | Compartir enlace directo a una sala/objeto |

## Flujo UX propuesto

```
Sala 1 (colapsada)
  ↓ click
Sala 1 (expandida)
  ├── Estante A (colapsado)
  │     └── click → Objeto 1, Objeto 2...
  ├── Estante B (colapsado)
  └── Estante C (colapsado)
```

## Archivos a modificar/crear

1. `src/data/salas.ts` - Datos estructurados
2. `src/components/SalaInteractiva.astro` - Lógica de sala
3. `src/components/Estantes.astro` - Estante y objetos
4. Modificar `recorrido-museal.astro` - Integrar componentes

## Plan: Infraestructura y Distribución Espacial (Nave Central)

Esta nueva sección estará destinada a visualizar el espacio físico del museo, detallando su infraestructura y la distribución de las áreas para los visitantes.

### 1. Sugerencias de Nombres Alternativos
Para darle un enfoque más museográfico y profesional en lugar de "Nave Central", te sugiero las siguientes opciones:
- **Espacio Arquitectónico**
- **Plano General del Museo**
- **Infraestructura Museal**
- **Distribución Espacial**
- **Pabellón Principal**
- **Centro de Exhibiciones**

### 2. Estructura y Contenido de la Sección
- **Plano Interactivo**: Una imagen o SVG del plano donde los visitantes puedan pasar el ratón (hover) o hacer clic sobre diferentes áreas (Salas, Recepción, Baños, Salidas de Emergencia) y ver qué hay en cada lugar.
- **Ficha Técnica de Infraestructura**: Capacidad de personas, metros cuadrados de exhibición, accesibilidad (rampas, etc.).
- **Zonificación**: Descripción breve de cada área física.

### 3. Herramientas para Crear Planos de Forma Profesional
Para que los planos luzcan modernos y acordes al diseño premium del sitio web, aquí tienes las mejores opciones:

| Herramienta | Dificultad | Descripción |
|---|---|---|
| **Floorplanner** | Baja | (Recomendada). Es web, muy intuitiva y permite exportar plantas en 2D y 3D de alta calidad y estética visual sin ser experto. |
| **Figma o Adobe Illustrator** | Media | Ideal si quieres un diseño plano (flat design), minimalista o isométrico, exportable como SVG para hacerlo interactivo directamente en el código de la web. |
| **Magicplan** | Baja | App para celular/tablet. Puedes ir caminando por el espacio del museo y escanearlo con la cámara, la app dibujará el plano sola. |
| **Planner 5D / HomeByMe** | Baja | Buenas alternativas a Floorplanner, excelentes para sacar "renders" o fotos 3D realistas del espacio interior. |
| **AutoCAD / SketchUp** | Alta | Estándar de arquitectura. Úsalo si cuentas con el apoyo de un profesional o tienes planos previos para digitalizar. |

### 4. Implementación Web Propuesta
- Diseñar el plano en una de las herramientas sugeridas y exportarlo en formato **SVG** o **WebP**.
- Si es SVG, se pueden hacer interactivas las "habitaciones" mediante CSS (`:hover`) para cambiarles el color y mostrar un cuadro de información (tooltip).
- Se integraría como un componente nuevo (ej. `src/components/MapaInfraestructura.astro`) que se pueda colocar en `recorrido-museal.astro` o en una página dedicada.
