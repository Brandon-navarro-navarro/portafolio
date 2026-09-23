<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 py-8">
    <div class="section-container flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-karma-text-muted font-mono">
      <span>© {{ year }} Brandon Navarro</span>
      <span>Ingeniería de software · Lima, Perú</span>
    </div>
  </footer>
</template>
