<script setup lang="ts">
import NetworkGlow from '@/components/NetworkGlow.vue'
import NeuralOrbit from '@/components/NeuralOrbit.vue'
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-16">
    <NetworkGlow />

    <div class="section-container grid md:grid-cols-2 gap-12 items-center py-20">
      <!-- Texto principal -->
      <div>
        <p class="font-mono text-sm text-karma-purple-400 mb-4 tracking-widest">
          DISPONIBLE PARA NUEVOS PROYECTOS
        </p>
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Brandon
          <span class="block text-gradient-karma">Navarro</span>
        </h1>
        <p class="text-lg text-karma-text-secondary max-w-md mb-8">
          Full Stack Developer con 7+ años construyendo sistemas ERP e integraciones
          robustas. Del backend a la interfaz, sin fricción.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="#projects"
            class="px-6 py-3 rounded-lg bg-karma-purple-500 hover:bg-karma-purple-600 transition-colors font-medium shadow-glow-purple"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            class="px-6 py-3 rounded-lg border border-karma-border hover:border-karma-purple-400 transition-colors font-medium text-karma-text-secondary hover:text-karma-text-primary"
          >
            Contactar
          </a>
        </div>
      </div>

      <!-- Núcleo BN fijo + tecnologías orbitando físicamente a su alrededor -->
      <NeuralOrbit />
    </div>
  </section>
</template>
