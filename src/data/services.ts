import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "cctv",
    name: "Sistemas CCTV",
    shortName: "CCTV",
    category: "Seguridad electrónica",
    summary:
      "Diseño e instalación de circuitos cerrados de televisión para vigilancia perimetral e interior, con grabación redundante y monitoreo remoto.",
    heroDescription:
      "Circuitos cerrados de televisión de nivel empresarial: cámaras de alta resolución, almacenamiento redundante y monitoreo remoto en tiempo real, diseñados para instalaciones industriales, comerciales y organismos públicos.",
    icon: "camera",
    benefits: [
      { title: "Cobertura sin puntos ciegos", description: "Estudio de campos de visión y ubicación de cámaras para eliminar zonas muertas en el perímetro y áreas críticas." },
      { title: "Grabación redundante", description: "Almacenamiento en NVR local y respaldo en la nube, con retención configurable según normativa y criticidad." },
      { title: "Monitoreo remoto 24/7", description: "Acceso seguro desde cualquier dispositivo con roles y permisos diferenciados por usuario." },
      { title: "Evidencia con validez legal", description: "Sellado de tiempo, marca de agua y cadena de custodia digital para uso en investigaciones." },
    ],
    process: [
      { title: "Levantamiento técnico", description: "Visita a terreno, medición de distancias, análisis de iluminación y definición de puntos críticos." },
      { title: "Ingeniería de proyecto", description: "Diseño del layout de cámaras, cálculo de ancho de banda y dimensionamiento de almacenamiento." },
      { title: "Instalación certificada", description: "Cableado, montaje y configuración por técnicos certificados, con pruebas de cada cámara." },
      { title: "Puesta en marcha", description: "Configuración de grabación, alertas y accesos remotos, con capacitación al equipo del cliente." },
      { title: "Mantención programada", description: "Visitas periódicas de verificación, limpieza y actualización de firmware." },
    ],
    technologies: ["Hikvision", "Axis Communications", "Dahua", "Hanwha Vision", "NVR/VMS", "PoE+"],
    faqs: [
      { question: "¿Qué resolución de cámara recomiendan para exteriores?", answer: "Dependiendo de la distancia y el uso, trabajamos habitualmente con sensores de 4MP a 8MP con rango dinámico amplio (WDR) para exteriores con alto contraste de luz." },
      { question: "¿El sistema queda integrado con control de acceso?", answer: "Sí, nuestras instalaciones de CCTV pueden integrarse con control de acceso y videovigilancia inteligente sobre una misma plataforma de gestión." },
      { question: "¿Cuánto tiempo se retiene la grabación?", answer: "Configuramos la retención según los requisitos del cliente y la normativa aplicable, típicamente entre 15 y 90 días en grabación continua." },
    ],
    relatedSlugs: ["videovigilancia-inteligente", "control-acceso", "redes"],
  },
  {
    slug: "videovigilancia-inteligente",
    name: "Videovigilancia Inteligente",
    shortName: "Videovigilancia IA",
    category: "Seguridad electrónica",
    summary:
      "Analítica de video con inteligencia artificial: reconocimiento de patentes, detección perimetral, conteo de personas y alertas automáticas.",
    heroDescription:
      "Analítica de video con inteligencia artificial aplicada a seguridad y operación: detección de intrusión, reconocimiento de patentes, conteo de aforo y alertas automáticas que reducen el tiempo de respuesta.",
    icon: "scan",
    benefits: [
      { title: "Menos falsas alarmas", description: "Algoritmos de deep learning que distinguen personas y vehículos de ruido ambiental como hojas o animales." },
      { title: "Respuesta proactiva", description: "Alertas en tiempo real a supervisión y guardias ante eventos definidos, antes de que ocurra el incidente." },
      { title: "Datos para el negocio", description: "Métricas de aforo, flujos y tiempos de permanencia útiles para operaciones y retail." },
      { title: "Escalable por software", description: "Nuevas capacidades de analítica se activan sobre la misma cámara sin reemplazar hardware." },
    ],
    process: [
      { title: "Definición de casos de uso", description: "Identificación de los eventos críticos a detectar: intrusión, aglomeración, objetos abandonados, patentes." },
      { title: "Selección de plataforma", description: "Elección de motor de analítica edge o en servidor según volumen de cámaras y presupuesto." },
      { title: "Calibración de escenas", description: "Configuración de líneas virtuales, zonas de interés y umbrales de sensibilidad por cámara." },
      { title: "Integración de alertas", description: "Conexión con central de monitoreo, correo, WhatsApp o plataforma de gestión de incidentes." },
      { title: "Ajuste continuo", description: "Revisión de precisión y afinamiento de reglas durante las primeras semanas de operación." },
    ],
    technologies: ["Milestone XProtect", "Hanwha Wisenet AI", "Deep learning edge", "LPR/ANPR", "BriefCam"],
    faqs: [
      { question: "¿Necesito cámaras nuevas para tener analítica IA?", answer: "En muchos casos es posible incorporar analítica sobre cámaras existentes mediante procesamiento en servidor; para máxima precisión recomendamos cámaras con IA embebida." },
      { question: "¿Puede reconocer patentes de vehículos?", answer: "Sí, implementamos reconocimiento de patentes (LPR/ANPR) para control de accesos vehiculares y listas negras o blancas." },
      { question: "¿Qué tan preciso es el conteo de personas?", answer: "Con una calibración adecuada de altura y ángulo de cámara, la precisión de conteo supera el 95% en la mayoría de los escenarios." },
    ],
    relatedSlugs: ["cctv", "control-acceso", "automatizacion"],
  },
  {
    slug: "redes",
    name: "Redes LAN y WAN",
    shortName: "Redes LAN/WAN",
    category: "Infraestructura TI",
    summary:
      "Diseño, implementación y segmentación de redes corporativas de alto desempeño, con alta disponibilidad y seguridad perimetral.",
    heroDescription:
      "Redes corporativas diseñadas para desempeño, seguridad y crecimiento: segmentación por VLAN, enlaces redundantes y visibilidad completa del tráfico entre sedes.",
    icon: "network",
    benefits: [
      { title: "Alta disponibilidad", description: "Diseño redundante en núcleo y enlaces WAN para eliminar puntos únicos de falla." },
      { title: "Segmentación y seguridad", description: "VLANs, firewalls perimetrales y políticas de acceso alineadas a buenas prácticas de ciberseguridad." },
      { title: "Visibilidad total", description: "Monitoreo de ancho de banda, latencia y dispositivos conectados desde un panel centralizado." },
      { title: "Preparada para crecer", description: "Arquitectura documentada y dimensionada para nuevas sedes o aumento de usuarios." },
    ],
    process: [
      { title: "Diagnóstico de red actual", description: "Auditoría de topología, cableado, equipos activos y puntos de congestión." },
      { title: "Diseño de arquitectura", description: "Definición de VLANs, enrutamiento, redundancia y política de seguridad perimetral." },
      { title: "Implementación por etapas", description: "Despliegue programado fuera de horario crítico para minimizar impacto operacional." },
      { title: "Pruebas de carga y failover", description: "Validación de desempeño bajo demanda real y simulación de caídas de enlace." },
      { title: "Documentación y traspaso", description: "Entrega de diagramas, credenciales y manual de operación al equipo de TI del cliente." },
    ],
    technologies: ["Cisco Meraki", "Ubiquiti UniFi", "Fortinet", "Mikrotik", "SD-WAN", "802.11ax Wi-Fi 6"],
    faqs: [
      { question: "¿Trabajan con redes multisede?", answer: "Sí, diseñamos e implementamos enlaces WAN y SD-WAN entre sucursales, oficinas centrales y data center." },
      { question: "¿Incluyen Wi-Fi corporativo?", answer: "Sí, dimensionamos redes inalámbricas Wi-Fi 6 con roaming transparente y portales cautivos para invitados." },
      { question: "¿Pueden monitorear la red de forma remota?", answer: "Implementamos plataformas de monitoreo con alertas proactivas antes de que una falla afecte a los usuarios." },
    ],
    relatedSlugs: ["cableado-estructurado", "fibra-optica", "servidores"],
  },
  {
    slug: "cableado-estructurado",
    name: "Cableado Estructurado",
    shortName: "Cableado Estructurado",
    category: "Infraestructura TI",
    summary:
      "Cableado de datos y voz bajo normativa internacional, con certificación de cada punto y documentación completa del proyecto.",
    heroDescription:
      "Sistemas de cableado estructurado certificados bajo normativa TIA/EIA e ISO/IEC, base física ordenada y confiable para datos, voz y sistemas de seguridad.",
    icon: "cable",
    benefits: [
      { title: "Certificación por punto", description: "Cada punto de red se certifica con equipo de medición y queda respaldado en informe técnico." },
      { title: "Orden y trazabilidad", description: "Etiquetado, rotulado y documentación que facilita mantenimientos futuros." },
      { title: "Escalabilidad real", description: "Racks y canalizaciones dimensionadas con holgura para crecimiento de la red." },
      { title: "Cumplimiento normativo", description: "Instalación conforme a normas TIA-568, ISO/IEC 11801 y códigos eléctricos vigentes." },
    ],
    process: [
      { title: "Levantamiento de puntos", description: "Definición de cantidad y ubicación de puntos de red, voz y sistemas de seguridad." },
      { title: "Diseño de canalización", description: "Rutas de bandejas, canaletas y ductos según arquitectura del recinto." },
      { title: "Instalación y rotulado", description: "Tendido de cableado UTP/FTP, armado de racks y etiquetado según norma." },
      { title: "Certificación", description: "Medición de cada enlace con certificadora Fluke Networks y entrega de informe." },
      { title: "Entrega documentada", description: "Planos as-built, matriz de puntos y garantía de la instalación." },
    ],
    technologies: ["Cat6A / Cat6", "Fibra multimodo/monomodo", "Fluke Networks", "Racks 19\"", "Normativa TIA-568"],
    faqs: [
      { question: "¿Qué categoría de cable recomiendan?", answer: "Para la mayoría de oficinas y plantas recomendamos Cat6A, que soporta 10 Gbps y ofrece mejor blindaje frente a interferencias." },
      { question: "¿Entregan certificación de cada punto?", answer: "Sí, cada punto se certifica con equipo Fluke Networks y se entrega el informe como parte del cierre del proyecto." },
      { question: "¿Pueden trabajar en instalaciones industriales?", answer: "Sí, contamos con soluciones de cableado para ambientes industriales con requisitos de resistencia mecánica y a interferencia electromagnética." },
    ],
    relatedSlugs: ["fibra-optica", "redes", "servidores"],
  },
  {
    slug: "fibra-optica",
    name: "Fibra Óptica",
    shortName: "Fibra Óptica",
    category: "Infraestructura TI",
    summary:
      "Enlaces de fibra óptica monomodo y multimodo para backbone de campus, enlaces entre sedes y última milla de alta capacidad.",
    heroDescription:
      "Enlaces de fibra óptica de alta capacidad para backbone de campus, interconexión entre edificios y sedes remotas, con fusionado certificado y mediciones de atenuación.",
    icon: "fiber",
    benefits: [
      { title: "Máxima capacidad", description: "Anchos de banda de 1 a 100 Gbps sobre un mismo enlace, listos para crecimiento futuro." },
      { title: "Inmune a interferencia", description: "Sin afectación por ruido electromagnético, ideal para plantas industriales y exteriores." },
      { title: "Largas distancias", description: "Enlaces monomodo de varios kilómetros sin pérdida significativa de señal." },
      { title: "Fusionado certificado", description: "Empalmes por fusión con medición OTDR y registro de atenuación por tramo." },
    ],
    process: [
      { title: "Estudio de trazado", description: "Definición de ruta, tipo de fibra y protecciones mecánicas requeridas." },
      { title: "Tendido e instalación", description: "Instalación aérea, subterránea o interior según el proyecto." },
      { title: "Fusionado y conectorización", description: "Empalme por fusión y montaje de conectores en distribuidores ópticos (ODF)." },
      { title: "Certificación OTDR", description: "Medición de atenuación y reflectometría para validar cada enlace." },
      { title: "Entrega y garantía", description: "Informe de certificación, planos y garantía de la instalación." },
    ],
    technologies: ["Monomodo OS2", "Multimodo OM3/OM4", "OTDR", "ODF", "Fusionadoras de precisión"],
    faqs: [
      { question: "¿Qué distancia puede cubrir un enlace de fibra?", answer: "Con fibra monomodo y transceptores adecuados podemos cubrir decenas de kilómetros sin repetidores intermedios." },
      { question: "¿Instalan fibra en ductos existentes?", answer: "Sí, evaluamos la infraestructura de ductos disponible y adaptamos el proyecto a la canalización existente cuando es viable." },
      { question: "¿Qué certificación entregan al finalizar?", answer: "Entregamos informe de certificación OTDR con la traza de reflectometría y niveles de atenuación de cada fibra instalada." },
    ],
    relatedSlugs: ["redes", "cableado-estructurado", "servidores"],
  },
  {
    slug: "servidores",
    name: "Servidores y Data Center",
    shortName: "Servidores y Data Center",
    category: "Infraestructura TI",
    summary:
      "Diseño, virtualización y puesta en marcha de servidores y salas de datos, con climatización, energía redundante y monitoreo.",
    heroDescription:
      "Infraestructura de servidores y salas de datos dimensionadas para continuidad operacional: virtualización, respaldo, energía redundante y climatización de precisión.",
    icon: "server",
    benefits: [
      { title: "Continuidad operacional", description: "Diseño con redundancia N+1 en energía, climatización y almacenamiento crítico." },
      { title: "Virtualización eficiente", description: "Consolidación de cargas de trabajo reduciendo costos de hardware y energía." },
      { title: "Respaldo y recuperación", description: "Políticas de backup local y remoto con pruebas periódicas de restauración." },
      { title: "Monitoreo proactivo", description: "Alertas de temperatura, consumo y estado de hardware antes de una falla." },
    ],
    process: [
      { title: "Análisis de cargas de trabajo", description: "Evaluación de aplicaciones críticas y requisitos de cómputo, memoria y almacenamiento." },
      { title: "Diseño de sala o rack", description: "Dimensionamiento de energía, climatización y distribución física del equipamiento." },
      { title: "Instalación y virtualización", description: "Montaje de servidores, hipervisor y configuración de redes internas." },
      { title: "Pruebas de contingencia", description: "Simulación de fallas de energía y hardware para validar la redundancia diseñada." },
      { title: "Operación asistida", description: "Acompañamiento inicial y mesa de ayuda para la transición del equipo interno." },
    ],
    technologies: ["VMware", "Proxmox", "Dell PowerEdge", "HPE ProLiant", "UPS / climatización de precisión"],
    faqs: [
      { question: "¿Diseñan salas de servidores pequeñas y data center completos?", answer: "Sí, trabajamos desde racks técnicos en oficinas hasta salas de datos completas con climatización y energía redundante." },
      { question: "¿Ofrecen migración a servidores virtualizados?", answer: "Sí, realizamos migraciones planificadas desde servidores físicos a entornos virtualizados con mínima interrupción de servicio." },
      { question: "¿Incluyen plan de respaldo?", answer: "Diseñamos políticas de backup 3-2-1 con copias locales y remotas, y validamos la restauración de forma periódica." },
    ],
    relatedSlugs: ["cloud", "redes", "mantencion"],
  },
  {
    slug: "control-acceso",
    name: "Control de Acceso",
    shortName: "Control de Acceso",
    category: "Seguridad electrónica",
    summary:
      "Control de acceso biométrico, tarjetas y credenciales móviles para oficinas, plantas industriales y edificios corporativos.",
    heroDescription:
      "Sistemas de control de acceso biométrico, con tarjeta o credencial móvil, integrados con CCTV y gestión centralizada de usuarios y horarios.",
    icon: "fingerprint",
    benefits: [
      { title: "Control granular", description: "Permisos por usuario, puerta, día y horario, administrados desde una sola plataforma." },
      { title: "Trazabilidad completa", description: "Registro de cada evento de acceso, exportable para auditorías y cumplimiento normativo." },
      { title: "Integración con CCTV", description: "Verificación visual de cada evento de acceso cruzando video y registro biométrico." },
      { title: "Sin llaves que perder", description: "Credenciales móviles y biometría eliminan el riesgo de copia o pérdida de llaves." },
    ],
    process: [
      { title: "Análisis de flujos", description: "Estudio de puntos de acceso, niveles de seguridad requeridos y flujos de personas." },
      { title: "Selección de tecnología", description: "Definición de biometría, tarjeta RFID o credencial móvil según el caso de uso." },
      { title: "Instalación de hardware", description: "Montaje de lectores, cerraduras electromagnéticas y controladoras." },
      { title: "Configuración de plataforma", description: "Carga de usuarios, horarios, niveles de acceso y reglas de emergencia." },
      { title: "Capacitación y soporte", description: "Entrenamiento a administradores del sistema y soporte post implementación." },
    ],
    technologies: ["ZKTeco", "HID", "Suprema", "Control biométrico", "Credenciales móviles NFC"],
    faqs: [
      { question: "¿Pueden integrar el control de acceso con CCTV existente?", answer: "Sí, integramos control de acceso con plataformas de videovigilancia para verificación cruzada de eventos." },
      { question: "¿Qué pasa si hay un corte de energía?", answer: "Las cerraduras y controladoras cuentan con respaldo de batería y configuramos protocolos de apertura ante emergencia según normativa." },
      { question: "¿Puedo gestionar accesos desde el celular?", answer: "Sí, ofrecemos plataformas con administración remota y credenciales móviles para simplificar la gestión diaria." },
    ],
    relatedSlugs: ["cctv", "videovigilancia-inteligente", "automatizacion"],
  },
  {
    slug: "automatizacion",
    name: "Automatización",
    shortName: "Automatización",
    category: "Infraestructura TI",
    summary:
      "Automatización de edificios e instalaciones: iluminación, climatización, energía y sistemas de seguridad integrados en una sola plataforma.",
    heroDescription:
      "Automatización de edificios e instalaciones que integra iluminación, climatización, energía y seguridad en una plataforma única, reduciendo costos operativos y mejorando la experiencia de los ocupantes.",
    icon: "cpu",
    benefits: [
      { title: "Eficiencia energética", description: "Programación de climatización e iluminación según ocupación real, reduciendo consumo." },
      { title: "Gestión centralizada", description: "Un solo panel para monitorear y operar múltiples sistemas del edificio." },
      { title: "Mantenimiento predictivo", description: "Sensores que anticipan fallas en equipos críticos antes de que generen downtime." },
      { title: "Escenarios inteligentes", description: "Automatizaciones basadas en horario, ocupación o eventos de seguridad." },
    ],
    process: [
      { title: "Levantamiento de sistemas", description: "Inventario de equipos existentes: climatización, iluminación, energía y seguridad." },
      { title: "Diseño de arquitectura BMS", description: "Definición del sistema de gestión de edificios y protocolos de integración." },
      { title: "Instalación de sensores y controladores", description: "Despliegue de hardware de campo y conexión a la plataforma central." },
      { title: "Programación de escenarios", description: "Configuración de reglas de automatización y umbrales de alerta." },
      { title: "Ajuste y optimización", description: "Revisión de consumo y comportamiento durante las primeras semanas de uso." },
    ],
    technologies: ["BMS/BACnet", "KNX", "Modbus", "IoT industrial", "Sensórica ambiental"],
    faqs: [
      { question: "¿Se puede automatizar un edificio existente sin obra mayor?", answer: "En la mayoría de los casos sí, mediante controladores y sensores compatibles con la instalación eléctrica existente." },
      { question: "¿Qué ahorro de energía se puede esperar?", answer: "Dependiendo del punto de partida, los clientes suelen observar reducciones de entre 15% y 30% en consumo de climatización e iluminación." },
      { question: "¿Se integra con los sistemas de seguridad?", answer: "Sí, la plataforma de automatización puede cruzar eventos con CCTV y control de acceso para generar respuestas automáticas." },
    ],
    relatedSlugs: ["control-acceso", "servidores", "cloud"],
  },
  {
    slug: "cloud",
    name: "Soluciones Cloud",
    shortName: "Soluciones Cloud",
    category: "Infraestructura TI",
    summary:
      "Migración, arquitectura y operación de cargas de trabajo en la nube, con foco en seguridad, costos y continuidad operacional.",
    heroDescription:
      "Arquitectura, migración y operación de infraestructura cloud, diseñada para escalar con el negocio manteniendo control de costos, seguridad y continuidad operacional.",
    icon: "cloud",
    benefits: [
      { title: "Escalabilidad bajo demanda", description: "Recursos que crecen o se reducen según la carga real, sin sobreinversión en hardware." },
      { title: "Continuidad garantizada", description: "Arquitecturas multi zona con recuperación ante desastres documentada y probada." },
      { title: "Control de costos", description: "Monitoreo y optimización continua del gasto en la nube según uso real." },
      { title: "Seguridad por diseño", description: "Configuración de accesos, cifrado y segmentación siguiendo buenas prácticas del proveedor cloud." },
    ],
    process: [
      { title: "Evaluación de cargas actuales", description: "Análisis de aplicaciones candidatas a migrar y su nivel de complejidad." },
      { title: "Diseño de arquitectura cloud", description: "Definición de proveedor, servicios, redes virtuales y política de seguridad." },
      { title: "Migración planificada", description: "Migración por etapas con ventanas de corte acordadas y planes de rollback." },
      { title: "Optimización de costos", description: "Ajuste de tipos de instancia, reservas y políticas de escalado automático." },
      { title: "Operación y soporte", description: "Monitoreo continuo, actualizaciones y soporte ante incidentes." },
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Cloudflare", "Kubernetes / Docker"],
    faqs: [
      { question: "¿Qué proveedor cloud recomiendan?", answer: "Depende de la aplicación, el equipo técnico interno y los costos; evaluamos AWS, Azure y Google Cloud según el caso concreto." },
      { question: "¿Es posible un modelo híbrido con mi data center actual?", answer: "Sí, diseñamos arquitecturas híbridas que combinan infraestructura on-premise con servicios en la nube." },
      { question: "¿Cómo controlan el gasto en la nube?", answer: "Implementamos monitoreo de costos, alertas de presupuesto y recomendaciones periódicas de optimización." },
    ],
    relatedSlugs: ["servidores", "mantencion", "automatizacion"],
  },
  {
    slug: "mantencion",
    name: "Mantención y Soporte Técnico",
    shortName: "Mantención",
    category: "Servicio y soporte",
    summary:
      "Mantención preventiva y correctiva, mesa de ayuda y soporte técnico integral para toda la infraestructura tecnológica instalada.",
    heroDescription:
      "Mantención preventiva y correctiva, mesa de ayuda e integración de sistemas: un solo proveedor responsable de que toda su infraestructura tecnológica funcione, desde el cableado hasta el servidor.",
    icon: "wrench",
    benefits: [
      { title: "Menos tiempo caído", description: "Mantención preventiva programada que anticipa fallas antes de que afecten la operación." },
      { title: "Respuesta garantizada", description: "Acuerdos de nivel de servicio (SLA) con tiempos de respuesta y resolución definidos." },
      { title: "Mesa de ayuda dedicada", description: "Canal único para reportar incidentes de CCTV, redes, servidores o control de acceso." },
      { title: "Un solo proveedor", description: "Integración de sistemas de distintos fabricantes bajo una misma responsabilidad de servicio." },
    ],
    process: [
      { title: "Diagnóstico inicial", description: "Auditoría del estado actual de la infraestructura y definición de plan de mantención." },
      { title: "Plan de mantención preventiva", description: "Calendario de visitas, revisiones y actualizaciones según criticidad de cada sistema." },
      { title: "Mesa de ayuda", description: "Canal de soporte remoto y en terreno para incidentes correctivos con SLA definido." },
      { title: "Reportabilidad", description: "Informes periódicos de estado, incidentes resueltos y recomendaciones." },
      { title: "Mejora continua", description: "Revisión de indicadores de servicio y ajuste del plan según la evolución del cliente." },
    ],
    technologies: ["Mesa de ayuda ITIL", "Monitoreo remoto (RMM)", "SLA definidos", "Gestión de tickets"],
    faqs: [
      { question: "¿Atienden solo equipos que ustedes instalaron?", answer: "No, también realizamos mantención y soporte de infraestructura instalada por terceros, previa auditoría del estado actual." },
      { question: "¿Qué incluye la mesa de ayuda?", answer: "Incluye soporte remoto, gestión de tickets, escalamiento a terreno cuando corresponde y reportabilidad periódica." },
      { question: "¿Ofrecen contratos con SLA?", answer: "Sí, definimos acuerdos de nivel de servicio con tiempos de respuesta y resolución según la criticidad de cada sistema." },
    ],
    relatedSlugs: ["servidores", "cloud", "redes"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
