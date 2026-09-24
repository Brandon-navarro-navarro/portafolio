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
- `karma.black` (#08090d) — fondo base neutro
- `karma.void` (#0e1016) — fondo de secciones
- `karma.surface` (#141620) — cards/superficies elevadas
- `karma.border` (#292c37) — bordes sutiles
- `karma.purple.{50-900}` — escala de morados, `500` (#7c55df) es el acento principal
- `karma.lilac.{100-500}` — escala de lilas, `300` (#c0acef) es el acento secundario
- `karma.text.{primary,secondary,muted}` — jerarquía de texto sobre fondo oscuro

**Regla para cualquier trabajo futuro en este proyecto: mantener siempre esta
paleta morado/negro/lila. No introducir otros colores de acento (azules,
verdes, naranjas) salvo que Brandon lo pida explícitamente.** Si en el futuro
se conecta este portafolio con Karma Corp (por ejemplo, mostrándolo como
proyecto destacado), la coherencia visual entre ambos es intencional.

## Dirección visual actual
El portafolio usa un lenguaje editorial y tecnológico sobrio. La referencia
principal son símbolos abstractos con volumen metálico, plata y morado sobre
un fondo negro neutro. Evitar efectos que parezcan videojuegos: órbitas de
tecnologías, cubos giratorios, porcentajes de habilidad, exceso de chips,
glows permanentes y tarjetas demasiado redondeadas.

`ProfessionalMark.vue` contiene tres símbolos SVG propios (`orbit`, `link` y
`layers`) usados como sistema visual para Arquitectura, Integraciones y
Producto. Los degradados y sombras deben ser controlados; el contenido,
jerarquía tipográfica y espacio negativo tienen prioridad sobre la animación.
La marca principal entregada por Brandon vive en `public/favicon.svg` y se usa
tanto como favicon del navegador como en el encabezado del portafolio.

## Estructura de secciones (single-page, scroll con anchors)
1. `HeroSection.vue` — propuesta profesional, CTA y tres símbolos metálicos
   para Arquitectura, Integraciones y Producto.
2. `AboutSection.vue` — bio corta + stats rápidas + 4 tarjetas de "cómo
   trabajo" (incluye liderazgo técnico, dato real del CV)
3. `TimelineSection.vue` — timeline de experiencia laboral real
   con la experiencia más reciente primero: ISP Consulting/Intercorp Retail →
   DINET → TS Net/Evol → Simplifica INC → Procesos & Sistemas, cada una con
   highlights y stack.
4. `StackSection.vue` — tres pilares profesionales con iconografía metálica y
   toolbox agrupado en Backend, Frontend, Datos y Cloud/Integración.
5. `ExperienceSection.vue` — integraciones de e-commerce destacadas,
   **corregidas con datos reales**: AliExpress·Serhafen, VTEX, WooCommerce y
   una categoría genérica para integraciones mediante APIs y Azure. No se
   publican otras marcas específicas.
6. `ProjectsSection.vue` — 3 proyectos principales: Reto Técnico Interbank,
   IDM Product Service (ambos repositorios backend públicos con Java
   reactivo/funcional) y el caso de integración AliExpress–Serhafen–Dinet.
   Debajo se muestran tres verticales ERP como casos de producto: Mesa
   (restaurante), Alba (hotelería) y Torque (taller automotriz). Cada tarjeta
   enlaza a una ficha detallada multipágina con propuesta, capacidades,
   arquitectura y estado real del producto. Alba y Torque enlazan además a
   sus repositorios y demos públicas.
7. `ContactSection.vue` — datos reales: email, LinkedIn y GitHub.
8. `FooterBar.vue`

## Pendientes / placeholders a completar con Brandon
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

## Caso de estudio y demo de Mesa
- La ficha pública vive en `proyectos/restaurante/index.html` y monta
  `src/RestaurantCaseStudy.vue` como una segunda entrada de Vite.
- La demo compilada vive en `public/demos/mesa/`. Solo se publica el build
  estático: no se incluye el repositorio original, documentación interna,
  mapas de fuente ni enlaces a cuentas alternas.
- La guía interna de componentes se excluyó de esta distribución pública.
- El caso separa explícitamente lo disponible, lo que está en integración y
  las capacidades de roadmap para no presentar funciones incompletas como
  terminadas.

## Casos de estudio y demos de Alba y Torque
- Las fichas viven en `/proyectos/hotel/` y `/proyectos/taller/`; ambas montan
  `VerticalCaseStudy.vue` con la configuración de su vertical.
- Logos, paletas, textos funcionales y estado se basan en los repositorios
  públicos `Kreyshin/KM.WEB.HOTEL` y `Kreyshin/KM.WEB.TALLER.AUTO`.
- Los builds oficiales de las demos se publican dentro del portafolio en
  `public/demos/hotel/` y `public/demos/taller/`, con rutas hash y datos
  ficticios. La documentación y el código fuente siguen enlazando a los
  repositorios públicos de cada producto.
