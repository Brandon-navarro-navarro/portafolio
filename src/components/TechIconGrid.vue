<script setup lang="ts">
// Grilla de íconos de tecnologías — como en redoyanulhaque.me: cada
// tecnología es una tarjeta cuadrada con su ícono, en grilla compacta.
// Sin dependencias externas de íconos de marca (temas de licencia): se usa
// texto/monograma estilizado por tarjeta en vez de logos SVG reales.
interface TechItem {
  name: string
  glyph: string // 1-3 caracteres representativos
}

const techs: TechItem[] = [
  { name: 'C# / .NET', glyph: 'C#' },
  { name: 'ASP.NET Core', glyph: '.N' },
  { name: 'SQL Server', glyph: 'SQL' },
  { name: 'Azure', glyph: 'Az' },
  { name: 'Azure Functions', glyph: 'λ' },
  { name: 'Service Bus', glyph: 'SB' },
  { name: 'Java 17', glyph: 'J' },
  { name: 'Spring WebFlux', glyph: 'Sp' },
  { name: 'Project Reactor', glyph: 'Rx' },
  { name: 'R2DBC', glyph: 'R2' },
  { name: 'Angular', glyph: 'Ng' },
  { name: 'Vue 3', glyph: 'V' },
  { name: 'TypeScript', glyph: 'TS' },
  { name: 'Node.js', glyph: 'JS' },
  { name: 'NestJS', glyph: 'N' },
  { name: 'RabbitMQ', glyph: 'Rq' },
  { name: 'Oracle', glyph: 'Or' },
  { name: 'PostgreSQL', glyph: 'Pg' },
  { name: 'Docker', glyph: 'Do' },
  { name: 'Git / Azure DevOps', glyph: 'Git' },
  { name: 'REST APIs', glyph: 'API' },
]
</script>

<template>
  <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3">
    <div
      v-for="tech in techs"
      :key="tech.name"
      class="group flex flex-col items-center justify-center gap-2 aspect-square rounded-xl bg-karma-surface border border-karma-border hover:border-karma-purple-400/70 hover:shadow-glow-purple transition-all duration-200"
    >
      <span
        class="font-mono text-sm font-bold text-karma-lilac-300 group-hover:text-karma-lilac-100 transition-colors"
      >
        {{ tech.glyph }}
      </span>
      <span class="text-[10px] text-karma-text-muted text-center px-1 leading-tight">
        {{ tech.name }}
      </span>
    </div>
  </div>
</template>
