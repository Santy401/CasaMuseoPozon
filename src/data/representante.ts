import { SITE_BASE } from "./socios";

/**
 * Representante Legal de la Fundación Casa Museo del Pozón.
 *
 * Fuente única de verdad: la consumen tanto la sección del inicio
 * (`src/views/RepresentanteLegal.astro`) como su apartado propio
 * (`src/pages/representante-legal.astro`), igual que `src/data/socios.ts`
 * alimenta las credenciales del cuerpo colegiado.
 */
export interface RepresentanteLegal {
  nombre: string;
  /** Nombre partido para los titulares display ("Rigoberto" / "Castro Pérez"). */
  nombrePartes: { primera: string; apellidos: string };
  cargo: string;
  /** Cargo registral ante la fundación, tal como figura en los documentos ESAL. */
  cargoRegistral: string;
  codigo: string;
  estado: string;
  vinculo: string;
  image: string;
  /** Declara la sentencia que firma su leadership. */
  sentencia: string;
  reconocimiento: string;
  descripcion: string;
  biografia: string;
  indicadores: { valor: string; etiqueta: string }[];
  aportes: { titulo: string; texto: string }[];
  documentosLegales: { nombre: string; archivo: string; path: string }[];
  investigaciones: { nombre: string; tipo: string; texto: string; path: string }[];
  destacado: { eyebrow: string; nombre: string; path: string };
  video: string;
}

/** URL pública del apartado propio del representante legal (destino del QR). */
export const REPRESENTANTE_PATH = "/representante-legal";

/** URL absoluta y verificable que codifica el QR de la credencial. */
export function representanteUrl(): string {
  return `${SITE_BASE}${REPRESENTANTE_PATH}`;
}

export const representante: RepresentanteLegal = {
  nombre: "Rigoberto Castro Pérez",
  nombrePartes: { primera: "Rigoberto", apellidos: "Castro Pérez" },
  cargo: "Director Ejecutivo y Representante Legal",
  cargoRegistral: "Representante Legal",
  codigo: "FCMP-CMMP-RLEGAL-2024-01",
  estado: "En ejercicio",
  vinculo: "Fundador · Acta de Constitución 001 (2024)",
  image: "/imagenes/creator.png",
  sentencia:
    "La memoria no está en los objetos, está en las manos que los crean, en las voces que los narran, en los territorios que resisten.",
  reconocimiento:
    "Rigoberto Castro Pérez es la firma que respalda institucionalmente a la Fundación Casa Museo del Pozón. Como fundador, Director Ejecutivo y Representante Legal, es el garante de que cada decisión administrativa y cada recurso empleados sean una expresión fiel del mandato fundacional: memoria, territorio y dignidad de El Pozón.",
  descripcion:
    "Su liderazgo se sostiene en una investigación de largo aliento y en una práctica museológica de territorio. Ha construido un modelo que resignifica el barrio como archivo vivo, integrando investigación, pedagogía y gestión en un mismo gesto institucional. Su trabajo ha hecho posible la redención del Conchero arqueológico de La Islita, el Himno de El Pozón como símbolo barrial y la articulación de la red de museos del territorio como red de custodia compartida.",
  biografia:
    "Su formación académica se consolidó con investigaciones que marcaron hitos en la comprensión de Cartagena. Su estudio «Entre fango y pavimento» analizó las tensiones entre urbanismo oficial y territorialidades populares, mientras que su investigación de maestría amplió esta mirada hacia el patrimonio y el desarrollo territorial. Desde entonces su labor une el rigor del archivo con la paciencia del territorio: cada sala, cada nodo y cada proyecto del museo responde a una pregunta por la dignidad de las comunidades que lo sostienen.",
  indicadores: [
    { valor: "25+", etiqueta: "Años de gestión" },
    { valor: "4", etiqueta: "Nodos museales" },
    { valor: "2025", etiqueta: "Red de museos" },
  ],
  aportes: [
    {
      titulo: "Investigación",
      texto:
        "Descubrimiento del conchero arqueológico Islita del Pozón, vinculado a las primeras culturas precerámicas de América (5350 a.C.).",
    },
    {
      titulo: "Pedagogía",
      texto:
        "Creador del Modelo de Aprendizaje Comunitario Orgánico (A.C.O.), reconociendo saberes locales como base educativa.",
    },
    {
      titulo: "Simbología",
      texto:
        "Composición del Himno de El Pozón, adoptado por instituciones como símbolo de identidad y orgullo barrial.",
    },
    {
      titulo: "Gestión",
      texto:
        "Integración de la Fundación a la Red de Museos de Cartagena y Bolívar en 2025.",
    },
  ],
  documentosLegales: [
    {
      nombre: "Certificado de Existencia y Representación",
      archivo: "CERTIFICADO DE EXISTENCIA Y REPRESENTATIVIDAD.pdf",
      path: "/pdfs/CERTIFICADO DE EXISTENCIA Y REPRESENTATIVIDAD.pdf",
    },
    {
      nombre: "Acta de Constitución 001 (modificada)",
      archivo: "ACTA DE CONSTITUCIÓN 001 - MODIFICADO.pdf",
      path: "/pdfs/ACTA DE CONSTITUCIÓN 001 - MODIFICADO.pdf",
    },
    {
      nombre: "Estatutos Legales de la Fundación",
      archivo: "ESTATUTOS LEGALES FUNDACION CASA MUSEO POZON.pdf",
      path: "/pdfs/ESTATUTOS LEGALES FUNDACION CASA MUSEO POZON.pdf",
    },
    {
      nombre: "Registro Nacional de Museos — SIMCO",
      archivo: "2026 Cert SIMCO Reg Casa Museo Pozon.pdf",
      path: "/pdfs/2026 Cert SIMCO Reg Casa Museo Pozon.pdf",
    },
    {
      nombre: "RUT Institucional Actualizado",
      archivo: "RUT 2026.pdf",
      path: "/pdfs/RUT 2026.pdf",
    },
    {
      nombre: "Informe de Gestión y Actividades",
      archivo: "InformeCarvajal2019.pdf",
      path: "/pdfs/InformeCarvajal2019.pdf",
    },
  ],
  investigaciones: [
    {
      nombre: "Colecciones Arqueológicas",
      tipo: "Tesis de Investigación",
      texto:
        "Estudio sobre las colecciones arqueológicas halladas en el territorio pozonero, documentando los vestigios precolombinos del Conchero de La Islita y su relevancia para la comprensión de las primeras culturas del Caribe colombiano.",
      path: "/pdfs/Coleciones Arqueologicas.pdf",
    },
    {
      nombre: "Entre fango y pavimento",
      tipo: "Investigación territorial",
      texto:
        "Análisis de las tensiones entre el urbanismo oficial y las territorialidades populares en Cartagena, lectura que fundamenta el trabajo museológico con El Pozón.",
      path: "/pdfs/ENTRE FANGO Y PAVIMENTO.pdf",
    },
  ],
  destacado: {
    eyebrow: "Documento de representación",
    nombre: "Certificado de Existencia y Representación",
    path: "/pdfs/CERTIFICADO DE EXISTENCIA Y REPRESENTATIVIDAD.pdf",
  },
  video: "https://www.youtube.com/watch?v=46eaYp6t_mI",
};