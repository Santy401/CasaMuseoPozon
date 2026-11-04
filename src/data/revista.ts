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
    slug: "angeles-somos-desde-los-barrios",
    titulo: "Ángeles Somos: el cielo también se sueña desde los barrios",
    fecha: "01 Noviembre 2026",
    categoria: "Memoria Viva",
    autor: {
      nombre: "Redacción Revista El Pozón",
      invitado: false,
      bio: "Redacción de la Revista El Pozón, plataforma comunitaria de difusión e identidad de la Fundación Casa Museo Pozón."
    },
    youtubeUrl: "https://www.youtube.com/shorts/BN_WSws7OQI",
    extracto: "Cada primero de noviembre la costa caribe se llena de voces infantiles que preguntan «¿hay ángeles para el cielo?». Una tradición que nació en Getsemaní y que en barrios como El Pozón encontró su propia forma de resistencia: compartir lo que hay para que a nadie le falte fiesta.",
    contenido: `
      <p class="text-lg font-light leading-relaxed mb-8">Hay preguntas que no se responden con palabras: se responden abriendo una puerta. «¿Hay ángeles para el cielo?», preguntan los niños y las niñas cada primero de noviembre, y en esa pregunta cabe una tradición entera hecha de cantos, de ollas que humean y de vecinos que se reconocen.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">La canción que abre las puertas</h3>
      <p class="font-light leading-relaxed mb-6">«Ángeles somos, del cielo venimos, pidiendo limosna para nosotros». La copla se escucha desde los patios y se riega por las calles. Detrás de ella caminan los ángeles del barrio: niños con alas de cartón, coronas de papel y vestidos improvisados con sábanas y retazos. No son ángeles de mármol ni de vitrina. Son ángeles de tierra, de risa suelta y de zapatos polvorientos.</p>
      <p class="font-light leading-relaxed mb-6">Lo que comenzó como una ronda de limosna se transformó, con el tiempo, en una fiesta de compartir. Cada casa aporta lo que puede: un plato de arroz, yuca, plátano, un poco de queso, dulces hechos en la cocina. Nada sobra y nada falta cuando la comunidad pone la mesa.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">Una memoria que llegó de lejos</h3>
      <p class="font-light leading-relaxed mb-6">La tradición tiene raíces reconocidas en Getsemaní, ese barrio cartagenero donde el pueblo aprendió a convertir la escasez en celebración. Con los años, y con las familias que llegaron a los barrios populares buscando un lugar para vivir, la costumbre viajó con ellas. Se guardó en la memoria de las abuelas, en el sonsonete de las coplas y en las manos que cosían alas con lo que hubiera.</p>
      <p class="font-light leading-relaxed mb-6">En El Pozón no se copió la fiesta: se recreó. Porque una tradición que llega a un territorio nuevo no pide permiso: se mezcla con el agua de la ciénaga, con el acento del barrio y con la manera propia de resistir. Así, la limosna se volvió convite y el convite se volvió tejido social.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">El primer cielo del Pozón</h3>
      <p class="font-light leading-relaxed mb-6">Cuentan —y esta es una historia recreada, como se recrean las memorias de barrio: con la verdad de muchas voces y la libertad de quien la cuenta— que doña Elvira llegó al Pozón con tres hijos y un baúl donde guardaba un vestido blanco que ya nadie usaba. En noviembre de aquel primer año, las calles todavía eran arena y charcos, y los niños no conocían la canción.</p>
      <p class="font-light leading-relaxed mb-6">Ella los reunió bajo un almendro y les enseñó la copla. No había azúcar para darles, así que puso una olla grande al fuego con lo que tenía: yuca, ñame y un pedazo de plátano. Los vecinos, al escuchar el canto, fueron saliendo con lo que había en sus cocinas. Uno trajo arroz, otra un poco de coco, alguien apareció con una tambora vieja. Esa tarde, los ángeles de cartón recorrieron el barrio y volvieron con las canastas llenas de comida y de vecindad.</p>
      <p class="font-light leading-relaxed mb-6">Al caer la noche se repartió el sancocho en hojas de bijao y en platos prestados. Nadie preguntó quién había traído más y quién menos. Esa noche, cuenta la historia, en El Pozón nadie fue pobre: todo se compartió y todo alcanzó.</p>

      <blockquote class="border-l-4 border-museum-gold pl-8 py-4 my-12 bg-museum-cream/50 rounded-r-2xl">
        <p class="text-xl font-display italic text-museum-dark/80">"Los ángeles no bajaron del cielo: se levantaron del barrio, con alas de cartón y el corazón lleno de vecindad."</p>
        <footer class="text-xs font-bold tracking-widest uppercase text-museum-gold mt-4">— Revista El Pozón</footer>
      </blockquote>

      <h3 class="text-2xl font-display text-museum-dark mb-6">Una casa que abre sus puertas</h3>
      <p class="font-light leading-relaxed mb-6">Hoy la Casa Museo Pozón es uno de esos patios donde la fiesta se vuelve a vivir. Cada noviembre sus espacios se llenan de voces, disfraces y música; las familias llegan con sus canastas y la memoria se hace presente en cada canto. No se trata de exhibir la tradición como una pieza de museo, sino de sostenerla viva, con las manos y con la mesa compartida.</p>
      <p class="font-light leading-relaxed mb-6">Por eso la Casa Museo celebra estas festividades: porque en ellas se reconoce la fuerza de un territorio que, aun con las dificultades, no ha dejado de inventar formas de encontrarse. Ángeles Somos no es solo una fecha: es una manera de decir que la solidaridad también es patrimonio.</p>

      <p class="font-light leading-relaxed mb-6">Que no se apague nunca esa pregunta en las puertas. Que los niños sigan saliendo con sus alas de cartón y que las ollas sigan humeando para todos. Que El Pozón siga soñando su cielo desde el barrio, con la certeza de que la fiesta más hermosa es la que se comparte.</p>

      <p class="font-light leading-relaxed">Y cuando alguien pregunte si hay ángeles para el cielo, que la respuesta sea siempre la misma: sí, aquí están. Son los del barrio. Son los nuestros.</p>
    `,
    imagen: "/imagenes/angeles-somos-portada.jpg",
    etiquetas: ["Ángeles Somos", "tradición", "El Pozón", "memoria viva", "Getsemaní", "comunidad"]
  },
  {
    slug: "dia-internacional-de-los-museos-memoria-viva",
    titulo: "Día Internacional de los Museos: La Memoria Viva que Late en El Pozón",
    fecha: "17 Mayo 2026",
    categoria: "Memoria Viva",
    autor: {
      nombre: "Casa Museo Pozón",
      invitado: false,
      bio: "Fundación Casa Museo del Pozón, Cartagena de Indias. Revitalizamos, preservamos y promovemos el patrimonio cultural, histórico y biocultural del territorio pozonero."
    },
    youtubeUrl: "https://youtu.be/7Yo_je8ZTPk?feature=shared",
    extracto: "En el Día Internacional de los Museos, celebramos a nuestra Casa Museo no como un simple edificio, sino como un ser vivo que custodia la memoria colectiva y la identidad del territorio pozonero.",
    contenido: `
      <p class="text-lg font-light leading-relaxed mb-8">El viaje comienza aquí. Hay lugares en el mundo donde el tiempo no pasa, sino que se resguarda. Sitios donde el silencio habla, las paredes susurran secretos de otras épocas y el arte se convierte en el lenguaje universal del alma. Hoy, en el Día Internacional de los Museos, queremos celebrar ese milagro con nuestra comunidad.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">Un Ser Vivo que Late con la Comunidad</h3>
      <p class="font-light leading-relaxed mb-6">Nuestra Casa Museo no es solo un edificio de muros firmes y salas ordenadas; es un ser vivo que late con la memoria de la gente y del territorio. Es un cofre donde cada objeto, cada cuadro y cada rincón custodian un fragmento de lo que fuimos, una respuesta a lo que somos y una pregunta abierta hacia lo que seremos.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">El Poder de la Pausa</h3>
      <p class="font-light leading-relaxed mb-6">Vivimos en un mundo que corre de prisa, pero los espacios museales comunitarios tienen un superpoder: el don de la pausa. Esta pausa nos invita a detener el tiempo, a escuchar con el corazón y a mirar el pasado para reflexionar sobre nuestro presente y construir colectivamente el futuro de nuestro barrio.</p>

      <blockquote class="border-l-4 border-museum-gold pl-8 py-4 my-12 bg-museum-cream/50 rounded-r-2xl">
        <p class="text-xl font-display italic text-museum-dark/80">"Ven a contemplar, a sentir y a encontrarte. Recorrer un museo comunitario es una forma de descubrirnos a nosotros mismos a través de la mirada de los demás."</p>
        <footer class="text-xs font-bold tracking-widest uppercase text-museum-gold mt-4">— Casa Museo Pozón</footer>
      </blockquote>

      <p class="font-light leading-relaxed">Te invitamos a ver nuestro video conmemorativo y a sumergirte en esta experiencia de identidad, arte y memoria territorial. ¡Feliz Día Internacional de los Museos!</p>
    `,
    imagen: "https://i.ytimg.com/vi/7Yo_je8ZTPk/hqdefault.jpg",
    etiquetas: ["Día de los Museos", "memoria viva", "patrimonio", "comunidad", "El Pozón"]
  },
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
    youtubeUrl: "https://www.youtube.com/watch?v=Q1BJFgH5OAk",
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
  },
  {
    slug: "el-pozon-memoria-y-territorio",
    titulo: "El Pozón: Memoria y Territorio",
    fecha: "18 Agosto 2026",
    categoria: "Memoria Viva",
    autor: {
      nombre: "Casa Museo Pozón",
      invitado: false,
      bio: "Fundación Casa Museo del Pozón, Cartagena de Indias. Revitalizamos, preservamos y promovemos el patrimonio cultural, histórico y biocultural del territorio pozonero."
    },
    youtubeUrl: "https://youtu.be/eb47cRvxvow?si=b-EWZeI0seXHT6ot",
    extracto: "Un recorrido por la memoria viva de El Pozón, explorando la identidad, el patrimonio y la resistencia cultural de este territorio cartagenero.",
    contenido: `
      <p class="text-lg font-light leading-relaxed mb-8">El Pozón es mucho más que un barrio en la periferia de Cartagena. Es un territorio donde la memoria se respira en cada calle, donde la identidad se construye colectivamente y donde la resistencia cultural se manifiesta en cada gesto de su gente.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">Un Territorio de Memoria</h3>
      <p class="font-light leading-relaxed mb-6">En este recorrido visual y sonoro, descubrimos cómo la memoria viva de El Pozón se mantiene a través de las generaciones. Cada rincón guarda historias de lucha, de alegría y de una comunidad que se niega a ser olvidada.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6">Patrimonio Vivo</h3>
      <p class="font-light leading-relaxed mb-6">El patrimonio de El Pozón no está encerrado en vitrinas: está en las voces de los abuelos, en las manos de las artesanas, en los ritmos que accompagnan la vida cotidiana. Este es un museo vivo, donde la historia se narra y se vive cada día.</p>

      <blockquote class="border-l-4 border-museum-gold pl-8 py-4 my-12 bg-museum-cream/50 rounded-r-2xl">
        <p class="text-xl font-display italic text-museum-dark/80">"La memoria no es cosa del pasado: es una fuerza viva que nos impulsa hacia el futuro."</p>
        <footer class="text-xs font-bold tracking-widest uppercase text-museum-gold mt-4">— Casa Museo Pozón</footer>
      </blockquote>

      <p class="font-light leading-relaxed">Te invitamos a mirar este video y a sumergirte en la experiencia de El Pozón: un territorio donde la memoria, la identidad y la cultura se entrelazan para construir un futuro con dignidad.</p>
    `,
    imagen: "https://i.ytimg.com/vi/eb47cRvxvow/hqdefault.jpg",
    etiquetas: ["memoria viva", "territorio", "identidad", "patrimonio", "El Pozón"]
  },
  {
    slug: "teoria-aco-etnoapropiacion-cultural-foro-etnoeducativo",
    titulo: "El territorio como cuerpo vivo: La Teoría A.C.O. y su brazo operativo en la etnoapropiación cultural",
    fecha: "2026",
    categoria: "Voces del Territorio",
    autor: {
      nombre: "Redacción Revista El Pozón",
      invitado: false,
      bio: "Redacción de la Revista El Pozón, plataforma comunitaria de difusión e identidad de la Fundación Casa Museo Pozón."
    },
    youtubeUrl: "https://youtu.be/fzs5KQxecVk?si=KeFuhnOr848FuibC",
    extracto: "En el marco del III Foro Etnoeducativo Institucional, la Fundación Casa Museo Pozón planteó que el territorio no es un escenario geográfico neutro, sino un sujeto histórico activo y un cuerpo vivo que salvaguarda la memoria colectiva.",
    contenido: `
      <p class="text-lg font-light leading-relaxed mb-8">En el marco del III Foro Etnoeducativo Institucional, celebrado en el Auditorio de la Fundación Universitaria Los Libertadores en Cartagena, el debate sobre el devenir pedagógico y político de las comunidades afrocolombianas cobró una dimensión urgente y transformadora. Bajo la consigna <em>"Educar desde nuestras raíces: fortalecemos nuestra identidad y transformamos el territorio"</em>, el encuentro reunió a educadores, sabedores y líderes para evaluar el impacto de la Ley 70 de 1993 en la educación pública.</p>

      <p class="font-light leading-relaxed mb-8">Durante este espacio de diálogo, la intervención de la Fundación Casa Museo Pozón planteó una premisa central: el territorio no es un escenario geográfico neutro, sino un sujeto histórico activo y un cuerpo vivo que salvaguarda la memoria colectiva.</p>

      <!-- Galería del Foro -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
        <div class="rounded-[2rem] overflow-hidden shadow-2xl">
          <img src="/foro1.jpeg" alt="III Foro Etnoeducativo Institucional - Participantes" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div class="rounded-[2rem] overflow-hidden shadow-2xl">
          <img src="/foro2.jpeg" alt="III Foro Etnoeducativo Institucional - Intervención" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      <h3 class="text-2xl font-display text-museum-dark mb-6">1. El territorio como contenedor y tejido de memoria viva</h3>
      <p class="font-light leading-relaxed mb-6">Transitar por las calles de El Pozón exige entender la memoria más allá de los archivos formales. En las comunidades populares y de ascendencia afrodescendiente, la memoria habita en la arquitectura de la autogestión, en la tradición oral de las matronas y en la resistencia cotidiana de sus pobladores.</p>
      <p class="font-light leading-relaxed mb-6">Las calles, caños y plazas son palimpsestos donde se han grabado las luchas por la dignidad territorial y el reconocimiento étnico. Desvincular la educación de la historia del suelo que se pisa genera desarraigo. Por ello, la memoria territorial se convierte en la primera línea de defensa frente a la estigmatización y la invisibilización de las identidades populares.</p>

      <h3 class="text-2xl font-display text-museum-dark mb-6 mt-12">2. La Teoría Pedagógica A.C.O. y su modelo operativo</h3>
      <p class="font-light leading-relaxed mb-6">Para convertir esta memoria en una herramienta pedagógica efectiva, se requiere un marco estructurado. En el foro se argumentó cómo la Teoría Pedagógica del Aprendizaje Comunitario Orgánico se erige como el faro epistémico que orienta la apropiación cultural, concibiendo el conocimiento no como una abstracción impuesta, sino como un flujo vivo que emana de las dinámicas comunitarias.</p>
      <p class="font-light leading-relaxed mb-6">Es aquí donde el Modelo de Aprendizaje Comunitario Orgánico (Modelo A.C.O.) cobra protagonismo al constituirse como la parte operativa y metodológica de dicha teoría:</p>

      <div class="bg-museum-cream/50 rounded-[2rem] p-8 my-8 border border-museum-gold/10">
        <ul class="space-y-4">
          <li class="flex items-start gap-4">
            <span class="w-2 h-2 rounded-full bg-museum-gold mt-2 flex-shrink-0"></span>
            <span><strong>Traducción metodológica:</strong> El Modelo A.C.O. aterriza los principios teóricos en herramientas concretas: cartografías sociales, itinerarios de memoria y dinámicas de aula abierta donde el barrio es el texto principal.</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="w-2 h-2 rounded-full bg-museum-gold mt-2 flex-shrink-0"></span>
            <span><strong>Etnoapropiación en la práctica:</strong> Pone en marcha estrategias para que niños y jóvenes no solo reciban la historia como un relato folclórico, sino que la usen de forma crítica para reafirmar su identidad.</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="w-2 h-2 rounded-full bg-museum-gold mt-2 flex-shrink-0"></span>
            <span><strong>Acción transformadora:</strong> Operativiza el aprendizaje para que retorne a la comunidad en soluciones socioambientales y fortalecimiento del tejido social.</span>
          </li>
        </ul>
      </div>

      <h3 class="text-2xl font-display text-museum-dark mb-6 mt-12">3. Hacia una justicia etnoeducativa territorial</h3>
      <p class="font-light leading-relaxed mb-6">La articulación entre las instituciones educativas y los espacios de memoria comunitaria demuestra que la etnoeducación debe desbordar las aulas. Al conectar las "Bibliotecas Humanas" con la operatividad del Modelo A.C.O., el proceso formativo recupera su carácter orgánico.</p>

      <blockquote class="border-l-4 border-museum-gold pl-8 py-4 my-12 bg-museum-cream/50 rounded-r-2xl">
        <p class="text-xl font-display italic text-museum-dark/80">"Al asumir la Teoría del Aprendizaje Comunitario Orgánico como guía y su modelo operativo como motor práctico, la comunidad de El Pozón reafirma que defender la memoria del territorio es la vía directa para sembrar soberanía cultural y dignidad socioeducativa."</p>
        <footer class="text-xs font-bold tracking-widest uppercase text-museum-gold mt-4">— Fundación Casa Museo Pozón</footer>
      </blockquote>
    `,
    imagen: "/foro1.jpeg",
    etiquetas: ["foro etnoeducativo", "teoría A.C.O.", "etnoapropiación", "territorio", "memoria viva", "Ley 70"]
  }
];
