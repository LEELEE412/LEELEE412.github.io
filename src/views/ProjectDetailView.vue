<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Code2,
  ExternalLink,
  FileText,
  Layers3,
  PlayCircle,
  UserRound,
} from '@lucide/vue'
import { findProject, projects } from '../data/projects'

const route = useRoute()
const project = computed(() => findProject(route.params.id))
const gallery = computed(() => project.value?.gallery ?? [])
const hasMedia = computed(
  () => Boolean(project.value?.videoUrl || project.value?.image || gallery.value.length),
)
const hasRelatedLinks = computed(
  () => Boolean(project.value?.videoUrl || project.value?.codeUrl || project.value?.paperUrl),
)
const nextProject = computed(() => {
  const currentIndex = projects.findIndex((item) => item.id === project.value?.id)
  if (currentIndex < 0) return projects[0]
  return projects[(currentIndex + 1) % projects.length]
})

function mediaSource(item) {
  return typeof item === 'string' ? item : item.src
}

function mediaAlt(item, index) {
  return typeof item === 'string' ? `${project.value.title} 추가 이미지 ${index + 1}` : item.alt
}
</script>

<template>
  <div v-if="project" class="project-detail-page project-detail-compact">
    <header class="detail-header-compact">
      <div class="container">
        <RouterLink class="detail-back" to="/projects">
          <ArrowLeft :size="17" aria-hidden="true" /> Projects
        </RouterLink>
        <p class="detail-kicker">{{ project.year }} · {{ project.subtitle }}</p>
        <h1>{{ project.title }}</h1>
        <p class="detail-introduction">{{ project.description }}</p>
        <ul class="detail-categories" :aria-label="`${project.title} 분야`">
          <li v-for="category in project.categories" :key="category">{{ category }}</li>
        </ul>
      </div>
    </header>

    <main class="section detail-compact-content">
      <div class="container">
        <section class="detail-overview" aria-labelledby="project-overview-title">
          <div>
            <p class="eyebrow">Overview</p>
            <h2 id="project-overview-title">기본 정보</h2>
          </div>
          <dl class="detail-meta-grid">
            <div>
              <dt><CalendarDays :size="16" aria-hidden="true" /> 기간</dt>
              <dd>{{ project.period }}</dd>
            </div>
            <div>
              <dt><UserRound :size="16" aria-hidden="true" /> 역할 / 참여 형태</dt>
              <dd>{{ project.role }}</dd>
            </div>
            <div class="detail-meta-stack">
              <dt><Layers3 :size="16" aria-hidden="true" /> 기술 스택</dt>
              <dd>
                <ul class="detail-stack">
                  <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>

        <div class="detail-work-grid">
          <section v-if="project.contribution?.length" aria-labelledby="project-build-title">
            <p class="eyebrow">Build</p>
            <h2 id="project-build-title">주요 구현</h2>
            <ul class="detail-list">
              <li v-for="item in project.contribution" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section v-if="project.achievements?.length" aria-labelledby="project-outcome-title">
            <p class="eyebrow">Outcome</p>
            <h2 id="project-outcome-title">성과</h2>
            <ul class="detail-list detail-list-outcome">
              <li v-for="item in project.achievements" :key="item">{{ item }}</li>
            </ul>
          </section>
        </div>

        <section v-if="hasMedia" class="detail-media-section" aria-labelledby="project-media-title">
          <div class="detail-section-heading">
            <div>
              <p class="eyebrow">Media</p>
              <h2 id="project-media-title">미디어</h2>
            </div>
            <p>프로젝트의 실제 시연 화면과 결과물입니다.</p>
          </div>

          <video
            v-if="project.videoUrl"
            :key="project.videoUrl"
            class="detail-video"
            controls
            playsinline
            preload="metadata"
            :poster="project.image"
          >
            <source :src="project.videoUrl" type="video/mp4" />
            이 브라우저에서는 영상을 재생할 수 없습니다.
          </video>
          <img
            v-else-if="project.image"
            class="detail-cover"
            :src="project.image"
            :alt="project.imageAlt"
          />

          <div v-if="gallery.length" class="detail-gallery">
            <figure v-for="(item, index) in gallery" :key="mediaSource(item)">
              <img :src="mediaSource(item)" :alt="mediaAlt(item, index)" />
            </figure>
          </div>
        </section>

        <section v-if="hasRelatedLinks" class="detail-related" aria-labelledby="project-links-title">
          <div>
            <p class="eyebrow">Links</p>
            <h2 id="project-links-title">관련 링크</h2>
          </div>
          <div class="detail-related-links">
            <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank" rel="noopener noreferrer">
              <Code2 :size="18" aria-hidden="true" /> GitHub
              <ExternalLink :size="15" aria-hidden="true" />
            </a>
            <a v-if="project.paperUrl" :href="project.paperUrl" target="_blank" rel="noopener noreferrer">
              <FileText :size="18" aria-hidden="true" /> 논문
              <ExternalLink :size="15" aria-hidden="true" />
            </a>
            <a v-if="project.videoUrl" :href="project.videoUrl" target="_blank" rel="noopener noreferrer">
              <PlayCircle :size="18" aria-hidden="true" /> 영상 새 창에서 보기
              <ExternalLink :size="15" aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>
    </main>

    <nav class="next-project" aria-label="다음 프로젝트">
      <RouterLink
        class="container next-project-inner"
        :to="{ name: 'project-detail', params: { id: nextProject.id } }"
      >
        <span>Next project</span>
        <strong>{{ nextProject.title }}</strong>
        <ArrowRight :size="24" aria-hidden="true" />
      </RouterLink>
    </nav>
  </div>

  <section v-else class="section not-found">
    <div class="container">
      <p class="eyebrow">Not found</p>
      <h1>프로젝트를 찾을 수 없습니다.</h1>
      <RouterLink class="text-link" to="/projects">프로젝트 목록으로 돌아가기</RouterLink>
    </div>
  </section>
</template>
