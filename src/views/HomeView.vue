<script setup>
import { computed } from 'vue'
import { ArrowRight, Code2 } from '@lucide/vue'
import { profile, researchAreas } from '../data/profile'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'

const featuredProjects = computed(() => projects.filter((project) => project.featured).slice(0, 4))
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
          <a class="button button-outline-light" :href="profile.githubUrl" target="_blank" rel="noopener noreferrer">
            <Code2 :size="18" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>

      <ul class="home-focus-list" aria-label="주요 관심 분야">
        <li v-for="area in researchAreas" :key="area.key">
          <span>{{ area.key }}</span>
          <div>
            <strong>{{ area.title }}</strong>
            <small>{{ area.description }}</small>
          </div>
        </li>
      </ul>
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
