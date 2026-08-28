<script setup lang="ts">
// Stats rápidas (números duros) arriba, y debajo "cómo trabajo" — enfoque
// y forma de trabajar, que no se repite con Stack (ahí van las tecnologías)
// ni con Proyectos (ahí van los casos concretos). Esto llena el espacio
// vacío a la derecha sin duplicar contenido de otras secciones.
const stats = [
  { value: '7+', label: 'Años de experiencia' },
  { value: '10+', label: 'Tecnologías dominadas' },
  { value: 'ERP', label: 'Especialidad principal' },
]

interface Approach {
  title: string
  description: string
}

const approach: Approach[] = [
  {
    title: 'De punta a punta',
    description: 'Desde el levantamiento de requerimientos hasta el despliegue en producción, sin soltar el hilo del proyecto.',
  },
  {
    title: 'Legacy → moderno',
    description: 'Especialista en migrar sistemas antiguos a arquitecturas actuales sin frenar la operación del negocio.',
  },
  {
    title: 'Liderazgo técnico',
    description: 'Lideré equipos de desarrollo definiendo estándares de código, QA y diseño UX.',
  },
  {
    title: 'Comunicación directa',
    description: 'Traduzco entre negocio y desarrollo: lo que pide el cliente y lo que el sistema realmente necesita.',
  },
]
</script>

<template>
  <section id="about" class="py-24 border-t border-karma-border/50">
    <div class="section-container grid md:grid-cols-2 gap-12 items-start">
      <div>
        <p class="font-mono text-sm text-karma-purple-400 mb-3 tracking-widest">01 · SOBRE MÍ</p>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Construyo sistemas que <span class="text-gradient-karma">conectan</span>
        </h2>

        <span class="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-karma-void border border-karma-border text-xs font-mono text-karma-text-secondary">
          <span class="w-1.5 h-1.5 rounded-full bg-karma-purple-400 animate-pulse" />
          Actualmente en Intercorp Retail
        </span>

        <p class="text-karma-text-secondary leading-relaxed mb-4">
          Soy Senior Technical Analyst y Full Stack Developer con más de 7 años de experiencia
          en desarrollo de sistemas ERP e integraciones. Trabajo tanto en backend robusto
          (Java/Spring, .NET) como en interfaces modernas (Angular, Vue), siempre buscando
          que ambos lados hablen el mismo idioma.
        </p>
        <p class="text-karma-text-secondary leading-relaxed">
          Me especializo en migraciones de sistemas legacy hacia arquitecturas modernas,
          integraciones entre plataformas y despliegue de soluciones escalables con
          Docker/Kubernetes sobre Oracle y PostgreSQL.
        </p>
      </div>

      <div>
        <!-- Stats rápidas -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-xl bg-karma-surface border border-karma-border p-6 text-center"
          >
            <p class="text-2xl md:text-3xl font-bold text-gradient-karma mb-1">{{ stat.value }}</p>
            <p class="text-xs text-karma-text-muted">{{ stat.label }}</p>
          </div>
        </div>

        <!-- Cómo trabajo: enfoque, no tecnologías (eso ya está en Stack) -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="item in approach"
            :key="item.title"
            class="rounded-xl bg-karma-surface border border-karma-border p-5 hover:border-karma-purple-400/60 transition-colors"
          >
            <h3 class="text-sm font-semibold text-karma-lilac-300 mb-1.5">{{ item.title }}</h3>
            <p class="text-xs text-karma-text-muted leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
