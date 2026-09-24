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

const caseStudies = [
  {
    eyebrow: 'VERTICAL ERP / RESTAURANTE',
    title: 'Mesa · Gestión de restaurante',
    description:
      'Back office para configurar y supervisar la operación gastronómica: espacios, carta, inventario, recetas y parámetros por establecimiento.',
    modules: ['Salones y mesas', 'Carta y combos', 'Inventario e insumos', 'Recetas y costos', 'Almacenes', 'Configuración operativa'],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS'],
    caseStudyUrl: `${import.meta.env.BASE_URL}proyectos/restaurante/`,
    demoUrl: `${import.meta.env.BASE_URL}demos/mesa/#/login?redirect=/dashboard`,
    logoUrl: `${import.meta.env.BASE_URL}restaurant-flame.svg`,
    logoAlt: 'Símbolo de Mesa',
    accent: '#f47526',
    accentSoft: '#ffb45f',
    repository: 'Código fuente privado',
  },
  {
    eyebrow: 'VERTICAL ERP / HOTELERÍA',
    title: 'Alba · Gestión hotelera',
    description:
      'Operación hotelera de punta a punta: habitaciones, reservas, recepción, housekeeping, mantenimiento y tarifas por temporada.',
    modules: ['Habitaciones y pisos', 'Reservas y recepción', 'Huéspedes', 'Housekeeping', 'Mantenimiento', 'Tarifas y temporadas'],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS'],
    caseStudyUrl: `${import.meta.env.BASE_URL}proyectos/hotel/`,
    demoUrl: 'https://kreyshin.github.io/KM.WEB.HOTEL/demo/',
    logoUrl: 'https://raw.githubusercontent.com/Kreyshin/KM.WEB.HOTEL/main/LogoSystem.png',
    logoAlt: 'Alba, gestión hotelera',
    accent: '#00aed6',
    accentSoft: '#4e9bf7',
    repository: 'Repositorio público',
  },
  {
    eyebrow: 'VERTICAL ERP / TALLER AUTOMOTRIZ',
    title: 'Torque · Gestión de taller',
    description:
      'Control operativo del taller mecánico: órdenes, bahías, presupuestos, repuestos, baremos, citas y entrega del vehículo.',
    modules: ['Órdenes de trabajo', 'Bahías y carga', 'Presupuestos', 'Clientes y vehículos', 'Repuestos', 'Citas y servicios'],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS'],
    caseStudyUrl: `${import.meta.env.BASE_URL}proyectos/taller/`,
    demoUrl: 'https://kreyshin.github.io/KM.WEB.TALLER.AUTO/demo/',
    logoUrl: 'https://raw.githubusercontent.com/Kreyshin/KM.WEB.TALLER.AUTO/main/TallerSystem.png',
    logoAlt: 'Torque, gestión de taller mecánico',
    accent: '#fd263f',
    accentSoft: '#5e87b8',
    repository: 'Repositorio público',
  },
]

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

      <div class="mt-8 grid gap-6">
      <article
        v-for="caseStudy in caseStudies"
        :key="caseStudy.title"
        class="group relative overflow-hidden border bg-karma-black p-6 transition-colors md:p-8"
        :style="{ borderColor: `${caseStudy.accent}66` }"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-50"
          :style="{ background: `radial-gradient(circle at 88% 0%, ${caseStudy.accent}22, transparent 42%)` }"
        />

        <div class="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div>
            <div class="mb-5 flex items-start justify-between gap-5">
              <div class="flex flex-wrap items-center gap-3">
                <span
                  class="border-l pl-3 text-[10px] font-mono tracking-wider"
                  :style="{ borderColor: caseStudy.accent, color: caseStudy.accentSoft }"
                >
                  CASO DE PRODUCTO
                </span>
                <span class="text-xs font-mono text-karma-text-muted">{{ caseStudy.repository }}</span>
              </div>
              <img
                :src="caseStudy.logoUrl"
                :alt="caseStudy.logoAlt"
                class="h-20 w-20 shrink-0 object-contain md:h-24 md:w-24"
              />
            </div>

            <p class="font-mono text-xs tracking-widest mb-2" :style="{ color: caseStudy.accent }">
              {{ caseStudy.eyebrow }}
            </p>
            <h3 class="text-2xl md:text-3xl font-bold mb-3 group-hover:text-karma-lilac-300 transition-colors">
              {{ caseStudy.title }}
            </h3>
            <p class="text-karma-text-secondary leading-relaxed max-w-2xl mb-6">
              {{ caseStudy.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in caseStudy.stack"
                :key="tech"
                class="border-l border-white/15 px-2 py-0.5 text-[10px] font-mono text-karma-text-secondary"
              >
                {{ tech }}
              </span>
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                :href="caseStudy.caseStudyUrl"
                class="inline-flex items-center gap-2 border px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                :style="{ borderColor: caseStudy.accent, backgroundColor: caseStudy.accent }"
              >
                Ver caso de estudio <span aria-hidden="true">→</span>
              </a>
              <a
                :href="caseStudy.demoUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center border border-white/15 px-5 py-3 text-sm font-semibold text-karma-text-secondary transition hover:border-white/30 hover:text-white"
              >
                Abrir demo ↗
              </a>
            </div>
          </div>

          <div class="border border-white/10 bg-karma-void/70 p-5 md:p-6">
            <p class="font-mono text-xs text-karma-purple-400 tracking-widest mb-4">
              MÓDULOS PRINCIPALES
            </p>
            <ul class="grid sm:grid-cols-2 gap-3">
              <li
                v-for="module in caseStudy.modules"
                :key="module"
                class="flex items-center gap-2 text-sm text-karma-text-secondary"
              >
                <span class="h-px w-4 shrink-0" :style="{ backgroundColor: caseStudy.accent }" />
                {{ module }}
              </li>
            </ul>

            <p class="mt-5 pt-4 border-t border-karma-border text-xs text-karma-text-muted leading-relaxed">
              Caso construido con datos ficticios. No publica credenciales ni información de clientes.
            </p>
          </div>
        </div>
      </article>
      </div>
    </div>
  </section>
</template>
