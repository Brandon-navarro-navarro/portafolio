<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-karma-border/50 py-8">
    <div class="section-container flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-karma-text-muted font-mono">
      <span>© {{ year }} Brandon Navarro</span>
      <span>Hecho con Vue 3 + Tailwind</span>
    </div>
  </footer>
</template>
