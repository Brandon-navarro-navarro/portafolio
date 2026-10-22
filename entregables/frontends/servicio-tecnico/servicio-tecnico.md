# Servicios técnicos y mantenimiento — guía técnica para generar el frontend

## Identidad y alcance de este documento

Especificación inicial independiente para entregar a una IA de desarrollo. Orienta procesos de negocio y capacidades transversales; los detalles comerciales y de backend se afinarán después. No es un requerimiento de desarrollar el backend ahora.

- Paleta del producto: lima industrial `#849B28`, acento `#B6CE50`, lima claro `#DCE8A3`.
- Repositorios sugeridos: `servicio-tecnico-web-admin` y `servicio-tecnico-api-core`; posibles `servicio-tecnico-web-tecnicos` y `servicio-tecnico-web-clientes`.
- Archivos de identidad de esta carpeta: `logo.svg` y `logo.png` con el arte exacto del portafolio. Consulta el índice del paquete para distinguir originales y exportaciones.

## Objetivo, actores y límites

Gestionar reparación, limpieza técnica y mantenimiento de electrodomésticos en domicilio o taller. El centro es el equipo atendido y la orden con visitas, diagnóstico, autorización y resultado. No tratar este producto como agenda universal de manicura, construcción o cualquier servicio.

Roles: administrador, coordinador, técnico, recepción/caja y consulta. El técnico ve sus visitas y registra evidencias, tareas y consumos autorizados; la administración define permisos para precios, descuentos, anulaciones y cierre. Portal del cliente es futuro, delimitado a sus solicitudes y decisiones.

No incluye telemetría, monitoreo IoT, optimización automática de rutas ni gestión integral de una flota. Mantener control básico de repuestos por orden sin replicar Inventarios del ERP.

## Navegación y pantallas

Inicio; Solicitudes; Clientes/direcciones; Equipos; Agenda y asignación; Órdenes; Diagnósticos; Presupuestos y autorizaciones; Repuestos/gastos; Entrega/conformidad; Garantías y reatenciones; Cobros; Reportes; Configuración.

Detalle de orden con equipo y problema, visitas, diagnóstico, presupuesto versionado, aceptación, tareas/evidencias, repuestos, prueba final, costos/cobros e historial. Vista móvil del técnico centrada en visitas del día y registro rápido. No exigir el portal móvil como repositorio separado desde el inicio.

## Entidades propuestas

`Cliente`, `DireccionServicio`, `Equipo` (tipo/marca/modelo/serie/propietario/ubicación), `TipoServicio`, `PlantillaRevision`, `Solicitud`, `OrdenServicio`, `Visita`, `AsignacionTecnico`, `Diagnostico`, `PresupuestoVersion`, `Autorizacion`, `Tarea`, `ConsumoRepuesto`, `Gasto`, `PruebaFinal`, `Conformidad`, `GarantiaTrabajo`, `Reatencion`, `Cobro`.

Una orden tiene múltiples visitas; equipo e historial no se duplican por cada atención. Para la primera versión, una orden atiende un equipo principal; solicitudes con varios equipos generan órdenes vinculadas. El número de serie puede faltar: no usarlo como ID técnico.

## Recorridos y estados

1. Recibir solicitud; identificar cliente, dirección, equipo, síntoma y tipo de servicio. Consultar historial y garantías aplicables.
2. Programar visita con ventana horaria, duración prevista y responsable. Advertir cruces de agenda y permitir excepción autorizada con motivo.
3. Técnico registra hallazgos, pruebas, fotos y recomendación. En limpieza planificada puede seguir lista y presupuesto ya acordado; una avería puede requerir revisión y nueva cotización.
4. Preparar presupuesto de mano de obra, repuestos, traslado u otros conceptos definidos; enviar versión y registrar aceptación, rechazo o pedido de cambio. La visita diagnóstica puede cobrarse aunque se rechace la reparación, si se acordó.
5. Ejecutar tareas autorizadas; registrar repuestos reales, gastos y visitas adicionales. Espera de repuesto no cierra la orden. Cambios de costo/alcance requieren nueva autorización según política.
6. Registrar prueba final, resultado y pendientes. Obtener conformidad, entregar y registrar cobros/saldo.
7. Definir condiciones y vigencia de garantía del trabajo; abrir reatención vinculada al original y evaluar cobertura. No asumir que toda avería posterior está cubierta.

