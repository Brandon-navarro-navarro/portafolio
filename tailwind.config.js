/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de marca Karma: morados, negros, lilas
        karma: {
          black: '#0a0710',      // fondo base, casi negro con tinte morado
          void: '#120c1e',       // fondo de secciones/cards
          surface: '#1a1229',    // superficies elevadas (cards, nav)
          border: '#2e2140',     // bordes sutiles
          purple: {
            50: '#f5f1ff',
            100: '#e8ddff',
            200: '#d3bbff',
            300: '#b78eff',
            400: '#9b5cff',
            500: '#8433f5',      // morado principal / acento
            600: '#6c1fd6',
            700: '#5417ab',
            800: '#3d1080',
            900: '#270a55',
          },
          lilac: {
            100: '#f3ecff',
            200: '#e2d1ff',
            300: '#cbaeff',      // lila destacado para texto/hover
            400: '#b18cf7',
            500: '#9a6ff0',
          },
          text: {
            primary: '#f2edfb',   // texto principal sobre fondo oscuro
            secondary: '#b8aed1', // texto secundario
            muted: '#7a6f92',     // texto terciario/deshabilitado
          },
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 40px -10px rgba(132, 51, 245, 0.5)',
        'glow-lilac': '0 0 30px -8px rgba(203, 174, 255, 0.4)',
      },
      backgroundImage: {
        'karma-radial': 'radial-gradient(circle at 50% 0%, rgba(132,51,245,0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
}
