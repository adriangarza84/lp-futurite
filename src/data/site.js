// ---------------------------------------------------------------
// CONFIGURACIÓN CENTRAL — edita aquí y cambia en toda la landing
// ---------------------------------------------------------------

export const site = {
  nombre: 'Futurité',
  descriptor: 'Agencia de Marketing Digital de Alto Rendimiento',

  // Número dedicado a ventas, en formato internacional sin signos
  whatsapp: '528112738792',
  whatsappVisible: '81 1273 8792',

  telefonoSede: '(81) 2092-9666',
  telefonoSedeRaw: '+528120929666',
  correo: 'hola@futurite.com',

  direccion:
    'Plaza Tanarah, Piso 21. Av. José Vasconcelos 345-Ote, San Pedro Garza García, N.L.',
  ciudades: ['Monterrey', 'CDMX', 'Querétaro', 'Cancún'],

  // Mensaje precargado por defecto del chat de WhatsApp
  mensajeWhatsapp: 'Hola, quiero escalar mi negocio con Futurité',

  metaTitulo:
    'Futurité | Agencia de Marketing Digital de Alto Rendimiento en Monterrey',
  metaDescripcion:
    'Google Ads, campañas en redes sociales y SEO + GEO con Inteligencia Artificial. 16 años, +90 marcas y +4 MDP de inversión administrada al mes. Escríbenos por WhatsApp.',

  // [confirmar] URL real del aviso de privacidad — Google Ads lo exige en la LP
  avisoPrivacidad: 'https://futurite.mx/aviso-de-privacidad',

  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/futurite' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/futurite' },
    { nombre: 'LinkedIn', url: 'https://www.linkedin.com/company/futurite' },
    { nombre: 'TikTok', url: 'https://www.tiktok.com/@futurite' },
  ],
};

export const waLink = (mensaje = site.mensajeWhatsapp) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;

// ---------------------------------------------------------------
// RUTAS
// En GitHub Pages la landing se publica en un subdirectorio
// (/lp-futurite/), así que los enlaces internos absolutos deben pasar por
// ruta(). Al migrar a futurite.mx, base pasa a '/' y ruta() deja de
// agregar prefijo sola.
// ---------------------------------------------------------------

