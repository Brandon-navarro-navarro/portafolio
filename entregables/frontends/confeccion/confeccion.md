# Confección para Gamarra — guía técnica para generar el frontend

## Identidad y alcance de este documento

Especificación inicial independiente para entregar a una IA de desarrollo. Orienta procesos de negocio y capacidades transversales; los detalles comerciales y de backend se afinarán después. No es un requerimiento de desarrollar el backend ahora.

- Paleta del producto: petróleo `#146C68`, menta `#A6DED1`, acento de interfaz `#42B6A9`.
- Repositorios sugeridos: `confeccion-web-admin` y `confeccion-api-core`; posible `confeccion-web-talleres`.
- Archivos de identidad de esta carpeta: `logo.svg` y `logo.png` con el arte exacto del portafolio. Consulta el índice del paquete para distinguir originales y exportaciones.

## Objetivo, actores y límites

Administrar talleres y marcas que fabrican prendas por lote, para stock o pedidos, con fabricación propia y talleres externos. Roles: administrador, encargado de producción, corte/almacén, calidad y consulta. El acceso de talleres externos es una aplicación futura delimitada a sus encargos; no debe mostrar información de otros talleres.

El inventario inicial cubre lo indispensable para fabricar y entregar: telas, avíos, piezas en proceso y prendas terminadas. No implementar MRP, capacidad finita, costos indirectos contables ni WMS avanzado. Diseño de moldes y optimización de tizado quedan fuera; se pueden adjuntar sus archivos.

## Navegación y pantallas

Inicio y pendientes; Clientes y pedidos; Modelos y variantes; Fichas técnicas; Materiales; Órdenes; Corte; Talleres externos; Calidad y reprocesos; Inventario básico; Entregas; Costos y reportes; Configuración y acceso.

La ficha de orden muestra matriz talla/color, cantidades por etapa, materiales, corte, envíos externos, recepciones, calidad, costos, entregas y actividad. La matriz permite edición por celda accesible sin perder correspondencia con la variante.

## Entidades y relaciones propuestas

- `Modelo` → `Variante` por talla/color; `FichaTecnicaVersion` con medidas, materiales e instrucciones. Tabla de tallas y colores archivables.
- `Material` con unidad y precisión; `ConsumoModelo` por unidad fabricada y variante cuando corresponda. Merma prevista separada del consumo base.
- `Pedido` → líneas por variante; `OrdenProduccion` → líneas por variante y referencia opcional a pedido; `OrdenCorte` y registros de cantidades obtenidas.
- `Taller`, `EnvioTaller`, `RecepcionTaller`, `InspeccionCalidad`, `Reproceso`, `EntregaCliente`.
- `MovimientoInventario` y `ReservaMaterial` relacionados con documento origen, material/variante, ubicación básica y partida/tono de tela cuando aplique. Existencias derivadas de movimientos.
- `CostoDirectoLote`: materiales consumidos, servicios de terceros y otros gastos directos; pagos y costos no son sinónimos.

## Recorridos y estados

1. Registrar modelo, tallas y colores; crear ficha técnica con tela, avíos, medidas, consumos e instrucciones. Publicar una versión y conservar las anteriores.
2. Registrar pedido o necesidad de stock; crear orden con cantidades por variante, fecha y responsable. Fijar la versión de ficha y precios usados en la estimación.
3. Calcular necesidad prevista, consultar disponible y reservar. Mostrar faltantes; registrar ingreso de materiales mediante movimientos, sin alterar stock manualmente.
4. Preparar corte: tela entregada por partida, piezas obtenidas por variante, sobrantes y merma. Registrar consumos reales y su diferencia con la estimación.
5. Asignar costura propia o enviar a taller con cantidades, tarifa y fecha. Permitir varias recepciones y diferencias documentadas.
6. Inspeccionar recepción/acabado: conformes, observadas, rechazadas y reproceso; solo conformes pasan a disponibilidad para entrega.
7. Registrar ingreso de terminados y entregas parciales. Cerrar cuando cantidades y pendientes estén conciliados; si hay diferencias, resolverlas con motivo.

Orden: borrador → planificada → liberada → en proceso → terminada → cerrada. Cancelación según permisos; una orden con movimientos no se borra ni revierte editando el estado. El progreso por etapa es independiente: distintos subconjuntos del lote pueden estar en corte, costura y calidad simultáneamente.

Envío externo: preparado → enviado → recepción parcial → recibido → conciliado. Separar pendientes en taller de cantidades rechazadas o enviadas a reproceso.

## Reglas y cálculos esenciales

- La combinación modelo/talla/color es única; no cambiar la identidad de una variante usada en documentos.
- `Disponible = existencia − reservas activas`; no permitir reservas por encima del disponible sin política excepcional explícita. Reserva no es consumo.
- Las conversiones de unidad requieren factor explícito compatible. Metros y kilos no se convierten automáticamente sin relación específica de ese material.
- Mantener balance por variante y etapa. Una recepción, inspección o entrega repetida no vuelve a ingresar la misma cantidad.
- El envío a taller mueve custodia de piezas; no las convierte de nuevo en prendas terminadas. Recepciones parciales no pueden exceder el pendiente salvo diferencia autorizada.
- Versiones de ficha y costo aplicado quedan congeladas en la orden. Cambios futuros del catálogo no recalculan documentos históricos.
- Mostrar costo estimado, costo directo real acumulado y costo unitario sobre cantidad conforme obtenida, con denominador visible. Si no hay conformes, no dividir entre cero. No presentar margen definitivo sin todos los costos.

## Reportes, integración y aceptación específica

Reportes: pedidos/órdenes atrasadas, faltantes, cantidades por etapa, pendientes por taller, calidad/merma y costo por lote. Separar trabajo en proceso de prendas vendibles.

Al integrar Inventarios del ERP, este controla existencias, reservas y valorización; Confección mantiene variantes, fichas, corte y talleres. Producción del ERP puede aportar MRP, capacidad, listas multinivel y costos avanzados. Una venta puede originarse en Pulso/ERP sin exigir ambos para operar.

Validación de demo: fabricar 300 polos en tres tallas y dos colores; detectar tela faltante, ingresar y reservar; cortar; enviar piezas a dos talleres; recibir parcialmente; observar algunas prendas y reprocesarlas; entregar conformes en dos partes; mostrar balance, pendientes y costos. Probar recepción excedida, entrega de rechazados y reintento de ingreso.

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
