# Revista El Pozón: Memoria Viva

## Idea General
Sección tipo blog digital con artículos que combinan video de YouTube + crónica escrita, categorizados temáticamente, con espacio para colaboradores invitados y archivo de ediciones PDF.

## Arquitectura Técnica
- **Framework:** Astro 6 + Tailwind CSS v4
- **Patrón:** Data file TypeScript + páginas Astro con rutas dinámicas
- **Sigue el patrón existente** de `src/data/impactos.ts` y las páginas internas del sitio

## Categorías
1. **Memoria Viva** — Crónicas de la historia y memoria del territorio
2. **Voces del Territorio** — Columnas de líderes y talentos locales
3. **Turismo Comunitario** — Rutas, experiencias y turismo pedagógico
4. **Patrimonio** — Arqueología, patrimonio cultural y biocultural

## Estructura de Archivos

| Archivo | Propósito |
|---------|-----------|
| `src/data/revista.ts` | Interfaces y data de artículos |
| `src/pages/revista.astro` | Portada del blog con filtros y grid |
| `src/pages/revista/[slug].astro` | Página individual de cada artículo |
| `src/pages/revista/archivo.astro` | Archivo de ediciones PDF (placeholder) |

## Modificaciones
- `src/components/navbar.astro` — Agregar "Revista El Pozón" bajo el dropdown "Comunidad"

## Flujo de Contenido
1. Se sube un video al canal de YouTube del museo
2. Se crea un artículo en `revista.ts` con slug, título, categoría, autor, URL de YouTube y crónica en HTML
3. `[slug].astro` genera la página automáticamente
4. El artículo aparece en la portada `/revista` con su categoría y filtro correspondiente

## Voces del Territorio — Flujo Editorial
- Artículos con `autor.invitado = true`
- Badge distintivo en tarjetas del listing
- Sección destacada del autor con biografía en la página individual
- CTA en portada invitando a líderes locales a contribuir

## Archivo de la Revista
- Sección placeholder para futuras ediciones PDF
- Estructura lista para cuando se tengan ediciones digitales
- Cada edición mostrará: portada, número, fecha, botón de descarga

## Diseño Visual
- Hero con título "Revista El Pozón: Memoria Viva" y subtítulo "Crónicas, memorias y saberes del territorio pozonero"
- Filtros por categoría con JavaScript (mismo patrón que `eventos.astro`)
- Grid de tarjetas a 2 columnas con imagen, badge, título, extracto, autor y fecha
- Paleta existente del sitio: `museum-dark`, `museum-gold`, `museum-cream`
- Tipografía: Playfair Display para títulos, Inter para cuerpo
- Componente `<YouTube />` existente para embebidos
