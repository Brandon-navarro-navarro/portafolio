export const manufacturingCases = [
  {
    slug: 'confeccion',
    name: 'Confección para Gamarra',
    accent: '#146c68',
    soft: '#a6ded1',
    icon: 'confeccion-logo.svg',
    headline: 'Del modelo a la prenda terminada.',
    description:
      'Gestión de confección para talleres y marcas de Gamarra: modelos, tallas, colores y fabricación propia o con talleres externos. Un sistema autónomo con inventario básico y una ruta prevista de integración con la plataforma ERP.',
    steps: [
      'Definir modelo y curva de tallas',
      'Preparar orden y materiales',
      'Registrar corte y enviar a costura',
      'Recibir, revisar y terminar',
      'Ingresar prendas y entregar',
    ],
    features: [
      [
        'Modelos y fichas técnicas',
        'Fotos, medidas, tallas, colores, telas, avíos e instrucciones por modelo.',
      ],
      [
        'Órdenes y corte',
        'Cantidades por talla y color, consumo previsto, tela entregada, piezas obtenidas y merma.',
      ],
      ['Talleres y destajo', 'Envíos y recepciones parciales, pendientes y tarifas por operación o prenda.'],
      [
        'Etapas y calidad',
        'Seguimiento de corte, costura y acabado; prendas observadas, rechazos y reprocesos.',
      ],
      [
        'Costos básicos por lote',
        'Materiales consumidos, servicios externos y gastos directos para comparar estimación y resultado.',
      ],
      ['Pedidos y entregas', 'Clientes, fechas comprometidas, prendas disponibles y pendientes de entrega.'],
    ],
    inventory:
      'Existencias de telas, avíos y prendas por talla y color; entradas, salidas, ajustes y reservas simples por orden. Partida o tono de tela y materiales enviados a talleres cuando corresponda. Alertas de faltantes para preparar cada lote.',
    upgrade:
      'Cuando varias órdenes compiten por materiales o capacidad, la integración prevista con el ERP suma planificación de necesidades (MRP), listas multinivel, capacidad por centro de trabajo, costos indirectos y trazabilidad entre sedes. Las fichas textiles, las tallas y el control de corte permanecen en Confección.',
    limits:
      'El alcance inicial no contempla diseño de moldes ni optimización automática de tizado. Se prevé adjuntar archivos y registrar consumos.',
  },
  {
    slug: 'produccion-editorial',
    name: 'Producción editorial e impresión',
    accent: '#234b70',
    soft: '#b4d0e5',
    icon: 'editorial-logo.svg',
    headline: 'De la solicitud al trabajo impreso.',
    description:
      'Una propuesta para imprentas y talleres de producción editorial que reciben trabajos personalizados: flyers, stickers, encuadernados, cajas y sobres. Conecta la solicitud del cliente con la cotización, la aprobación y la orden de producción.',
    steps: [
      'Solicitar desde la landing',
      'Revisar archivos y cotizar',
      'Aprobar presupuesto y prueba',
      'Imprimir, terminar y controlar',
      'Entregar y cerrar el trabajo',
    ],
    features: [
      [
        'Solicitud desde la landing',
        'Formulario previsto por tipo de trabajo: cantidad, medidas, material, impresión, acabados, fecha y archivos de referencia. La solicitud queda pendiente de evaluación.',
      ],
      [
        'Cotización personalizada',
        'Presupuesto por tiraje, soporte, impresión y acabados; revisión de viabilidad y registro de anticipos.',
      ],
      [
        'Archivos y aprobación',
        'Versiones del arte, revisión técnica y aprobación de la prueba por el cliente antes de liberar la producción.',
      ],
      [
        'Orden y hoja de trabajo',
        'Especificaciones aprobadas, cantidades, responsables, fechas e instrucciones para cada etapa.',
      ],
      [
        'Impresión y acabados',
        'Seguimiento de impresión, corte, laminado, troquelado, plegado y encuadernación según el trabajo; servicios externos y entregas parciales.',
      ],
      [
        'Calidad, costos y entrega',
        'Control de cantidades, merma y reimpresiones; costo directo básico del trabajo y seguimiento de entrega.',
      ],
    ],
    inventory:
      'Control básico de papel, cartulina, tintas, soportes e insumos: existencias, ingresos, consumos por trabajo y ajustes con motivo. Reserva sencilla para órdenes aprobadas y registro de productos terminados pendientes de entrega.',
    upgrade:
      'Cuando se requiere coordinar muchas órdenes, máquinas o sedes, la integración prevista con el ERP incorpora planificación de materiales, capacidad por máquina y turno, abastecimiento, trazabilidad y costos avanzados. La solicitud personalizada, las versiones del arte y las aprobaciones permanecen en la vertical editorial.',
    limits:
      'El alcance inicial se centra en trabajos gráficos por encargo. No incluye gestión de derechos de autor, regalías o distribución de libros, ni cálculo automático especializado de imposición o preprensa.',
  },
] as const
