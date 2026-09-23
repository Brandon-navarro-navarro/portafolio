<script setup lang="ts">
const portfolioUrl = import.meta.env.BASE_URL
const demoUrl = `${import.meta.env.BASE_URL}demos/mesa/#/login?redirect=/dashboard`
const restaurantIconUrl = `${import.meta.env.BASE_URL}restaurant-flame.svg`

const capabilities = [
  {
    number: '01',
    title: 'Salones y mesas',
    description: 'Organización visual de espacios, estados de mesa y capacidad operativa por local.',
  },
  {
    number: '02',
    title: 'Carta y combos',
    description: 'Administración del menú, categorías, productos, disponibilidad y ofertas combinadas.',
  },
  {
    number: '03',
    title: 'Insumos y kardex',
    description: 'Control de existencias, almacenes y movimientos para mantener trazabilidad operativa.',
  },
  {
    number: '04',
    title: 'Recetas y costos',
    description: 'Relación entre platos e insumos para estimar consumo y costo de preparación.',
  },
  {
    number: '05',
    title: 'Configuración operativa',
    description: 'Canales de atención, áreas de preparación, impresoras y motivos de operación.',
  },
  {
    number: '06',
    title: 'Gobierno del sistema',
    description: 'Base para usuarios, roles, permisos y reglas específicas por establecimiento.',
  },
]

const systems = [
  {
    state: 'Disponible en demo',
    stateClass: 'border-[#f47526]/35 bg-[#f47526]/10 text-[#b7471d]',
    title: 'Mesa · Back Office',
    description: 'Centro de administración para configurar y supervisar la operación del restaurante.',
    items: ['Salones y mesas', 'Carta y combos', 'Inventario', 'Recetas y configuración'],
  },
  {
    state: 'Integración definida',
    stateClass: 'border-[#7c8592]/35 bg-[#aeb5c0]/15 text-[#454c56]',
    title: 'ERP · Núcleo empresarial',
    description: 'Fuente central de maestros corporativos que la vertical consume sin duplicar responsabilidades.',
    items: ['Artículos', 'Proveedores', 'Marcas', 'Sedes y almacenes'],
  },
  {
    state: 'Evolución del producto',
    stateClass: 'border-[#e06a2c]/35 bg-[#ffb45f]/15 text-[#a53518]',
    title: 'Sistemas operativos',
    description: 'Experiencias independientes para cada momento del servicio, conectadas al mismo dominio.',
    items: ['Punto de venta', 'Comandas de cocina', 'Menú QR', 'Caja y cierre'],
  },
]

const stack = [
  ['Experiencia web', 'Vue 3, TypeScript, Vite y Tailwind CSS'],
  ['Estado y navegación', 'Pinia y Vue Router con control por roles'],
  ['Servicios', 'Contratos desacoplados listos para conectar APIs REST'],
  ['Calidad', 'Pruebas unitarias, linting y formateo automatizado'],
  ['Backend objetivo', '.NET, API REST y SQL Server'],
]

