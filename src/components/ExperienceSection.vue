<script setup lang="ts">
// Integraciones de e-commerce destacadas, extraídas del CV real de Brandon.
// Corregido: la cadena real es AliExpress–Serhafen–Dinet (una integración,
// no dos por separado), de su rol en DINET S.A. (2025-2026). VTEX fue en
// Procesos & Sistemas SAC (2018-2022), con WooCommerce en el mismo rol.
// Adidas/H&M/Walon/Reebok también en DINET, vía APIs REST + Azure.
interface Integration {
  name: string
  role: string
}

const integrations: Integration[] = [
  { name: 'AliExpress · Serhafen', role: 'Marketplace · Dinet' },
  { name: 'VTEX', role: 'E-commerce' },
  { name: 'WooCommerce', role: 'E-commerce' },
  { name: 'Adidas', role: 'API REST · Azure' },
  { name: 'H&M', role: 'API REST · Azure' },
  { name: 'Reebok', role: 'API REST · Azure' },
]
</script>

<template>
  <section id="experience" class="py-24 border-t border-karma-border/50">
    <div class="section-container">
      <p class="font-mono text-sm text-karma-purple-400 mb-3 tracking-widest">
        02.5 · INTEGRACIONES
      </p>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Conectando <span class="text-gradient-karma">plataformas reales</span>
      </h2>
      <p class="text-karma-text-secondary max-w-xl mb-12">
        Integraciones de e-commerce y marketplace a nivel de proveedor, con
        trazabilidad end-to-end y cumplimiento de SLA en retail a gran escala.
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="item in integrations"
          :key="item.name"
          class="group relative rounded-xl bg-karma-surface border border-karma-border p-6 text-center overflow-hidden hover:border-karma-purple-400/70 hover:shadow-glow-purple transition-all duration-300"
        >
          <!-- Glow de fondo al hover -->
          <div class="absolute inset-0 bg-karma-radial opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <p class="relative font-mono text-base md:text-lg font-bold text-gradient-karma mb-1">
            {{ item.name }}
          </p>
          <p class="relative text-xs text-karma-text-muted uppercase tracking-wide">
            {{ item.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
