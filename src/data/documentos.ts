// Catálogo de documentos institucionales — Casa Museo Pozón
// Fuente de verdad: public/pdfs/ (todos los archivos deben existir ahí).
// Convención: una entrada por documento, agrupada por categoría.

export interface Documento {
  titulo: string;
  archivo: string; // nombre EXACTO del archivo en public/pdfs/
  tipo: "PDF" | "DOCX" | "PPTX";
  tamano: string;
  descripcion: string;
}

export interface CategoriaDocumentos {
  id: string;
  numero: string;
  nombre: string;
  descripcion: string;
  icono: string; // clave de icono Lucide (ver Documentos.astro)
  documentos: Documento[];
}

export const categoriasDocumentos: CategoriaDocumentos[] = [
  {
    id: "institucional",
    numero: "01",
    nombre: "Institucional",
    descripcion: "Identidad, legalidad y vigencia de la Fundación Casa Museo del Pozón.",
    icono: "landmark",
    documentos: [
      {
        titulo: "Acta de Constitución (Modificada)",
        archivo: "ACTA DE CONSTITUCIÓN 001 - MODIFICADO.pdf",
        tipo: "PDF",
        tamano: "510 KB",
        descripcion: "Acta fundacional de la Casa Museo del Pozón y su primera modificación."
      },
      {
        titulo: "Estatutos Legales de la Fundación",
        archivo: "ESTATUTOS LEGALES FUNDACION CASA MUSEO POZON.pdf",
        tipo: "PDF",
        tamano: "1.5 MB",
        descripcion: "Estatutos que rigen la organización, su gobierno y su objeto social."
      },
      {
        titulo: "Certificado de Existencia y Representatividad",
        archivo: "CERTIFICADO DE EXISTENCIA Y REPRESENTATIVIDAD.pdf",
        tipo: "PDF",
        tamano: "2.8 MB",
        descripcion: "Certificado vigente de existencia y representación legal de la fundación."
      },
      {
        titulo: "RUT 2026",
        archivo: "RUT 2026.pdf",
        tipo: "PDF",
        tamano: "119 KB",
        descripcion: "Registro Único Tributario actualizado de la Fundación."
      },
      {
        titulo: "Certificado SIMCO 2026",
        archivo: "2026 Cert SIMCO Reg Casa Museo Pozon.pdf",
        tipo: "PDF",
        tamano: "132 KB",
        descripcion: "Registro 2026 en el Sistema de Información de Museos Colombianos."
      },
      {
        titulo: "Política Patrimonial",
        archivo: "POLITICA PATRIMONIAL.pdf",
        tipo: "PDF",
        tamano: "1.8 MB",
        descripcion: "Lineamientos institucionales para la gestión del patrimonio cultural."
      },
      {
        titulo: "Caracterización Institucional",
        archivo: "Caracterización Institucional.docx",
        tipo: "DOCX",
        tamano: "2.5 MB",
        descripcion: "Documento de caracterización social, cultural y organizacional."
      }
    ]
  },
  {
    id: "planes-estrategicos",
    numero: "02",
    nombre: "Planes Estratégicos",
    descripcion: "Rumbo, gobernanza y proyección institucional de la Casa Museo.",
    icono: "target",
    documentos: [
      {
        titulo: "Plan Estratégico 2026 – 2028",
        archivo: "PLAN ESTRATÉGICO 2026 - 2028.pdf",
        tipo: "PDF",
        tamano: "1.5 MB",
        descripcion: "Hoja de ruta trienal: visión, programas y metas de la fundación."
      },
      {
        titulo: "Plan Estratégico 2026",
        archivo: "PLAN ESTRATÉGICO 2026.pdf",
        tipo: "PDF",
        tamano: "1.1 MB",
        descripcion: "Plan operativo del año con metas e indicadores de gestión."
      },
      {
        titulo: "Portafolio Institucional",
        archivo: "PORTAFOLIO INSTITUCIONAL.pdf",
        tipo: "PDF",
        tamano: "1.4 MB",
        descripcion: "Compendio de servicios, programas y capacidades de la fundación."
      }
    ]
  },
  {
    id: "modelo-museal",
    numero: "03",
    nombre: "Modelo Museal",
    descripcion: "El Modelo A.C.O. y la propuesta de museo comunitario vivo.",
    icono: "compass",
    documentos: [
      {
        titulo: "Modelo de Aprendizaje Comunitario Orgánico (A.C.O.)",
        archivo: "MODELO DE APRENDIZAJE COMUNITARIO ORGÁNICO.pdf",
        tipo: "PDF",
        tamano: "865 KB",
        descripcion: "Metodología pedagógica propia: memoria encarnada y dignidad educativa."
      },
      {
        titulo: "Modelo Museal Turístico Territorial",
        archivo: "Modelo Museal Turístico Territorial.pdf",
        tipo: "PDF",
        tamano: "1.2 MB",
        descripcion: "Modelo que articula museo, territorio y turismo comunitario."
      },
      {
        titulo: "Museo Comunitario que Asciende",
        archivo: "MUSEO COMUNITARIO QUE ASCIENDE.pdf",
        tipo: "PDF",
        tamano: "1.0 MB",
        descripcion: "Declaración de principios del museo comunitario y su proyección."
      }
    ]
  },
  {
    id: "nodos-museales",
    numero: "04",
    nombre: "Nodos Museales",
    descripcion: "Los cuatro centros de saber distribuidos en el territorio pozonero.",
    icono: "map",
    documentos: [
      {
        titulo: "Nodo Cartográfico de Memorias Barriales",
        archivo: "NODO CARTOGRÁFICO DE MEMORIAS BARRIALES.pdf",
        tipo: "PDF",
        tamano: "1.5 MB",
        descripcion: "Cartografía social y memoria del territorio pozonero."
      },
      {
        titulo: "Nodo La Huerta de la Memoria",
        archivo: "NODO LA HUERTA DE LA MEMORIA.pdf",
        tipo: "PDF",
        tamano: "1.4 MB",
        descripcion: "Saberes bioculturales y soberanía alimentaria desde el territorio."
      },
      {
        titulo: "Nodo Laboratorio Creativo",
        archivo: "NODO LABORATORIO CREATIVO.pdf",
        tipo: "PDF",
        tamano: "1.4 MB",
        descripcion: "Creación, experimentación y producción cultural comunitaria."
      },
      {
        titulo: "Nodo Memoteca Digital Pozonera",
        archivo: "NODO MEMOTECA DIGITAL POZONERA.pdf",
        tipo: "PDF",
        tamano: "1.3 MB",
        descripcion: "Archivo digital de la memoria oral y visual del Pozón."
      },
      {
        titulo: "Síntesis — Nodo Cartográfico de Memorias Barriales",
        archivo: "SÍNTESIS DEL NODO CARTOGRÁFICO DE MEMORIAS BARRIALES.docx",
        tipo: "DOCX",
        tamano: "17 KB",
        descripcion: "Resumen ejecutivo del nodo cartográfico."
      },
      {
        titulo: "Síntesis — Nodo La Huerta de la Memoria",
        archivo: "SÍNTESIS NODO HUERTA DE LA MEMORIA.docx",
        tipo: "DOCX",
        tamano: "17 KB",
        descripcion: "Resumen ejecutivo del nodo de la huerta."
      },
      {
        titulo: "Síntesis — Nodo Laboratorio Creativo",
        archivo: "SÍNTESIS DEL LABORATORIO CREATIVO POZONERO.docx",
        tipo: "DOCX",
        tamano: "18 KB",
        descripcion: "Resumen ejecutivo del laboratorio creativo."
      },
      {
        titulo: "Síntesis — Nodo Memoteca Digital Pozonera",
        archivo: "SÍNTESIS DE LA MEMOTECA DIGITAL POZONERA.docx",
        tipo: "DOCX",
        tamano: "17 KB",
        descripcion: "Resumen ejecutivo de la memoteca digital."
      }
    ]
  },
  {
    id: "salas-exposicion",
    numero: "05",
    nombre: "Salas de Exposición",
    descripcion: "El recorrido museal: tres salas que narran la memoria profunda del territorio.",
    icono: "book",
    documentos: [
      {
        titulo: "Sala de la Cultura Zenú y Memoria Ancestral",
        archivo: "SALA DE LA CULTURA ZENU Y MEMORIA ANCESTRAL.pdf",
        tipo: "PDF",
        tamano: "1.4 MB",
        descripcion: "La herencia Zenú y la memoria ancestral del pueblo pozonero."
      },
      {
        titulo: "Sala de la Vida Cotidiana de los Primeros Habitantes",
        archivo: "SALA DE LA VIDA COTIDIANA DE LOS PRIMEROS HABITANTES CONTEMPORÁNEOS.pdf",
        tipo: "PDF",
        tamano: "1.4 MB",
        descripcion: "Vida cotidiana de los primeros habitantes contemporáneos del territorio."
      },
      {
        titulo: "Sala de Orígenes Arqueológicos",
        archivo: "SALA DE ORÍGENES ARQUEOLÓGICOS.pdf",
        tipo: "PDF",
        tamano: "1.4 MB",
        descripcion: "Los orígenes arqueológicos evidenciados en el conchero de La Islita."
      },
      {
        titulo: "Síntesis — Sala Cultura Zenú",
        archivo: "SÍNTESIS DE LA SALA DE CULTURA ZENÚ Y MEMORIA ANCESTRAL.docx",
        tipo: "DOCX",
        tamano: "18 KB",
        descripcion: "Resumen ejecutivo de la sala de cultura Zenú."
      },
      {
        titulo: "Síntesis — Sala Vida Cotidiana",
        archivo: "SÍNTESIS DE LA SALA DE LA VIDA COTIDIANA DE LOS PRIMEROS HABITANTES CONTEMPORÁNEOS.docx",
        tipo: "DOCX",
        tamano: "18 KB",
        descripcion: "Resumen ejecutivo de la sala de vida cotidiana."
      },
      {
        titulo: "Síntesis — Sala Orígenes Arqueológicos",
        archivo: "SÍNTESIS DE LA SALA DE ORÍGENES ARQUEOLÓGICOS.docx",
        tipo: "DOCX",
        tamano: "18 KB",
        descripcion: "Resumen ejecutivo de la sala de orígenes arqueológicos."
      }
    ]
  },
  {
    id: "coleccion-investigacion",
    numero: "06",
    nombre: "Colección e Investigación",
    descripcion: "Arqueología, informes técnicos y estudios académicos del territorio.",
    icono: "flask",
    documentos: [
      {
        titulo: "Colecciones Arqueológicas",
        archivo: "Coleciones Arqueologicas.pdf",
        tipo: "PDF",
        tamano: "4.7 MB",
        descripcion: "Inventario y estudio de las colecciones arqueológicas de la fundación."
      },
      {
        titulo: "Informe Carvajal 2019",
        archivo: "InformeCarvajal2019.pdf",
        tipo: "PDF",
        tamano: "3.8 MB",
        descripcion: "Informe de la prospección arqueológica en el sector de La Islita."
      },
      {
        titulo: "Concepto Técnico CE 3595 / CR 2636",
        archivo: "CE 3595 CR 2636 DIANA ROCIO CARVAJAL.pdf",
        tipo: "PDF",
        tamano: "389 KB",
        descripcion: "Concepto técnico arqueológico de la Dra. Diana Rocío Carvajal."
      },
      {
        titulo: "Texto del Artículo 5278 (2013)",
        archivo: "5278-Texto del artículo-20405-1-10-20130826.pdf",
        tipo: "PDF",
        tamano: "1.1 MB",
        descripcion: "Artículo académico publicado en 2013 sobre el territorio."
      },
      {
        titulo: "La Región del Caribe Colombiano Como Es",
        archivo: "La_Region_Del_Caribe_Colombiano_Como_Esc.pdf",
        tipo: "PDF",
        tamano: "4.4 MB",
        descripcion: "Estudio regional del Caribe colombiano y su configuración territorial."
      },
      {
        titulo: "Mariscadores en las Costas del Caribe",
        archivo: "Mariscadores_en_las_costas_del_Caribe_co.pdf",
        tipo: "PDF",
        tamano: "632 KB",
        descripcion: "Investigación sobre las comunidades mariscadoras del Caribe."
      },
      {
        titulo: "Entre Fango y Pavimento",
        archivo: "ENTRE FANGO Y PAVIMENTO.pdf",
        tipo: "PDF",
        tamano: "3.2 MB",
        descripcion: "Estudio del territorio pozonero entre lo anfibio y lo urbano."
      },
      {
        titulo: "Pozón",
        archivo: "POZÓN.pdf",
        tipo: "PDF",
        tamano: "4.7 MB",
        descripcion: "Investigación integral sobre el barrio El Pozón y su memoria."
      }
    ]
  },
  {
    id: "infraestructura-turismo",
    numero: "07",
    nombre: "Infraestructura y Turismo",
    descripcion: "Proyectos de infraestructura museal y turismo cultural comunitario.",
    icono: "building",
    documentos: [
      {
        titulo: "Infraestructura",
        archivo: "INFRAESTRUCTURA.pdf",
        tipo: "PDF",
        tamano: "1.6 MB",
        descripcion: "Proyecto de adecuación y dotación de la infraestructura museal."
      },
      {
        titulo: "Cartagena Popular — Plan Turístico del Pozón",
        archivo: "CARTAGENA POPULAR. PLAN TURISTICO DEL POZÓN.pptx",
        tipo: "PPTX",
        tamano: "1.6 MB",
        descripcion: "Presentación del plan turístico comunitario del Pozón."
      }
    ]
  },
  {
    id: "pedagogia-escuela",
    numero: "08",
    nombre: "Pedagogía y Escuela Museológica",
    descripcion: "Formación, guías pedagógicas y la plataforma de escuela museológica.",
    icono: "graduation",
    documentos: [
      {
        titulo: "Guía Pedagógica Integral",
        archivo: "GUÍA PEDAGÓGICA INTEGRAL.pdf",
        tipo: "PDF",
        tamano: "920 KB",
        descripcion: "Guía integral para el desarrollo de procesos pedagógicos territoriales."
      },
      {
        titulo: "Síntesis de los Módulos — Escuela de Museología",
        archivo: "SINTESIS DE LOS MODULOS PARA LA PLATAFORMA DE ESCUELA DE MUSEOLOGÍA.docx",
        tipo: "DOCX",
        tamano: "32 KB",
        descripcion: "Síntesis de los módulos de la plataforma de escuela de museología."
      }
    ]
  },
  {
    id: "simbolos",
    numero: "09",
    nombre: "Símbolos del Territorio",
    descripcion: "Expresiones simbólicas que representan la identidad pozonera.",
    icono: "music",
    documentos: [
      {
        titulo: "Himno del Pozón",
        archivo: "HIMNO DEL POZÓN.pdf",
        tipo: "PDF",
        tamano: "600 KB",
        descripcion: "Letra y partitura: “El Pozón, tierra de esperanza y sueños”."
      }
    ]
  }
];

export const totalDocumentos = categoriasDocumentos.reduce(
  (acc, cat) => acc + cat.documentos.length,
  0
);