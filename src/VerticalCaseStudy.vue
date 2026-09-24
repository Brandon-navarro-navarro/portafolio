<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'hotel' | 'taller'

const props = defineProps<{ variant: Variant }>()

const studies = {
  hotel: {
    name: 'Alba',
    descriptor: 'Gestión hotelera',
    eyebrow: 'VERTICAL ERP / HOTELERÍA',
    headline: 'Cada habitación, lista antes de que pregunten.',
    intro: 'Un back office que conecta reservas, recepción, habitaciones y housekeeping para que todo el hotel comparta la misma versión del día.',
    primary: '#0a53cf',
    accent: '#00aed6',
    accentLight: '#4e9bf7',
    dark: '#080d16',
    surface: '#111827',
    pale: '#eef1f5',
    ink: '#0f1724',
    logo: 'https://raw.githubusercontent.com/Kreyshin/KM.WEB.HOTEL/main/LogoSystem.png',
    logoAlt: 'Alba, gestión hotelera',
    demo: 'https://kreyshin.github.io/KM.WEB.HOTEL/demo/',
    docs: 'https://kreyshin.github.io/KM.WEB.HOTEL/',
    repo: 'https://github.com/Kreyshin/KM.WEB.HOTEL',
    metrics: [
      ['72%', 'ocupación'],
      ['8', 'llegadas'],
      ['5', 'salidas'],
      ['6', 'pisos pendientes'],
    ],
    workColumns: [
      { title: 'Llegadas', note: 'Reservas que pasan a estancia', items: ['Hab. 204 · Lucía Ramos', 'Hab. 312 · Marco Silva', 'Hab. 105 · Andrea León'] },
      { title: 'Salidas', note: 'Cada salida activa limpieza', items: ['Hab. 408 · 10:00', 'Hab. 221 · 11:00', 'Hab. 306 · 12:00'] },
      { title: 'Housekeeping', note: 'Trabajo pendiente por piso', items: ['Piso 4 · 3 habitaciones', 'Piso 3 · 2 habitaciones', 'Piso 1 · 1 habitación'] },
    ],
    capabilities: [
      ['01', 'Habitaciones y pisos', 'Tablero en vivo, tipos, estados de ocupación y plano por piso.'],
      ['02', 'Reservas y recepción', 'Reserva, check-in y check-out conectados con la disponibilidad real.'],
      ['03', 'Housekeeping', 'Tareas de salida, repaso e inspección sin confundir limpieza con ocupación.'],
      ['04', 'Huéspedes', 'Historial, preferencias y datos de contacto en una vista operativa.'],
      ['05', 'Mantenimiento', 'Incidencias, prioridad y bloqueo de habitaciones fuera de servicio.'],
      ['06', 'Tarifas y temporadas', 'Reglas de precio por tipo de habitación, fecha y temporada.'],
    ],
    modelTitle: 'Dos estados que nunca deben confundirse.',
    modelCopy: 'Una habitación puede estar libre y sucia, u ocupada y limpia. Alba separa ocupación y limpieza para que recepción y housekeeping trabajen sin pisarse.',
    flow: ['Reserva', 'Check-in', 'Estancia', 'Check-out', 'Limpieza', 'Disponible'],
    stack: [['Interfaz', 'Vue 3, TypeScript, Vite y Tailwind CSS'], ['Estado y rutas', 'Pinia y Vue Router con permisos por rol'], ['Dominio', 'Servicios desacoplados y datos de ejemplo persistidos localmente'], ['Calidad', 'Vitest, Testing Library, lint y formato automatizado']],
    complete: ['Inicio y jornada del hotel', 'Habitaciones, pisos y tipos', 'Reservas, recepción y huéspedes', 'Housekeeping y mantenimiento', 'Amenities, lencería y movimientos', 'Tarifas, temporadas, usuarios y roles'],
    pending: 'Canales y OTA, reportes, facturación SUNAT y bitácora tienen ruta y permisos preparados; su vista continúa en evolución.',
  },
  taller: {
    name: 'Torque',
    descriptor: 'Gestión de taller',
    eyebrow: 'VERTICAL ERP / TALLER AUTOMOTRIZ',
    headline: 'Ningún vehículo parado sin que sepas por qué.',
    intro: 'Un back office que sigue cada vehículo desde el ingreso hasta la entrega, separando el avance técnico de los bloqueos que detienen el trabajo.',
    primary: '#18293f',
    accent: '#fd263f',
    accentLight: '#5e87b8',
    dark: '#080d16',
    surface: '#101927',
    pale: '#eef0f4',
    ink: '#0f1726',
    logo: 'https://raw.githubusercontent.com/Kreyshin/KM.WEB.TALLER.AUTO/main/TallerSystem.png',
    logoAlt: 'Torque, gestión de taller mecánico',
    demo: 'https://kreyshin.github.io/KM.WEB.TALLER.AUTO/demo/',
    docs: 'https://kreyshin.github.io/KM.WEB.TALLER.AUTO/',
    repo: 'https://github.com/Kreyshin/KM.WEB.TALLER.AUTO',
    metrics: [
      ['12', 'en el taller'],
      ['3', 'detenidas'],
      ['4', 'listas'],
      ['7/9', 'bahías ocupadas'],
    ],
    workColumns: [
      { title: 'Lo que no avanza', note: 'Bloqueos ordenados por tiempo', items: ['ABC-123 · espera repuesto', 'T4K-819 · espera aprobación', 'M2R-440 · espera tercero'] },
      { title: 'Se entrega hoy', note: 'Vehículos con hora prometida', items: ['B8N-231 · 11:30', 'C6T-905 · 15:00', 'A1P-774 · 17:30'] },
      { title: 'Va a entrar', note: 'Citas confirmadas del día', items: ['08:30 · mantenimiento', '10:00 · diagnóstico', '14:30 · frenos'] },
    ],
    capabilities: [
      ['01', 'Órdenes de trabajo', 'Ingreso, diagnóstico, presupuesto, reparación, control y entrega.'],
      ['02', 'Bahías y carga', 'Vista en vivo del taller y distribución del trabajo entre técnicos.'],
      ['03', 'Presupuesto y aprobación', 'Mano de obra, repuestos y consentimiento del cliente antes de reparar.'],
      ['04', 'Clientes y vehículos', 'Historial de atención, kilometraje y relación entre titular y unidad.'],
      ['05', 'Repuestos', 'Stock, mínimos, movimientos y piezas asociadas a cada orden.'],
      ['06', 'Servicios y baremos', 'Catálogo y tiempos estándar para cotizar con consistencia.'],
    ],
    modelTitle: 'Avance y detención son dimensiones distintas.',
    modelCopy: 'Una orden puede seguir en reparación y, al mismo tiempo, estar detenida esperando un repuesto. Torque conserva ambas verdades para mostrar dónde está el vehículo y por qué no avanza.',
    flow: ['Vehículo', 'Diagnóstico', 'Presupuesto', 'Aprobación', 'Reparación', 'Entrega'],
    stack: [['Interfaz', 'Vue 3, TypeScript, Vite y Tailwind CSS'], ['Estado y rutas', 'Pinia y Vue Router con acceso por rol'], ['Dominio', 'Servicios desacoplados y motor de datos de ejemplo'], ['Calidad', 'Vitest, Testing Library, lint y formato automatizado']],
    complete: ['El taller hoy y tablero de bahías', 'Órdenes, ficha y presupuesto', 'Detenciones y carga de técnicos', 'Clientes, vehículos y citas', 'Servicios, baremos y mantenimiento', 'Repuestos, sedes, usuarios y roles'],
    pending: 'Reportes de producción, facturación SUNAT, bitácora y motivos tienen navegación y permisos listos; su vista continúa en evolución.',
  },
} as const

