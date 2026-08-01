<script setup>
import { computed, ref } from 'vue'
import { ArrowRight, ArrowDownRight } from '@lucide/vue'
import { profile, researchAreas } from '../data/profile'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'

const featuredProjects = computed(() => projects.filter((project) => project.featured))
const selectedProject = ref(null)
</script>

<template>
  <section class="home-hero">
    <div class="hero-noise" aria-hidden="true"></div>
    <div class="container home-hero-grid">
      <div class="hero-copy">
        <p class="eyebrow eyebrow-light">Research &amp; Development Portfolio</p>
        <h1>
          <span>{{ profile.name }}</span>
          <strong>{{ profile.role }}</strong>
        </h1>
        <p class="hero-tagline">{{ profile.tagline }}</p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" to="/projects">
            프로젝트 살펴보기
            <ArrowRight :size="18" aria-hidden="true" />
          </RouterLink>
          <RouterLink class="text-link text-link-light" to="/about">
            연구자 소개
            <ArrowDownRight :size="17" aria-hidden="true" />
          </RouterLink>
        </div>
      </div>

      <div class="hero-console" aria-label="주요 연구 분야">
        <div class="console-head">
          <span>RESEARCH SCOPE</span>
          <span class="status"><i></i> ACTIVE</span>
        </div>
        <div class="console-core">
          <div class="core-rings" aria-hidden="true">
            <span class="ring ring-one"></span>
            <span class="ring ring-two"></span>
            <span class="ring ring-three"></span>
            <span class="core-dot"></span>
          </div>
          <p>Human-centered<br /><strong>Immersive Intelligence</strong></p>
        </div>
        <ol class="console-areas">
          <li v-for="(area, index) in researchAreas" :key="area.key">
            <span>0{{ index + 1 }}</span>
            <strong>{{ area.title }}</strong>
            <small>{{ area.key }}</small>
          </li>
        </ol>
      </div>
    </div>

    <div class="container hero-bottom">
      <ul class="hero-fields" aria-label="연구 분야">
        <li v-for="area in researchAreas" :key="area.key">{{ area.key === 'RB' ? 'Robotics' : area.title }}</li>
      </ul>
      <span class="scroll-note">SCROLL TO EXPLORE <i aria-hidden="true"></i></span>
    </div>
  </section>

  <section class="section section-intro">
    <div class="container intro-grid">
      <div>
        <p class="eyebrow">Research Direction</p>
        <h2 class="section-title">기술을 연결해<br />더 나은 경험을 설계합니다.</h2>
      </div>
      <div class="intro-copy">
        <p>{{ profile.introduction }}</p>
        <RouterLink class="text-link" to="/about">
          연구 분야 자세히 보기
          <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>

    <div class="container stats-strip" aria-label="포트폴리오 요약">
      <div><strong>06</strong><span>Projects</span></div>
      <div><strong>04</strong><span>Research Areas</span></div>
      <div><strong>XR</strong><span>Core Perspective</span></div>
      <div><strong>R&amp;D</strong><span>From Idea to Prototype</span></div>
    </div>
  </section>

  <section class="section section-muted">
    <div class="container section-heading-row">
      <div>
        <p class="eyebrow">Selected Work</p>
        <h2 class="section-title">대표 프로젝트</h2>
      </div>
      <RouterLink class="text-link" to="/projects">
        전체 프로젝트
        <ArrowRight :size="17" aria-hidden="true" />
      </RouterLink>
    </div>

    <div class="container project-grid project-grid-featured">
      <ProjectCard
        v-for="project in featuredProjects"
        :key="project.id"
        :project="project"
        @select="selectedProject = $event"
      />
    </div>
  </section>

  <section class="home-cta">
    <div class="container home-cta-inner">
      <div>
        <p class="eyebrow eyebrow-light">Let’s Connect</p>
        <h2>새로운 연구와<br />협업을 이야기해요.</h2>
      </div>
      <RouterLink class="button button-inverse" to="/contact">
        Contact
        <ArrowRight :size="18" aria-hidden="true" />
      </RouterLink>
    </div>
  </section>

  <ProjectModal :project="selectedProject" @close="selectedProject = null" />
</template>
