<script setup lang="ts">
// Proyectos públicos y un caso real de integración empresarial.
interface Project {
  title: string
  description: string
  stack: string[]
  status: 'live' | 'completed' | 'in-progress'
  repoUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    title: 'Reto Técnico Interbank',
    description:
      'Sistema de clientes y productos financieros basado en microservicios, con BFF para consolidar información y flujos reactivos de extremo a extremo.',
    stack: ['Java 17', 'Spring WebFlux', 'Microservicios', 'SQL Server', 'Docker'],
    status: 'completed',
    repoUrl: 'https://github.com/Brandon-navarro-navarro/RetoTecnicoInterbank',
  },
  {
    title: 'IDM · Product Service',
    description:
      'Microservicio CRUD de productos con programación reactiva y funcional, persistencia no bloqueante, validaciones, manejo uniforme de errores y pruebas automatizadas.',
    stack: ['Java 17', 'Spring WebFlux', 'R2DBC', 'Reactor Test', 'Docker'],
    status: 'completed',
    repoUrl: 'https://github.com/Brandon-navarro-navarro/IDM-PruebaTecnica',
  },
  {
    title: 'Integración AliExpress – Serhafen – Dinet',
    description:
      'Integración e-commerce con recepción automatizada, tracking end-to-end y cumplimiento de SLA mediante APIs, mensajería asíncrona y servicios Azure.',
    stack: ['C# / .NET', 'Azure Functions', 'Service Bus', 'RabbitMQ'],
    status: 'live',
  },
]

const statusLabel: Record<Project['status'], string> = {
  live: 'En producción',
  completed: 'Completado',
  'in-progress': 'En desarrollo',
}
</script>

<template>
  <section id="projects" class="py-24 border-t border-karma-border/50">
    <div class="section-container">
      <p class="font-mono text-sm text-karma-purple-400 mb-3 tracking-widest">03 · PROYECTOS</p>
      <h2 class="text-3xl md:text-4xl font-bold mb-12">
        Trabajo <span class="text-gradient-karma">destacado</span>
      </h2>

      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group rounded-xl bg-karma-surface border border-karma-border p-6 hover:border-karma-purple-400/60 transition-colors"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-mono px-2 py-1 rounded-full bg-karma-void text-karma-lilac-300 border border-karma-border">
              {{ statusLabel[project.status] }}
            </span>
          </div>

          <h3 class="text-xl font-semibold mb-2 group-hover:text-karma-lilac-300 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-karma-text-secondary text-sm mb-4">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="text-xs font-mono px-2 py-1 rounded-md bg-karma-void text-karma-text-muted"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex gap-4 text-sm">
            <a
              v-if="project.repoUrl"
              :href="project.repoUrl"
              class="text-karma-purple-400 hover:text-karma-lilac-300 transition-colors"
              target="_blank"
              rel="noopener"
            >
              Repositorio →
            </a>
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              class="text-karma-purple-400 hover:text-karma-lilac-300 transition-colors"
              target="_blank"
              rel="noopener"
            >
              Demo en vivo →
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
