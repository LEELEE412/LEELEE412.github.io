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
  LockKeyhole,
  Play,
  UserRound,
} from '@lucide/vue'
import { findProject, projects } from '../data/projects'

const route = useRoute()
const project = computed(() => findProject(route.params.id))
const nextProject = computed(() => {
  const currentIndex = projects.findIndex((item) => item.id === project.value?.id)
  if (currentIndex < 0) return projects[0]
  return projects[(currentIndex + 1) % projects.length]
})
</script>

<template>
  <div v-if="project" class="project-detail-page">
    <section class="project-detail-hero">
      <div class="container">
        <RouterLink class="detail-back" to="/projects">
          <ArrowLeft :size="17" aria-hidden="true" /> All projects
        </RouterLink>

        <div class="detail-hero-grid">
          <div>
            <p class="eyebrow eyebrow-light">{{ project.year }} · Case study {{ project.index }}</p>
            <h1>{{ project.title }}</h1>
            <p class="detail-subtitle">{{ project.subtitle }}</p>
          </div>
          <p class="detail-lead">{{ project.description }}</p>
        </div>

        <ul class="detail-categories" :aria-label="`${project.title} 분야`">
          <li v-for="category in project.categories" :key="category">{{ category }}</li>
        </ul>
      </div>
    </section>

    <section class="container detail-media-wrap" aria-label="프로젝트 미디어">
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
      <img v-else :key="project.image" class="detail-cover" :src="project.image" :alt="project.imageAlt" />
    </section>

    <section class="section detail-content-section">
      <div class="container detail-layout">
        <aside class="detail-facts">
          <div>
            <span><CalendarDays :size="17" aria-hidden="true" /> Period</span>
            <strong>{{ project.period }}</strong>
          </div>
          <div>
            <span><UserRound :size="17" aria-hidden="true" /> Role</span>
            <strong>{{ project.role }}</strong>
          </div>
          <div>
            <span><Layers3 :size="17" aria-hidden="true" /> Stack</span>
            <ul class="detail-stack">
              <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
            </ul>
          </div>

          <div class="detail-actions">
            <a v-if="project.videoUrl" :href="project.videoUrl" target="_blank" rel="noopener noreferrer">
              <Play :size="17" aria-hidden="true" /> Open demo video
            </a>
            <a v-if="project.paperUrl" :href="project.paperUrl" target="_blank" rel="noopener noreferrer">
              <FileText :size="17" aria-hidden="true" /> Read publication
              <ExternalLink :size="15" aria-hidden="true" />
            </a>
            <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank" rel="noopener noreferrer">
              <Code2 :size="17" aria-hidden="true" /> View code
              <ExternalLink :size="15" aria-hidden="true" />
            </a>
            <span v-else class="private-code"><LockKeyhole :size="16" /> Code · {{ project.codeStatus }}</span>
          </div>
        </aside>

        <article class="detail-story">
          <section>
            <p class="detail-section-index">01 / Context</p>
            <h2>프로젝트가 해결하려 한 문제</h2>
            <p>{{ project.challenge }}</p>
          </section>

          <section>
            <p class="detail-section-index">02 / Build</p>
            <h2>설계하고 구현한 것</h2>
            <ul class="detail-list">
              <li v-for="item in project.contribution" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section>
            <p class="detail-section-index">03 / Outcome</p>
            <h2>결과와 의미</h2>
            <ul class="detail-list detail-list-outcome">
              <li v-for="item in project.achievements" :key="item">{{ item }}</li>
            </ul>
          </section>
        </article>
      </div>
    </section>

    <section class="next-project">
      <RouterLink
        class="container next-project-inner"
        :to="{ name: 'project-detail', params: { id: nextProject.id } }"
      >
        <span>Next project · {{ nextProject.index }}</span>
        <strong>{{ nextProject.title }}</strong>
        <ArrowRight :size="28" aria-hidden="true" />
      </RouterLink>
    </section>
  </div>

  <section v-else class="section not-found">
    <div class="container">
      <p class="eyebrow">Not found</p>
      <h1>프로젝트를 찾을 수 없습니다.</h1>
      <RouterLink class="text-link" to="/projects">프로젝트 목록으로 돌아가기</RouterLink>
    </div>
  </section>
</template>
