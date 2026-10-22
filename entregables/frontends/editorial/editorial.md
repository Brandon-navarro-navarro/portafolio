# Producción editorial e impresión — guía técnica para generar el frontend

## Identidad y alcance de este documento

Especificación inicial independiente para entregar a una IA de desarrollo. Orienta procesos de negocio y capacidades transversales; los detalles comerciales y de backend se afinarán después. No es un requerimiento de desarrollar el backend ahora.

- Paleta del producto: azul tinta `#234B70`, azul niebla `#B4D0E5`, acento `#6D9BD0`.
- Repositorios sugeridos: `editorial-web-admin` y `editorial-api-core`; posible `editorial-web-clientes`.
- Archivos de identidad de esta carpeta: `logo.svg` y `logo.png` con el arte exacto del portafolio. Consulta el índice del paquete para distinguir originales y exportaciones.

## Objetivo, actores y límites

Gestionar encargos gráficos personalizados de flyers, stickers, sobres, cajas, impresión y encuadernación. Dos superficies: administración de producción y una experiencia pública acotada de solicitud/aprobación. La solicitud pública no crea automáticamente una orden liberada ni garantiza precio, plazo o viabilidad.

Roles: administrador, comercial/cotizador, revisión de archivos, producción/acabados, entrega y cliente de portal (solo sus documentos). El primer frontend debe contener el back office completo y un recorrido público de demo claramente separado; el portal puede extraerse después.

No es una editorial de derechos, regalías o distribución de libros. Imposición automática, cálculo industrial especializado, preprensa profesional, capacidad finita y costos indirectos quedan fuera del inicio.

## Navegación y pantallas

Inicio; Solicitudes; Clientes; Tipos de trabajo y especificaciones; Cotizaciones; Archivos y pruebas; Órdenes y hojas de trabajo; Impresión/acabados; Terceros; Inventario básico; Calidad; Entregas y cobros; Reportes; Configuración.

Detalle de trabajo: especificación, revisiones de presupuesto, archivos y pruebas, autorización, ruta de producción, consumos/merma, costos, entregas e historial. Vista pública: formulario por tipo de producto, confirmación de recepción y consulta/aprobación simulada con aislamiento de cliente.

## Entidades propuestas

`TipoTrabajo`, `DefinicionEspecificacion` (medidas, soporte, caras, colores, acabado), `Solicitud`, `Cliente`, `CotizacionVersion` y líneas, `ArchivoVersion`, `Prueba`, `Aprobacion`, `OrdenTrabajo`, `Operacion`, `ServicioExterno`, `RegistroProduccion`, `Inspeccion`, `MovimientoInsumo`, `Entrega`, `Cobro`.

Mantener identificadores diferentes para solicitud, cotización y orden, con enlaces entre ellos. Congelar especificaciones, presupuesto y versión de arte aprobados en la orden. Catálogo inicial con configuraciones por flyer, sticker, caja, sobre y encuadernado; no un constructor universal de productos.

## Procesos y estados

1. El cliente indica tipo, cantidad, dimensiones/unidad, material, caras/colores, acabados, fecha deseada y archivos. Registrar campos desconocidos como pendientes de revisión; no inventar especificaciones técnicas.
2. Comercial revisa la viabilidad, solicita información y prepara cotización con tiraje, materiales, impresión, acabados, terceros y entrega. Separar precio comercial de costo estimado.
3. Emitir revisión de presupuesto; cliente acepta/rechaza esa versión. Registrar anticipos separadamente de la autorización.
4. Revisar archivo con lista manual de controles (medida, sangrado, resolución, fuentes, color según proceso). No afirmar que el frontend analiza profesionalmente PDF o perfiles de color. Crear prueba versionada y registrar aprobación de la versión exacta.
5. Liberar orden cuando presupuesto y arte requeridos estén aprobados. La exigencia de anticipo es una política configurable explícita. Generar hoja con especificaciones e instrucciones.
6. Ejecutar ruta según trabajo: impresión, corte, laminado, troquelado, plegado, encuadernación, control. Permitir omitir etapas no aplicables y registrar envío/recepción de terceros.
7. Registrar conformes, merma, reimpresiones y consumos. Preparar entregas parciales, cobros y cierre de pendientes.

Solicitud: recibida → en revisión → información pendiente/cotizada → convertida o descartada. Cotización: borrador → enviada → aceptada/rechazada/vencida. Prueba: pendiente → enviada → observada/aprobada/sustituida. Orden: borrador → lista para liberar → en producción → control → lista para entrega → entrega parcial/entregada → cerrada. Son estados de documentos diferentes; no un único campo que mezcle todo.

## Reglas del rubro e inventario esencial

- Cantidades positivas y dimensiones con unidad; restricciones dependen del tipo de trabajo, sin forzar los mismos campos a un sobre y un encuadernado.
- Arte nuevo después de aprobación invalida la autorización técnica afectada y requiere nueva prueba. Conservar evidencia de versiones y decisiones anteriores.
- Cambio de cantidad, soporte o acabado tras aceptación produce revisión y evaluación de impacto en precio/plazo, no edición silenciosa.
- No despachar más unidades conformes que las producidas y disponibles. Reimpresiones enlazadas al trabajo y su causa; no contarlas dos veces como nueva venta.
- Papel/cartulina/tintas/soportes: ingresos, consumo por trabajo, devolución y ajuste con motivo. Reservas simples para órdenes aprobadas y alertas de faltantes. Sin reposición automática ni almacén avanzado.
- No confundir pliegos, hojas y piezas finales; conversión definida por trabajo. No deducir rendimiento o imposición sin datos técnicos explícitos.
- Costo directo real = consumos + terceros + otros costos directos registrados; anticipos/cobros afectan saldo del cliente, no reducen costo de fabricación.

## Integración, reportes y aceptación

ERP Inventarios centralizará materiales cuando se active. ERP Producción puede aportar materiales planificados, capacidad y costos avanzados; Editorial conserva especificaciones, arte, pruebas y hoja especializada. API pública de solicitud y autorización deberá validar acceso y adjuntos; no usar enlaces predecibles como autorización real.

Reportes: solicitudes pendientes, presupuestos por responder, pruebas observadas, órdenes por etapa/atraso, merma, costo directo y entregas.

Recorrido de demo: solicitar 1 000 flyers; pedir dato faltante; cotizar; aceptar; observar una prueba; cargar versión corregida y aprobar; liberar; imprimir/acabar; registrar merma y reimpresión; entregar parcialmente y cobrar saldo. Probar liberación sin arte aprobado, acceso a trabajo ajeno y entrega excesiva.

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
