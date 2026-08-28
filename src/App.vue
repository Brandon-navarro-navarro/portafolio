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
    <!-- Glow de fondo global, sutil -->
    <div class="pointer-events-none fixed inset-0 bg-karma-radial" />

    <NavBar />

    <main class="relative z-10">
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
