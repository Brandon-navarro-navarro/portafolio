<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TimelineSection from '@/components/TimelineSection.vue'
import StackSection from '@/components/StackSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div class="relative min-h-screen bg-karma-black overflow-x-hidden">
    <a
      href="#main-content"
      class="fixed left-4 top-4 z-[100] -translate-y-24 bg-karma-purple-500 px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
    >
      Saltar al contenido principal
    </a>
    <NavBar />

    <main id="main-content" class="relative z-10" tabindex="-1">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <StackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <FooterBar />
  </div>
</template>
