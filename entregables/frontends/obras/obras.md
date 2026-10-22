# Trabajos y obras menores — guía técnica para generar el frontend

## Identidad y alcance de este documento

Especificación inicial independiente para entregar a una IA de desarrollo. Orienta procesos de negocio y capacidades transversales; los detalles comerciales y de backend se afinarán después. No es un requerimiento de desarrollar el backend ahora.

- Paleta del producto: cobre `#B96545`, acento `#DA9877`, arena `#E8C3A5`.
- Repositorios sugeridos: `obras-web-admin` y `obras-api-core`; posibles `obras-web-clientes` y `obras-mobile-campo`.
- Archivos de identidad de esta carpeta: `logo.svg` vectorial editable y `logo.png` transparente exportado de él.

## Objetivo, actores y límites

Gestionar encargos de albañilería, pintura, enchapado y acabados para un profesional o equipo pequeño. El centro es el trabajo presupuestado por partidas, con metrados, materiales, jornadas, adicionales y cobros. Debe resultar útil desde el celular sin exigir contabilidad ni un almacén empresarial.

Roles: propietario/administrador, encargado de trabajo, ayudante con acceso acotado, consulta y cliente futuro. El ayudante puede registrar evidencias o avances para revisión; aprobar adicionales o modificar precios requiere permiso.

No es plataforma BIM ni gestor universal de grandes proyectos. Fuera del inicio: capacidad finita, Gantt avanzado con ruta crítica, valorizaciones contractuales complejas, planillas y contabilidad. Un módulo de Proyectos del ERP y su integración son posibilidades a definir, no dependencias disponibles.

## Navegación y pantallas

Inicio y pendientes; Clientes y lugares; Visitas; Presupuestos; Trabajos; Partidas/metrados; Agenda/tareas; Materiales y compras directas; Jornadas/ayudantes; Avances/evidencias; Cambios/adicionales; Cobros; Entrega/observaciones; Resultado y reportes; Configuración.

Detalle del trabajo con alcance acordado, ambientes, partidas, presupuesto y revisiones, avances, adicionales, materiales/gastos, jornadas, cobros y entrega. Registro móvil con pocas acciones: agregar avance, foto, gasto o pendiente. Formularios de presupuesto accesibles, con cantidades y unidades claramente visibles.

## Entidades propuestas

`Cliente`, `LugarTrabajo`, `Ambiente`, `VisitaEvaluacion`, `PresupuestoVersion`, `PartidaPresupuestada`, `Acuerdo`, `Trabajo`, `Tarea`, `AvancePartida`, `AdicionalVersion`, `Aceptacion`, `EstimacionMaterial`, `CompraDirecta`, `Gasto`, `Jornada`, `PagoAyudante`, `CobroCliente`, `ObservacionEntrega`, `Conformidad`.

Partidas con descripción, unidad, cantidad acordada, precio unitario o global y alcance. Un trabajo conserva presupuesto aceptado y referencias de sus revisiones; avances y adicionales nunca sobrescriben ese presupuesto original.

## Recorridos y estados

1. Visitar lugar; registrar ambientes, medidas, fotos, restricciones e información pendiente.
2. Preparar presupuesto por partidas (pintura m², enchapado m², zócalos metros, reparación unidad o trabajo global), fechas estimadas, inclusiones y exclusiones.
3. Acordar quién compra/aporta cada material y condiciones de anticipo/cobro. Registrar aceptación de versión y convertir a trabajo sin duplicar el presupuesto.
4. Programar tareas y ayudantes; registrar compras/gastos y jornadas. Material comprado por el cliente se registra como aporte, no como gasto propio ni ingreso.
5. Registrar cantidades ejecutadas por partida, fotos, responsable y pendientes. Hacer revisión de avances; distinguir borrador de aprobado cuando reporte un ayudante.
6. Si cambia alcance/cantidad, preparar adicional con impacto de precio y plazo. Registrar aprobación/rechazo antes de incorporarlo a los totales acordados.
7. Registrar anticipo y pagos parciales, gastos y pagos a ayudantes. Revisar saldo y costo directo sin confundir flujo de caja con rentabilidad.
8. Revisar entrega, observaciones y correcciones; conformidad y cierre técnico. Mantener saldo comercial visible aunque el trabajo esté entregado.

