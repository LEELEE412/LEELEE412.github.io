<script setup>
import { ArrowUpRight, FileText, PlayCircle } from '@lucide/vue'
import ProjectVisual from './ProjectVisual.vue'

defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="project-card">
    <RouterLink
      class="project-card-button"
      :to="{ name: 'project-detail', params: { id: project.id } }"
      :aria-label="`${project.title} 상세 보기`"
    >
      <ProjectVisual :project="project" />
      <div class="project-card-content">
        <div class="project-card-topline">
          <span>{{ project.year }} · {{ project.subtitle }}</span>
          <ArrowUpRight :size="19" aria-hidden="true" />
        </div>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="project-card-footer">
          <ul class="tag-list" :aria-label="`${project.title} 분야`">
            <li v-for="category in project.categories" :key="category">{{ category }}</li>
          </ul>
          <span v-if="project.videoUrl" class="media-kind"><PlayCircle :size="15" /> Demo</span>
          <span v-else-if="project.paperUrl" class="media-kind"><FileText :size="15" /> Paper</span>
        </div>
      </div>
    </RouterLink>
  </article>
</template>
