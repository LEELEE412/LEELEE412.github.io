<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { X, CalendarDays, UserRound, Layers3, Trophy, FileText, Play, ExternalLink } from '@lucide/vue'
import ProjectVisual from './ProjectVisual.vue'

const props = defineProps({
  project: { type: Object, default: null },
})

const emit = defineEmits(['close'])
const closeButton = ref(null)
let previouslyFocused = null

function close() {
  emit('close')
}

function handleKeydown(event) {
  if (event.key === 'Escape' && props.project) close()
}

watch(
  () => props.project,
  async (project) => {
    if (project) {
      previouslyFocused = document.activeElement
      document.body.classList.add('modal-open')
      await nextTick()
      closeButton.value?.focus()
    } else {
      document.body.classList.remove('modal-open')
      previouslyFocused?.focus?.()
    }
  },
)

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('modal-open')
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="project" class="modal-backdrop" @mousedown.self="close">
        <section
          class="project-modal"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`project-title-${project.id}`"
        >
          <button ref="closeButton" class="modal-close" type="button" aria-label="상세 창 닫기" @click="close">
            <X :size="23" aria-hidden="true" />
          </button>

          <ProjectVisual :project="project" compact />

          <div class="modal-content">
            <p class="eyebrow">{{ project.subtitle }}</p>
            <h2 :id="`project-title-${project.id}`">{{ project.title }}</h2>
            <p class="modal-description">{{ project.description }}</p>

            <dl class="project-facts">
              <div>
                <dt><CalendarDays :size="17" aria-hidden="true" /> 기간</dt>
                <dd>{{ project.period }}</dd>
              </div>
              <div>
                <dt><UserRound :size="17" aria-hidden="true" /> 역할</dt>
                <dd>{{ project.role }}</dd>
              </div>
              <div>
                <dt><Layers3 :size="17" aria-hidden="true" /> 기술</dt>
                <dd>{{ project.technologies.join(' · ') }}</dd>
              </div>
              <div>
                <dt><Trophy :size="17" aria-hidden="true" /> 성과</dt>
                <dd>{{ project.achievements.join(' · ') }}</dd>
              </div>
            </dl>

            <div v-if="project.paperUrl || project.videoUrl || project.projectUrl" class="modal-links">
              <a v-if="project.paperUrl" :href="project.paperUrl" target="_blank" rel="noopener noreferrer">
                <FileText :size="17" aria-hidden="true" /> 논문 보기
              </a>
              <a v-if="project.videoUrl" :href="project.videoUrl" target="_blank" rel="noopener noreferrer">
                <Play :size="17" aria-hidden="true" /> 영상 보기
              </a>
              <a v-if="project.projectUrl" :href="project.projectUrl" target="_blank" rel="noopener noreferrer">
                <ExternalLink :size="17" aria-hidden="true" /> 프로젝트 링크
              </a>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>
