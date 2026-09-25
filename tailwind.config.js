/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './proyectos/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de marca Karma: morados, negros, lilas
        karma: {
          black: '#08090d', // fondo neutro, profesional
          void: '#0e1016', // fondo de secciones
          surface: '#141620', // superficies elevadas
          border: '#292c37', // bordes sutiles
          purple: {
            50: '#f5f1ff',
            100: '#e8ddff',
            200: '#d3bbff',
            300: '#b78eff',
            400: '#9a78ef',
            500: '#7c55df', // morado principal / acento
            600: '#6640c5',
            700: '#5417ab',
            800: '#3d1080',
            900: '#270a55',
          },
          lilac: {
            100: '#f3ecff',
            200: '#e2d1ff',
            300: '#c0acef', // lila destacado para texto/hover
            400: '#a78ce6',
            500: '#8b6fd0',
          },
          text: {
            primary: '#f2edfb', // texto principal sobre fondo oscuro
            secondary: '#b9bbc5', // texto secundario
            muted: '#747784', // texto terciario/deshabilitado
          },
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 18px 50px -30px rgba(124, 85, 223, 0.65)',
        'glow-lilac': '0 14px 40px -28px rgba(192, 172, 239, 0.55)',
      },
      backgroundImage: {
        'karma-radial': 'radial-gradient(circle at 50% 0%, rgba(124,85,223,0.11), transparent 58%)',
      },
    },
  },
  plugins: [],
}
