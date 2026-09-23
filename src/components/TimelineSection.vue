<script setup lang="ts">
// Timeline de experiencia laboral, extraído directo del CV de Brandon.
// No existía esta vista antes — Proyectos muestra casos técnicos puntuales,
// pero no la progresión de empresas/roles en el tiempo. Orden: más reciente
// primero.
interface Role {
  title: string
  company: string
  period: string
  highlights: string[]
  stack: string[]
  current?: boolean
}

const roles: Role[] = [
  {
    title: 'Analista Programador Senior',
    company: 'ISP Consulting · Cliente: Intercorp Retail',
    period: 'Jun 2026 — Actualidad',
    highlights: [
      'Asignado al cliente Intercorp Retail en modalidad híbrida, con enfoque en análisis de sistemas de software y desarrollo con Vue.js.',
    ],
    stack: ['Vue.js', 'Análisis de sistemas', 'Intercorp Retail'],
    current: true,
  },
  {
    title: 'Programador',
    company: 'DINET S.A.',
    period: 'Feb 2025 — Abr 2026',
    highlights: [
      'Integración e-commerce AliExpress – Serhafen – Dinet: recepción automatizada, tracking end-to-end y cumplimiento de SLA.',
      'Integraciones empresariales mediante APIs REST, mensajería asíncrona y servicios Azure.',
    ],
    stack: ['C# / .NET', 'Azure Functions', 'Service Bus', 'SQL Server', 'Oracle', 'RabbitMQ'],
  },
  {
    title: 'Software Engineer',
    company: 'TS Net S.A. (Evol) · Cliente: Interbank',
    period: 'Jul 2024 — Oct 2024',
    highlights: [
      'Análisis, desarrollo y maquetado de interfaces para sistema de Gestión de Requerimientos de Accesos.',
      'Integraciones de APIs REST.',
    ],
    stack: ['.NET Core', 'Angular', 'TypeScript', 'SQL Server', 'Power Automate', 'Azure'],
  },
  {
    title: 'Analista Desarrollador',
    company: 'Simplifica INC S.A.C.',
    period: 'Ene 2023 — Jul 2024',
    highlights: [
      'Mantenimiento y mejora de ERP en C#/.NET + APIs Node.js; módulos Angular con arquitectura modular.',
      'Lideré equipo de 2 devs: estándares de código, QA y diseño UX en Adobe XD.',
    ],
    stack: ['C# / .NET', 'Angular', 'Node.js', 'TypeScript', 'Azure'],
  },
  {
    title: 'Desarrollador de Software',
    company: 'Procesos & Sistemas SAC',
    period: 'Mar 2018 — Dic 2022',
    highlights: [
      'Desarrollé y mejoré ERP (Logística, Ventas, Producción, Activos Fijos) con ASP.NET/C# y SQL Server.',
      'Integré plataformas e-commerce VTEX y WooCommerce; soporte post-implementación.',
    ],
    stack: ['C# / .NET', 'SQL Server', 'jQuery', 'Bootstrap', 'VTEX', 'WooCommerce'],
  },
]
</script>

<template>
  <section id="timeline" class="border-b border-white/10 bg-karma-void/45 py-24">
    <div class="section-container">
      <p class="section-eyebrow mb-4">02 · TRAYECTORIA</p>
      <h2 class="text-3xl font-semibold tracking-tight md:text-5xl mb-14">
        Más de 7 años <span class="text-gradient-karma">construyendo ERPs</span>
      </h2>

      <div class="relative">
        <!-- Línea vertical del timeline -->
        <div class="absolute left-[5px] top-2 bottom-2 w-px bg-white/10 md:left-3" />

        <div class="space-y-10">
          <div v-for="role in roles" :key="`${role.company}-${role.period}`" class="relative pl-8 md:pl-10">
            <!-- Punto del timeline -->
            <span class="absolute left-0 top-2 h-2.5 w-2.5 rotate-45 border border-karma-purple-400 bg-karma-black md:left-2" />

            <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
              <h3 class="text-lg font-medium">
                {{ role.title }} <span class="text-karma-text-muted font-normal">— {{ role.company }}</span>
              </h3>
              <span class="font-mono text-[10px] uppercase tracking-wider text-karma-lilac-300 whitespace-nowrap">{{ role.period }}</span>
            </div>

            <ul class="space-y-1 mb-3">
              <li
                v-for="h in role.highlights"
                :key="h"
                class="text-sm text-karma-text-secondary leading-relaxed before:content-['—'] before:mr-2 before:text-karma-text-muted"
              >
                {{ h }}
              </li>
            </ul>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in role.stack"
                :key="tech"
                class="border-l border-white/15 px-2 py-0.5 text-[10px] font-mono text-karma-text-muted"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
