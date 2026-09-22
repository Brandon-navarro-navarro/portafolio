<script setup lang="ts">
import { ref, computed } from 'vue'
import StatRadar from '@/components/StatRadar.vue'
import TesseractCube from '@/components/TesseractCube.vue'
import TechIconGrid from '@/components/TechIconGrid.vue'

// Las 5 áreas del "pentágono de stats" — nivel de dominio 0-100.
// Ajusta los valores y la lista de tecnologías a lo que consideres real.
const categories = [
  {
    key: 'backend',
    label: 'Backend',
    value: 92,
    description: 'Mi área principal: APIs, lógica de negocio, servicios empresariales e integraciones con foco en el ecosistema .NET.',
    tools: ['C#', '.NET / ASP.NET Core', 'Java 17', 'Spring WebFlux'],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    value: 80,
    description: 'Interfaces modernas conectadas a sistemas complejos.',
    tools: ['Angular', 'Vue 3', 'TypeScript', 'Pinia'],
  },
  {
    key: 'database',
    label: 'Bases de datos',
    value: 85,
    description: 'Modelado y optimización de datos a nivel empresarial.',
    tools: ['Oracle', 'PostgreSQL', 'SQL Server'],
  },
  {
    key: 'analista',
    label: 'Analista',
    value: 90,
    description: 'Levantamiento de requerimientos, análisis funcional y acompañamiento del proyecto hasta su implementación.',
    tools: ['Levantamiento de requerimientos', 'Análisis funcional', 'Documentación técnica', 'Implementación'],
  },
  {
    key: 'integraciones',
    label: 'Integraciones',
    value: 88,
    description: 'Comunicación entre sistemas ERP y plataformas externas.',
    tools: ['REST APIs', 'SOAP', 'Migraciones ERP'],
  },
]

const activeKey = ref(categories[0].key)
const active = computed(() => categories.find((c) => c.key === activeKey.value)!)

const radarPoints = categories.map((c) => ({ label: c.label, value: c.value }))
</script>

<template>
  <section id="stack" class="py-24 border-t border-karma-border/50">
    <div class="section-container">
      <p class="font-mono text-sm text-karma-purple-400 mb-3 tracking-widest">02 · STACK</p>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Cinco áreas, <span class="text-gradient-karma">un mismo sistema</span>
      </h2>
      <p class="text-karma-text-secondary max-w-xl mb-12">
        Selecciona un área para ver el detalle — como una hoja de stats.
      </p>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Pentágono de stats -->
        <div class="flex justify-center">
          <StatRadar :points="radarPoints" :size="340" />
        </div>

        <!-- Panel de detalle + selector -->
        <div>
          <div class="flex flex-wrap gap-2 mb-6">
            <button
              v-for="cat in categories"
              :key="cat.key"
              @click="activeKey = cat.key"
              class="px-4 py-2 rounded-full text-sm font-mono transition-colors border"
              :class="
                activeKey === cat.key
                  ? 'bg-karma-purple-500/20 border-karma-purple-400 text-karma-lilac-300'
                  : 'border-karma-border text-karma-text-muted hover:text-karma-text-secondary'
              "
            >
              {{ cat.label }}
            </button>
          </div>

          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            mode="out-in"
          >
            <div :key="active.key" class="rounded-xl bg-karma-surface border border-karma-border p-6">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-lg font-semibold">{{ active.label }}</h3>
                <span class="font-mono text-sm text-karma-purple-400">{{ active.value }}%</span>
              </div>
              <p class="text-karma-text-secondary text-sm mb-4">{{ active.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tool in active.tools"
                  :key="tool"
                  class="px-3 py-1 rounded-md bg-karma-void border border-karma-border text-xs font-mono text-karma-text-secondary"
                >
                  {{ tool }}
                </span>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Efecto tesseracto: cubo 3D girando con las categorías en sus caras -->
      <div class="mt-20">
        <p class="font-mono text-sm text-karma-purple-400 mb-3 tracking-widest text-center">
          EL SISTEMA EN MOVIMIENTO
        </p>
        <TesseractCube />
      </div>

      <!-- Grilla de tecnologías individuales -->
      <div class="mt-16">
        <p class="font-mono text-sm text-karma-purple-400 mb-6 tracking-widest text-center">
          TECNOLOGÍAS
        </p>
        <TechIconGrid />
      </div>
    </div>
  </section>
</template>