export const ruta = (camino = '/') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${camino}`;

// ---------------------------------------------------------------
// 2 · BARRA DE MÉTRICAS
// ---------------------------------------------------------------

export const metricas = [
  { valor: 90, prefijo: '+', sufijo: '', etiqueta: 'marcas gestionadas' },
  { valor: 40, prefijo: '+', sufijo: '', etiqueta: 'giros de negocio' },
  {
    valor: 4,
    prefijo: '+',
    sufijo: ' MDP',
    etiqueta: 'de inversión administrada al mes',
  },
  { valor: 16, prefijo: '', sufijo: '', etiqueta: 'años dominando lo digital' },
];

// ---------------------------------------------------------------
// 4 · LOS 3 MOTORES DE VENTA
// ---------------------------------------------------------------

export const motores = [
  {
    id: 'google-ads',
    icono: 'embudo',
    titulo: 'Google Ads & Performance',
    texto:
      'Aparecemos frente a quien ya está buscando lo que vendes, en el momento exacto de la decisión. Campañas PMax que conectan Search, Display y YouTube en una sola estrategia, optimizadas con IA para que cada peso invertido regrese en ventas.',
    remate: 'No pagamos por clics. Compramos clientes.',
    chips: ['Performance Max', 'Search', 'YouTube', 'Shopping'],
    consulta:
      'Hola, quiero una estrategia de Google Ads para mi negocio con Futurité',
  },
  {
    id: 'redes-sociales',
    icono: 'objetivo',
    titulo: 'Campañas en Redes Sociales',
    texto:
      'Creamos contenido que impulsa ventas y engagement, no solo alcance. Segmentación basada en datos, creativos que detienen el scroll y embudos que convierten seguidores en compradores.',
    remate:
      'Marcas que usan segmentación por datos logran hasta 30% más eficiencia en sus campañas.',
    chips: ['Meta Ads', 'TikTok', 'Retargeting', 'Creativos'],
    consulta:
      'Hola, quiero una estrategia de campañas en redes sociales con Futurité',
  },
  {
    id: 'seo-geo',
    icono: 'radar',
    titulo: 'SEO + GEO (posicionamiento con IA)',
    texto:
      'La búsqueda orgánica es la forma más efectiva de que te encuentren sin pagar por cada visita. Combinamos SEO tradicional con Generative Engine Optimization (GEO) y LLM SEO para que tu marca aparezca tanto en Google como en las respuestas de la IA.',
    remate: 'Presencia que dura, tráfico de calidad y más ingresos.',
    chips: ['SEO técnico', 'GEO', 'LLM SEO', 'Contenido'],
    consulta: 'Hola, quiero una estrategia de SEO + GEO con Futurité',
  },
];

// ---------------------------------------------------------------
// 5 · DIFERENCIADOR
// ---------------------------------------------------------------

export const diferenciadores = [
  {
    icono: 'monitor',
    titulo: 'Lo monitoreamos todo',
    texto:
      'Central de monitoreo con datos en tiempo real para reaccionar rápido.',
    destacado: true,
  },
  {
    icono: 'tablero',
    titulo: 'Transparencia total',
    texto:
      'Dashboards personalizados donde ves exactamente qué está convirtiendo.',
  },
  {
    icono: 'chip',
    titulo: 'IA + estrategia humana',
    texto:
      'Tecnología de punta operada por especialistas, no por plantillas.',
  },
  {
    icono: 'apreton',
    titulo: 'Aliados de negocio',
    texto:
      'Pensamos en tu retorno de inversión, no en tu presupuesto de pauta.',
  },
];

// ---------------------------------------------------------------
// 6 · PRUEBA SOCIAL
// ---------------------------------------------------------------

export const marcas = [
  'CEMEX',
  'Bosch',
  'Amway',
  'Mercedes Benz',
  'Banregio',
  'Viva Aerobus',
  'Terza',
  'Afore InverCap',
  'Petro-7',
  'UDEM',
  'Tecmilenio',
  'Arca',
];

// ---------------------------------------------------------------
// 7 · POR QUÉ INVERTIR AHORA
// ---------------------------------------------------------------

export const datos2026 = [
  {
    cifra: '+11%',
    texto:
      'crecerá la inversión publicitaria en México este año, impulsada por la recuperación económica y el Mundial 2026 —donde México es país coanfitrión—. El país entero va a estar frente a las pantallas.',
  },
  {
    cifra: '1 de cada 2',
    texto:
      'mexicanos que planeaba comprar en el Hot Sale 2026 dijo que usaría Inteligencia Artificial para comparar productos antes de decidir.',
  },
  {
    cifra: '+396%',
    texto:
      'creció en un año el tráfico que la IA (ChatGPT, Gemini) manda a tiendas en línea —y ese visitante convierte mejor que el de la búsqueda tradicional.',
  },
];

export const fuentes =
  'DataReportal / BYYD 2026 · IPG Mediabrands · AMVO Pulso Hot Sale 2026 · Adobe Analytics / Expansión 2026.';

// ---------------------------------------------------------------
// 8 · CÓMO EMPEZAMOS
// ---------------------------------------------------------------

export const pasos = [
  {
    titulo: 'Nos escribes por WhatsApp',
    texto: 'Nos cuentas tu objetivo de negocio. Sin formularios eternos.',
  },
  {
    titulo: 'Analizamos tu situación digital',
    texto:
      'Revisamos dónde estás hoy y dónde estás perdiendo ventas. Sin costo.',
  },
  {
    titulo: 'Diseñamos la estrategia',
    texto: 'A la medida de tu meta, con los motores que tu negocio necesita.',
  },
  {
    titulo: 'Ejecutamos y medimos',
    texto: 'Tú ves los resultados en tiempo real desde tu dashboard.',
  },
];
