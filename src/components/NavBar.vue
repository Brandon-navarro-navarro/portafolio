<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const brandLogoUrl = `${import.meta.env.BASE_URL}favicon.svg`

const scrolled = ref(false)
const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)

const links = [
  { label: 'Perfil', href: '#about' },
  { label: 'Trayectoria', href: '#timeline' },
  { label: 'Capacidades', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
    menuButton.value?.focus()
  }
}

function onResize() {
  if (window.innerWidth >= 768) menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-karma-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'"
  >
    <nav class="section-container flex items-center justify-between h-16">
      <a href="#hero" class="flex items-center gap-2.5" aria-label="Ir al inicio">
        <img :src="brandLogoUrl" alt="" class="h-8 w-8 object-contain" />
        <span class="text-xs font-semibold uppercase tracking-[0.16em] text-white">Brandon Navarro</span>
      </a>

      <ul class="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.12em] text-karma-text-muted">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="hover:text-karma-lilac-300 transition-colors">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button
        ref="menuButton"
        type="button"
        class="md:hidden text-karma-text-primary"
        @click="menuOpen = !menuOpen"
        :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
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
        id="mobile-navigation"
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
