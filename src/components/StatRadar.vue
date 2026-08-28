<script setup lang="ts">
import { computed } from 'vue'

interface StatPoint {
  label: string
  value: number // 0-100
}

const props = defineProps<{
  points: StatPoint[]
  size?: number
}>()

const size = props.size ?? 320
const center = size / 2
const maxRadius = size * 0.38
const levels = 4 // anillos de fondo

// Ángulo de cada eje: empieza arriba (-90°) y reparte 360° entre N puntos
function angleFor(index: number, total: number) {
  return (Math.PI * 2 * index) / total - Math.PI / 2
}

function pointOnAxis(index: number, total: number, radiusRatio: number) {
  const angle = angleFor(index, total)
  return {
    x: center + Math.cos(angle) * maxRadius * radiusRatio,
    y: center + Math.sin(angle) * maxRadius * radiusRatio,
  }
}

function circlePos(index: number, total: number, radiusRatio: number) {
  const p = pointOnAxis(index, total, radiusRatio)
  return { cx: p.x, cy: p.y }
}

const total = computed(() => props.points.length)

// Polígono de fondo (rejilla) para cada nivel
const gridPolygons = computed(() => {
  return Array.from({ length: levels }, (_, lvl) => {
    const ratio = (lvl + 1) / levels
    return props.points
      .map((_, i) => {
        const p = pointOnAxis(i, total.value, ratio)
        return `${p.x},${p.y}`
      })
      .join(' ')
  })
})

// Polígono de datos (valores reales del usuario)
const dataPolygon = computed(() => {
  return props.points
    .map((pt, i) => {
      const p = pointOnAxis(i, total.value, pt.value / 100)
      return `${p.x},${p.y}`
    })
    .join(' ')
})

// Puntos para las etiquetas (un poco más afuera del radio máximo)
const labelPoints = computed(() => {
  return props.points.map((pt, i) => {
    const p = pointOnAxis(i, total.value, 1.22)
    return { ...pt, x: p.x, y: p.y }
  })
})

// Líneas de eje (del centro a cada vértice exterior)
const axisLines = computed(() => {
  return props.points.map((_, i) => pointOnAxis(i, total.value, 1))
})
</script>

<template>
  <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" class="overflow-visible">
    <!-- Rejilla de fondo (anillos poligonales) -->
    <polygon
      v-for="(poly, idx) in gridPolygons"
      :key="idx"
      :points="poly"
      fill="none"
      stroke="#2e2140"
      stroke-width="1"
    />

    <!-- Ejes desde el centro -->
    <line
      v-for="(pt, idx) in axisLines"
      :key="idx"
      :x1="center"
      :y1="center"
      :x2="pt.x"
      :y2="pt.y"
      stroke="#2e2140"
      stroke-width="1"
    />

    <!-- Área de datos (el "pentágono de stats") -->
    <polygon
      :points="dataPolygon"
      fill="rgba(132, 51, 245, 0.25)"
      stroke="#b78eff"
      stroke-width="2"
      stroke-linejoin="round"
    />

    <!-- Vértices de datos -->
    <g v-for="(pt, i) in points" :key="pt.label">
      <circle
        v-bind="circlePos(i, points.length, pt.value / 100)"
        r="3.5"
        fill="#cbaeff"
      />
    </g>

    <!-- Etiquetas -->
    <text
      v-for="lp in labelPoints"
      :key="lp.label"
      :x="lp.x"
      :y="lp.y"
      text-anchor="middle"
      dominant-baseline="middle"
      class="fill-karma-text-secondary text-[11px] font-mono uppercase tracking-wide"
    >
      {{ lp.label }}
    </text>
  </svg>
</template>
