export const crmStudy = {
  name: 'CRM',
  descriptor: 'Relaciones y gestión comercial',
  eyebrow: 'SISTEMA SATÉLITE / CRM',
  headline: 'Cada relación, con un siguiente paso.',
  intro:
    'Una propuesta de CRM configurable para centralizar contactos, empresas, oportunidades y actividades. Adapta campos, embudos y reglas al proceso comercial de cada negocio, con operación independiente e integración prevista con el ERP y las verticales.',
  primary: '#b77912',
  accent: '#dca942',
  accentLight: '#f3d59a',
  dark: '#080d16',
  surface: '#111827',
  pale: '#eef1f5',
  ink: '#0f1724',
  logo: `${import.meta.env.BASE_URL}crm-logo.png`,
  logoAlt: 'Contactos conectados por una progresión comercial en ámbar y plata',
  demo: '',
  repo: '',
  docs: '',
  metrics: [
    ['24', 'oportunidades'],
    ['8', 'tareas del día'],
    ['3', 'propuestas'],
    ['2', 'embudos'],
  ],
  workColumns: [
    {
      title: 'Calificación',
      note: 'Necesidad y responsable',
      items: ['Empresa Norte · Servicios', 'Origen: formulario web', 'Próxima llamada · mañana'],
    },
    {
      title: 'Propuesta',
      note: 'Condiciones para avanzar',
      items: ['Comercial Sur · Renovación', 'Importe y propuesta requeridos', 'Seguimiento asignado a Ana'],
    },
    {
      title: 'Negociación',
      note: 'Cierre y próximos pasos',
      items: ['Distribuidora Centro', 'Reunión de revisión pendiente', 'Motivo obligatorio al perder'],
    },
  ],
  modelTitle: 'Tu proceso comercial, con reglas claras.',
  modelCopy:
    'Un núcleo común de contactos, empresas, oportunidades y actividades. Los perfiles ofrecen una configuración inicial por negocio; cada equipo adapta propiedades, etapas y vistas sin crear una aplicación distinta.',
  flow: ['Captar', 'Calificar', 'Proponer', 'Negociar', 'Ganar / perder', 'Dar seguimiento'],
  capabilities: [
    [
      '01',
      'Contactos y empresas',
      'Historial de relaciones, responsables, notas, etiquetas y segmentación. Asociación de contactos con empresas y oportunidades.',
    ],
    [
      '02',
      'Oportunidades y embudos',
      'Varios embudos con etapas, orden, responsables y motivos de cierre configurables. Vista de tablero y lista para seguir cada negociación.',
    ],
    [
      '03',
      'Campos dinámicos',
      'Propiedades de texto, número, fecha, selección y casilla sobre las entidades del CRM. Opciones, validaciones y obligatoriedad según el contexto.',
    ],
    [
      '04',
      'Actividades y seguimiento',
      'Tareas, reuniones, llamadas y recordatorios asociados a cada relación u oportunidad; historial y próxima acción del equipo.',
    ],
    [
      '05',
      'Formularios, vistas y reglas',
      'Captura de interesados y vistas filtradas con columnas configurables. Campos visibles o requeridos según el embudo y la etapa; permisos por rol.',
    ],
    [
      '06',
      'Automatizaciones e informes',
      'Reglas delimitadas de evento, condición y acción para asignar responsables, crear tareas y notificar. Conversión, tiempo por etapa y oportunidades por equipo.',
    ],
  ],
  stack: [
    ['Núcleo común', 'Contactos, empresas, oportunidades y actividades'],
    ['Configuración', 'Metadatos de campos, embudos, validaciones, vistas y perfiles'],
    ['Reglas previstas', 'Eventos, condiciones y acciones delimitadas; registro de ejecución'],
    ['Integración prevista', 'Intercambio con ERP y verticales mediante contratos y permisos'],
  ],
  complete: [],
  pending:
    'Propuesta en preparación, sin demo ni fecha de lanzamiento anunciada. El alcance no incluye crear entidades arbitrarias ni desarrollar un constructor universal de aplicaciones. Reservas, matrículas y órdenes de taller pertenecen a sus respectivas verticales. Las integraciones y automatizaciones descritas son capacidades previstas.',
}
