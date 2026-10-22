# CRM configurable — guía técnica para generar el frontend

## Identidad y alcance de este documento

Especificación inicial independiente para entregar a una IA de desarrollo. Orienta procesos de negocio y capacidades transversales; los detalles comerciales y de backend se afinarán después. No es un requerimiento de desarrollar el backend ahora.

- Paleta del producto: ámbar `#B77912`, acento `#DCA942`, champán `#F3D59A`.
- Repositorios sugeridos: `crm-web-admin` y `crm-api-core`; posibles `crm-web-captacion` y `crm-worker-automatizaciones` si son aplicaciones independientes.
- Archivos de identidad de esta carpeta: `logo.svg` vectorial editable y `logo.png` transparente exportado de él.

## Objetivo, actores y límites

CRM satélite para contactos, empresas, prospectos, oportunidades y actividades comerciales. Debe servir a distintos negocios con perfiles iniciales, campos personalizados, varios embudos y reglas. No duplicar la operación de hoteles, talleres, escuelas u obras mediante campos arbitrarios.

Roles: administrador de configuración, supervisor comercial, vendedor y consulta. Un vendedor puede tener acceso a sus oportunidades/equipo según política. El permiso para exportar o editar configuración se concede explícitamente.

No construir una plataforma universal de bajo código: las entidades centrales son fijas. No crear entidades arbitrarias, ejecutar scripts del usuario, desarrollar campañas masivas ni prometer canales de mensajería reales en esta primera versión.

## Navegación y pantallas

Inicio; Mi trabajo; Prospectos; Contactos; Empresas; Oportunidades (tablero/lista); Actividades/calendario; Formularios; Informes; Configuración de embudos, propiedades, vistas, reglas, perfiles y permisos.

Detalle de oportunidad: empresa/contactos, importe/moneda, embudo/etapa, propietario, próxima actividad, propiedades dinámicas, documentos y cronología. Editor de propiedades con vista previa; editor de embudo con orden y reglas; editor de automatización delimitado por evento, condiciones y acciones.

## Modelo de datos propuesto

`Contacto`, `Empresa`, `Prospecto`, `Oportunidad`, `Actividad`, `Embudo`, `Etapa`, `DefinicionPropiedad`, `ValorPropiedad`, `VistaGuardada`, `FormularioCaptacion`, `ReglaTransicion`, `ReglaAutomatizacion`, `EjecucionRegla`, `PerfilConfiguracion`.

Un prospecto representa una entrada aún no calificada; al convertirlo, reutilizar o crear contacto/empresa y crear una oportunidad opcional. Registrar vínculos y evitar duplicados. Un contacto puede participar en distintas oportunidades y tener relaciones con empresas, sin duplicar su identidad.

## Procesos comerciales y estados

1. Captar interesado manualmente o desde formulario simulado; registrar origen y responsable, comprobar posible duplicado.
2. Calificar; convertir a contacto/empresa y oportunidad, o descartar con motivo. Conservar el origen y la actividad del prospecto.
3. Elegir embudo; registrar necesidad, importe opcional, moneda, fecha prevista y propiedades pertinentes.
4. Crear llamadas, reuniones, tareas y recordatorios; completar con resultado y próxima acción. No inventar sincronización con calendarios externos.
5. Mover oportunidad entre etapas con validaciones; si una etapa exige presupuesto o importe, mostrar bloqueo con campo/acción a completar. Ofrecer menú accesible además del arrastre.
6. Registrar propuesta como documento/referencia y su versión. Ganar o perder con fecha y motivo según política. Renovaciones pueden abrir otra oportunidad vinculada.
7. Oportunidad ganada puede solicitar creación de cotización/pedido en ERP mediante adaptador futuro. No despachar ni cobrar por el hecho de mover una tarjeta.

Prospecto: nuevo → en contacto → calificado → convertido; alternativa descartado. Oportunidad tiene `status` abierta/ganada/perdida y `stageId` de su embudo: no confundir el cierre con el nombre configurable de una columna. Actividad: pendiente/completada/cancelada; vencida se deriva de fecha y estado.

## Dinamismo: requisitos concretos

- Propiedades sobre entidades admitidas, con ID estable, nombre, tipo, ayuda, opciones, valor por defecto, validación y alcance. Tipos iniciales: texto corto/largo, número, fecha, selección simple/múltiple y booleano.
- Guardar valores por ID, no por etiqueta. Renombrar no pierde datos. Archivar una opción no altera documentos existentes. Cambio de tipo con datos exige compatibilidad/migración explícita; no convertir destructivamente en silencio.
- Validaciones comunes y reglas por contexto de embudo/etapa; campos ocultos no deben bloquear de forma inexplicable. Edición de configuración y datos comerciales tiene permisos separados.
- Varios embudos con etapas ordenables y reglas de entrada/salida. No borrar etapas con oportunidades activas sin reasignación explícita. Cambiar de embudo requiere mapear etapa y validar los datos pertinentes.
- Vistas guardadas: filtros, columnas, orden y ámbito personal/equipo; mostrar solo propiedades autorizadas.
- Perfiles por negocio son plantillas de configuración revisables, no aplicaciones diferentes. Aplicarlos no debe sobrescribir datos/configuraciones existentes sin revisión.
- Automatizaciones iniciales: evento (alta, cambio de etapa, actividad vencida), condición tipada (igualdad, comparación, pertenencia, fecha) y acción permitida (asignar responsable, crear tarea, notificación local). Sin `eval`, código arbitrario ni acceso libre a red.
- Registrar ejecución, resultado y error; evitar ciclos, duplicados y reacciones infinitas con ID de evento y límites de encadenamiento. Simular reintentos seguros. El trabajo programado real requerirá backend/worker, no una pestaña abierta.
- Formularios públicos no exponen reglas internas ni permiten asignar organización/propietario libremente. El servidor validará identidad de formulario y campos permitidos.

## Indicadores, integración y aceptación

Informes: abiertas por etapa/equipo, conversión de oportunidades cerradas en periodo definido, tiempo por etapa e historial de transiciones, actividades vencidas. Mostrar denominadores; no mezclar monedas. Un pronóstico ponderado es una estimación y depende de probabilidades configuradas.

CRM controla seguimiento comercial; ERP Ventas controla sus documentos. En integración definir quién mantiene el maestro de clientes y sincronizar con IDs externos. Consultar información autorizada de verticales sin reconstruir reservas, reparaciones o matrículas dentro del CRM.

Recorrido de demo: crear embudos de ventas y renovaciones; añadir presupuesto y programa de interés como propiedades; captar prospecto, detectar contacto existente y convertir; intentar avanzar sin importe requerido; completar; crear actividad y automatización; ganar; simular error/reintento de integración sin duplicar pedido. Probar cambio de etiqueta de propiedad, archivo de etapa ocupada, permisos por responsable y prevención de ciclo de reglas.

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