Presupuesto: borrador → enviado → aceptado/rechazado/vencido/sustituido. Trabajo: acordado → programado → en ejecución → pausado → revisión de entrega → entregado → cerrado; cancelación con motivo. Adicional: propuesto → pendiente de aceptación → aprobado/rechazado → ejecutado. Avance: borrador → validado/anulado con motivo. No mezclar todos estos estados en uno.

## Reglas y cálculos

- `ImportePartida = cantidad × precioUnitario`; una partida global tiene cantidad y unidad coherentes con su acuerdo, sin exigir metrado artificial. Separar descuentos/impuestos de los subtotales.
- `TotalAcordado = presupuesto aceptado + adicionales aprobados − reducciones aprobadas`. Un adicional pendiente no aumenta deuda ni presupuesto confirmado.
- `SaldoCliente = total acordado − cobros aplicados + devoluciones aplicables`, según convención explicitada. No descontar gastos de materiales del saldo que debe pagar el cliente salvo acuerdo registrado.
- `ResultadoDirectoEstimado/Real = ingreso acordado/reconocido según informe − costos directos correspondientes`; mostrar base usada. `FlujoCaja = cobros recibidos − pagos realizados` es otra medida, no margen.
- Avance por partida = cantidad ejecutada validada / cantidad vigente aprobada. No sumar m² y metros. Un porcentaje global, si se presenta, debe ponderarse por importe o peso acordado y explicitarse.
- Cantidades ejecutadas no exceden alcance sin aviso y decisión trazable; una ampliación requiere adicional. Corrección de avance con historial, no borrado silencioso.
- Jornadas/pagos de ayudantes son registro operativo básico, no planilla. Evitar duplicar costo de jornada y pago de esa misma obligación.
- Materiales: estimación por trabajo, compra directa, aporte del cliente y consumo/devolución cuando tenga sentido. No exigir inventario permanente. Si se añade stock básico, movimientos y reservas deben ser explícitos y separados del gasto.
- La aceptación del cliente registra versión/fecha/medio. Una aprobación de demo no equivale a firma digital certificada.

## Escalamiento, reportes y aceptación

Al crecer, el mismo producto puede agregar programación de cuadrillas, subcontratistas y revisión consolidada de varios trabajos. No exigir un satélite genérico de proyectos como paso obligatorio. La futura integración ERP puede aportar compras, inventarios, compromisos y costos por proyecto; Obras conserva partidas, metrados, adicionales y evidencias. Indicar que contratos y módulo Proyectos están pendientes de definición.

Reportes: trabajos por estado, partidas pendientes, adicionales sin aceptar, cobros/saldos, gastos por categoría y resultado directo. Mostrar costos aún no registrados para no presentar un beneficio definitivo engañoso.

Demo: presupuestar pintura de 80 m² y enchapado de 30 m²; cliente aporta pintura; aceptar y cobrar anticipo; registrar ayudante y compra; avanzar 18 m² de enchapado; proponer resanes adicionales, aprobarlos y ejecutarlos; registrar cobro parcial; entregar con observación y corregir. Probar adicional rechazado, avance excedido, doble cobro y diferencia entre saldo, costo y caja.

## Instrucción para la IA que genere el frontend

Construye una aplicación operativa, no una landing ni una ficha de portafolio. Este documento es una especificación inicial de propuesta, no una descripción de software ya implementado. Puedes resolver detalles de interfaz razonables; identifica supuestos sin presentar integraciones o capacidades simuladas como reales.

### Referencia visual obligatoria: plataforma ERP

Antes de diseñar, inspecciona el repositorio frontend de la **plataforma ERP** que proporcione el propietario. Su URL y ruta no están identificadas en este paquete. No supongas que el repositorio del portafolio, ni los repositorios fuente de las demos, son esa plataforma. Si falta el acceso, solicita la referencia y avanza con el dominio y la estructura sin afirmar que has reproducido su estilo.

