# Instrucciones Generales — Agente IA
## Casa Museo Pozón

> Lee este archivo **antes** de cualquier tarea en el proyecto.  
> Luego lee el **skill específico** en `agents/skills/` que corresponda a tu tarea.

---

## 🧭 PROTOCOLO DE TRABAJO

### Antes de empezar cualquier tarea:
1. Leer `AGENT.md` en la raíz del proyecto (si no lo has hecho)
2. Identificar el skill aplicable en `agents/skills/`
3. Revisar los archivos existentes relacionados con la tarea
4. **No inventar colores, fuentes ni estilos** — solo usar los definidos en el sistema de diseño

### Durante la tarea:
- Mantener coherencia visual con todas las páginas existentes
- Seguir los patrones de UI documentados en `AGENT.md`
- Usar Tailwind con los tokens del proyecto (`museum-dark`, `museum-gold`, `museum-cream`)
- Los textos deben ser institucionales, en español, con tono cálido y épico
- Siempre incluir el layout base: `SocialSidebar + Navbar + main + Footer`

### Después de la tarea:
- Verificar responsividad (mobile → tablet → desktop)
- Confirmar que la página tiene `<ClientRouter />` en el `<head>`
- Verificar que el `<title>` siga el patrón: `[Sección] | Casa Museo Pozón`
- Asegurarse de que la navegación apunte correctamente desde el navbar

---

## 🚫 LO QUE NO DEBES HACER

| ❌ Prohibido | ✅ Alternativa |
|---|---|
| Usar colores hardcodeados (`#c4a052`) | Usar `museum-gold` |
| Usar `font-sans` para headings principales | Usar `font-display` (Playfair Display) |
| Agregar librerías de íconos externas | Usar SVG inline de Lucide |
| Omitir `<ClientRouter />` | Siempre incluirlo en el `<head>` |
| Crear páginas sin `lang="es"` | Siempre `<html lang="es">` |
| Usar padding menor a `py-16` en secciones | Mínimo `py-24 md:py-32` |
| Centrar imágenes sin `object-cover` en contenedor fijo | Siempre `object-cover object-center` |
| Crear botones sin hover state | Siempre incluir `hover:` y `transition-all duration-500` |
| Olvidar `overflow-x-hidden` en el body | Siempre en el `<body>` de páginas |
| Usar TailwindCSS v3 (CDN/script) | Usar Tailwind v4 vía `@tailwindcss/vite` |

---

## 🗂️ SKILLS DISPONIBLES

| Skill | Cuándo usarlo |
|---|---|
| [`crear-pagina.md`](./skills/crear-pagina.md) | Al crear una nueva ruta/página independiente |
| [`crear-seccion.md`](./skills/crear-seccion.md) | Al agregar una sección al index o a una página existente |
| [`anadir-componente.md`](./skills/anadir-componente.md) | Al crear un nuevo componente reutilizable en `src/components/` |
| [`estilos-design-tokens.md`](./skills/estilos-design-tokens.md) | Para consultar tokens, tipografía, espacio y patrones CSS |

---

## 🏗️ FLUJO DE CREACIÓN DE CONTENIDO NUEVO

```
1. Usuario solicita nueva sección/página
        ↓
2. Agente identifica tipo: ¿página nueva o sección en index?
        ↓
3. Leer skill correspondiente en agents/skills/
        ↓
4. Si es página: crear en src/pages/ con template estándar
   Si es sección: crear en src/views/ e importar en src/pages/index.astro
        ↓
5. Aplicar paleta, tipografía y patrones del AGENT.md
        ↓
6. Vincular desde el navbar si es página nueva
        ↓
7. Verificar responsive y animaciones básicas
```

---

## 📞 DATOS DE CONTACTO DEL MUSEO (para formularios y páginas)

```
Nombre: Fundación Casa Museo del Pozón
Dirección: Sector La Islita, Calle Las Palmas, Transversal 57
           81-12 con Mz 50 Lote 02, Barrio El Pozón, Cartagena, Colombia
Teléfono: (+57) 312 615 3148
Fijo: 605 692 1750
Email: fundacioncasamuseopozon@gmail.com
Donaciones: Banco Caja Social, Cuenta Ahorros: 24154765394

Horario:
- Lunes a Viernes: 2:00 pm – 6:00 pm
- Fines de Semana: 9:00 am – 3:00 pm
- Feriados: 9:00 am – 12:00 pm
```

---

## 🗺️ MAPA MENTAL DEL SITIO

```
Casa Museo Pozón (Landing /)
│
├── Institucional
│   ├── /quienes-somos    → Historia y misión
│   ├── /socios           → Junta directiva
│   └── /#representante   → Alicia Martínez (en index)
│
├── Experiencia
│   ├── /modelo-museal    → 4 pilares: Memoria, Educación, Turismo, Economía
│   ├── /nodos-museales   → 4 nodos: Cartográfico, Memoteca, Lab, Huerta
│   └── /recorrido-museal → Ruta de visita
│
├── Comunidad
│   ├── /proyectos-sociales → Proyectos en ejecución
│   └── /eventos            → Eventos y crónicas
│
├── /portafolio             → PDFs y recursos
└── /#contacto              → Formulario + mapa + donaciones
```
