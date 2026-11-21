export interface Eje { t: string; x: string }
export interface Fase { f: string; t: string; x: string }
export interface Recurso { t: string; x: string }
export interface Enlace { href: string; t: string }
export interface Modulo {
    kicker: string; titulo: string; intro: string; h4: string[];
    ejes: Eje[]; fases: Fase[]; recursos: Recurso[];
    sintesis_t: string; sintesis: string; links: Enlace[];
}

export const modulos: Modulo[] = [
    {
        "kicker": "Módulo 01 · Arqueología de la Autoestima",
        "titulo": "Módulo Raíces y Arqueología Profunda",
        "intro": "Este módulo activa la memoria milenaria y el ecosistema de saberes colectivos de El Pozón para cimentar una ciudadanía orgánica en las juventudes. A través de la Pedagogía Decolonial como Arte Vivo, los estudiantes comprenden que El Pozón no nació de la informalidad urbana reciente, sino que es un organismo vivo con capas de historia, biodiversidad y resistencia que respiran desde el suelo arqueológico prehispánico.",
        "h4": [
            "Ejes Temáticos Fundamentales",
            "Ruta de Formación Ciudadana (5 Fases)",
            "Recursos y Activadores Epistémicos"
        ],
        "ejes": [
            {
                "t": "1. El Suelo Ancestral y el Conchero",
                "x": "Sistematización y estudio de los asentamientos precolombinos en la zona estuarina. Evidencia arqueológica de la coexistencia milenaria con el humedal."
            },
            {
                "t": "2. Épica del Poblamiento Popular",
                "x": "Investigación de la autoconstrucción, el relleno solidario del manglar, la gestión comunitaria del agua y la lucha política por el derecho a la ciudad."
            },
            {
                "t": "3. Epistemologías de la Fluidez",
                "x": "Estudio de continuidades afrocaribeñas y afroindígenas. La relación con la ciénaga y los caños mediante pesca tradicional y oralidad de las mayoras."
            }
        ],
        "fases": [
            {
                "f": "Fase 1 · Obtener",
                "t": "Excavando la Identidad",
                "x": "Laboratorios de campo y expediciones sensibles al sitio arqueológico y a los repositorios de la Casa Museo. Cosecha de relatos de origen mediante entrevistas dialógicas a matronas y patriarcas fundadores."
            },
            {
                "f": "Fase 2 · Opinar",
                "t": "La Palabra Decolonial",
                "x": "Círculos de palabra intergeneracionales para debatir sobre la justicia epistémica, el derecho al territorio y cómo la historia milenaria sana las heridas de exclusión urbana (Arqueología de la Autoestima)."
            },
            {
                "f": "Fase 3 · Proponer",
                "t": "Semillas de Futuro",
                "x": "Talleres de ideación y urbanismo orgánico (Design Thinking comunitario) para formular propuestas que integren la ecología del humedal con la memoria histórica (maquetas de espacios públicos, señalética con nombres originarios)."
            },
            {
                "f": "Fase 4 · Gestionar",
                "t": "Guardianes de la Memoria Viva",
                "x": "Acciones colectivas y mingas comunitarias para la limpieza, delimitación y protección de puntos arqueológicos o ambientales críticos. Creación del \"Museo en la Calle\" mediante muralismo de resistencia."
            },
            {
                "f": "Fase 5 · Evaluar",
                "t": "Cosecha de Identidad",
                "x": "Espacio de evaluación narrativa y performativa del cambio ontológico del estudiante. Cierre simbólico con la ExpoFuturo Pozonero itinerante en las plazas del barrio, interpretando el himno local como manifiesto de dignidad."
            }
        ],
        "recursos": [
            {
                "t": "Patrimonio Material y Arqueológico:",
                "x": "Tiestos de cerámica prehispánica, conchas, herramientas de pesca tradicionales y cartografías históricas facilitadas por la Fundación."
            },
            {
                "t": "Bibliotecas Vivas:",
                "x": "\"Mayoras\", sabedores botánicos, pescadores ancestrales, luthieres de la champeta y líderes de las Juntas de Acción Comunal (JAC)."
            },
            {
                "t": "Tecnologías de la Memoria:",
                "x": "Dispositivos móviles para el registro transmedia de las tradiciones orales, alimentando de forma permanente el Archivo Comunitario Vivo (ACV)."
            }
        ],
        "sintesis_t": "Síntesis de Impacto",
        "sintesis": "La juventud se consolida en el nivel de Agencia y Soberanía Territorial. Se reconocen como archivos caminantes para defender su soberanía cultural ante agendas del mundo contemporáneo.",
        "links": [
            {
                "href": "/pdfs/MODELO DE APRENDIZAJE COMUNITARIO ORGÁNICO.pdf",
                "t": "Descargar Guía Pedagógica M1"
            },
            {
                "href": "/galeria",
                "t": "Ver Archivo Vivo"
            }
        ]
    },
    {
        "kicker": "Módulo 02 · Descolonizar la Geografía Urbana",
        "titulo": "Módulo Cartografía de las Memorias",
        "intro": "Si en el primer módulo excavamos el \"disco duro\" milenario de El Pozón, este módulo faculta a las juventudes para actuar como Cartógrafos de lo Invisible. El propósito es eminentemente pedagógico y político: los estudiantes comprenden críticamente que la cartografía oficial y hegemónica de la ciudad a menudo invisibiliza o excluye las realidades de la periferia. Mapear no consiste en trazar líneas frías sobre cemento o asfalto; es un acto de memoria encarnada.",
        "h4": [
            "Ejes Temáticos Fundamentales",
            "Ruta de Formación Ciudadana (5 Fases)",
            "Recursos y Activadores Cartográficos"
        ],
        "ejes": [
            {
                "t": "1. Geografías de la Resistencia",
                "x": "Mapeo crítico de las fronteras invisibles y los hitos fundacionales del barrio. Lugares donde la comunidad libró batallas colectivas por los servicios públicos."
            },
            {
                "t": "2. Biografías Caminantes",
                "x": "Registro de líderes, mayoras, sabedores y artistas cotidianos que moldearon el tejido social. El cuerpo y el testimonio oral como contenedores primarios de la verdad histórica."
            },
            {
                "t": "3. Humedal y Fronteras Bioculturales",
                "x": "Mapeo sensible de la relación simbiótica entre el casco urbano y el ecosistema del agua. El humedal redefinido como un sujeto de derecho y cuidado colectivo."
            }
        ],
        "fases": [
            {
                "f": "Fase 1 · Obtener",
                "t": "Derivas Sensoriales",
                "x": "Expediciones de campo, caminatas sensibles y recorridos de observación con diarios de campo por los sectores del barrio. Registro de los hitos espaciales e infraestructura autoconstruida."
            },
            {
                "f": "Fase 2 · Opinar",
                "t": "El Derecho a ser Nombrados",
                "x": "Círculos de palabra intergeneracionales y foros de pensamiento decolonial. Los estudiantes analizan de qué manera la exclusión cartográfica oficial afecta la autoestima del barrio."
            },
            {
                "f": "Fase 3 · Proponer",
                "t": "El Contra-Mapa del Pozón",
                "x": "Talleres participativos de diseño geo-estratégico. Las juventudes aplican convenciones iconográficas propias y mapas del afecto que visibilizan lo que la cartografía tradicional oculta."
            },
            {
                "f": "Fase 4 · Gestionar",
                "t": "Cartografía en la Calle",
                "x": "Mingas comunitarias con las JAC y colectivos artísticos. Ejecución de murales cartográficos y señalización física de las calles con los nombres de sus fundadores e hitos históricos."
            },
            {
                "f": "Fase 5 · Evaluar",
                "t": "Cosecha de Memorias",
                "x": "Evaluación de apropiación socio-espacial. Los estudiantes sustentan públicamente los contra-mapas e indexan las coordenadas de los hitos en los repositorios virtuales de la Fundación."
            }
        ],
        "recursos": [
            {
                "t": "Cartografía Crítica y Sensible:",
                "x": "Planos satelitales libres, mapas históricos del IGAC desmantelados críticamente, pliegos de papel kraft y paletas de colores basadas en los tonos del territorio."
            },
            {
                "t": "Biotecnologías de la Comunicación:",
                "x": "Dispositivos móviles para el registro sonoro y audiovisual de las entrevistas biográficas, capturando la corporalidad de la memoria caminante."
            },
            {
                "t": "El Archivo Comunitario Vivo (ACV):",
                "x": "Uso estratégico del fondo fotográfico y testimonial del museo para validar históricamente los hitos mapeados y georreferenciados."
            }
        ],
        "sintesis_t": "Síntesis de Impacto",
        "sintesis": "Las juventudes se consagran como Cartógrafos decoloniales de su propia historia. Quedan dotados de competencias para disputar los relatos de exclusión y proyectar con orgullo la geografía biocultural del Pozón.",
        "links": [
            {
                "href": "/nodos-museales",
                "t": "Explorar el Contra-Mapa Virtual"
            },
            {
                "href": "/pedagogia-territorial",
                "t": "Descargar Ficha Metodológica"
            }
        ]
    },
    {
        "kicker": "Módulo 03 · Acuerdos Orgánicos que Germinan",
        "titulo": "Módulo Gobernanza y Paz Territorial",
        "intro": "Tras excavar las raíces (Módulo 1) y trazar los mapas del afecto (Módulo 2), este tercer módulo faculta a las juventudes para asumir su rol político como arquitectos de la paz territorial y gestores de la gobernanza comunitaria. El propósito central es formar liderazgos éticos y críticos que no repliquen las lógicas clientelistas del poder. La escuela se integra como un Ecosistema de Saberes Colectivos.",
        "h4": [
            "Ejes Temáticos Fundamentales",
            "Ruta de Formación Ciudadana (5 Fases)",
            "Recursos y Activadores de Gobernanza"
        ],
        "ejes": [
            {
                "t": "1. Liderazgo Ético y de Base",
                "x": "Liderazgos decoloniales basados en el servicio, la reciprocidad y la ética del cuidado. Revisión histórica de los comités de base y JAC que pavimentaron el barrio."
            },
            {
                "t": "2. Mediación Orgánica",
                "x": "Metodologías situadas para la resolución pacífica de tensiones. El diálogo intergeneracional como tecnología principal para sanar el tejido social."
            },
            {
                "t": "3. Gobernanza del Territorio-Anfibio",
                "x": "Defensa y co-gestión de bienes comunes (caños, manglar, espacios comunitarios). La ciénaga como sujeto de derecho para una administración simétrica."
            }
        ],
        "fases": [
            {
                "f": "Fase 1 · Obtener",
                "t": "Auditorías de Convivencia",
                "x": "Expediciones para identificar tensiones socioambientales y focos de conflicto. Cartografía del riesgo social y mapeo de redes de apoyo comunitarias."
            },
            {
                "f": "Fase 2 · Opinar",
                "t": "Círculos del Sentipensar",
                "x": "Foros y debates decoloniales sobre justicia restaurativa, equidad de género y derechos humanos. Confrontación de visiones hegemónicas de seguridad."
            },
            {
                "f": "Fase 3 · Proponer",
                "t": "Banco de Soluciones Orgánicas",
                "x": "Talleres de co-creación estratégica. Los estudiantes diseñan agendas locales de paz, protocolos comunitarios de mediación y proyectos de innovación social."
            },
            {
                "f": "Fase 4 · Gestionar",
                "t": "Mingas por la Paz y la No-Violencia",
                "x": "Acciones de transformación en articulación con mediadores locales, JAC y colectivos culturales. Recuperación física de esquinas críticas mediante laboratorios artísticos."
            },
            {
                "f": "Fase 5 · Evaluar",
                "t": "Asambleas de Gobernanza Popular",
                "x": "Evaluación auténtica donde las células formativas sustentan públicamente sus pactos de convivencia ante líderes y defensores de derechos humanos."
            }
        ],
        "recursos": [
            {
                "t": "Ecosistema Vivo de Líderes:",
                "x": "Participación de los defensores históricos del territorio y comités de conciliación de las JAC como maestros de la mediación empírica."
            },
            {
                "t": "Dispositivos de Registro:",
                "x": "Herramientas digitales transmedia para documentar pactos, registrar testimonios de paz y resolver conflictos de forma asertiva."
            },
            {
                "t": "Espacios de Mediación:",
                "x": "La Casa Museo Pozón como el epicentro neutral y asambleario de convergencia epistémica, diálogo ético y formación ciudadana."
            }
        ],
        "sintesis_t": "Síntesis de Impacto",
        "sintesis": "Las juventudes alcanzan el nivel avanzado de Agencia y Autonomía Política. Se validan como sujetos de paz con competencias para agenciar el desarrollo endógeno de El Pozón.",
        "links": [
            {
                "href": "/proyectos-sociales",
                "t": "Ver los Pactos de Convivencia"
            },
            {
                "href": "/pedagogia-territorial",
                "t": "Descargar Portafolio Metodológico"
            }
        ]
    },
    {
        "kicker": "Módulo 04 · Soberanía Creativa e Innovación Glocal",
        "titulo": "Módulo Futuros y Proyección Biocultural",
        "intro": "Este módulo final corona el proceso formativo catapultando a las juventudes hacia la Soberanía Creativa y la Proyección Biocultural. Los estudiantes comprenden críticamente que las periferias urbanas no son solo receptoras de ayuda, sino matrices de ciencia comunitaria capaces de exportar soluciones al planeta. Hibridan los saberes tradicionales con herramientas contemporáneas.",
        "h4": [
            "Ejes Temáticos Fundamentales",
            "Ruta de Formación Ciudadana (5 Fases)",
            "Recursos y Activadores Bioculturales"
        ],
        "ejes": [
            {
                "t": "1. Industrias Culturales y Economía Circular",
                "x": "Traducir activos bioculturales (gastronomía, patrimonio sonoro, luthería ecológica) en proyectos sostenibles que generen bienestar sin extractivismo cultural."
            },
            {
                "t": "2. Ecodiseño y Mitigación Climática",
                "x": "Soluciones basadas en la naturaleza empleando el metabolismo circular del barrio: reciclaje de polímeros, permacultura urbana y cuidado de manglares."
            },
            {
                "t": "3. Soberanía Comunicativa Transmedia",
                "x": "Apropiación de podcasts, cortometrajes y cómics afrofuturistas para registrar sus propias visiones de porvenir, rompiendo los discursos estigmatizadores."
            }
        ],
        "fases": [
            {
                "f": "Fase 1 · Obtener",
                "t": "Mapeo de Activos de Innovación",
                "x": "Expediciones etnográficas para identificar las tecnologías de vida y saberes ancestrales con potencial productivo, sostenible o narrativo."
            },
            {
                "f": "Fase 2 · Opinar",
                "t": "Debates de la Justicia Biocultural",
                "x": "Círculos de palabra intergeneracionales para reflexionar sobre los límites éticos del turismo, economía popular y la geopolítica del conocimiento."
            },
            {
                "f": "Fase 3 · Proponer",
                "t": "Codiseño y Maquetación",
                "x": "Talleres interactivos de co-creación donde las células estudiantiles diseñan circuitos de ecoturismo comunitario, permacultura y ecodiseño."
            },
            {
                "f": "Fase 4 · Gestionar",
                "t": "Gran Hito: ExpoFuturo Pozonero",
                "x": "Feria interactiva y museografía expandida en el espacio público. Los estudiantes presentan prototipos, maquetas y stands de saberes a la comunidad y agencias internacionales."
            },
            {
                "f": "Fase 5 · Evaluar",
                "t": "Entrega Soberana del Plan de Futuro",
                "x": "Hito político-pedagógico. Entrega formal de la bitácora de porvenir del Pozón a las JAC y validación del proceso en las asambleas de la Casa Museo."
            }
        ],
        "recursos": [
            {
                "t": "El Archivo Comunitario Vivo (ACV):",
                "x": "Fuente primaria de legitimación histórica que cimenta y valida las visiones de futuro de los estudiantes."
            },
            {
                "t": "Prototipado y Transmedia:",
                "x": "Herramientas digitales, materiales reciclados del barrio, fibras nativas y software libre de edición."
            },
            {
                "t": "Ecosistema Manglar y Patios:",
                "x": "El aula viva definitiva donde se ensayan los pilotos ecológicos y las rutas de ecoturismo popular."
            }
        ],
        "sintesis_t": "Síntesis de Impacto",
        "sintesis": "La juventud se titula en Soberanía Epistémica, Agencia de Futuros y Escalabilidad Global, demostrando que El Pozón es una matriz científica para el porvenir biocultural global.",
        "links": [
            {
                "href": "/revista",
                "t": "Explorar Prototipos y Narrativas ExpoFuturo"
            },
            {
                "href": "/pedagogia-territorial",
                "t": "Descargar Currículo Completo (M1-4)"
            },
            {
                "href": "/#contacto",
                "t": "Contactar y Articular"
            }
        ]
    }
];
