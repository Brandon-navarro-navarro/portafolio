<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-karma-black/80 backdrop-blur-md border-b border-karma-border' : 'bg-transparent'"
  >
    <nav class="section-container flex items-center justify-between h-16">
      <a href="#hero" class="font-mono font-semibold text-lg text-gradient-karma tracking-tight">
        BN/
      </a>

      <ul class="hidden md:flex items-center gap-8 text-sm text-karma-text-secondary">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="hover:text-karma-lilac-300 transition-colors">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button
        class="md:hidden text-karma-text-primary"
        @click="menuOpen = !menuOpen"
        aria-label="Abrir menú"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul
        v-if="menuOpen"
        class="md:hidden flex flex-col gap-1 bg-karma-void border-b border-karma-border px-6 py-4"
      >
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="block py-2 text-karma-text-secondary hover:text-karma-lilac-300"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </Transition>
  </header>
</template>