const roadmap = [
  { label: 'Base visual y navegación', state: 'Completado', complete: true },
  { label: 'Configuración operativa', state: 'Completado', complete: true },
  { label: 'Salones, carta y combos', state: 'Completado', complete: true },
  { label: 'Abastecimiento e inventario', state: 'En progreso', complete: false },
  { label: 'Ventas, caja y comprobantes', state: 'Siguiente etapa', complete: false },
]
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-[#0b0d10] text-[#f8f9fb]">
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0d10]/90 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a :href="portfolioUrl" class="font-mono text-sm text-[#aeb5c0] transition hover:text-[#ffb45f]">
          ← BRANDON.NAVARRO
        </a>
        <a
          :href="demoUrl"
          class="rounded-full border border-[#f47526]/55 px-4 py-2 text-xs font-semibold text-[#ffb45f] transition hover:bg-[#f47526]/15"
        >
          Abrir demo
        </a>
      </div>
    </header>

    <section class="relative flex min-h-[88vh] items-center border-b border-white/10 pt-16">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(244,117,38,0.16),transparent_38%)]" />
      <div class="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#f47526]/10 blur-[120px]" />
      <div class="section-container relative grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div class="mb-7 flex items-center gap-5">
            <img
              :src="restaurantIconUrl"
              alt="Símbolo de la vertical de restaurante"
              class="h-24 w-24 shrink-0 object-contain md:h-28 md:w-28"
            />
            <div class="flex flex-wrap items-center gap-3">
              <span class="rounded-full border border-[#f47526]/50 bg-[#f47526]/10 px-3 py-1 font-mono text-xs text-[#ffb45f]">
                CASO DE ESTUDIO
              </span>
              <span class="font-mono text-xs text-karma-text-muted">VERTICAL ERP / RESTAURANTE</span>
            </div>
          </div>
          <h1 class="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Operación gastronómica,
            <span class="bg-gradient-to-r from-[#fff5e8] via-[#ffb45f] to-[#f47526] bg-clip-text text-transparent">conectada de punta a punta.</span>
          </h1>
          <p class="mt-7 max-w-2xl text-lg leading-relaxed text-karma-text-secondary">
            Mesa es una vertical de gestión para restaurantes diseñada sobre un núcleo ERP. Centraliza la configuración del negocio, el menú, los espacios y el abastecimiento sin mezclar responsabilidades entre sistemas.
          </p>
          <div class="mt-9 flex flex-wrap gap-4">
            <a
              :href="demoUrl"
              class="rounded-lg bg-[#f47526] px-6 py-3.5 font-semibold text-white shadow-[0_0_32px_rgba(244,117,38,0.28)] transition hover:bg-[#ff8a3d]"
            >
              Explorar demo interactiva →
            </a>
            <a href="#alcance" class="rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-[#aeb5c0] transition hover:border-[#f47526]/65 hover:text-white">
              Conocer el sistema
            </a>
          </div>
          <p class="mt-4 text-xs text-karma-text-muted">Demo con datos ficticios · Sin repositorio público · La información se conserva solo en el navegador</p>
        </div>

        <div class="relative mx-auto w-full max-w-xl">
          <div class="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#f47526]/25 to-[#aeb5c0]/10 blur-2xl" />
          <div class="relative overflow-hidden rounded-2xl border border-white/15 bg-[#121419] shadow-2xl">
            <div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span class="h-2.5 w-2.5 rounded-full bg-[#a53518]" />
              <span class="h-2.5 w-2.5 rounded-full bg-[#f47526]" />
              <span class="h-2.5 w-2.5 rounded-full bg-[#aeb5c0]" />
              <span class="ml-3 font-mono text-[10px] text-karma-text-muted">mesa / centro de operaciones</span>
            </div>
            <div class="grid min-h-[390px] grid-cols-[76px_1fr]">
              <aside class="border-r border-white/10 bg-black/20 p-4">
                <div class="mx-auto h-8 w-8 rounded-lg bg-[#f47526] shadow-[0_0_22px_rgba(244,117,38,0.3)]" />
                <div v-for="item in 5" :key="item" class="mx-auto mt-6 h-7 w-7 rounded-md border border-white/10 bg-white/5" />
              </aside>
              <div class="p-5 md:p-7">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="font-mono text-[10px] tracking-widest text-[#f47526]">RESUMEN OPERATIVO</p>
                    <h2 class="mt-1 text-xl font-semibold">Buen servicio, bajo control.</h2>
                  </div>
                  <div class="rounded-lg border border-white/10 px-3 py-2 text-[10px] text-karma-text-muted">Sede principal</div>
                </div>
                <div class="mt-6 grid grid-cols-3 gap-3">
                  <div v-for="(metric, index) in ['24 mesas', '36 platos', '3 almacenes']" :key="metric" class="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                    <div class="h-1.5 w-8 rounded-full" :class="index === 1 ? 'bg-[#aeb5c0]' : 'bg-[#f47526]'" />
                    <p class="mt-4 text-xs font-semibold md:text-sm">{{ metric }}</p>
                    <p class="mt-1 text-[9px] text-karma-text-muted">Datos de demostración</p>
                  </div>
                </div>
                <div class="mt-4 grid gap-3 sm:grid-cols-[1.25fr_0.75fr]">
                  <div class="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <p class="text-xs font-semibold">Estado de salones</p>
                    <div class="mt-4 grid grid-cols-3 gap-2">
                      <div v-for="state in 9" :key="state" class="aspect-square rounded-lg border border-[#f47526]/20 bg-[#f47526]/10 p-2">
                        <span class="block h-1 w-1 rounded-full" :class="state % 3 ? 'bg-[#dfe3ea]' : 'bg-[#f47526]'" />
                      </div>
                    </div>
                  </div>
                  <div class="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <p class="text-xs font-semibold">Inventario</p>
                    <div v-for="width in ['85%', '62%', '74%', '46%']" :key="width" class="mt-4">
                      <div class="mb-1 h-1.5 rounded-full bg-white/10"><div class="h-full rounded-full bg-gradient-to-r from-[#f47526] to-[#dfe3ea]" :style="{ width }" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="alcance" class="bg-[#f6f3ef] py-24 text-[#1a1c20]">
      <div class="section-container">
        <p class="font-mono text-xs tracking-[0.2em] text-[#c64d1e]">01 · PROPUESTA</p>
        <div class="mt-4 grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 class="text-4xl font-bold leading-tight md:text-5xl">Una plataforma, responsabilidades bien separadas.</h2>
          <p class="text-lg leading-relaxed text-[#625d58]">El diseño evita convertir un solo producto en un sistema monolítico. Cada experiencia atiende a un usuario y momento operacional distinto, mientras comparte los maestros empresariales del ERP.</p>
        </div>

        <div class="mt-12 grid gap-5 lg:grid-cols-3">
          <article v-for="system in systems" :key="system.title" class="rounded-2xl border border-[#ddd5cc] bg-white p-6 shadow-sm">
            <span class="inline-flex rounded-full border px-3 py-1 font-mono text-[10px]" :class="system.stateClass">{{ system.state }}</span>
            <h3 class="mt-5 text-2xl font-bold">{{ system.title }}</h3>
            <p class="mt-3 min-h-[72px] text-sm leading-relaxed text-[#68615b]">{{ system.description }}</p>
            <ul class="mt-6 space-y-3 border-t border-[#ece5dd] pt-5">
              <li v-for="item in system.items" :key="item" class="flex items-center gap-3 text-sm text-[#3c3e43]">
                <span class="h-1.5 w-1.5 rounded-full bg-[#f47526]" />{{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="border-y border-white/10 py-24">
      <div class="section-container">
        <p class="font-mono text-xs tracking-[0.2em] text-[#f47526]">02 · CAPACIDADES</p>
        <h2 class="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">El back office convierte la operación en información gestionable.</h2>
        <div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="capability in capabilities" :key="capability.number" class="bg-[#0b0d10] p-7 transition hover:bg-[#14171c]">
            <span class="font-mono text-xs text-[#f47526]">{{ capability.number }}</span>
            <h3 class="mt-5 text-xl font-semibold">{{ capability.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-karma-text-secondary">{{ capability.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#f6f3ef] py-24 text-[#1a1c20]">
      <div class="section-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p class="font-mono text-xs tracking-[0.2em] text-[#c64d1e]">03 · ARQUITECTURA</p>
          <h2 class="mt-4 text-4xl font-bold md:text-5xl">Preparado para evolucionar sin rehacer la experiencia.</h2>
          <p class="mt-6 leading-relaxed text-[#625d58]">La demo utiliza datos locales y una capa de servicios intercambiable. La interfaz puede conectarse posteriormente con APIs reales manteniendo el dominio visual y los flujos validados.</p>
          <div class="mt-8 rounded-2xl border border-[#ddd5cc] bg-white p-6">
            <p class="font-mono text-xs font-semibold tracking-wider text-[#c64d1e]">PRINCIPIO DE DISEÑO</p>
            <p class="mt-3 text-lg font-semibold">El ERP conserva los maestros. La vertical gestiona la operación del restaurante.</p>
          </div>
        </div>

        <div class="rounded-2xl bg-[#15181d] p-6 text-white shadow-xl md:p-8">
          <div class="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div class="rounded-xl border border-white/10 bg-white/5 p-5">
              <p class="font-mono text-[10px] tracking-widest text-[#ffb45f]">EXPERIENCIAS</p>
              <p class="mt-2 font-semibold">Back Office · POS · Cocina · QR</p>
            </div>
            <div class="text-center text-2xl text-[#f47526]">⇄</div>
            <div class="rounded-xl border border-[#aeb5c0]/25 bg-[#aeb5c0]/5 p-5">
              <p class="font-mono text-[10px] tracking-widest text-[#dfe3ea]">SERVICIOS</p>
              <p class="mt-2 font-semibold">Contratos y API REST</p>
            </div>
          </div>
          <div class="mx-auto h-8 w-px bg-gradient-to-b from-[#f47526] to-[#aeb5c0]" />
          <div class="rounded-xl border border-[#f47526]/30 bg-[#f47526]/10 p-5 text-center">
            <p class="font-mono text-[10px] tracking-widest text-[#ffb45f]">DOMINIO EMPRESARIAL</p>
            <p class="mt-2 font-semibold">ERP · artículos · proveedores · almacenes · sedes</p>
          </div>

          <dl class="mt-7 divide-y divide-white/10 border-t border-white/10">
            <div v-for="item in stack" :key="item[0]" class="grid gap-1 py-3 sm:grid-cols-[140px_1fr]">
              <dt class="text-xs font-semibold text-[#ffb45f]">{{ item[0] }}</dt>
              <dd class="text-xs leading-relaxed text-[#bfc5ce]">{{ item[1] }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="section-container">
        <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p class="font-mono text-xs tracking-[0.2em] text-[#f47526]">04 · ESTADO DEL PRODUCTO</p>
            <h2 class="mt-4 text-4xl font-bold md:text-5xl">Transparencia sobre el avance.</h2>
            <p class="mt-5 text-karma-text-secondary">El caso distingue las capacidades demostrables de las siguientes etapas. El objetivo no es mostrar una maqueta estática, sino la dirección de un producto modular.</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-karma-void p-6 md:p-8">
            <div v-for="(item, index) in roadmap" :key="item.label" class="relative flex gap-4 pb-7 last:pb-0">
              <div v-if="index < roadmap.length - 1" class="absolute left-[11px] top-6 h-full w-px bg-white/10" />
              <span class="relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border" :class="item.complete ? 'border-[#f47526] bg-[#f47526]/15 text-[#ffb45f]' : 'border-[#7c8592]/60 bg-[#aeb5c0]/10 text-[#dfe3ea]'">
                <span class="text-[10px]">{{ item.complete ? '✓' : index + 1 }}</span>
              </span>
              <div class="flex flex-1 items-center justify-between gap-4">
                <p class="font-medium">{{ item.label }}</p>
                <span class="text-right font-mono text-[10px]" :class="item.complete ? 'text-[#ffb45f]' : 'text-[#8d95a5]'">{{ item.state }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-white/10 bg-karma-void py-20">
      <div class="section-container text-center">
        <p class="font-mono text-xs tracking-[0.2em] text-[#f47526]">DEMO FUNCIONAL</p>
        <h2 class="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Conoce los flujos sin exponer activos privados.</h2>
        <p class="mx-auto mt-5 max-w-2xl text-karma-text-secondary">La versión pública utiliza información ficticia y almacenamiento local. No expone el repositorio fuente, credenciales, información de clientes ni reglas de negocio sensibles.</p>
        <a :href="demoUrl" class="mt-8 inline-flex rounded-lg bg-[#f47526] px-7 py-4 font-semibold text-white shadow-[0_0_32px_rgba(244,117,38,0.28)] transition hover:bg-[#ff8a3d]">Abrir Mesa en modo demo →</a>
      </div>
    </section>

    <footer class="border-t border-white/10 py-8">
      <div class="section-container flex flex-col gap-3 text-xs text-karma-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Brandon Navarro · Caso de estudio de producto</p>
        <a :href="portfolioUrl" class="transition hover:text-[#ffb45f]">Volver al portafolio</a>
      </div>
    </footer>
  </main>
</template>
