export interface Socio {
  nombre: string;
  rol: string;
  ingreso: string;
  codigo: string;
  estado: string;
  image?: string | null;
  reconocimiento: string;
  descripcion?: string;
}

/** Dominio canónico del sitio (mismo que usa src/layouts/Layout.astro). */
export const SITE_BASE = "https://www.casapozonmuseo.org";

/** URL pública de la ficha de un socio, indexada por su código. */
export function socioUrl(socio: Pick<Socio, "codigo">): string {
  return `${SITE_BASE}/socio/${encodeURIComponent(socio.codigo)}`;
}

export const socios: Socio[] = [
  {
    nombre: "MARBEL LUZ BARRIOS SÁNCHEZ",
    rol: "Secretaria de la Fundación",
    ingreso: "26 de agosto de 2024",
    codigo: "FCMP-CMMP-SEC-2024-02",
    estado: "Activa",
    image: "/socios/imagen der marbel-6.webp",
    reconocimiento:
      "Marbel Luz Barrios Sánchez ejerce como custodia viva de la memoria documental y administrativa de la Fundación, consolidando con rigor y sensibilidad los procesos internos que sustentan la legitimidad institucional. Su labor garantiza la transparencia operativa, el respeto por la dignidad territorial y la coherencia ética en cada acto de registro, archivo y comunicación.",
    descripcion:
      "Desde su ingreso, ha asumido con compromiso el resguardo de los flujos administrativos, convirtiéndose en garante de la trazabilidad histórica de la Fundación. Su rol no se limita a lo técnico: Marbel encarna una presencia simbólica que honra la memoria colectiva, asegurando que cada documento, cada dato y cada acto administrativo refleje el espíritu fundacional de la institución.",
  },
  {
    nombre: "LUZ MIRIAM JARABA ROA",
    rol: "Coordinadora General de Programas",
    ingreso: "26 de agosto de 2024",
    codigo: "FCMP-CMMP-COORD-2024-03",
    estado: "Activa",
    image: "/socios/LUZ MIRIAM JARABA.webp",
    reconocimiento:
      "Luz Miryam Jaraba Roa se consolida como arquitecta estratégica de los vínculos programáticos que entretejen memoria, territorio and comunidad en la Fundación Casa Museo Pozón. Su rol como Coordinadora General de Programas trasciende la gestión operativa: Luz Miryam encarna una presencia articuladora, capaz de convocar saberes intergeneracionales, traducirlos en propuestas pedagógicas vivas y garantizar su coherencia ética en cada fase del proceso institucional.",
    descripcion:
      "Desde su ingreso el 26 de agosto de 2024, ha sido custodia activa de la integridad pedagógica, asegurando que cada programa refleje los principios fundacionales de dignidad territorial, coautoría simbólica y transformación comunitaria. Su mirada estratégica permite que los programas no solo respondan a necesidades técnicas, sino que se conviertan en espacios de afirmación identitaria y construcción colectiva de memoria. Luz Miryam es, además, guardiana de la coherencia interna, velando por que cada acción programática esté alineada con los valores éticos de la Fundación.",
  },
  {
    nombre: "AURY ESTELLA GARCÍA CABALLERO",
    rol: "Coordinadora de Gestión de Recursos y Presupuesto",
    ingreso: "26 de agosto de 2024",
    codigo: "FCMP-CMMP-RECPRES-2024-13",
    estado: "Activa",
    image: "/socios/AURY ESTELLA.webp",
    reconocimiento:
      "Aury Estella García Caballero se consolida como custodia estratégica de los recursos que sostienen la acción territorial, pedagógica y museológica de la Fundación Casa Museo Pozón. En su rol como Coordinadora de Gestión de Recursos y Presupuesto, Aury encarna una presencia institucional que garantiza la planificación ética, eficiente y profundamente humana de los flujos financieros, asegurando que cada decisión económica refleje los principios fundacionales de dignidad, transparencia y visión comunitaria.",
    descripcion:
      "Desde su ingreso el 26 de agosto de 2024, ha asumido con rigor técnico y sensibilidad territorial la tarea de diseñar estructuras presupuestales que respalden procesos vivos, permitiendo que las iniciativas de la Fundación se desarrollen con solvencia, coherencia y proyección. Su gestión no se limita al control de cifras: Aury traduce sueños colectivos en sostenibilidad concreta, consolidando una arquitectura financiera que honra los saberes locales y fortalece la autonomía institucional.",
  },
  {
    nombre: "MARISELA MARTÍNEZ MARTÍNEZ",
    rol: "Coordinadora General de Proyectos",
    ingreso: "26 de agosto de 2024",
    codigo: "FCMP-CMMP-COORDPROY-2024-06",
    estado: "Activa",
    image: "/socios/MARISELA MARTINEZ.webp",
    reconocimiento:
      "Marisela Martínez Martínez se consolida como tejedora institucional de propuestas vivas, articulando con precisión y sensibilidad los hilos que unen memoria, territorio y acción comunitaria. En su rol como Coordinadora General de Proyectos, ejerce una labor estratégica que no solo organiza iniciativas, sino que convoca sentidos, saberes y afectos colectivos, transformándolos en procesos con impacto real y profundidad simbólica.",
    descripcion:
      "Desde su ingreso el 26 de agosto de 2024, Marisela ha demostrado una capacidad visionaria para traducir las realidades locales en proyectos dignos, pertinentes e innovadores, siempre en diálogo con las memorias compartidas y las dinámicas comunitarias.",
  },
  {
    nombre: "LUIS ALBERTO CAICEDO PUERTA",
    rol: "Coordinador de Conservación Ambiental y Sostenibilidad",
    ingreso: "26 de agosto de 2024",
    codigo: "FCMP-CMMP-AMB-2024-08",
    estado: "Activo",
    image: null,
    reconocimiento:
      "Luis Alberto Caicedo Puerta se consolida como guardián ético de los vínculos entre memoria territorial y sostenibilidad ambiental, ejerciendo una labor estratégica que articula prácticas ecológicas con procesos museológicos de vocación comunitaria. En su rol como Coordinador de Conservación Ambiental y Sostenibilidad, Luis Alberto encarna una presencia institucional que dignifica el entorno natural como parte viva del patrimonio cultural.",
    descripcion:
      "Desde su ingreso el 26 de agosto de 2024, ha asumido con rigor y sensibilidad la tarea de integrar la dimensión ambiental en cada acción pedagógica, simbólica y territorial de la Fundación. Su gestión convoca una ética del cuidado, donde cada decisión técnica se inscribe en un marco de respeto por los saberes ancestrales.",
  },
  {
    nombre: "ALONSO BONILLA VARGAS",
    rol: "Agente de Inclusión Cultural",
    ingreso: "26 de agosto de 2024",
    codigo: "FCMP-CMMP-INCL-2024-07",
    estado: "Activo",
    image: "/socios/ALONSO BONILLAS.webp",
    reconocimiento:
      "Alonso Bonilla Vargas se consolida como facilitador ético de puentes vivos entre saberes diversos, territorios históricamente invisibilizados y procesos museológicos con vocación profundamente comunitaria. En su rol como Agente de Inclusión Cultural, Alonso encarna una presencia institucional que dignifica la pluralidad, asegurando que cada acción pedagógica y simbólica de la Fundación esté impregnada de respeto.",
    descripcion:
      "Desde su ingreso el 26 de agosto de 2024, ha ejercido una labor estratégica que trasciende lo operativo: Alonso convoca memorias silenciadas, activa diálogos intergeneracionales y promueve la inclusión como principio fundacional.",
  },
  {
    nombre: "MIGUEL ÁNGEL BAENA MEJÍA",
    rol: "Coordinador de Logísticas",
    ingreso: "26 de agosto de 2024",
    codigo: "FCMP-CMMP-LOG-2024-10",
    estado: "Activo",
    image: "/socios/MIGUEL BAENA.webp",
    reconocimiento:
      "Miguel Ángel Baena Mejía se consolida como articulador estratégico de los movimientos físicos y simbólicos que sostienen la acción comunitaria de la Fundación Casa Museo Pozón. En su rol como Coordinador de Logísticas, Miguel Ángel encarna una presencia operativa profundamente ética, que garantiza que cada encuentro, recorrido y evento institucional se realice con precisión.",
    descripcion:
      "Desde su ingreso el 26 de agosto de 2024, ha asumido con compromiso y sensibilidad la tarea de custodiar los ritmos que hacen posible la memoria viva, asegurando que cada desplazamiento y montaje esté alineado con los principios fundacionales.",
  },
  {
    nombre: "NEIDER IGNACIO FORTICH ARGUMEDO",
    rol: "Coordinador General de Turismo",
    ingreso: "26 de agosto de 2024",
    codigo: "FCMP-CMMP-TUR-2024-12",
    estado: "Activo",
    image: "/socios/NEIDER FORTICH.webp",
    reconocimiento:
      "Neider Ignacio Fortich Argumedo se consolida como embajador territorial de la memoria viva, ejerciendo una labor profundamente ética y pedagógica en su rol como Coordinador General de Turismo de la Fundación Casa Museo Pozón. Su presencia institucional articula recorridos que no solo movilizan cuerpos, sino también sentidos y saberes.",
    descripcion:
      "Desde su ingreso el 26 de agosto de 2024, Neider ha asumido con sensibilidad y visión estratégica la tarea de construir puentes entre visitantes y territorios, asegurando que cada recorrido sea una oportunidad para el reconocimiento mutuo.",
  },
  {
    nombre: "LIC. ANA PATRICIA BUSTAMANTE",
    rol: "Agente de Inclusión Pedagógica",
    ingreso: "26 de abril de 2026",
    codigo: "FCMP-CMMP-AIP-2026-19",
    estado: "Activa",
    image: "/socios/ANA PATRICIA B.jpeg",
    reconocimiento:
      "La Lic. Ana Patricia Bustamante es una educadora territorial comprometida con la inclusión, la memoria viva y la dignificación de las comunidades del Pozón. Su labor integra pedagogías decoloniales, museología comunitaria y educación sentipensante, articulando escuela, familia, comunidad y museo.",
    descripcion:
      "Como Agente de Inclusión Pedagógica, diseña y ejecuta talleres basados en memoria viva, acompaña procesos de inclusión y acompañamiento familiar, y fortalece el Modelo Museal Turístico Territorial desde la mediación educativa. Su enfoque reivindica la memoria barrial como herramienta de justicia simbólica y promueve procesos educativos transformadores desde el territorio.",
  },
  {
    nombre: "SANTIAGO CASTELLAR GARCIA",
    rol: "Coordinador de Medios Digitales",
    ingreso: "26 de abril de 2026",
    codigo: "FCMP-CMMP-DIG-2026-18",
    estado: "Activo",
    image: "/socios/SANTIAGO CASTELLAR.png",
    reconocimiento:
      "Santiago Castellar Garcia se constituye como el arquitecto de la frontera digital de la Fundación Casa Museo Pozón, fusionando la ingeniería de sistemas avanzados con una sensibilidad profunda por la memoria territorial. En su rol como Coordinador de Medios Digitales, Santiago ha diseñado, desarrollado y sostiene la infraestructura que permite que el corazón de El Pozón lata en el mundo global, garantizando que la dignidad y los saberes locales se traduzcan en experiencias digitales de vanguardia.",
    descripcion:
      "Su labor trasciende el desarrollo de software: Santiago es el guardián de la accesibilidad tecnológica y la innovación con sentido, asegurando que cada línea de código, cada interfaz y cada flujo de datos sea un acto de resistencia cultural y proyección institucional. Desde la creación de este ecosistema web, ha liderado la democratización del acceso a la memoria, convirtiendo lo digital en una herramienta de transformación social.",
  },
  {
    nombre: "NICOLAS DE JESUS FLORES RODRIGUEZ",
    rol: "Coordinador de Asesoría Financiera",
    ingreso: "27 de agosto de 2026",
    codigo: "FCMP-CMMP-DIG-2026-19",
    estado: "Activo",
    image: "/socios/NICOLAS FLORES.png",
    reconocimiento:
      "Nicolás se constituye como el arquitecto de la estabilidad económica y la planeación estratégica de la Fundación Casa Museo Pozón, fusionando su profundo conocimiento en finanzas con una sensibilidad única por la sostenibilidad de los proyectos sociales. En su rol como Coordinador de Asesoría Financiera, Nicolás ha diseñado, implementado y mantenido los mecanismos que permiten que la misión cultural de la fundación se sostenga en el tiempo, garantizando que cada decisión financiera sea un acto de responsabilidad y visión de futuro.",
    descripcion:
      "Su labor trasciende el manejo de números y presupuestos: Nicolás es el guardián de la viabilidad económica y la transparencia fiscal, asegurando que cada peso invertido, cada informe financiero y cada estrategia de inversión sea un reflejo del compromiso institucional y el impacto social. Desde la estructuración de los recursos, ha liderado la construcción de puentes entre la sostenibilidad financiera y la proyección cultural, convirtiendo las finanzas en una herramienta de transformación y permanencia.",
  },
];

/** Busca un socio por su código institucional (case-insensitive). */
export function getSocioByCodigo(codigo: string): Socio | undefined {
  return socios.find(
    (s) => s.codigo.toLowerCase() === String(codigo).toLowerCase(),
  );
}
