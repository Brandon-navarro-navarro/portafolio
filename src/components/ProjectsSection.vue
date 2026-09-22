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

const restaurantCaseStudy = {
  title: 'ERP · Vertical de Restaurante',
  description:
    'Solución empresarial orientada a centralizar la operación de un restaurante, desde la atención y preparación de pedidos hasta el control de caja e inventario.',
  modules: [
    'Mesas y pedidos',
    'Flujo de cocina',
    'Caja y ventas',
    'Inventario e insumos',
    'Roles y permisos',
    'Reportes operativos',
  ],
  stack: ['C# / .NET', 'API REST', 'SQL Server', 'Vue.js'],
}

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

      <article
        class="group relative mt-8 overflow-hidden rounded-2xl border border-karma-purple-500/40 bg-karma-surface p-6 md:p-8 hover:border-karma-purple-400/70 transition-colors"
      >
        <div class="pointer-events-none absolute inset-0 bg-karma-radial opacity-60" />

        <div class="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div>
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="text-xs font-mono px-3 py-1.5 rounded-full bg-karma-purple-500/15 text-karma-lilac-300 border border-karma-purple-500/30">
                CASO DE ESTUDIO PRIVADO
              </span>
              <span class="text-xs font-mono text-karma-text-muted">Código fuente protegido</span>
            </div>

            <p class="font-mono text-xs text-karma-purple-400 tracking-widest mb-2">
              VERTICAL ERP / RESTAURANTE
            </p>
            <h3 class="text-2xl md:text-3xl font-bold mb-3 group-hover:text-karma-lilac-300 transition-colors">
              {{ restaurantCaseStudy.title }}
            </h3>
            <p class="text-karma-text-secondary leading-relaxed max-w-2xl mb-6">
              {{ restaurantCaseStudy.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in restaurantCaseStudy.stack"
                :key="tech"
                class="text-xs font-mono px-3 py-1.5 rounded-md bg-karma-void border border-karma-border text-karma-text-secondary"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="rounded-xl bg-karma-void/80 border border-karma-border p-5 md:p-6">
            <p class="font-mono text-xs text-karma-purple-400 tracking-widest mb-4">
              MÓDULOS PRINCIPALES
            </p>
            <ul class="grid sm:grid-cols-2 gap-3">
              <li
                v-for="module in restaurantCaseStudy.modules"
                :key="module"
                class="flex items-center gap-2 text-sm text-karma-text-secondary"
              >
                <span class="w-1.5 h-1.5 shrink-0 rounded-full bg-karma-purple-400 shadow-glow-purple" />
                {{ module }}
              </li>
            </ul>

            <p class="mt-5 pt-4 border-t border-karma-border text-xs text-karma-text-muted leading-relaxed">
              Se presenta el alcance funcional y la arquitectura general sin exponer repositorios,
              datos de clientes, credenciales ni reglas de negocio sensibles.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
