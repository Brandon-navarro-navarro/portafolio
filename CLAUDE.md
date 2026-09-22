# Contexto del proyecto — Portafolio de Brandon Navarro

## Quién es el usuario
Brandon Navarro, Senior Technical Analyst y Full Stack Developer con 7+ años de
experiencia en desarrollo ERP e integraciones de sistemas (desde marzo 2018,
según su CV). Basado en Villa María del Triunfo, Lima, Perú. Se comunica en
español (español neutro/de Perú, sin modismos de otros países). Estudia
Ing. Sistemas e Informática en la Universidad Tecnológica del Perú (2019 —
en curso, último ciclo).

Su fortaleza técnica principal es **C#/.NET**. También desarrolla backend con
Java 17 y Spring WebFlux, especialmente con programación reactiva y funcional.
Desde junio de 2026 trabaja como **Analista Programador Senior en ISP
Consulting**, asignado al cliente **Intercorp Retail**.

## Experiencia laboral real (del CV, más reciente primero)
1. **Analista Programador Senior — ISP Consulting, cliente Intercorp Retail**
   (Jun 2026 – actualidad): análisis de sistemas de software y Vue.js, en
   modalidad híbrida.
2. **Programador — DINET S.A.** (Feb 2025 – Abr 2026): integración
   AliExpress–Serhafen–Dinet (tracking end-to-end, SLA) e integraciones
   empresariales mediante REST, mensajería asíncrona y Azure. Stack: C#/.NET,
   Azure Functions, Service Bus, SQL Server, Oracle, RabbitMQ, Azure DevOps.
3. **Software Engineer — TS Net S.A. (Evol), cliente Interbank** (Jul–Oct 2024):
   sistema de Gestión de Requerimientos de Accesos. Stack: .NET Core,
   Angular, TypeScript, SQL Server, Power Automate, Azure, Jira/SCRUM.
4. **Analista Desarrollador — Simplifica INC S.A.C.** (Ene 2023 – Jul 2024):
   ERP en C#/.NET + Node.js, módulos Angular; lideró equipo de 2 devs.
5. **Desarrollador de Software — Procesos & Sistemas SAC** (Mar 2018 – Dic
   2022): ERP completo (Logística, Ventas, Producción, Activos Fijos) en
   ASP.NET/C#; integraciones **VTEX** y **WooCommerce**.

Contacto real (del CV): brandon.153120@gmail.com,
linkedin.com/in/brandon-navarro-navarro-3364a8125. El teléfono del CV
(+51 964 180 560) **no se publicó** en `ContactSection.vue` a propósito —
es un dato más sensible para dejar indexable en una web pública; si Brandon
lo pide explícitamente, agregarlo ahí.

## Qué es este proyecto
Portafolio personal de desarrollador Full Stack, construido con Vue 3 +
TypeScript + Vite + Tailwind CSS y publicado con GitHub Actions en GitHub
Pages: `https://brandon-navarro-navarro.github.io/portafolio/`.

## Identidad de marca — MUY IMPORTANTE
Brandon tiene un proyecto personal más grande llamado **Karma Corp** (una
plataforma ERP personal para el mercado de Gamarra/Lima). La paleta de colores
de Karma Corp **es también la paleta de este portafolio**, porque es su sello
personal de marca:

- **Morados** (acento principal, CTAs, gradientes, glows)
- **Negros** (fondo base — no negro puro, con tinte morado)
- **Lilas** (acentos secundarios, hover states, texto destacado)

