# Plano de Ejecución: Presentación Proyecto Casa Museo Pozón a la Alcaldía

## Contexto General
- **Objetivo**: Presentar el proyecto a la Alcaldía usando la web como guía central integral.
- **Activos verificados**: NIT, Cuenta Bancaria, Socios estratégicos activos.
- **Herramienta principal**: Web Astro existente (se mejorará para enfoque gubernamental).
- **Enfoque**: Transmitir profesionalismo, impacto tangible y viabilidad institucional.

---

## Fases del Proyecto

### Fase 1: Organización de Activos Institucionales (1-2 días)
- [ ] Centralizar documentos legales: NIT, registro Cámara de Comercio, certificados bancarios.
- [ ] Recopilar logos, datos de contacto y aportes de socios estratégicos.
- [ ] Consolidar métricas de impacto actuales (datos numéricos, historias de éxito, fotos de proyectos).

### Fase 2: Mejora Web para Presentación (3-5 días)
#### 2.1 Sección de Impacto con Gráficas (Prioridad Alta)
- Dashboard de métricas clave con **contadores animados** (familias beneficiarias, jóvenes formados, especies rescatadas, m² recuperados).
- Gráficos de progreso ODS usando **ApexCharts** (ligero, compatible con Astro).
- Mapa interactivo territorial con **Leaflet.js** (pines de proyectos ejecutados, zonas de impacto, sitios arqueológicos).

#### 2.2 Sección Institucional
- Página `marco-institucional` con datos legales (NIT, cuenta bancaria, estatutos).
- Galería de socios con logos y descripción de aportes.
- Sección de transparencia con enlaces a informes financieros y actas.

#### 2.3 Modo Presentación Dedicado
- Toggle para ocultar navbar, social sidebar y footer.
- Navegación full-screen con botones siguiente/anterior.
- Transiciones suaves entre secciones para uso en proyector.

#### 2.4 Mejoras de Accesibilidad y Profesionalismo
- Modo contraste alto (cumplimiento de normativas gubernamentales).
- Preloader institucional con logo y mensaje corto.
- Optimización de carga (lazy loading, compresión de imágenes).

### Fase 3: Pruebas y Ajustes (1 día)
- Verificación de flujo de navegación para la presentación.
- Prueba de modo presentación en dispositivos similares a los de la alcaldía (proyectores, tablets).
- Revisión de accesibilidad y tiempos de carga.

### Fase 4: Presentación a la Alcaldía
- Uso de la web como guía visual interactiva durante la reunión.
- Entrega de memoria física (PDF exportado de la web + documentos legales).

---

## Mejora de la Idea de Gráficas de Impacto
### Implementación Técnica (Astro + JS Cliente)
| Elemento | Herramienta | Descripción |
|----------|-------------|-------------|
| Contadores animados | IntersectionObserver + JS | Números que se animan al hacer scroll (ej: 1,200+ familias) |
| Gráficos ODS | ApexCharts | Barras de progreso por objetivo de desarrollo sostenible |
| Mapa de impacto | Leaflet.js | Capas de proyectos, zonas beneficiarias, sitios arqueológicos |
| Gráficos comparativos | ApexCharts | Antes/Después de intervenciones territoriales |
| Dashboard resumen | Grid CSS + gráficos | Vista rápida de impactos para la alcaldía |

### Integración en la Web
1. Crear `src/data/impactos.ts` con datos estructurados de impactos.
2. Componente `DashboardImpacto.astro` para contenedor de gráficas.
3. Componente `GraficaODS.astro` para gráficos de objetivos de desarrollo.
4. Componente `MapaImpacto.astro` para el mapa interactivo.

---

## Archivos a Modificar/Crear
1. `src/data/impactos.ts` - Datos de impacto estructurados.
2. `src/components/DashboardImpacto.astro` - Dashboard principal.
3. `src/components/GraficaODS.astro` - Gráficos ODS.
4. `src/components/MapaImpacto.astro` - Mapa interactivo.
5. `src/pages/marco-institucional.astro` - Datos legales y socios.
6. `src/styles/global.css` - Estilos para gráficas y modo presentación.

---

## Lo que más impactará a la Alcaldía
1. **Dashboard de impacto tangible** al entrar a la web (números reales de gestión).
2. **Modo presentación** dedicado para usar en la reunión.
3. **Mapa interactivo** que muestra el alcance territorial del proyecto.
4. **Sección institucional completa** con todos los datos legales verificados.
