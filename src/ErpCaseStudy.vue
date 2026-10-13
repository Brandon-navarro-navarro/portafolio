<script setup lang="ts">
const portfolioUrl = import.meta.env.BASE_URL
const modules = [
  {
    number: '01',
    name: 'Inventarios',
    summary: 'Saber qué hay, dónde está y cómo se mueve.',
    scope: [
      'Productos y unidades de medida',
      'Almacenes y existencias',
      'Entradas, salidas y transferencias',
      'Kardex y trazabilidad de movimientos',
    ],
    connection: 'Comparte disponibilidad con Ventas y materiales con Producción.',
  },
  {
    number: '02',
    name: 'Ventas',
    summary: 'Seguir la operación comercial de principio a fin.',
    scope: [
      'Clientes y condiciones comerciales',
      'Cotizaciones y pedidos',
      'Precios y descuentos',
      'Despachos y seguimiento de ventas',
    ],
    connection: 'Consulta existencias y conecta la demanda con inventarios y producción.',
  },
  {
    number: '03',
    name: 'Producción',
    summary: 'Convertir materiales en productos con control.',
    scope: [
      'Productos y listas de materiales',
      'Órdenes de producción',
      'Consumo de insumos',
      'Registro de productos terminados',
    ],
    connection: 'Relaciona las órdenes con el consumo y el ingreso de stock en Inventarios.',
  },
  {
    number: '04',
    name: 'Seguridad',
    summary: 'Definir quién puede hacer qué en cada proceso.',
    scope: [
      'Usuarios y roles',
      'Permisos por módulo y acción',
      'Acceso a la plataforma',
      'Bitácora de operaciones',
    ],
    connection: 'Acompaña a todos los módulos con permisos y trazabilidad de acciones.',
  },
]
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-karma-black text-karma-text-primary">
    <header class="border-b border-white/10 bg-karma-black/90">
      <div class="section-container flex min-h-16 items-center justify-between gap-4 py-4">
        <a
          :href="portfolioUrl"
          class="font-mono text-xs text-karma-text-secondary transition hover:text-white"
          >← BRANDON.NAVARRO</a
        >
        <span
          class="border border-karma-purple-400/40 px-3 py-1 font-mono text-[10px] tracking-widest text-karma-lilac-300"
          >PRÓXIMAMENTE</span
        >
      </div>
    </header>

    <section class="section-container grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center md:py-28">
      <div>
        <img
          :src="`${portfolioUrl}favicon.svg`"
          alt="Símbolo de la plataforma ERP"
          class="mb-8 h-20 w-20 object-contain"
        />
        <p class="font-mono text-xs tracking-[0.2em] text-karma-lilac-300">
          CASO DE PRODUCTO / PLATAFORMA ERP
        </p>
        <h1 class="mt-5 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Un sistema.<br /><span class="text-gradient-karma">Toda la operación.</span>
        </h1>
        <p class="mt-7 max-w-xl text-lg leading-relaxed text-karma-text-secondary">
          Una plataforma ERP integrada, organizada en Inventarios, Ventas, Producción y Seguridad. Procesos
          conectados y una base de información compartida para gestionar el negocio.
        </p>
        <a
          href="#modulos"
          class="mt-8 inline-flex bg-karma-purple-500 px-6 py-3 font-semibold text-white transition hover:bg-karma-purple-600"
          >Explorar los módulos ↓</a
        >
        <p class="mt-4 text-xs leading-relaxed text-karma-text-muted">
          Presentación del alcance previsto · Caso detallado y demo próximamente
        </p>
      </div>
      <div class="border border-karma-border bg-karma-surface p-6 md:p-8">
        <p class="font-mono text-xs tracking-widest text-karma-text-muted">ESTRUCTURA DE LA PLATAFORMA</p>
        <div class="mt-7 border border-karma-purple-400/40 bg-karma-purple-500/10 p-6">
          <p class="text-2xl font-semibold">Plataforma ERP</p>
          <p class="mt-2 text-sm text-karma-text-secondary">Información y procesos compartidos</p>
        </div>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            v-for="module in modules"
            :key="module.number"
            :href="`#modulo-${module.number}`"
            class="border border-karma-border bg-karma-black p-5 transition hover:border-karma-purple-400"
          >
            <span class="font-mono text-xs text-karma-lilac-300">{{ module.number }}</span>
            <p class="mt-3 font-semibold">{{ module.name }}</p>
          </a>
        </div>
        <p class="mt-6 text-sm leading-relaxed text-karma-text-muted">
          Cuatro módulos dentro de una misma plataforma, conectados por la operación del negocio.
        </p>
      </div>
    </section>

    <section id="modulos" class="border-y border-white/10 bg-karma-void py-20 md:py-24">
      <div class="section-container">
        <p class="section-eyebrow">01 · MÓDULOS / ALCANCE PREVISTO</p>
        <h2 class="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
          Cada área tiene su espacio. Los procesos se conectan.
        </h2>
        <div class="mt-12 grid gap-6 lg:grid-cols-2">
          <article
            v-for="module in modules"
            :id="`modulo-${module.number}`"
            :key="module.number"
            class="scroll-mt-8 border border-karma-border bg-karma-black p-6 md:p-8"
          >
            <div class="flex items-center justify-between gap-4">
              <span class="font-mono text-xs text-karma-lilac-300">{{ module.number }}</span>
              <span class="font-mono text-[10px] tracking-widest text-karma-text-muted">PRÓXIMAMENTE</span>
            </div>
            <h3 class="mt-5 text-3xl font-semibold">{{ module.name }}</h3>
            <p class="mt-3 text-karma-text-secondary">{{ module.summary }}</p>
            <ul class="mt-6 space-y-3">
              <li
                v-for="item in module.scope"
                :key="item"
                class="flex items-center gap-3 text-sm text-karma-text-secondary"
              >
                <span class="h-px w-4 shrink-0 bg-karma-purple-400" />{{ item }}
              </li>
            </ul>
            <p class="mt-7 border-t border-karma-border pt-5 text-sm leading-relaxed text-karma-lilac-300">
              {{ module.connection }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-container grid gap-8 py-20 md:py-24 lg:grid-cols-2">
      <div>
        <p class="section-eyebrow">02 · PRÓXIMA PRESENTACIÓN</p>
        <h2 class="mt-4 text-3xl font-semibold md:text-4xl">El caso de producto está en preparación.</h2>
      </div>
      <div class="text-karma-text-secondary">
        <p class="leading-relaxed">
          Esta página adelanta la organización y el alcance previsto de la plataforma. La presentación
          completa incluirá los flujos de cada módulo y una demo para recorrerlos.
        </p>
        <p class="mt-4 leading-relaxed">
          Las capacidades descritas son parte de la propuesta; su disponibilidad se detallará al presentar el
          caso. La fecha de lanzamiento está por anunciar.
        </p>
        <a
          :href="`${portfolioUrl}#projects`"
          class="mt-7 inline-flex text-karma-lilac-300 transition hover:text-white"
          >Ver los demás casos de producto →</a
        >
      </div>
    </section>
    <footer class="border-t border-white/10 py-8">
      <div class="section-container flex flex-wrap justify-between gap-4 text-xs text-karma-text-muted">
        <p>Brandon Navarro · Plataforma ERP · Próximamente</p>
        <a :href="portfolioUrl" class="hover:text-white">Volver al portafolio</a>
      </div>
    </footer>
  </main>
</template>
