<script setup lang="ts">
// Fondo decorativo: núcleo con glow radial pulsante + nodos satélite
// conectados por líneas, como en la referencia visual que compartió Brandon.
// Reescrito en la paleta Karma (morado/lila) en vez de azul/cian.
interface Node {
  angle: number // grados
  distance: number // 0-1, relativo al radio del contenedor
  size: number // radio del punto en px
  pulseDelay: number // segundos, para desincronizar el parpadeo
}

const nodes: Node[] = [
  { angle: 15, distance: 0.85, size: 3, pulseDelay: 0 },
  { angle: 70, distance: 0.55, size: 4, pulseDelay: 0.6 },
  { angle: 145, distance: 0.8, size: 3, pulseDelay: 1.2 },
  { angle: 200, distance: 0.6, size: 3, pulseDelay: 0.3 },
  { angle: 250, distance: 0.9, size: 2.5, pulseDelay: 1.6 },
  { angle: 320, distance: 0.5, size: 3.5, pulseDelay: 0.9 },
]

function nodePos(n: Node) {
  const rad = (n.angle * Math.PI) / 180
  const x = 50 + Math.cos(rad) * n.distance * 50
  const y = 50 + Math.sin(rad) * n.distance * 50
  return { left: `${x}%`, top: `${y}%` }
}
</script>

<template>
  <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <!-- Glow radial central pulsante -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-[70%] aspect-square rounded-full bg-karma-purple-500/20 blur-[80px] animate-glow-pulse" />
    </div>

    <!-- Núcleo central brillante -->
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-karma-lilac-300 opacity-60" />
        <span class="relative inline-flex rounded-full h-3 w-3 bg-karma-lilac-200" />
      </span>
    </div>

    <!-- Líneas del centro a cada nodo -->
    <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      <line
        v-for="(n, i) in nodes"
        :key="`line-${i}`"
        x1="50%"
        y1="50%"
        :x2="nodePos(n).left"
        :y2="nodePos(n).top"
        stroke="#8433f5"
        stroke-width="1"
        stroke-opacity="0.35"
      />
    </svg>

    <!-- Nodos satélite con parpadeo desincronizado -->
    <span
      v-for="(n, i) in nodes"
      :key="`node-${i}`"
      class="absolute rounded-full bg-karma-lilac-300 shadow-glow-lilac animate-node-pulse"
      :style="{
        ...nodePos(n),
        width: `${n.size * 2}px`,
        height: `${n.size * 2}px`,
        marginLeft: `-${n.size}px`,
        marginTop: `-${n.size}px`,
        animationDelay: `${n.pulseDelay}s`,
      }"
    />

    <!-- Puntos decorativos sueltos, muy tenues -->
    <span
      v-for="i in 24"
      :key="`dust-${i}`"
      class="absolute w-0.5 h-0.5 rounded-full bg-karma-text-muted/40"
      :style="{
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
      }"
    />
  </div>
</template>

<style scoped>
@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.08); }
}
.animate-glow-pulse {
  animation: glow-pulse 4s ease-in-out infinite;
}

@keyframes node-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
}
.animate-node-pulse {
  animation: node-pulse 2.4s ease-in-out infinite;
}
</style>
