<script setup>
import { computed, ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projectFilters, projects } from '../data/projects'

const activeFilter = ref('All')
const activeYear = ref('All years')
const projectYears = ['All years', '2025', '2024', '2023']

const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const matchesYear = activeYear.value === 'All years' || project.year === activeYear.value
    const matchesField = activeFilter.value === 'All' || project.categories.includes(activeFilter.value)
    return matchesYear && matchesField
  })
})
</script>

<template>
  <PageHero
    eyebrow="Projects"
    title="연구를 작동하는 경험으로."
    description="2023–2025년 실제 시연 자료와 논문, 코드베이스를 바탕으로 정리한 XR, 로봇, 지리공간, AI 프로젝트입니다."
    index="02"
  />

  <section class="section projects-section">
    <div class="container project-toolbar">
      <div class="project-filter-groups">
        <div class="project-filter-group">
          <span class="filter-group-label">Year</span>
          <div class="filter-list" role="group" aria-label="프로젝트 연도 필터">
            <button
              v-for="year in projectYears"
              :key="year"
              type="button"
              :class="{ active: activeYear === year }"
              :aria-pressed="activeYear === year"
              @click="activeYear = year"
            >
              {{ year }}
            </button>
          </div>
        </div>
        <div class="project-filter-group">
          <span class="filter-group-label">Field</span>
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
        </div>
      </div>
      <p><strong>{{ filteredProjects.length.toString().padStart(2, '0') }}</strong> CASE STUDIES</p>
    </div>

    <div class="container project-grid">
      <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
