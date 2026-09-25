<script setup lang="ts">
import ProfessionalMark from '@/components/ProfessionalMark.vue'

const pillars = [
  {
    title: 'Arquitectura backend',
    description:
      'Servicios empresariales, reglas de negocio y APIs con foco principal en el ecosistema .NET.',
    variant: 'architecture' as const,
  },
  {
    title: 'Integración de sistemas',
    description: 'Flujos entre ERP, comercio electrónico, mensajería y servicios cloud con trazabilidad.',
    variant: 'integration' as const,
  },
  {
    title: 'Entrega de producto',
    description:
      'Análisis funcional, interfaces, calidad y acompañamiento desde el requerimiento hasta producción.',
    variant: 'product' as const,
  },
]

const stackGroups = [
  { label: 'Backend', tools: ['C#', '.NET / ASP.NET Core', 'Java 17', 'Spring WebFlux', 'Node.js'] },
  { label: 'Frontend', tools: ['Vue 3', 'Angular', 'TypeScript', 'Pinia', 'Tailwind CSS'] },
  { label: 'Datos', tools: ['SQL Server', 'Oracle', 'PostgreSQL', 'R2DBC'] },
  {
    label: 'Cloud e integración',
    tools: ['Azure Functions', 'Service Bus', 'RabbitMQ', 'REST APIs', 'Docker'],
  },
]
</script>

<template>
  <section id="stack" class="py-24 border-t border-karma-border/50">
    <div class="section-container">
      <p class="section-eyebrow mb-4">03 · CAPACIDADES</p>
      <h2 class="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
        Ingeniería aplicada a <span class="text-gradient-karma">operaciones reales.</span>
      </h2>
      <p class="mt-5 max-w-2xl leading-7 text-karma-text-secondary">
        Un perfil que conecta arquitectura, integración y producto sin perder de vista el contexto del
        negocio.
      </p>

      <div class="mt-14 grid border-y border-white/10 lg:grid-cols-3">
        <article
          v-for="(pillar, index) in pillars"
          :key="pillar.title"
          class="flex min-h-[330px] flex-col items-start justify-between py-8 lg:px-8"
          :class="index > 0 ? 'border-t border-white/10 lg:border-l lg:border-t-0' : ''"
        >
          <ProfessionalMark :variant="pillar.variant" :uid="`pillar-${index}`" :size="104" />
          <div class="mt-8">
            <span class="font-mono text-[10px] tracking-[0.2em] text-karma-text-muted">0{{ index + 1 }}</span>
            <h3 class="mt-3 text-xl font-semibold">{{ pillar.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-karma-text-secondary">{{ pillar.description }}</p>
          </div>
        </article>
      </div>

      <div
        class="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div v-for="group in stackGroups" :key="group.label" class="bg-karma-black p-6">
          <p class="section-eyebrow">{{ group.label }}</p>
          <ul class="mt-5 space-y-3">
            <li
              v-for="tool in group.tools"
              :key="tool"
              class="flex items-center gap-3 text-sm text-karma-text-secondary"
            >
              <span class="h-px w-4 bg-karma-purple-400" />{{ tool }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
