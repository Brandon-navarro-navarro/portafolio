<script setup lang="ts">
import { manufacturingCases } from './manufacturing-cases'
const props = defineProps<{ kind: 'confeccion' | 'produccion-editorial' }>()
const product = manufacturingCases.find((item) => item.slug === props.kind)!
const base = import.meta.env.BASE_URL
</script>

<template>
  <main
    class="min-h-screen bg-karma-black text-karma-text-primary"
    :style="{ '--product-accent': product.accent, '--product-soft': product.soft }"
  >
    <header class="border-b border-white/10">
      <div class="section-container flex flex-wrap items-center justify-between gap-4 py-5">
        <a :href="`${base}#projects`" class="text-sm text-karma-text-secondary hover:text-white"
          >← Volver al portafolio</a
        >
        <span class="font-mono text-xs text-[var(--product-soft)]">CASO DE PRODUCTO</span>
      </div>
    </header>
    <section class="section-container grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
      <div>
        <img :src="`${base}${product.icon}`" :alt="`Símbolo de ${product.name}`" class="mb-8 h-24 w-24" />
        <p class="font-mono text-xs tracking-widest text-[var(--product-soft)]">
          VERTICAL AUTÓNOMA · CASO DE PRODUCTO EN PREPARACIÓN
        </p>
        <p class="mt-5 text-xl text-karma-text-secondary">{{ product.name }}</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {{ product.headline }}
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-karma-text-secondary">{{ product.description }}</p>
        <a
          href="#alcance"
          class="mt-8 inline-flex border border-[var(--product-accent)] px-6 py-3 font-semibold text-[var(--product-soft)] hover:bg-white/5"
          >Explorar el alcance ↓</a
        >
        <p class="mt-4 text-sm text-karma-text-muted">
          Propuesta en preparación. Sin demo ni fecha de lanzamiento anunciada.
        </p>
      </div>
      <div class="border border-[var(--product-accent)] bg-karma-surface p-6 md:p-8">
        <h2 class="font-mono text-xs tracking-widest text-[var(--product-soft)]">
          RECORRIDO PREVISTO DEL TRABAJO
        </h2>
        <ol class="mt-6 space-y-5">
          <li
            v-for="(step, index) in product.steps"
            :key="step"
            class="flex items-start gap-4 border-t border-white/10 pt-5"
          >
            <span class="font-mono text-sm text-[var(--product-soft)]">0{{ index + 1 }}</span>
            <span>{{ step }}</span>
          </li>
        </ol>
      </div>
    </section>
    <section id="alcance" class="border-y border-white/10 bg-karma-void py-20">
      <div class="section-container">
        <p class="section-eyebrow">01 · ALCANCE PROPUESTO</p>
        <h2 class="mt-4 text-3xl font-semibold md:text-4xl">La operación propia del rubro.</h2>
        <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="[title, description] in product.features"
            :key="title"
            class="border border-karma-border bg-karma-black p-6"
          >
            <h3 class="text-xl font-semibold text-[var(--product-soft)]">{{ title }}</h3>
            <p class="mt-4 leading-relaxed text-karma-text-secondary">{{ description }}</p>
          </article>
        </div>
        <p class="mt-8 text-sm leading-relaxed text-karma-text-muted">{{ product.limits }}</p>
      </div>
    </section>
    <section class="section-container grid gap-8 py-20 lg:grid-cols-2">
      <article class="border border-karma-border p-6 md:p-8">
        <p class="section-eyebrow">02 · CONTROL ESENCIAL</p>
        <h2 class="mt-4 text-3xl font-semibold">Inventario básico, dentro del sistema.</h2>
        <p class="mt-6 leading-relaxed text-karma-text-secondary">{{ product.inventory }}</p>
        <p class="mt-5 text-sm text-karma-text-muted">
          La propuesta permite operar sin contratar el ERP. El inventario inicial se limita al control
          necesario para el trabajo diario.
        </p>
      </article>
      <article class="border border-[var(--product-accent)] p-6 md:p-8">
        <p class="section-eyebrow">03 · ESCALAMIENTO PREVISTO</p>
        <h2 class="mt-4 text-3xl font-semibold">Más coordinación con la plataforma ERP.</h2>
        <p class="mt-6 leading-relaxed text-karma-text-secondary">{{ product.upgrade }}</p>
        <p class="mt-5 text-sm leading-relaxed text-karma-text-muted">
          Al activar Inventarios del ERP, este será la fuente central de existencias y movimientos. La
          vertical conservará los procesos del rubro y registrará sus operaciones contra ese inventario
          compartido. Esta integración es parte del alcance previsto.
        </p>
        <a :href="`${base}proyectos/erp/`" class="mt-6 inline-flex text-[var(--product-soft)] hover:underline"
          >Conocer la plataforma ERP →</a
        >
      </article>
    </section>
    <footer class="border-t border-white/10 py-8">
      <div class="section-container flex flex-wrap justify-between gap-4 text-sm text-karma-text-muted">
        <p>{{ product.name }} · Próximamente</p>
        <a :href="`${base}#projects`" class="hover:text-white">Ver los demás casos de producto →</a>
      </div>
    </footer>
  </main>
</template>
