<script setup>
import { computed, ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projectFilters, projects } from '../data/projects'

const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter((project) => project.categories.includes(activeFilter.value))
})
</script>

<template>
  <PageHero
    eyebrow="Projects"
    title="연구를 작동하는 경험으로."
    description="2023년 실제 시연 자료와 논문을 바탕으로 정리한 XR, 로봇, 디지털 트윈, AI 프로젝트입니다."
    index="02"
  />

  <section class="section projects-section">
    <div class="container project-toolbar">
      <div class="filter-list" role="group" aria-label="프로젝트 분야 필터">
        <button
          v-for="filter in projectFilters"
          :key="filter"
          type="button"
          :class="{ active: activeFilter === filter }"
          :aria-pressed="activeFilter === filter"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>
      <p><strong>{{ filteredProjects.length.toString().padStart(2, '0') }}</strong> CASE STUDIES</p>
    </div>

    <div class="container project-grid">
      <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
