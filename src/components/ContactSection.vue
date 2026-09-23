<script setup lang="ts">
// Datos extraídos del CV de Brandon. El teléfono se deja fuera a propósito
// (dato sensible para dejar público e indexable en una web) — si Brandon
// lo quiere igual, puede agregarlo aquí manualmente.
const contactLinks = [
  { label: 'Email', value: 'brandon.153120@gmail.com', href: 'mailto:brandon.153120@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/brandon-navarro-navarro', href: 'https://www.linkedin.com/in/brandon-navarro-navarro-3364a8125' },
  { label: 'GitHub', value: 'github.com/Brandon-navarro-navarro', href: 'https://github.com/Brandon-navarro-navarro' },
]
</script>

<template>
  <section id="contact" class="py-24">
    <div class="section-container text-center">
      <p class="section-eyebrow mb-4">06 · CONTACTO</p>
      <h2 class="text-3xl font-semibold tracking-tight md:text-5xl mb-6">
        Hablemos de tu <span class="text-gradient-karma">próximo proyecto</span>
      </h2>
      <p class="text-karma-text-secondary max-w-lg mx-auto mb-10">
        Disponible para roles full time, freelance o colaboraciones puntuales.
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <a
          v-for="link in contactLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="border border-white/10 bg-karma-surface/50 px-6 py-4 text-left text-sm transition-colors hover:border-karma-purple-400/60"
        >
          <span class="text-karma-text-muted font-mono text-xs block mb-0.5">{{ link.label }}</span>
          <span class="text-karma-text-primary">{{ link.value }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
