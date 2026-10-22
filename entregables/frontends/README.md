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

## Logos

Cada carpeta contiene `logo.svg` vectorial editable y autocontenido, y `logo.png` de 1024 × 1024 con transparencia, renderizado desde ese SVG.

Los SVG están construidos con formas, trazados y degradados nativos. No contienen etiquetas `image`, imágenes rasterizadas, base64 ni referencias externas. Pueden editarse en herramientas vectoriales. Son reconstrucciones de la composición y colores aprobados; simplifican las texturas y no reproducen cada píxel del arte raster original.

Servicios técnicos usa una caja de herramientas con destornillador. Obras usa casco con llana y cono. Este paquete reemplaza los contenedores rasterizados de la entrega anterior; no reemplaza los logos activos del portafolio.
