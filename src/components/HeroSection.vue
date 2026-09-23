<script setup lang="ts">
import ProfessionalMark from '@/components/ProfessionalMark.vue'

const disciplines = [
  { label: 'Arquitectura', detail: 'ERP · APIs', variant: 'orbit' as const },
  { label: 'Integraciones', detail: 'Azure · Retail', variant: 'link' as const },
  { label: 'Producto', detail: '.NET · Vue', variant: 'layers' as const },
]
</script>

<template>
  <section id="hero" class="relative flex min-h-[820px] items-center overflow-hidden border-b border-white/10 pt-16">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(124,85,223,0.12),transparent_30%)]" />
    <div class="section-container relative grid gap-16 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div>
        <div class="mb-8 flex items-center gap-4">
          <span class="h-px w-10 bg-karma-purple-400" />
          <p class="section-eyebrow">Brandon Navarro · Senior Full Stack Developer</p>
        </div>
        <h1 class="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">
          Software empresarial.
          <span class="mt-2 block text-gradient-karma">Integraciones que escalan.</span>
        </h1>
        <p class="mt-8 max-w-xl text-base leading-8 text-karma-text-secondary md:text-lg">
          Más de 7 años diseñando sistemas ERP, APIs e integraciones para operaciones reales.
          Especialidad en C#/.NET y experiencia complementaria en Java reactivo.
        </p>
        <div class="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            class="border border-karma-purple-400 bg-karma-purple-500 px-6 py-3 text-sm font-semibold transition hover:bg-karma-purple-400"
          >
            Explorar proyectos
          </a>
          <a
            href="#contact"
            class="border border-white/15 px-6 py-3 text-sm font-semibold text-karma-text-secondary transition hover:border-white/35 hover:text-white"
          >
            Contactar
          </a>
        </div>
        <div class="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-karma-text-muted">
          <span>Lima, Perú</span>
          <span>.NET / Azure / Vue</span>
          <span>ERP &amp; Integraciones</span>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-xl">
        <div class="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div class="grid grid-cols-3 border-y border-white/10">
          <div
            v-for="(discipline, index) in disciplines"
            :key="discipline.label"
            class="flex min-h-[310px] flex-col items-center justify-center px-3 text-center"
            :class="index !== 0 ? 'border-l border-white/10' : ''"
          >
            <ProfessionalMark :variant="discipline.variant" :uid="`hero-${index}`" :size="112" />
            <p class="mt-5 text-sm font-semibold text-white">{{ discipline.label }}</p>
            <p class="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-karma-text-muted">{{ discipline.detail }}</p>
          </div>
        </div>
        <p class="mt-4 text-right font-mono text-[9px] uppercase tracking-[0.2em] text-karma-text-muted">
          Ingeniería · Sistemas · Producto
        </p>
      </div>
    </div>
  </section>
</template>
