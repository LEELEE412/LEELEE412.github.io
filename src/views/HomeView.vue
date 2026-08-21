<script setup>
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'
import { profile } from '../data/profile'
import { homeFeaturedProjectIds, projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'

const featuredProjects = computed(() =>
  homeFeaturedProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project) => project && !project.hidden),
)
</script>

<template>
  <section class="home-hero home-hero-compact">
    <div class="container home-intro-grid">
      <div class="hero-copy home-intro-copy">
        <p class="eyebrow eyebrow-light">Portfolio · 이세진</p>
        <h1>
          <span>{{ profile.name }}</span>
          <strong>{{ profile.role }}</strong>
        </h1>
        <p class="hero-tagline">{{ profile.tagline }}</p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" to="/projects">
            Projects
            <ArrowRight :size="18" aria-hidden="true" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="section home-selected-work">
    <div class="container section-heading-row">
      <div>
        <p class="eyebrow">Selected Projects</p>
        <h2 class="section-title">대표 프로젝트</h2>
      </div>
      <RouterLink class="text-link" to="/projects">
        전체 프로젝트
        <ArrowRight :size="17" aria-hidden="true" />
      </RouterLink>
    </div>

    <div class="container project-grid project-grid-featured">
      <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
    </div>
  </section>

</template>