Reutiliza su lenguaje de shell, navegación lateral y superior, encabezados, espaciado, tipografía, densidad de tablas, formularios, filtros, paneles, modales, confirmaciones, estados vacíos y componentes. Respeta el stack, versiones y convenciones del repositorio destino. Si el ERP utiliza una librería compartida disponible, úsala por su interfaz pública; no copies lógica del ERP ni añadas dependencias privadas ficticias. No impongas Vue o Angular por lo que utilice el portafolio.

**Conserva la paleta de este producto:** sustituye los acentos del ERP por sus tokens propios. El logo tiene volumen y materiales metálicos; la interfaz debe priorizar legibilidad y productividad. No conviertas todos los controles en objetos 3D. No muestres los nombres de la empresa matriz o de su división en esta primera versión.

### Base visual y experiencia transversal

- Tokens de referencia: fondo oscuro `#080D16`, superficie `#111827`, fondo claro `#EEF1F5`, texto sobre claro `#0F1724`. El ERP define estructura y temas; la paleta específica define acentos. Comprueba contraste de texto, foco, botones y estados; no uses automáticamente blanco sobre cualquier acento claro.
- Usa `logo.svg` o `logo.png` de la misma carpeta en la cabecera, acceso y vista de carga. El SVG utiliza formas, curvas y degradados vectoriales editables, sin imágenes incrustadas. El PNG se genera renderizando este SVG. Conserva proporción, transparencia y margen; añade texto accesible con el nombre del producto.
- Prioriza escritorio para administración, con navegación y formularios adaptables a móvil. En móvil no escondas acciones esenciales. Tablas anchas pueden tener desplazamiento interno, sin desbordar toda la página.
- Soporta teclado, etiquetas de formulario, mensajes junto al campo, foco al abrir/cerrar diálogos y alternativas al arrastre. Mostrar estados mediante texto e icono además de color.
- Implementa carga, vacío inicial, sin resultados, error recuperable, permisos insuficientes, confirmación de acciones sensibles y aviso de cambios sin guardar. Los filtros y la paginación deben mantener contexto al regresar del detalle.

## Procesos y componentes transversales

### Acceso, organización y permisos

Acceso simulado con perfiles de ejemplo y separación entre autenticación, sesión y permisos. Contexto de empresa/organización, usuario y sede opcional. Evita mezclar datos entre organizaciones. Proporciona navegación según permisos y verifica permisos de acciones también en el servicio simulado. Ocultar un botón no equivale a seguridad de backend.

Matriz de capacidades por rol: consultar, crear, editar, aprobar, cancelar, registrar movimientos, exportar y administrar. El backend será responsable de la autorización real. No incluir credenciales reales; el acceso de demo debe identificarse como tal.

### Catálogos, listados y documentos

Identificadores estables independientes del nombre, códigos legibles separados, búsqueda, filtros, orden, paginación y archivado. No borrar registros referenciados: desactivar y preservar historial. Manejar duplicados y datos incompletos con validaciones explícitas. Clientes/proveedores pueden ser personas o empresas; país, documento y dirección son configurables, sin inventar validaciones fiscales oficiales.

Listados con selección de columnas cuando sea útil, detalle con resumen, pestañas y actividad; formularios de alta/edición con errores de campo. Cabeceras documentales con código, fecha, cliente, responsable y estado. Las líneas y subtotales deben recalcularse al editar. Operaciones de aprobación/cancelación con motivo, actor y fecha. Los documentos aprobados se versionan o corrigen mediante acciones trazables, sin sobrescribir el acuerdo previo.

### Importes, unidades, tiempo y adjuntos

