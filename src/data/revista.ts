export interface AutorRevista {
  nombre: string;
  invitado: boolean;
  bio: string;
}

export interface ArticuloRevista {
  slug: string;
  titulo: string;
  fecha: string;
  categoria: "Memoria Viva" | "Voces del Territorio" | "Turismo Comunitario" | "Patrimonio";
  autor: AutorRevista;
  youtubeUrl?: string;
  extracto: string;
  contenido: string;
  imagen?: string;
  etiquetas: string[];
}

export interface EdicionRevista {
  numero: number;
  titulo: string;
  fecha: string;
  descripcion: string;
  pdfUrl?: string;
  portada?: string;
}

export const ediciones: EdicionRevista[] = [
  {
    numero: 1,
    titulo: "Memoria Ancestral y Territorio",
    fecha: "Mayo 2026",
    descripcion: "En esta primera edición exploramos las raíces profundas de El Pozón: la prospección arqueológica en La Islita, el museo vivo como herramienta de identidad, y las voces que construyen el tejido cultural del territorio.",
    pdfUrl: undefined
  }
];

export const ultimaEdicion = ediciones[0];

export interface CategoriaRevista {
  id: string;
  nombre: string;
  descripcion: string;
}

export const categorias: CategoriaRevista[] = [
  {
    id: "Memoria Viva",
    nombre: "Memoria Viva",
    descripcion: "Crónicas de la historia y memoria del territorio"
  },
  {
    id: "Voces del Territorio",
    nombre: "Voces del Territorio",
    descripcion: "Columnas de líderes y talentos locales"
  },
  {
    id: "Turismo Comunitario",
    nombre: "Turismo Comunitario",
    descripcion: "Rutas, experiencias y turismo pedagógico"
  },
  {
    id: "Patrimonio",
    nombre: "Patrimonio",
    descripcion: "Arqueología, patrimonio cultural y biocultural"
  }
];

