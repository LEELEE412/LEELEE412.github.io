<script setup>
import { computed, ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const fieldFilters = [
  { label: 'All', categories: [] },
  { label: 'XR', categories: ['VR', 'HCI'] },
  { label: 'Robotics', categories: ['Robotics'] },
  { label: 'Digital Twin', categories: ['Digital Twin', 'Geospatial'] },
  { label: 'AI / Web', categories: ['AI', 'Web'] },
]

const activeFilter = ref('All')
const activeYear = ref('All years')
const visibleProjects = computed(() => projects.filter((project) => !project.hidden))
const projectYears = computed(() => [
  'All years',
  ...new Set(visibleProjects.value.map((project) => project.year)),
])

const filteredProjects = computed(() => {
  const selectedField = fieldFilters.find((filter) => filter.label === activeFilter.value)

  return visibleProjects.value.filter((project) => {
    const matchesYear = activeYear.value === 'All years' || project.year === activeYear.value
    const matchesField =
      !selectedField?.categories.length ||
      selectedField.categories.some((category) => project.categories.includes(category))
    return matchesYear && matchesField
  })
})
</script>

<template>
  <PageHero
    eyebrow="Projects"
    title="Projects"
    description="XR, 로보틱스, 디지털 트윈과 AI를 실제로 작동하는 프로토타입으로 구현한 작업입니다."
    compact
  />

  <section class="section projects-section projects-section-compact">
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
              v-for="filter in fieldFilters"
              :key="filter.label"
              type="button"
              :class="{ active: activeFilter === filter.label }"
              :aria-pressed="activeFilter === filter.label"
              @click="activeFilter = filter.label"
            >
              {{ filter.label }}
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
