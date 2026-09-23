<script setup lang="ts">
defineProps<{
  variant: 'orbit' | 'link' | 'layers'
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
      <linearGradient :id="`${uid}-metal`" x1="28" y1="22" x2="132" y2="138" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFFFFF" />
        <stop offset="0.34" stop-color="#A7A9B2" />
        <stop offset="0.62" stop-color="#3B3D46" />
        <stop offset="1" stop-color="#E5E6EA" />
      </linearGradient>
      <linearGradient :id="`${uid}-violet`" x1="35" y1="28" x2="129" y2="139" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B79BFF" />
        <stop offset="0.48" stop-color="#7650D8" />
        <stop offset="1" stop-color="#37255F" />
      </linearGradient>
      <filter :id="`${uid}-shadow`" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="9" stdDeviation="7" flood-color="#000000" flood-opacity="0.58" />
      </filter>
    </defs>

    <g v-if="variant === 'orbit'" :filter="`url(#${uid}-shadow)`">
      <path d="M42 111C17 84 22 45 50 28C73 14 105 21 121 44L104 57C94 42 75 37 60 46C40 58 37 83 51 99L42 111Z" :fill="`url(#${uid}-violet)`" />
      <path d="M35 96C49 69 77 51 107 50C132 49 145 62 142 78C139 95 119 113 93 124C66 135 39 132 27 118C20 110 23 102 35 96ZM51 98C42 103 39 108 43 112C50 119 69 117 88 109C108 101 124 89 126 79C127 72 120 67 106 68C83 69 62 80 51 98Z" :fill="`url(#${uid}-metal)`" />
    </g>

    <g v-else-if="variant === 'link'" :filter="`url(#${uid}-shadow)`">
      <path d="M32 124L65 58C73 42 88 31 106 29L125 27L99 41C90 46 84 53 80 62L57 108L32 124Z" :fill="`url(#${uid}-metal)`" />
      <path d="M58 127C75 128 93 122 106 109C121 94 127 75 124 57L108 78C107 89 103 98 95 105C86 114 74 118 62 116L58 127Z" :fill="`url(#${uid}-violet)`" />
      <circle cx="121" cy="39" r="15" :fill="`url(#${uid}-violet)`" />
    </g>

    <g v-else :filter="`url(#${uid}-shadow)`">
      <path d="M28 47L73 76V103L28 74V47Z" :fill="`url(#${uid}-metal)`" />
      <path d="M75 77L113 54V82L75 105V77Z" :fill="`url(#${uid}-violet)`" />
      <path d="M48 81L92 109V136L48 108V81Z" :fill="`url(#${uid}-metal)`" />
      <path d="M94 108L133 84V111L94 136V108Z" :fill="`url(#${uid}-violet)`" />
      <path d="M94 25L133 49V82L113 69V58L94 47V25Z" :fill="`url(#${uid}-metal)`" />
    </g>
  </svg>
</template>

<style scoped>
.professional-mark {
  overflow: visible;
}
</style>
