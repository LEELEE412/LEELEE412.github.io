<script setup>
import { computed } from 'vue'
import { ArrowRight, Code2, FileText, PlayCircle } from '@lucide/vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const visibleTechnologies = computed(() => props.project.technologies.slice(0, 6))
</script>

<template>
  <article class="project-card project-card-compact">
    <div class="project-card-content">
      <div class="project-card-topline">
        <span>{{ project.year }}</span>
        <small>{{ project.subtitle }}</small>
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
        <div class="project-resource-links" aria-label="관련 자료">
          <a
            v-if="project.videoUrl"
            :href="project.videoUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${project.title} 영상 보기`"
            title="영상 보기"
          >
            <PlayCircle :size="17" aria-hidden="true" />
          </a>
          <a
            v-if="project.codeUrl"
            :href="project.codeUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${project.title} GitHub 보기`"
            title="GitHub 보기"
          >
            <Code2 :size="17" aria-hidden="true" />
          </a>
          <a
            v-if="project.paperUrl"
            :href="project.paperUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${project.title} 논문 보기`"
            title="논문 보기"
          >
            <FileText :size="17" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
