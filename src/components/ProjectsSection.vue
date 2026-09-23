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
    'Back office para configurar y supervisar la operación de un restaurante: espacios, carta, inventario, recetas y parámetros por establecimiento.',
  modules: [
    'Salones y mesas',
    'Carta y combos',
    'Inventario e insumos',
    'Recetas y costos',
    'Almacenes',
    'Configuración operativa',
  ],
  stack: ['C# / .NET', 'API REST', 'SQL Server', 'Vue.js'],
  caseStudyUrl: `${import.meta.env.BASE_URL}proyectos/restaurante/`,
}

const statusLabel: Record<Project['status'], string> = {
  live: 'En producción',
  completed: 'Completado',
  'in-progress': 'En desarrollo',
}
</script>

<template>
  <section id="projects" class="border-b border-white/10 bg-karma-void/45 py-24">
    <div class="section-container">
      <p class="section-eyebrow mb-4">05 · PROYECTOS</p>
      <h2 class="text-3xl font-semibold tracking-tight md:text-5xl mb-12">
        Trabajo <span class="text-gradient-karma">destacado</span>
      </h2>

      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group border border-white/10 bg-karma-black p-6 transition-colors hover:border-karma-purple-400/50"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="border-l border-karma-purple-400 pl-2 text-[10px] font-mono uppercase tracking-wider text-karma-lilac-300">
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
              class="border-l border-white/15 px-2 py-0.5 text-[10px] font-mono text-karma-text-muted"
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
        class="group relative mt-8 overflow-hidden border border-karma-purple-500/35 bg-karma-black p-6 transition-colors hover:border-karma-purple-400/60 md:p-8"
      >
        <div class="pointer-events-none absolute inset-0 bg-karma-radial opacity-60" />

        <div class="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div>
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="border-l border-karma-purple-400 pl-3 text-[10px] font-mono tracking-wider text-karma-lilac-300">
                CASO DE PRODUCTO
              </span>
              <span class="text-xs font-mono text-karma-text-muted">Código fuente privado</span>
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
                class="border-l border-white/15 px-2 py-0.5 text-[10px] font-mono text-karma-text-secondary"
              >
                {{ tech }}
              </span>
            </div>

            <a
              :href="restaurantCaseStudy.caseStudyUrl"
              class="mt-6 inline-flex items-center gap-2 border border-karma-purple-400 bg-karma-purple-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-karma-purple-400"
            >
              Ver caso de estudio
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div class="border border-white/10 bg-karma-void/70 p-5 md:p-6">
            <p class="font-mono text-xs text-karma-purple-400 tracking-widest mb-4">
              MÓDULOS PRINCIPALES
            </p>
            <ul class="grid sm:grid-cols-2 gap-3">
              <li
                v-for="module in restaurantCaseStudy.modules"
                :key="module"
                class="flex items-center gap-2 text-sm text-karma-text-secondary"
              >
                <span class="h-px w-4 shrink-0 bg-karma-purple-400" />
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