Los tokens ya están definidos en `tailwind.config.js` bajo `colors.karma.*`:
- `karma.black` (#0a0710) — fondo base
- `karma.void` (#120c1e) — fondo de secciones
- `karma.surface` (#1a1229) — cards/superficies elevadas
- `karma.border` (#2e2140) — bordes sutiles
- `karma.purple.{50-900}` — escala de morados, `500` (#8433f5) es el acento principal
- `karma.lilac.{100-500}` — escala de lilas, `300` (#cbaeff) es el acento secundario
- `karma.text.{primary,secondary,muted}` — jerarquía de texto sobre fondo oscuro

**Regla para cualquier trabajo futuro en este proyecto: mantener siempre esta
paleta morado/negro/lila. No introducir otros colores de acento (azules,
verdes, naranjas) salvo que Brandon lo pida explícitamente.** Si en el futuro
se conecta este portafolio con Karma Corp (por ejemplo, mostrándolo como
proyecto destacado), la coherencia visual entre ambos es intencional.

## Referencias de diseño usadas — LEER CON CUIDADO, hubo confusión antes
Brandon mostró varios portafolios como inspiración. **Regla clave que costó
varias iteraciones entender: el efecto de ÓRBITA (tecnologías girando físicamente
alrededor del núcleo, como planetas) va en el HERO. El efecto de CUBO/TESSERACTO
con pulsos va en STACK. No mezclarlos.**

1. **https://gauravrathva.me/** — sistema de "seis disciplinas" tipo
   skill-tree inspeccionable. Adaptado en `StackSection.vue` como el
   pentágono de stats + panel de detalle seleccionable.

2. **https://hassan-ali-portfolio-nine.vercel.app/** — tecnologías alrededor
   de la foto en el hero. Brandon no quiere foto, así que se puso un núcleo
   con iniciales "BN" y las tecnologías **orbitando físicamente alrededor**
   (rotación CSS real, como el sol y la tierra) — esto es `NeuralOrbit.vue`
   en el Hero. Ver detalle abajo: la primera versión de este componente NO
   giraba (solo estaba posicionado en círculo, estático) y hubo que
   corregirlo con `@keyframes` reales.

3. **https://www.redoyanulhaque.me/** — dos ideas de aquí, para DOS lugares
   distintos:
   - El efecto "tesseracto" (cubo 3D girando con pulsos de energía) que
     Brandon pidió para la sección **Stack** → `TesseractCube.vue`.
   - Una **grilla de íconos de tecnologías** (cuadrícula de tarjetas, una
     por tecnología, con su ícono) — Brandon compartió una captura de esto
     literal. Implementado como `TechIconGrid.vue` en Stack. **No es una
     pirámide de texto apilada** (esa fue una primera interpretación
     equivocada que se descartó — el componente `StackPyramid.vue` ya no
     existe, fue eliminado).

## Estructura de secciones (single-page, scroll con anchors)
1. `HeroSection.vue` — nombre, título, CTA, fondo `NetworkGlow.vue` (glow
   ambiental sutil) + `NeuralOrbit.vue` (núcleo BN fijo con tecnologías
   ORBITANDO alrededor, rotación CSS real vía `@keyframes`)
2. `AboutSection.vue` — bio corta + stats rápidas + 4 tarjetas de "cómo
   trabajo" (incluye liderazgo técnico, dato real del CV)
3. `TimelineSection.vue` — **nueva**, timeline de experiencia laboral real
   con la experiencia más reciente primero: ISP Consulting/Intercorp Retail →
   DINET → TS Net/Evol → Simplifica INC → Procesos & Sistemas, cada una con
   highlights y stack.
   No existía antes esta vista cronológica.
4. `StackSection.vue` — pentágono de stats (`StatRadar.vue`) + panel de
   detalle por categoría (5 ejes: Backend, Frontend, Bases de datos,
   **Analista**, Integraciones — "Analista" reemplazó a "DevOps" porque
   Brandon lleva el levantamiento de requerimientos hasta la implementación
   de los proyectos, no administra infraestructura) + `TesseractCube.vue`
   (cubo 3D girando con las categorías en sus caras y pulsos de energía) +
   `TechIconGrid.vue` (grilla de tecnologías, actualizada con datos reales
   del CV: C#, Azure, Azure Functions, Service Bus, RabbitMQ, etc.)
5. `ExperienceSection.vue` — integraciones de e-commerce destacadas,
   **corregidas con datos reales**: AliExpress·Serhafen, VTEX, WooCommerce y
   una categoría genérica para integraciones mediante APIs y Azure. No se
   publican otras marcas específicas.
6. `ProjectsSection.vue` — 3 proyectos: Reto Técnico Interbank, IDM Product
   Service (ambos repositorios backend públicos con Java reactivo/funcional)
   y el caso de integración AliExpress–Serhafen–Dinet.
7. `ContactSection.vue` — **datos reales** ya cargados: email
   (brandon.153120@gmail.com) y LinkedIn. Falta el usuario real de GitHub
   (sigue como placeholder, no estaba en el CV).
8. `FooterBar.vue`

## Componente NetworkGlow.vue
Fondo animado del Hero: núcleo con glow radial pulsante + nodos satélite
conectados por líneas SVG, con parpadeo desincronizado por nodo. Es solo
ambientación de fondo (no interactúa con la órbita de `NeuralOrbit.vue`).

## Componente NeuralOrbit.vue — EL EFECTO ÓRBITA DEL HERO
Núcleo central "BN" fijo. Un contenedor padre gira con `@keyframes
orbit-spin` (rotateZ 0→360deg, 40s linear infinite) y dentro de él están
posicionados los 7 chips de tecnología en círculo; cada chip tiene una
contra-rotación (`orbit-spin-reverse`) para no verse "de cabeza" mientras
el conjunto gira — así el texto siempre se lee horizontal aunque esté
orbitando. Esto reemplazó una primera versión que solo posicionaba los
chips en círculo sin animación real (bug ya corregido).

## Componente TesseractCube.vue — EL EFECTO TESSERACTO DE STACK
Cubo 3D real vía `transform-style: preserve-3d` + `perspective` en el
contenedor padre. 6 caras, cada una con `rotateY`/`rotateX` +
`translateZ(90px)` para formar el cubo, mostrando las 5 categorías del
stack (+ una cara "Full Stack"). El cubo entero gira con `@keyframes
cube-spin` (rotateY 360deg, 14s linear infinite). Cada cara tiene un pulso
de energía interno (`box-shadow` inset animado) para dar sensación de
actividad. Vive en `StackSection.vue`, después del pentágono/panel.

## Componente TechIconGrid.vue
Grilla de tarjetas cuadradas, una por tecnología del stack de Brandon, con
C#/.NET y ASP.NET Core primero, seguidos por Azure, Java 17, Spring WebFlux,
Project Reactor, R2DBC, Angular, Vue, bases de datos y herramientas. Cada
tarjeta muestra un monograma corto (no logos de marca reales, por temas de
licencia de íconos) + el nombre. Hover con glow morado. Vive en
`StackSection.vue`, al final.

## Pendientes / placeholders a completar con Brandon
- **Valores del pentágono de stats**: los porcentajes en `StackSection.vue`
  (`categories[].value`) siguen siendo estimaciones iniciales — ajustar con
  Brandon a su autopercepción real.
- **Teléfono de contacto**: deliberadamente omitido de `ContactSection.vue`
  (ver nota arriba) — agregar solo si Brandon lo pide explícitamente.
- **Dominio**: decidir si se mantiene GitHub Pages o se compra un dominio
  propio tipo `.dev` más adelante.

## Cómo correr el proyecto
```bash
npm install
npm run dev
```

## Deploy
Cada push a `main` ejecuta `.github/workflows/deploy-pages.yml` y publica el
contenido compilado en GitHub Pages.
Vite automáticamente (build: `npm run build`, output: `dist`).
