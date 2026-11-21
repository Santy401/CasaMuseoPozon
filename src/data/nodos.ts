export interface Eje { t: string; x: string }
export interface Fase { f: string; t: string; x: string }
export interface Recurso { t: string; x: string }
export interface Enlace { href: string; t: string }
export interface Modulo {
    kicker: string; titulo: string; intro: string; h4: string[];
    ejes: Eje[]; fases: Fase[]; recursos: Recurso[];
    sintesis_t: string; sintesis: string; links: Enlace[];
}

export const nodos: Modulo[] = [
    {
        "kicker": "Nodo 01 · Contra-Mapa y Resistencia",
        "titulo": "Nodo Cartográfico de Memorias Barriales",
        "intro": "“Descolonizando la Geografía Urbana: El Contra-Mapa como Archivo de Dignidad y Resistencia”. Eje Pedagógico: La imagen como documento histórico, el mapa como cuerpo vivo y el archivo audiovisual como la principal tecnología de memoria, verdad y reparación simbólica.",
        "h4": [
            "Ejes Temáticos Fundamentales",
            "Ruta Metodológica (Modelo ACO)",
            "Recursos y Activadores Cartográficos"
        ],
        "ejes": [
            {
                "t": "1. Arqueología de la Imagen",
                "x": "Métodos de recuperación, catalogación, conservación digital y restauración de álbumes fotográficos familiares y archivos comunitarios. Convierte la iconografía popular en el registro documental de El Pozón."
            },
            {
                "t": "2. Geografías de la Resistencia",
                "x": "Investigación y contra-mapeo crítico de hitos fundacionales (faenas de relleno del manglar, primeras escuelas, lucha por servicios públicos), uniendo coordenadas con registros fotográficos y testimoniales."
            },
            {
                "t": "3. El Humedal y las Memorias Vivas",
                "x": "Registro fotográfico y audiovisual de la relación simbiótica entre comunidad, sabedores y ecosistema anfíbio (ciénagas y manglares), consolidando al humedal como sujeto de derecho y dignidad."
            }
        ],
        "fases": [
            {
                "f": "Fase 1 · Recolección",
                "t": "Cacería de Imágenes y Relatos",
                "x": "Expediciones sensibles por el barrio para recuperar fotografías antiguas, videos caseros y testimonios orales de líderes comunitarios."
            },
            {
                "f": "Fase 2 · Curaduría",
                "t": "Círculos de la Imagen y Derecho al Relato",
                "x": "Debates en la Casa Museo sobre la exclusión cartográfica oficial y cómo el archivo fotográfico devuelve la dignidad y la verdad histórica."
            },
            {
                "f": "Fase 3 · Producción",
                "t": "Laboratorios Curatoriales",
                "x": "Talleres participativos de ecodiseño donde las juventudes digitalizan, catalogan y maquetan los contra-mapas y exhibiciones estacionales."
            },
            {
                "f": "Fase 4 · Montaje",
                "t": "Mingas del Archivo y la Calle",
                "x": "Trabajo colectivo para el montaje físico de \"El Pozón en Imágenes\" e intervenciones de muralismo y proyecciones en las esquinas del barrio."
            },
            {
                "f": "Fase 5 · Activación",
                "t": "Cosecha de Memorias Vivas",
                "x": "Apertura pública, evaluación del impacto social de la apropiación visual y carga en el Archivo Comunitario Vivo (ACV)."
            }
        ],
        "recursos": [
            {
                "t": "El Centro Físico de Memoria:",
                "x": "Equipado con escáneres, pantallas de proyección interactiva y galerías fotográficas físicas de la Fundación."
            },
            {
                "t": "Territorio como Negativo:",
                "x": "Planos satelitales y mapas históricos intervenidos que sirven de soporte a derivas de producción."
            },
            {
                "t": "Ecosistema ACV Digital:",
                "x": "Repositorio web interactivo donde se aloja la cartografía hipervinculada a fotos y videos permanentes."
            }
        ],
        "sintesis_t": "Síntesis de Impacto",
        "sintesis": "Las juventudes se consagran como directores, cartógrafos y guardianes de su propia iconografía. Dejan de ser sujetos narrados por otros y defienden activamente su memoria viva.",
        "links": [
            {
                "href": "/galeria",
                "t": "Entrar a la Galería Virtual \"Imágenes y Memorias\""
            },
            {
                "href": "/#recorrido-museal",
                "t": "Explorar Contra-Mapa Interactivo"
            }
        ]
    },
    {
        "kicker": "Nodo 02 · Soberanía Tecnológica",
        "titulo": "Nodo Memoteca Digital Pozonera",
        "intro": "“Memoteca Digital Pozonera: Nodo Digital de Relatos Pozoneros”. Eje Pedagógico: La tecnología como herramienta de soberanía del relato, el software libre como trinchera cultural y la memoria transmedia como el archivo definitivo de la dignidad colectiva.",
        "h4": [
            "Ejes Temáticos Fundamentales",
            "Ruta Metodológica (Modelo ACO)",
            "Recursos y Activadores Tecnológicos"
        ],
        "ejes": [
            {
                "t": "1. Curaduría y Sala Multimedia",
                "x": "Métodos de indexación, catalogación y preservación digital. Los estudiantes operan físicamente la infraestructura de la Sala Multimedia del museo."
            },
            {
                "t": "2. Fonoteca de la Oralidad",
                "x": "Laboratorios de diseño sonoro y podcasts para salvaguardar la oralidad de mayoras, labradores y sabedores sobre el humedal y la autoconstrucción."
            },
            {
                "t": "3. Conectividad y Ecosistema Étnico",
                "x": "Interfaces de software que vinculan el continuo histórico: desde sociedades precolombinas (concheros) hasta resistencias cimarronas del presente."
            }
        ],
        "fases": [
            {
                "f": "Fase 1 · Captura",
                "t": "Captura de Voces y Pixeles",
                "x": "Registro digital móvil en el territorio de la música, el patrimonio vivo de las calles y el inventario biocultural de la huerta."
            },
            {
                "f": "Fase 2 · Filtro",
                "t": "Círculos del Servidor Comunitario",
                "x": "Debates sobre sesgos algorítmicos hegemónicos, la propiedad intelectual de comunidades étnicas y la soberanía del espacio digital."
            },
            {
                "f": "Fase 3 · Edición",
                "t": "Laboratorios de Arquitectura Digital",
                "x": "Talleres de Design Thinking para el codiseño del portal, edición transmedia y postproducción de crónicas sonoras del territorio."
            },
            {
                "f": "Fase 4 · Indexación",
                "t": "Mingas del Servidor y Código Vivo",
                "x": "Carga colectiva de datos, catalogación interactiva y puesta en marcha de terminales de consulta física en el museo."
            },
            {
                "f": "Fase 5 · Difusión",
                "t": "Lanzamiento del Portal Transmedia",
                "x": "Presentación pública oficial de la plataforma a la comunidad y activación de redes académicas para el intercambio epistémico global."
            }
        ],
        "recursos": [
            {
                "t": "Sala Multimedia:",
                "x": "Estaciones con software libre, micrófonos de condensador, escáneres de alta resolución y almacenamiento local."
            },
            {
                "t": "Red de Datos Anfibios:",
                "x": "Códigos QR físicos ubicados en humedales, calles y patios que enlazan con testimonios sonoros directos."
            },
            {
                "t": "Plataforma Web Activa:",
                "x": "Dominio y arquitectura transmedia abierta de casapozonmuseo.org con mapas interactivos y bases de datos."
            }
        ],
        "sintesis_t": "Síntesis de Impacto",
        "sintesis": "Desarrollo de competencias en Soberanía Tecnológica, Agencia Epistémica y Gobernanza de la Información. La comunidad pasa a ser archivista digital soberana de su propia historia.",
        "links": [
            {
                "href": "/revista",
                "t": "Acceder a la Fonoteca de la Oralidad"
            },
            {
                "href": "/.docs/estrategia-digital-alcaldia.md",
                "t": "Explorar Archivo Vivo (ACV)"
            }
        ]
    },
    {
        "kicker": "Nodo 03 · Arte, Cuerpo y Espiral",
        "titulo": "Nodo Laboratorio Creativo Pozonero",
        "intro": "“Laboratorio Creativo Pozonero: Nodo Expresivo de Imaginarios Comunitarios”. Eje Pedagógico: El arte y el folclor como lenguajes de sanación colectiva, el territorio como lienzo anfíbio y las estéticas cimarronas y precolombinas como tecnologías de libertad, origen y memoria viva.",
        "h4": [
            "Ejes Temáticos Fundamentales",
            "Ruta Metodológica (Modelo ACO)",
            "Recursos y Activadores Creativos"
        ],
        "ejes": [
            {
                "t": "1. Artes Manuales y Bisutería Ancestral",
                "x": "Modelado cerámico, plástica y bisutería con enfoque étnico, reinterpretando iconografía precolombina y estéticas afrocaribeñas de la ciénaga."
            },
            {
                "t": "2. Artes Escénicas y Música de Resistencia",
                "x": "Formación en ritmos tradicionales del Caribe, danzas folclóricas y teatro comunitario (tambores afro y vientos) para dirimir conflictos de convivencia."
            },
            {
                "t": "3. Rutas de Resistencia y Ruta del Caracol",
                "x": "Rutas de Escape (lienzo/cimarronaje), Tierras del Manglar (relación anfíbia) y Ruta del Caracol (espiral sagrada de concheros precolombinos) para intercambios locales."
            }
        ],
        "fases": [
            {
                "f": "Fase 1 · Sentir",
                "t": "Derivas del Sentir",
                "x": "Recorridos por las calles para capturar sonidos folclóricos, colores y texturas estuarinas que darán origen a las creaciones plásticas."
            },
            {
                "f": "Fase 2 · Co-crear",
                "t": "Círculos del Imaginario Cimarrón",
                "x": "Encuentros de diálogo crítico en el museo sobre raíces afro e indígenas invisibilizadas, impulsando el autorreconocimiento y la libertad creativa."
            },
            {
                "f": "Fase 3 · Prototipar",
                "t": "Laboratorios del Boceto y Escena",
                "x": "Codiseño de libretos, partituras rítmicas, bosquejos de murales y muestrarios de bisutería de base comunitaria."
            },
            {
                "f": "Fase 4 · Plasmar",
                "t": "Mingas de Color, Ritmo y Asfalto",
                "x": "Trabajo colectivo sobre paredes acordadas con la comunidad (muralismo público, obras en esquinas y ensayos artísticos abiertos)."
            },
            {
                "f": "Fase 5 · Activar",
                "t": "Festival de la Cosecha e Intercambio",
                "x": "Festivales públicos de la Ruta del Caracol, conciertos de ritmos tradicionales e indexación digital de obras en el ACV."
            }
        ],
        "recursos": [
            {
                "t": "Talleres de Co-creación:",
                "x": "Dotados con instrumentos (tambores, silbatos, gaitas), insumos plásticos y galería de exposición permanente."
            },
            {
                "t": "Barrio como Escenario:",
                "x": "Plazas, esquinas de calle y murales autorizados por vecinos para escenificación y disfrute del espacio común."
            },
            {
                "t": "Galería Virtual ACV:",
                "x": "Muestra y catálogo digital de bisutería y arte étnico que financia la operatividad del museo."
            }
        ],
        "sintesis_t": "Síntesis de Impacto",
        "sintesis": "Soberanía Estética, Agencia Creativa y Gobernanza Cultural. Los participantes asumen el rol de artistas, investigadores y gestores de paz territorial.",
        "links": [
            {
                "href": "/pedagogia-territorial",
                "t": "Ver Galería de Obras Pictóricas"
            },
            {
                "href": "/turismo-comunitario",
                "t": "Recorrer la Ruta del Caracol"
            }
        ]
    },
    {
        "kicker": "Nodo 04 · Etnobotánica y Subsistencia",
        "titulo": "Nodo Huerta de la Memoria",
        "intro": "“Cultivando Saberes Ancestrales, Soberanía Alimentaria y Sanación del Tejido Social”. Eje Pedagógico: La tierra como libro abierto, la semilla como archivo genético-cultural y la huerta como aula viva, motor de economía solidaria y pilar de subsistencia institucional.",
        "h4": [
            "Ejes Temáticos Fundamentales",
            "Ruta Metodológica (Modelo ACO)",
            "Recursos y Activadores Agroecológicos"
        ],
        "ejes": [
            {
                "t": "1. Botánica Ancestral y Tecnologías de la Semilla",
                "x": "Rescate, catalogación y siembra de semillas nativas y plantas medicinales/alimentarias. Nutren la Sala del Aliento Ancestral del museo."
            },
            {
                "t": "2. Permacultura y Contra-Mapa de Patios",
                "x": "Identificación, georreferenciación y adiestramiento en diseño ecológico participativo de patios productivos barriales, sanando el ecosistema."
            },
            {
                "t": "3. Recolección y Bio-economía Comunitaria",
                "x": "Canales locales de venta y deshidratado botánico. Eje de economía solidaria para la autonomía financiera de la Fundación."
            }
        ],
        "fases": [
            {
                "f": "Fase 1 · Identificar",
                "t": "Exploración del Suelo",
                "x": "Expediciones etnobotánicas para clasificar patios, catalogar semillas con labradores y recopilar saberes de matronas locales."
            },
            {
                "f": "Fase 2 · Dialogar",
                "t": "Círculos de la Semilla y el Cuidado",
                "x": "Diálogos intergeneracionales en el museo para sentipensar la defensa del territorio, soberanía alimentaria y bioeconomía."
            },
            {
                "f": "Fase 3 · Diseñar",
                "t": "Laboratorios de Ecodiseño",
                "x": "Talleres de codiseño participativo para adecuar la huerta del museo, semilleros y tienda, y organizar los protocolos del Aliento Ancestral."
            },
            {
                "f": "Fase 4 · Sembrar",
                "t": "Mingas de la Tierra Vivas",
                "x": "Construcción comunitaria de la huerta interna del museo y habilitación productiva de los patios barriales satélites."
            },
            {
                "f": "Fase 5 · Comercializar",
                "t": "Cosecha, Sustentabilidad y Memoria",
                "x": "Puesta en marcha del nodo comercial (venta de semillas y productos) y evaluación narrativa de la autonomía institucional."
            }
        ],
        "recursos": [
            {
                "t": "Infraestructura Viva del Museo:",
                "x": "Espacios de siembra, germoplasma (semillas), deshidratador botánico y tienda solidaria."
            },
            {
                "t": "Red de Patios Productivos:",
                "x": "Parcelas familiares aliadas en El Pozón que operan como guardianes activos del suelo."
            },
            {
                "t": "Archivo ACV Digital:",
                "x": "Catálogo transmedia para mapear patios, ofrecer semillas orgánicas y resguardar la memoria botánica."
            }
        ],
        "sintesis_t": "Síntesis de Impacto",
        "sintesis": "Agencia Económica, Soberanía Alimentaria y Gobernanza Ambiental. La Fundación opera como un ecosistema autónomo y sostenible desde la periferia.",
        "links": [
            {
                "href": "/como-apoyar",
                "t": "Consultar Banco de Semillas Ancestrales"
            },
            {
                "href": "/quienes-somos",
                "t": "Conocer Experiencia Aliento Ancestral"
            },
            {
                "href": "/#contacto",
                "t": "Contactar y Articular"
            }
        ]
    }
];