const study = computed(() => studies[props.variant])
const portfolioUrl = import.meta.env.BASE_URL
</script>

<template>
  <main
    class="min-h-screen overflow-hidden text-white"
    :style="{ '--brand': study.primary, '--accent': study.accent, '--accent-light': study.accentLight, '--dark': study.dark, '--surface': study.surface, '--pale': study.pale, '--ink': study.ink, backgroundColor: study.dark }"
  >
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--dark)]/90 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a :href="portfolioUrl" class="font-mono text-sm text-white/60 transition hover:text-white">← BRANDON.NAVARRO</a>
        <div class="flex items-center gap-3">
          <a :href="study.repo" target="_blank" rel="noopener" class="hidden text-xs text-white/55 transition hover:text-white sm:block">Código ↗</a>
          <a :href="study.demo" target="_blank" rel="noopener" class="border border-[var(--accent)]/60 px-4 py-2 text-xs font-semibold text-white transition hover:bg-[var(--accent)]/15">Abrir demo ↗</a>
        </div>
      </div>
    </header>

    <section class="relative flex min-h-[92vh] items-center border-b border-white/10 pt-16">
      <div class="absolute inset-0 opacity-80" :style="{ background: `radial-gradient(circle at 76% 30%, ${study.accent}22, transparent 38%)` }" />
      <div class="section-container relative grid gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div class="mb-7 flex items-center gap-5">
            <img :src="study.logo" :alt="study.logoAlt" class="h-24 w-24 shrink-0 object-contain md:h-28 md:w-28" />
            <div>
              <span class="inline-flex border border-[var(--accent)]/50 bg-[var(--accent)]/10 px-3 py-1 font-mono text-xs text-white">CASO DE ESTUDIO</span>
              <p class="mt-2 font-mono text-[10px] tracking-[0.18em] text-white/50">{{ study.eyebrow }}</p>
            </div>
          </div>
          <p class="font-mono text-xs tracking-[0.22em] text-[var(--accent-light)]">{{ study.name }} · {{ study.descriptor }}</p>
          <h1 class="mt-4 max-w-3xl text-5xl font-bold leading-[0.96] tracking-tight md:text-7xl">{{ study.headline }}</h1>
          <p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/65">{{ study.intro }}</p>
          <div class="mt-9 flex flex-wrap gap-4">
            <a :href="study.demo" target="_blank" rel="noopener" class="bg-[var(--brand)] px-6 py-3.5 font-semibold text-white shadow-2xl transition hover:brightness-125">Explorar demo →</a>
            <a href="#producto" class="border border-white/15 px-6 py-3.5 font-semibold text-white/70 transition hover:border-white/35 hover:text-white">Conocer el producto</a>
          </div>
          <p class="mt-4 text-xs text-white/40">Demo con datos ficticios · Acceso precargado · Persistencia local en el navegador</p>
        </div>

        <div class="relative mx-auto w-full max-w-2xl">
          <div class="absolute -inset-5 blur-3xl" :style="{ background: `${study.accent}20` }" />
          <div class="relative overflow-hidden border border-white/15 bg-[var(--surface)] shadow-2xl" :class="variant === 'hotel' ? 'rounded-[1.75rem]' : 'rounded-xl'">
            <div class="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span class="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              <span class="h-2.5 w-2.5 rounded-full bg-[var(--accent-light)]" />
              <span class="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span class="ml-3 font-mono text-[10px] text-white/35">{{ study.name.toLowerCase() }} / jornada operativa</span>
            </div>
            <div class="p-5 md:p-7">
              <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div v-for="metric in study.metrics" :key="metric[1]" class="border border-white/10 bg-white/[0.035] p-4" :class="variant === 'hotel' ? 'rounded-2xl' : 'rounded-md'">
                  <p class="text-2xl font-bold">{{ metric[0] }}</p>
                  <p class="mt-1 text-[10px] uppercase tracking-wider text-white/45">{{ metric[1] }}</p>
                </div>
              </div>
              <div class="mt-4 grid gap-3 md:grid-cols-3">
                <div v-for="column in study.workColumns" :key="column.title" class="border border-white/10 bg-black/10 p-4" :class="variant === 'hotel' ? 'rounded-2xl' : 'rounded-md'">
                  <p class="text-sm font-semibold">{{ column.title }}</p>
                  <p class="mt-1 text-[9px] text-white/35">{{ column.note }}</p>
                  <ul class="mt-4 space-y-2">
                    <li v-for="item in column.items" :key="item" class="flex items-center gap-2 border-t border-white/[0.07] pt-2 text-[10px] text-white/65">
                      <span class="h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" :class="variant === 'hotel' ? 'rounded-full' : ''" />{{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="producto" class="bg-[var(--pale)] py-24 text-[var(--ink)]">
      <div class="section-container">
        <p class="font-mono text-xs tracking-[0.2em] text-[var(--brand)]">01 · MODELO OPERATIVO</p>
        <div class="mt-4 grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 class="text-4xl font-bold leading-tight md:text-5xl">{{ study.modelTitle }}</h2>
          <p class="text-lg leading-relaxed opacity-65">{{ study.modelCopy }}</p>
        </div>
        <div class="mt-12 flex flex-col items-stretch gap-2 md:flex-row md:items-center">
          <template v-for="(step, index) in study.flow" :key="step">
            <div class="flex-1 border border-black/10 bg-white px-4 py-5 text-center text-sm font-semibold shadow-sm" :class="variant === 'hotel' ? 'rounded-2xl' : 'rounded-md'">{{ step }}</div>
            <span v-if="index < study.flow.length - 1" class="text-center text-[var(--accent)]">→</span>
          </template>
        </div>
      </div>
    </section>

    <section class="border-y border-white/10 py-24">
      <div class="section-container">
        <p class="font-mono text-xs tracking-[0.2em] text-[var(--accent-light)]">02 · CAPACIDADES</p>
        <h2 class="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Una operación completa, convertida en decisiones claras.</h2>
        <div class="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3" :class="variant === 'hotel' ? 'rounded-[1.75rem]' : 'rounded-xl'">
          <article v-for="capability in study.capabilities" :key="capability[0]" class="bg-[var(--dark)] p-7 transition hover:bg-[var(--surface)]">
            <span class="font-mono text-xs text-[var(--accent)]">{{ capability[0] }}</span>
            <h3 class="mt-5 text-xl font-semibold">{{ capability[1] }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-white/55">{{ capability[2] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[var(--pale)] py-24 text-[var(--ink)]">
      <div class="section-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p class="font-mono text-xs tracking-[0.2em] text-[var(--brand)]">03 · ARQUITECTURA</p>
          <h2 class="mt-4 text-4xl font-bold md:text-5xl">Front primero, sin hipotecar el backend.</h2>
          <p class="mt-6 leading-relaxed opacity-65">Las vistas nunca dependen directamente de los datos de ejemplo. Cada dominio atraviesa una capa de servicios, preparada para cambiar el motor local por APIs reales sin reconstruir la experiencia.</p>
          <a :href="study.docs" target="_blank" rel="noopener" class="mt-8 inline-flex border border-black/15 px-5 py-3 text-sm font-semibold transition hover:border-[var(--brand)] hover:text-[var(--brand)]">Leer documentación funcional ↗</a>
        </div>
        <div class="bg-[var(--surface)] p-6 text-white shadow-xl md:p-8" :class="variant === 'hotel' ? 'rounded-[1.75rem]' : 'rounded-xl'">
          <div class="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <div class="border border-white/10 bg-white/5 p-5 text-center"><p class="font-mono text-[10px] text-[var(--accent-light)]">VISTAS</p><p class="mt-2 font-semibold">Vue</p></div>
            <span class="text-center text-[var(--accent)]">→</span>
            <div class="border border-white/10 bg-white/5 p-5 text-center"><p class="font-mono text-[10px] text-[var(--accent-light)]">SERVICIOS</p><p class="mt-2 font-semibold">Contratos</p></div>
            <span class="text-center text-[var(--accent)]">→</span>
            <div class="border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-5 text-center"><p class="font-mono text-[10px] text-[var(--accent-light)]">DATOS</p><p class="mt-2 font-semibold">Mock / API</p></div>
          </div>
          <dl class="mt-7 divide-y divide-white/10 border-t border-white/10">
            <div v-for="item in study.stack" :key="item[0]" class="grid gap-1 py-3 sm:grid-cols-[130px_1fr]">
              <dt class="text-xs font-semibold text-[var(--accent-light)]">{{ item[0] }}</dt>
              <dd class="text-xs leading-relaxed text-white/55">{{ item[1] }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="section-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="font-mono text-xs tracking-[0.2em] text-[var(--accent-light)]">04 · ESTADO DEL PRODUCTO</p>
          <h2 class="mt-4 text-4xl font-bold md:text-5xl">Lo demostrable, sin inflar el alcance.</h2>
          <p class="mt-5 text-white/55">La demo refleja capacidades terminadas y utiliza información ficticia. Los módulos siguientes se presentan como evolución, no como funcionalidad disponible.</p>
        </div>
        <div class="border border-white/10 bg-[var(--surface)] p-6 md:p-8" :class="variant === 'hotel' ? 'rounded-[1.75rem]' : 'rounded-xl'">
          <ul class="grid gap-3 sm:grid-cols-2">
            <li v-for="item in study.complete" :key="item" class="flex gap-3 border border-white/[0.07] bg-white/[0.025] p-4 text-sm text-white/70">
              <span class="text-[var(--accent)]">✓</span>{{ item }}
            </li>
          </ul>
          <div class="mt-5 border-l-2 border-[var(--accent)] bg-black/10 p-4">
            <p class="font-mono text-[10px] tracking-wider text-[var(--accent-light)]">EN EVOLUCIÓN</p>
            <p class="mt-2 text-sm leading-relaxed text-white/55">{{ study.pending }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-white/10 bg-[var(--surface)] py-20">
      <div class="section-container text-center">
        <img :src="study.logo" alt="" aria-hidden="true" class="mx-auto h-20 w-20 object-contain" />
        <h2 class="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-5xl">{{ study.headline }}</h2>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a :href="study.demo" target="_blank" rel="noopener" class="bg-[var(--brand)] px-7 py-4 font-semibold text-white transition hover:brightness-125">Abrir {{ study.name }} en demo →</a>
          <a :href="study.repo" target="_blank" rel="noopener" class="border border-white/15 px-7 py-4 font-semibold text-white/70 transition hover:border-white/35 hover:text-white">Ver repositorio ↗</a>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/10 py-8">
      <div class="section-container flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Brandon Navarro · Caso de estudio de producto</p>
        <a :href="portfolioUrl" class="transition hover:text-white">Volver al portafolio</a>
      </div>
    </footer>
  </main>
</template>
