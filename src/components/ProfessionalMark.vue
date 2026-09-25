<script setup lang="ts">
defineProps<{
  variant: 'architecture' | 'integration' | 'product'
  uid: string
  size?: number
}>()
</script>

<template>
  <svg
    :width="size ?? 120"
    :height="size ?? 120"
    viewBox="0 0 160 160"
    fill="none"
    aria-hidden="true"
    class="professional-mark"
  >
    <defs>
      <linearGradient :id="`${uid}-silver`" x1="28" y1="22" x2="132" y2="138" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F4F6FA" />
        <stop offset="0.38" stop-color="#C9CFDA" />
        <stop offset="0.7" stop-color="#8D95A5" />
        <stop offset="1" stop-color="#E0E4EB" />
      </linearGradient>
      <linearGradient
        :id="`${uid}-silver-dark`"
        x1="30"
        y1="125"
        x2="118"
        y2="45"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#596171" />
        <stop offset="0.58" stop-color="#AAB1BD" />
        <stop offset="1" stop-color="#EEF1F6" />
      </linearGradient>
      <linearGradient :id="`${uid}-violet`" x1="38" y1="28" x2="128" y2="139" gradientUnits="userSpaceOnUse">
        <stop stop-color="#A99BFF" />
        <stop offset="0.48" stop-color="#7156E7" />
        <stop offset="1" stop-color="#3D32B2" />
      </linearGradient>
      <linearGradient
        :id="`${uid}-violet-dark`"
        x1="49"
        y1="120"
        x2="118"
        y2="47"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#29215F" />
        <stop offset="0.55" stop-color="#5540B8" />
        <stop offset="1" stop-color="#8F79F6" />
      </linearGradient>
      <filter :id="`${uid}-shadow`" x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.62" />
      </filter>
    </defs>

    <!-- Arquitectura: pórtico modular con niveles y una unión central. -->
    <g v-if="variant === 'architecture'" :filter="`url(#${uid}-shadow)`">
      <path d="M29 126L29 62L56 46L56 111L29 126Z" :fill="`url(#${uid}-silver)`" />
      <path d="M104 43L132 59L132 125L104 109L104 43Z" :fill="`url(#${uid}-violet)`" />
      <path d="M56 75L104 48L104 70L56 97V75Z" :fill="`url(#${uid}-violet-dark)`" />
      <path d="M56 111L83 126L132 98L132 121L83 149L56 133V111Z" :fill="`url(#${uid}-silver-dark)`" />
      <path d="M56 32L78 19L105 34L82 47L56 32Z" :fill="`url(#${uid}-silver)`" />
      <path d="M56 32L82 47V67L56 52V32Z" :fill="`url(#${uid}-violet)`" />
    </g>

    <!-- Integraciones: dos flujos opuestos que convergen en un enlace común. -->
    <g v-else-if="variant === 'integration'" :filter="`url(#${uid}-shadow)`">
      <path d="M20 51L57 29L79 42L60 53L60 72L39 84L39 63L20 74V51Z" :fill="`url(#${uid}-silver)`" />
      <path d="M81 42L103 29L140 51V74L121 63V84L100 72V53L81 42Z" :fill="`url(#${uid}-violet)`" />
      <path d="M60 72L80 60L100 72L80 84L60 72Z" :fill="`url(#${uid}-violet-dark)`" />
      <path d="M39 88L60 76L80 88L59 100L39 88Z" :fill="`url(#${uid}-silver-dark)`" />
      <path d="M80 88L100 76L121 88L101 100L80 88Z" :fill="`url(#${uid}-violet)`" />
      <path d="M59 100L80 88L101 100V123L80 136L59 123V100Z" :fill="`url(#${uid}-silver)`" />
      <path d="M80 112L101 100V123L80 136V112Z" :fill="`url(#${uid}-violet-dark)`" />
    </g>

    <!-- Producto: seis piezas ensambladas alrededor de un núcleo entregable. -->
    <g v-else :filter="`url(#${uid}-shadow)`">
      <path d="M80 18L116 39L96 51L80 42L64 51L44 39L80 18Z" :fill="`url(#${uid}-silver)`" />
      <path d="M120 42L140 54V94L120 82V64L104 55L120 42Z" :fill="`url(#${uid}-violet)`" />
      <path d="M140 100V123L104 144V121L120 112V94L140 100Z" :fill="`url(#${uid}-silver-dark)`" />
      <path d="M96 126V149L60 128V105L80 116L96 107V126Z" :fill="`url(#${uid}-violet-dark)`" />
      <path d="M56 105L40 114V96L20 84V61L40 73V91L56 82V105Z" :fill="`url(#${uid}-silver)`" />
      <path d="M20 55L40 43L56 52L80 38L100 50L80 62L64 53L40 67L20 55Z" :fill="`url(#${uid}-violet)`" />
      <path d="M60 78L80 66L100 78V101L80 113L60 101V78Z" :fill="`url(#${uid}-violet)`" />
      <path d="M80 89L100 78V101L80 113V89Z" :fill="`url(#${uid}-violet-dark)`" />
    </g>
  </svg>
</template>

<style scoped>
.professional-mark {
  overflow: visible;
}
</style>
