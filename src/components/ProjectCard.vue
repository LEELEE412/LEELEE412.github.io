<script setup>
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'
import ProjectVisual from './ProjectVisual.vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const visibleTechnologies = computed(() => props.project.technologies.slice(0, 6))
</script>

<template>
  <article class="project-card project-card-compact">
    <RouterLink
      class="project-card-preview"
      :to="{ name: 'project-detail', params: { id: project.id } }"
      :aria-label="`${project.title} 상세 보기`"
    >
      <ProjectVisual :project="project" compact />
    </RouterLink>
    <div class="project-card-content">
      <div class="project-card-topline">
        <span>{{ project.year }}</span>
      </div>
      <RouterLink
        class="project-card-title"
        :to="{ name: 'project-detail', params: { id: project.id } }"
        :aria-label="`${project.title} 상세 보기`"
      >
        <h2>{{ project.title }}</h2>
      </RouterLink>
      <p class="project-card-summary">{{ project.description }}</p>
      <ul class="project-tech-list" :aria-label="`${project.title} 핵심 기술`">
        <li v-for="technology in visibleTechnologies" :key="technology">{{ technology }}</li>
      </ul>
      <div class="project-card-actions">
        <RouterLink class="project-detail-link" :to="{ name: 'project-detail', params: { id: project.id } }">
          상세보기 <ArrowRight :size="16" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </article>
</template>