Solicitud: nueva → evaluada → programada/descartada. Visita: programada → confirmada → en atención → completada/no realizada/cancelada. Orden: abierta → en diagnóstico → pendiente de autorización → en ejecución/espera de repuesto → prueba final → lista para entrega → entregada → cerrada; alternativas cancelada o no reparada con motivo. Mantener autorización y cobro separados del estado técnico.

## Reglas, materiales y dinero

- No ejecutar reparación no autorizada salvo actividades diagnósticas previamente acordadas. Conservar presupuesto y evidencia de la versión aceptada.
- Una reprogramación conserva visita previa y su motivo. Registrar quién asignó o cambió técnico y fecha.
- Consumos básicos con repuesto, cantidad, costo aplicado, origen (stock básico/compra directa) y orden. Evitar restar dos veces por reintento. No stock negativo silencioso; registrar faltantes.
- Costo directo = repuestos consumidos + mano de obra/costos internos definidos + terceros + otros gastos. Precio cobrado no es costo. Diferenciar anticipo, pago recibido y gasto pagado.
- Registrar custodia cuando el equipo pasa a taller: recepción, accesorios, estado visible, fotos y entrega. No prometer reparación si la evaluación no la confirmó.
- Cierre técnico exige resultado/prueba y resolución de pendientes o excepción justificada. Cierre comercial depende de saldos o acuerdo; pueden ser momentos distintos.
- Historial de garantía y reatenciones debe mostrar trabajo cubierto, fechas, motivo, decisión y vínculo, sin reemplazar registros originales.

## Integración, reportes y aceptación

El ERP puede centralizar repuestos, compras y documentos comerciales; esta solución conserva equipos, diagnósticos, visitas, conformidad y garantías. CRM puede originar una solicitud o recibir resumen comercial sin adquirir control técnico.

Reportes: visitas del día, órdenes por estado/antigüedad, autorizaciones pendientes, repuestos faltantes, costos y saldo por orden, reatenciones y motivos. No calcular rutas óptimas ni productividad sin tiempos registrados.

Demo: limpieza programada de lavadora con checklist y precio acordado; reparación de refrigeradora con diagnóstico, presupuesto observado/revisado, autorización, espera de repuesto y segunda visita; prueba final y entrega; anticipo y saldo; reatención vinculada. Probar técnico ajeno, cruce de visitas, consumo duplicado y reparación sin autorización.

## Instrucción para la IA que genere el frontend

Construye una aplicación operativa, no una landing ni una ficha de portafolio. Este documento es una especificación inicial de propuesta, no una descripción de software ya implementado. Puedes resolver detalles de interfaz razonables; identifica supuestos sin presentar integraciones o capacidades simuladas como reales.

### Referencia visual obligatoria: plataforma ERP

Antes de diseñar, inspecciona el repositorio frontend de la **plataforma ERP** que proporcione el propietario. Su URL y ruta no están identificadas en este paquete. No supongas que el repositorio del portafolio, ni los repositorios fuente de las demos, son esa plataforma. Si falta el acceso, solicita la referencia y avanza con el dominio y la estructura sin afirmar que has reproducido su estilo.

Reutiliza su lenguaje de shell, navegación lateral y superior, encabezados, espaciado, tipografía, densidad de tablas, formularios, filtros, paneles, modales, confirmaciones, estados vacíos y componentes. Respeta el stack, versiones y convenciones del repositorio destino. Si el ERP utiliza una librería compartida disponible, úsala por su interfaz pública; no copies lógica del ERP ni añadas dependencias privadas ficticias. No impongas Vue o Angular por lo que utilice el portafolio.

**Conserva la paleta de este producto:** sustituye los acentos del ERP por sus tokens propios. El logo tiene volumen y materiales metálicos; la interfaz debe priorizar legibilidad y productividad. No conviertas todos los controles en objetos 3D. No muestres los nombres de la empresa matriz o de su división en esta primera versión.

### Base visual y experiencia transversal

- Tokens de referencia: fondo oscuro `#080D16`, superficie `#111827`, fondo claro `#EEF1F5`, texto sobre claro `#0F1724`. El ERP define estructura y temas; la paleta específica define acentos. Comprueba contraste de texto, foco, botones y estados; no uses automáticamente blanco sobre cualquier acento claro.
- Usa `logo.svg` o `logo.png` de la misma carpeta en la cabecera, acceso y vista de carga. Los logos conservan exactamente el arte usado por el portafolio. Los SVG contienen imágenes rasterizadas: no son vectores editables. No los redibujes ni sustituyas por aproximaciones. Conserva proporción, transparencia y margen; añade texto accesible con el nombre del producto.
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
