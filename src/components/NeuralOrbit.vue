<script setup lang="ts">
// Núcleo central (BN) fijo, con anillos de tecnologías que ORBITAN
// físicamente alrededor — rotación real tipo sol-tierra, no un layout
// estático. Cada chip gira en su órbita; el texto se contra-rota para
// mantenerse legible (no da vueltas de cabeza).
interface TechNode {
  label: string
  angle: number // ángulo inicial en grados
}

const orbitTech: TechNode[] = [
  { label: '.NET', angle: 0 },
  { label: 'C#', angle: 51 },
  { label: 'Java', angle: 102 },
  { label: 'Spring', angle: 153 },
  { label: 'Angular', angle: 204 },
  { label: 'Vue', angle: 255 },
  { label: 'Azure', angle: 306 },
]
</script>

<template>
  <div class="relative aspect-square max-w-md mx-auto w-full">
    <!-- Anillos guía estáticos, solo referencia visual de la órbita -->
    <div class="absolute inset-8 rounded-full border border-karma-border/60" />
    <div class="absolute inset-16 rounded-full border border-karma-border/30" />

    <!-- Glow de fondo -->
    <div class="absolute inset-[15%] rounded-full bg-karma-purple-500/10 blur-3xl" />

    <!-- Contenedor que ROTA: aquí es donde ocurre la órbita real -->
    <div class="absolute inset-0 animate-orbit-spin">
      <div
        v-for="tech in orbitTech"
        :key="tech.label"
        class="absolute top-1/2 left-1/2 w-0 h-0"
        :style="{ transform: `rotate(${tech.angle}deg)` }"
      >
        <!-- Este div se posiciona en el radio de la órbita -->
        <div class="absolute -translate-x-1/2 -translate-y-1/2" style="transform: translateX(180px)">
          <!-- Contra-rotación: mantiene el chip legible mientras el padre gira -->
          <div class="animate-orbit-spin-reverse">
            <span
              class="block whitespace-nowrap px-3 py-1.5 rounded-full bg-karma-void border border-karma-border text-xs font-mono text-karma-lilac-300 shadow-glow-lilac/50"
            >
              {{ tech.label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Núcleo central: fijo, no orbita -->
    <div
      class="absolute inset-[30%] rounded-full bg-karma-surface border border-karma-purple-500/50 shadow-glow-purple flex items-center justify-center z-10"
    >
      <span class="font-mono text-3xl font-bold text-gradient-karma">BN</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes orbit-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes orbit-spin-reverse {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}
.animate-orbit-spin {
  animation: orbit-spin 40s linear infinite;
}
.animate-orbit-spin-reverse {
  animation: orbit-spin-reverse 40s linear infinite;
}
</style>