export const articulos: ArticuloRevista[] = [
  {
    slug: "prospeccion-arqueologica-en-el-pozon",
    titulo: "Prospección Arqueológica en El Pozón: La Memoria Bajo Nuestros Pies",
    fecha: "13 Mayo 2026",
    categoria: "Patrimonio",
    autor: {
      nombre: "Casa Museo Pozón",
      invitado: false,
      bio: "Fundación Casa Museo del Pozón, Cartagena de Indias. Revitalizamos, preservamos y promovemos el patrimonio cultural, histórico y biocultural del territorio pozonero."
    },
    youtubeUrl: "https://www.youtube.com/watch?v=46eaYp6t_mI",
    extracto: "Un equipo de arqueólogos liderado por la Dra. Diana Carvajal realiza excavaciones controladas en el sector de La Islita para estudiar los concheros y revelar la ocupación humana histórica del territorio pozonero.",
    contenido: `
      <p class="text-lg font-light leading-relaxed mb-8">El barrio El Pozón guarda bajo sus pies una historia que antecede a la Cartagena colonial. Una historia escrita en conchas, sedimentos y estratos que un equipo de arqueólogos ha comenzado a desenterrar en el sector de La Islita.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">La Intervención Arqueológica</h3>
      <p class="font-light leading-relaxed mb-6">Bajo la dirección de la arqueóloga <strong>Dra. Diana Carvajal</strong>, junto a Elizabeth y su equipo técnico, se llevaron a cabo excavaciones controladas de un metro por un metro. Cada capa de tierra removida es una página del libro de la memoria profunda del territorio. El análisis de los niveles del suelo y el estudio de los estratos permite reconstruir las formas de vida de quienes habitaron esta ribera de la Ciénaga de la Virgen mucho antes de que existiera la ciudad amurallada.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">Los Concheros: Testigos Silenciosos</h3>
      <p class="font-light leading-relaxed mb-6">El objetivo central de la prospección es identificar y estudiar los <strong>concheros</strong>: depósitos milenarios de moluscos y otros restos de consumo humano que funcionan como verdaderas cápsulas del tiempo. Estos montículos de conchas, fragmentos de cerámica y carbón vegetal revelan patrones de alimentación, herramientas y relaciones de las comunidades ancestrales con su entorno. Las características del suelo cuentan la historia de una ocupación humana continua que se remonta a siglos atrás.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">Reconocimiento Oficial</h3>
      <p class="font-light leading-relaxed mb-6">Desde el año <strong>2002</strong>, este sitio está formalmente reconocido como zona arqueológica por las autoridades competentes. Sin embargo, durante más de dos décadas, este reconocimiento ha permanecido en gran medida desconocido para los propios habitantes del barrio. La actual intervención busca no solo generar conocimiento científico, sino también <strong>visibilizar este legado</strong> ante la comunidad y ante Cartagena.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">Apropiación Comunitaria de la Memoria</h3>
      <p class="font-light leading-relaxed mb-8">Más allá de la ciencia, este proyecto tiene un propósito profundamente social y cultural. Busca que la comunidad de El Pozón se apropie de su historia profunda, que reconozca el valor arqueológico de su territorio como un elemento de <strong>identidad, pertenencia y orgullo</strong>. En una ciudad que históricamente ha marginado a los barrios populares, revelar que El Pozón es depositario de un patrimonio milenario es un acto de dignificación. Es decirle a Cartagena y al mundo: aquí también hay historia, aquí también hay memoria, y esta memoria es viva.</p>

      <blockquote class="border-l-4 border-museum-gold pl-8 py-4 my-12 bg-museum-cream/50 rounded-r-2xl">
        <p class="text-xl font-display italic text-museum-dark/80">"Que la comunidad se apropie de su historia profunda, que reconozca el valor arqueológico de su territorio como un elemento de identidad, pertenencia y orgullo."</p>
        <footer class="text-xs font-bold tracking-widest uppercase text-museum-gold mt-4">— Dra. Diana Carvajal, arqueóloga</footer>
      </blockquote>

      <p class="font-light leading-relaxed">Esta prospección arqueológica es un recordatorio de que la memoria no está solo en los documentos ni en los relatos orales: también está bajo nuestros pies, esperando ser descubierta. La Casa Museo Pozón celebra y acompaña estos esfuerzos por recuperar el pasado para construir un futuro con identidad y dignidad.</p>
    `,
    imagen: "",
    etiquetas: ["arqueología", "concheros", "La Islita", "prospección", "patrimonio", "memoria ancestral"]
  },
  {
    slug: "el-pozon-museo-vivo-de-memoria-ancestral",
    titulo: "El Pozón: Museo Vivo de Memoria Ancestral",
    fecha: "10 Mayo 2026",
    categoria: "Memoria Viva",
    autor: {
      nombre: "Rigoberto Castro Pérez",
      invitado: false,
      bio: "Representante Legal y Director Ejecutivo de la Fundación Casa Museo del Pozón. Historiador, investigador territorial y arquitecto del Modelo Museal Turístico Territorial."
    },
    youtubeUrl: "https://youtu.be/WYitZwv2XzA",
    extracto: "Un recorrido por la memoria viva de El Pozón, donde cada rincón del barrio cuenta una historia de resistencia, identidad y dignidad cultural.",
    contenido: `
      <p class="text-lg font-light leading-relaxed mb-8">El Pozón no es solo un barrio en la periferia de Cartagena. Es un territorio de memoria, un museo vivo donde cada esquina, cada calle, cada rostro cuenta una historia de resistencia y dignidad.</p>

      <p class="font-light leading-relaxed mb-6">Desde la Fundación Casa Museo del Pozón, hemos emprendido el camino de reconocer y visibilizar ese patrimonio que habita en la cotidianidad de nuestra gente. No necesitamos vitrinas ni edificios imponentes: nuestro museo está en la memoria de los abuelos que recuerdan la ciénaga cuando era manglar, en las manos de las mujeres que tejen la tradición, en los jóvenes que recuperan la palabra ancestral.</p>

      <p class="font-light leading-relaxed mb-6">Este artículo es una invitación a caminar El Pozón con otros ojos. A descubrir que la memoria no es cosa del pasado: es una fuerza viva que nos impulsa hacia el futuro.</p>
    `,
    imagen: "",
    etiquetas: ["memoria viva", "identidad", "museo comunitario", "territorio"]
  }
];
