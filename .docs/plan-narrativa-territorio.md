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
