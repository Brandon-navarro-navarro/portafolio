const common = {
  dark: '#080d16',
  surface: '#111827',
  pale: '#eef1f5',
  ink: '#0f1724',
  demo: '',
  repo: '',
  docs: '',
  complete: [],
}

export const serviceStudies = {
  'servicios-tecnicos': {
    ...common,
    name: 'Servicios técnicos',
    descriptor: 'Reparación y mantenimiento',
    eyebrow: 'VERTICAL ERP / SERVICIOS TÉCNICOS',
    headline: 'Cada equipo, con su historia. Cada visita, con un resultado.',
    intro:
      'Propuesta para empresas de reparación, limpieza técnica y mantenimiento de electrodomésticos. Conecta la solicitud, la visita, el diagnóstico, la autorización y la entrega en una orden de servicio con seguimiento propio.',
    primary: '#849b28',
    accent: '#b6ce50',
    accentLight: '#dce8a3',
    logo: `${import.meta.env.BASE_URL}servicios-tecnicos-logo.png`,
    logoAlt: 'Caja de herramientas y destornillador en lima, plata y grafito',
    metrics: [
      ['6', 'visitas del día'],
      ['3', 'por autorizar'],
      ['4', 'en reparación'],
      ['2', 'por entregar'],
    ],
    workColumns: [
      {
        title: 'Programadas',
        note: 'Cliente, equipo y dirección',
        items: ['OS-018 · Lavadora', 'Limpieza técnica · 09:00', 'Técnico asignado · Luis'],
      },
      {
        title: 'Diagnóstico',
        note: 'Revisión y autorización',
        items: ['OS-016 · Refrigeradora', 'Presupuesto enviado', 'Pendiente del cliente'],
      },
      {
        title: 'Ejecución',
        note: 'Trabajo y conformidad',
        items: ['OS-014 · Secadora', 'Repuesto instalado', 'Prueba final pendiente'],
      },
    ],
    modelTitle: 'De la solicitud a la conformidad del cliente.',
    modelCopy:
      'Limpieza técnica y reparación comparten equipos, visitas y órdenes. Cada tipo de servicio adapta sus tareas: una limpieza puede seguir una lista prevista; una reparación necesita diagnóstico, presupuesto y autorización.',
    flow: ['Solicitud', 'Visita', 'Diagnóstico', 'Autorización', 'Ejecución', 'Conformidad'],
    capabilities: [
      [
        '01',
        'Equipos e historial',
        'Tipo, marca, modelo, serie, ubicación y antecedentes de atención. Fotos y motivo del servicio asociados al equipo.',
      ],
      [
        '02',
        'Visitas y técnicos',
        'Agenda, dirección, disponibilidad y responsable. Seguimiento de visitas adicionales y trabajos pendientes.',
      ],
      [
        '03',
        'Diagnóstico y presupuesto',
        'Hallazgos, evidencias, mano de obra y repuestos previstos. Registro de autorización del cliente antes de ejecutar el trabajo acordado.',
      ],
      [
        '04',
        'Órdenes y tareas',
        'Flujos por tipo de servicio, listas de revisión, tareas realizadas y pruebas finales; seguimiento de servicios externos cuando corresponda.',
      ],
      [
        '05',
        'Repuestos y costos',
        'Consumos básicos por orden, compras directas y gastos de atención. Comparación del presupuesto con el costo directo registrado.',
      ],
      [
        '06',
        'Entrega y garantía',
        'Conformidad, cobros y saldo pendiente; condiciones de garantía del trabajo, reatenciones e historial de lo intervenido.',
      ],
    ],
    stack: [
      ['Operación propia', 'Equipos, visitas, técnicos y órdenes de servicio'],
      ['Control esencial', 'Consumos de repuestos, gastos y cobros por orden'],
      [
        'Escalamiento previsto',
        'Compras, inventarios y documentos comerciales mediante integración con el ERP',
      ],
    ],
    integration:
      'La propuesta puede operar de forma independiente con control básico por orden. Al escalar, el ERP puede centralizar compras y existencias; la vertical conserva el diagnóstico, las visitas, el historial del equipo y las garantías del trabajo.',
    pending:
      'Propuesta en preparación, sin demo ni fecha anunciada. El alcance no incluye monitoreo remoto de equipos ni optimización automática de rutas. Las integraciones con el ERP y las funciones descritas son capacidades previstas.',
  },
  'obras-menores': {
    ...common,
    name: 'Trabajos y obras menores',
    descriptor: 'Albañilería y acabados',
    eyebrow: 'VERTICAL ERP / OBRAS MENORES',
    headline: 'Cada trabajo, bien acordado. Cada avance, bajo control.',
    intro:
      'Propuesta para profesionales y equipos pequeños de albañilería, pintura y enchapado. Organiza presupuestos por partidas, materiales, avances, adicionales y cobros desde la visita inicial hasta la entrega.',
    primary: '#b96545',
    accent: '#da9877',
    accentLight: '#e8c3a5',
    logo: `${import.meta.env.BASE_URL}obras-menores-logo.svg`,
    logoAlt: 'Casco, llana y cono en cobre, plata y grafito',
    metrics: [
      ['3', 'trabajos activos'],
      ['2', 'presupuestos'],
      ['4', 'partidas en curso'],
      ['1', 'por entregar'],
    ],
    workColumns: [
      {
        title: 'Presupuestar',
        note: 'Alcance y cantidades',
        items: ['TR-012 · Pintura interior', '80 m² · dos ambientes', 'Cliente aporta la pintura'],
      },
      {
        title: 'Ejecutar',
        note: 'Partidas y avances',
        items: ['TR-009 · Enchapado', '18 de 30 m² ejecutados', 'Fotos de avance registradas'],
      },
      {
        title: 'Entregar',
        note: 'Adicionales y saldo',
        items: ['TR-007 · Resanes', 'Adicional aprobado', 'Conformidad pendiente'],
      },
    ],
    modelTitle: 'Del presupuesto por partidas a la entrega acordada.',
    modelCopy:
      'El centro del trabajo es el alcance: cantidades, precio, materiales y responsabilidades. Registrar avances y cambios permite saber qué se ejecutó, qué falta y cuánto queda por cobrar.',
    flow: ['Visita', 'Presupuesto', 'Acuerdo', 'Ejecución', 'Adicionales', 'Entrega'],
    capabilities: [
      [
        '01',
        'Visita y alcance',
        'Cliente, dirección, ambientes y fotos. Registro de lo incluido, exclusiones y responsable de comprar los materiales.',
      ],
      [
        '02',
        'Partidas y metrados',
        'Presupuestos de pintura, enchapado, resanes y otros trabajos por m², metro, unidad o precio global; cantidades y precios acordados.',
      ],
      [
        '03',
        'Materiales y gastos',
        'Estimación de materiales, compras directas y gastos por trabajo, sin exigir un almacén. Registro básico de consumos cuando corresponda.',
      ],
      [
        '04',
        'Tareas y avances',
        'Fechas, ayudantes, jornadas y pagos. Cantidades ejecutadas por partida, pendientes y evidencias fotográficas.',
      ],
      [
        '05',
        'Cambios y adicionales',
        'Trabajos nuevos y cambios de cantidad con su precio y aceptación del cliente; seguimiento del alcance original y sus modificaciones.',
      ],
      [
        '06',
        'Cobros y resultado',
        'Anticipos, cobros parciales y saldo. Comparación de ingresos con costos directos; observaciones, conformidad y pendientes de corrección.',
      ],
    ],
    stack: [
      ['Operación propia', 'Partidas, metrados, adicionales y evidencias'],
      ['Control esencial', 'Materiales, gastos, jornadas y cobros por trabajo'],
      [
        'Escalamiento previsto',
        'Integración con proyectos, compras e inventarios del ERP según la evolución de la plataforma',
      ],
    ],
    integration:
      'El producto propone resolver el ciclo completo de un trabajo pequeño sin contratar el ERP. Cuando se necesita coordinar compras, almacenes y costos de varias obras, una integración futura puede aportar control empresarial. Las partidas, los metrados y los adicionales permanecen en la vertical. La conexión con un futuro módulo de Proyectos está por definir.',
    pending:
      'Propuesta en preparación, sin demo ni fecha anunciada. No se plantea como una plataforma de grandes obras: BIM, programación avanzada, valorizaciones contractuales complejas y planillas quedan fuera del alcance inicial. El módulo de Proyectos del ERP y su integración requieren definición adicional.',
  },
}
