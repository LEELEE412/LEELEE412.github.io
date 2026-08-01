<script setup>
import { ArrowUpRight } from '@lucide/vue'
import ProjectVisual from './ProjectVisual.vue'

defineProps({
  project: { type: Object, required: true },
})

defineEmits(['select'])
</script>

<template>
  <article class="project-card">
    <button
      class="project-card-button"
      type="button"
      :aria-label="`${project.title} 상세 보기`"
      @click="$emit('select', project)"
    >
      <ProjectVisual :project="project" />
      <div class="project-card-content">
        <div class="project-card-topline">
          <span>{{ project.subtitle }}</span>
          <ArrowUpRight :size="19" aria-hidden="true" />
        </div>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <ul class="tag-list" :aria-label="`${project.title} 분야`">
          <li v-for="category in project.categories" :key="category">{{ category }}</li>
        </ul>
      </div>
    </button>
  </article>
</template>
