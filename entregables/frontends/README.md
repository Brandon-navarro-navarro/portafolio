# Paquete de especificaciones para generar cinco frontends

Cada carpeta es independiente: entrega a la IA su archivo Markdown y sus dos archivos de logo. No necesita leer los documentos de los otros sistemas.

| Sistema                            | Documento                                                   | Identidad        |
| ---------------------------------- | ----------------------------------------------------------- | ---------------- |
| Confección para Gamarra            | [confeccion.md](confeccion/confeccion.md)                   | Petróleo y menta |
| Producción editorial e impresión   | [editorial.md](editorial/editorial.md)                      | Azul tinta       |
| CRM configurable                   | [crm.md](crm/crm.md)                                        | Ámbar            |
| Servicios técnicos y mantenimiento | [servicio-tecnico.md](servicio-tecnico/servicio-tecnico.md) | Lima industrial  |
| Trabajos y obras menores           | [obras.md](obras/obras.md)                                  | Cobre y arena    |

## Cómo usarlo

1. Proporciona a la IA el repositorio destino y el acceso o ruta del frontend de la plataforma ERP que servirá como referencia de estilo. Este paquete no inventa su ubicación: el repositorio ERP exacto no está identificado en el contexto del portafolio.
2. Adjunta el Markdown del sistema y sus logos. Cada documento describe reglas, pantallas, datos, estados, alcance, límites e integración propuesta.
3. Pide un frontend funcional con adaptadores simulados y recorridos verificables antes de conectar APIs reales. Los contratos de este paquete son propuestas, no endpoints existentes.
4. Revisa supuestos y afina las reglas con usuarios reales. Las capacidades no descritas como iniciales no deben darse por implementadas.

## Logos exactos del portafolio

Este paquete sustituye la entrega anterior de reconstrucciones vectoriales. **No contiene rediseños ni aproximaciones.** Los logos activos del portafolio no se modificaron.

| Sistema            | Original usado en el portafolio      | Archivo exacto dentro de la carpeta | Archivo adicional                         |
| ------------------ | ------------------------------------ | ----------------------------------- | ----------------------------------------- |
| Confección         | `public/confeccion-logo.svg`         | `logo.svg`, idéntico byte a byte    | `logo.png`, exportado renderizando el SVG |
| Editorial          | `public/editorial-logo.svg`          | `logo.svg`, idéntico byte a byte    | `logo.png`, exportado renderizando el SVG |
| CRM                | `public/crm-logo.png`                | `logo.png`, idéntico byte a byte    | `logo.svg`, contenedor del PNG original   |
| Servicios técnicos | `public/servicios-tecnicos-logo.png` | `logo.png`, idéntico byte a byte    | `logo.svg`, contenedor del PNG original   |
| Obras              | `public/obras-menores-logo.svg`      | `logo.svg`, idéntico byte a byte    | `logo.png`, exportado renderizando el SVG |

Los PNG exportados desde SVG tienen 1024 × 1024 con transparencia. Los PNG originales conservan sus dimensiones y contenido originales.

**Estos SVG contienen imágenes rasterizadas, no trazados vectoriales editables.** Se entregan así para conservar los diseños exactos del portafolio. La vectorización fiel es un trabajo pendiente e independiente; no se presenta este paquete como vectorial.

`origen-logos.json` identifica la fuente y la suma SHA-256 de cada archivo copiado exactamente. Los SVG originales son autocontenidos y conservan sus viewports y recortes: no cambiar su encuadre ni extraer toda la imagen incrustada, ya que algunos contienen una lámina y muestran solo el icono correspondiente.

Para generar el frontend usa estos archivos tal cual; no pidas recrear el logo a partir de una descripción. Cada carpeta conserva su documento Markdown independiente.
