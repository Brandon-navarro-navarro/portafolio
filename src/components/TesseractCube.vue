<script setup lang="ts">
// Efecto "tesseracto": un cubo 3D real (rotateX/rotateY vía CSS
// transform-style: preserve-3d) que gira continuamente en el espacio,
// con las categorías del stack en sus caras y pulsos de energía viajando
// por las aristas. Esto es lo que va en STACK, no en el Hero.
interface Face {
  label: string
  transform: string
}

const size = 180 // tamaño de cada cara del cubo, en px
const half = size / 2

const faces: Face[] = [
  { label: 'Backend', transform: `rotateY(0deg) translateZ(${half}px)` },
  { label: 'Frontend', transform: `rotateY(90deg) translateZ(${half}px)` },
  { label: 'Bases de datos', transform: `rotateY(180deg) translateZ(${half}px)` },
  { label: 'Analista', transform: `rotateY(-90deg) translateZ(${half}px)` },
  { label: 'Integraciones', transform: `rotateX(90deg) translateZ(${half}px)` },
  { label: 'Full Stack', transform: `rotateX(-90deg) translateZ(${half}px)` },
]
</script>

<template>
  <div class="relative flex items-center justify-center py-8" style="perspective: 900px">
    <!-- Glow de fondo del cubo -->
    <div class="absolute w-64 h-64 rounded-full bg-karma-purple-500/15 blur-3xl" />

    <div
      class="relative animate-cube-spin"
      :style="{
        width: `${size}px`,
        height: `${size}px`,
        transformStyle: 'preserve-3d',
      }"
    >
      <div
        v-for="face in faces"
        :key="face.label"
        class="absolute inset-0 flex items-center justify-center rounded-lg border border-karma-purple-400/50 bg-karma-surface/70 backdrop-blur-sm shadow-glow-purple"
        :style="{ transform: face.transform }"
      >
        <span class="font-mono text-xs md:text-sm text-karma-lilac-300 text-center px-2">
          {{ face.label }}
        </span>

        <!-- Pulso de energía recorriendo el borde de cada cara -->
        <span class="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
          <span class="absolute inset-0 rounded-lg animate-face-pulse" />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes cube-spin {
  0% { transform: rotateX(-20deg) rotateY(0deg); }
  100% { transform: rotateX(-20deg) rotateY(360deg); }
}
.animate-cube-spin {
  animation: cube-spin 14s linear infinite;
}

@keyframes face-pulse {
  0%, 100% { box-shadow: inset 0 0 0px rgba(203,174,255,0); }
  50% { box-shadow: inset 0 0 18px rgba(203,174,255,0.5); }
}
.animate-face-pulse {
  animation: face-pulse 3s ease-in-out infinite;
}
</style>
