<script setup lang="ts">
// Stats rápidas (números duros) arriba, y debajo "cómo trabajo" — enfoque
// y forma de trabajar, que no se repite con Stack (ahí van las tecnologías)
// ni con Proyectos (ahí van los casos concretos). Esto llena el espacio
// vacío a la derecha sin duplicar contenido de otras secciones.
const stats = [
  { value: '7+', label: 'Años de experiencia' },
  { value: '10+', label: 'Tecnologías dominadas' },
  { value: '.NET', label: 'Especialidad principal' },
]

interface Approach {
  title: string
  description: string
}

const approach: Approach[] = [
  {
    title: 'De punta a punta',
    description:
      'Desde el levantamiento de requerimientos hasta el despliegue en producción, sin soltar el hilo del proyecto.',
  },
  {
    title: 'Legacy → moderno',
    description:
      'Especialista en migrar sistemas antiguos a arquitecturas actuales sin frenar la operación del negocio.',
  },
  {
    title: 'Liderazgo técnico',
    description: 'Lideré equipos de desarrollo definiendo estándares de código, QA y diseño UX.',
  },
  {
    title: 'Comunicación directa',
    description:
      'Traduzco entre negocio y desarrollo: lo que pide el cliente y lo que el sistema realmente necesita.',
  },
]
</script>

<template>
  <section id="about" class="border-b border-white/10 py-24">
    <div class="section-container grid md:grid-cols-2 gap-12 items-start">
      <div>
        <p class="section-eyebrow mb-4">01 · PERFIL</p>
        <h2 class="text-3xl font-semibold tracking-tight md:text-5xl">
          Criterio técnico con <span class="text-gradient-karma">visión de negocio.</span>
        </h2>

        <span
          class="mb-7 mt-6 inline-flex items-center gap-3 border-l border-karma-purple-400 pl-3 text-xs font-mono text-karma-text-secondary"
        >
          ISP Consulting · Cliente: Intercorp Retail
        </span>

        <p class="text-karma-text-secondary leading-relaxed mb-4">
          Soy Analista Programador Senior y Full Stack Developer con más de 7 años de experiencia en
          desarrollo de sistemas ERP e integraciones. Mi principal fortaleza está en C#/.NET, complementada
          con experiencia en Java y Spring para servicios backend reactivos.
        </p>
        <p class="text-karma-text-secondary leading-relaxed">
          Desarrollo APIs, lógica de negocio e integraciones entre plataformas, además de interfaces modernas
          con Angular y Vue. Trabajo con SQL Server, Oracle y PostgreSQL, y despliego soluciones con Azure y
          Docker.
        </p>
      </div>

      <div>
        <!-- Stats rápidas -->
        <div class="grid grid-cols-3 border border-white/10">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="border-r border-white/10 p-5 text-left last:border-r-0 md:p-6"
          >
            <p class="text-2xl font-semibold text-white md:text-3xl">{{ stat.value }}</p>
            <p class="mt-2 text-[10px] uppercase leading-4 tracking-wider text-karma-text-muted">
              {{ stat.label }}
            </p>
          </div>
        </div>

        <!-- Cómo trabajo: enfoque, no tecnologías (eso ya está en Stack) -->
        <div class="mt-5 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          <div
            v-for="item in approach"
            :key="item.title"
            class="bg-karma-black p-5 transition-colors hover:bg-karma-void"
          >
            <h3 class="mb-2 text-sm font-semibold text-white">{{ item.title }}</h3>
            <p class="text-xs text-karma-text-muted leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
