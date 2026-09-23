<script setup lang="ts">
// Integraciones de e-commerce destacadas, extraídas del CV real de Brandon.
// Corregido: la cadena real es AliExpress–Serhafen–Dinet (una integración,
// no dos por separado), de su rol en DINET S.A. (2025-2026). VTEX fue en
// Procesos & Sistemas SAC (2018-2022), con WooCommerce en el mismo rol.
// Las demás integraciones empresariales se agrupan como APIs en Azure para
// evitar publicar marcas específicas.
interface Integration {
  name: string
  role: string
  code: string
}

const integrations: Integration[] = [
  { name: 'AliExpress · Serhafen', role: 'Marketplace · Dinet', code: '01' },
  { name: 'VTEX', role: 'E-commerce', code: '02' },
  { name: 'WooCommerce', role: 'E-commerce', code: '03' },
  { name: 'APIs en Azure', role: 'REST · Mensajería asíncrona', code: '04' },
]
</script>

<template>
  <section id="experience" class="border-b border-white/10 py-24">
    <div class="section-container">
      <p class="section-eyebrow mb-4">04 · INTEGRACIONES</p>
      <h2 class="text-3xl font-semibold tracking-tight md:text-5xl mb-4">
        Conectando <span class="text-gradient-karma">plataformas reales</span>
      </h2>
      <p class="text-karma-text-secondary max-w-xl mb-12">
        Integraciones de e-commerce y marketplace a nivel de proveedor, con
        trazabilidad end-to-end y cumplimiento de SLA en retail a gran escala.
      </p>

      <div class="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in integrations"
          :key="item.name"
          class="group relative min-h-[190px] overflow-hidden bg-karma-black p-6 text-left transition-colors hover:bg-karma-void"
        >
          <span class="relative font-mono text-[10px] tracking-[0.2em] text-karma-text-muted">{{ item.code }}</span>
          <div class="absolute right-0 top-0 h-px w-0 bg-karma-purple-400 transition-all duration-300 group-hover:w-full" />
          <p class="relative mt-16 text-base font-semibold text-white md:text-lg">
            {{ item.name }}
          </p>
          <p class="relative mt-2 text-[10px] text-karma-text-muted uppercase tracking-[0.14em]">
            {{ item.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
