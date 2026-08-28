# Brandon Navarro — Portafolio

Portafolio personal de Full Stack Developer, construido con Vue 3 + TypeScript
+ Vite + Tailwind CSS. Paleta de marca: morados, negros y lilas (sello Karma).

Ver `CLAUDE.md` para el contexto completo del proyecto, decisiones de diseño
y pendientes.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Sitio publicado

[brandon-navarro-navarro.github.io/portafolio](https://brandon-navarro-navarro.github.io/portafolio/)

Cada push a `main` ejecuta el workflow de GitHub Actions definido en
`.github/workflows/deploy-pages.yml`: instala las dependencias, valida el build
y publica el contenido de `dist` en GitHub Pages.