Moneda inicial PEN y zona horaria `America/Lima`, configurables. Separar fechas de negocio (`YYYY-MM-DD`) de instantes de auditoría (ISO UTC). Formatear con configuración regional; no usar texto formateado como valor de cálculo. Dinero con representación decimal exacta o unidades menores y política de redondeo explícita; cantidades con precisión por unidad. No sumar importes de distintas monedas. Impuestos y descuentos configurables: no asumir que todo importe ya contiene IGV.

Adjuntos con nombre, versión, tipo, tamaño, autor y fecha; vista previa cuando corresponda, descarga y validaciones. El frontend valida para UX; almacenamiento, antivirus y control real de acceso corresponderán al backend. No incrustar archivos arbitrarios como HTML ejecutable. Evidencias de aceptación deben registrar versión y medio; una casilla local no constituye una firma digital certificada.

### Actividad, notificaciones y reportes

Historial cronológico de cambios relevantes, comentarios, responsables y motivos. Bandeja de pendientes con enlace al registro. Notificaciones locales de ejemplo; no afirmar envío de correo o WhatsApp real. Indicadores derivados de datos y filtros, con definición del cálculo; distinguir estimación de resultado real. Exportación CSV o impresión legible de documentos cuando sea pertinente, sin confundirlos con comprobantes fiscales.

## Arquitectura frontend y contratos propuestos

Organiza por dominios funcionales, separando rutas/vistas, componentes, tipos, casos de uso y adaptadores de datos. Las vistas no deben acceder directamente a fixtures, almacenamiento local o llamadas HTTP sueltas. Define servicios tipados y una implementación simulada intercambiable por API. Usa el gestor de estado y librerías existentes del repositorio destino; evita una arquitectura innecesariamente compleja.

Contrato base propuesto: `id`, `organizationId`, `createdAt`, `updatedAt`, `version` y estado de archivo cuando aplique. Respuestas de lista con elementos, total y paginación; errores de campo, conflicto de versión, acción no permitida y fallo recuperable. Estados como uniones/enumeraciones estables con etiquetas traducibles. Las transiciones son operaciones explícitas, no edición libre del campo estado.

Simula latencia, errores controlados y conflictos. Previene doble envío y registra identificadores de operación para reintentos de aprobaciones y movimientos. Un reintento no debe duplicar cobros, consumo, reservas o entregas. El backend deberá garantizar atomicidad, concurrencia y autorización reales.

Datos ficticios coherentes que permitan completar los recorridos; persistencia local opcional con versión de esquema y acción de restablecer demo. El navegador no debe almacenar secretos ni documentos reales. No se exige funcionamiento sin conexión ni sincronización offline para esta primera versión.

## Autonomía, múltiples aplicaciones y escalamiento

El sistema debe poder operar sin contratar el ERP. Un frontend administrativo no implica un backend distinto para cada portal. Define límites de aplicación y contratos compartidos; no crees servicios ni repositorios adicionales solo por anticipación.

Las integraciones con ERP y otros sistemas son **propuestas**. Define una capa de integración con identificadores externos, fuente de autoridad, estado de sincronización y manejo de conflictos. No inventes endpoints ni contratos como si existieran. Cuando un módulo del ERP toma control de un dato, evita dos fuentes que permitan editarlo de manera independiente. No reconstruyas contabilidad, planillas o tesorería empresarial dentro de este frontend.

## Criterios de entrega comunes

1. Aplicación navegable con listados, detalles y operaciones persistidas en el adaptador simulado; no botones decorativos que anuncien éxito sin cambiar datos.
2. Reglas de estado, permisos, validaciones y cálculos comprobables; errores y reintentos visibles.
3. Estilo consistente con la referencia ERP disponible y colores/logo del producto. Documentar si no se pudo consultar la referencia.
4. Sin errores de consola, imágenes rotas ni desbordamiento general en escritorio y móvil.
5. Ejecutar build, tipos, lint y pruebas relevantes según el repositorio destino. Probar los recorridos de aceptación específicos de este documento, incluidos casos inválidos.
6. README con arranque, perfiles de demo, reset de datos, límites y contratos pendientes. Nunca afirmar emisión fiscal, cobros, mensajería, firmas o integración real si solo se simulan.
