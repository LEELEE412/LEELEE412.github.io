<script setup>
import { computed } from 'vue'
import { ArrowRight, ArrowDownRight } from '@lucide/vue'
import { profile, researchAreas } from '../data/profile'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'

const featuredProjects = computed(() => projects.filter((project) => project.featured))
const videoCount = computed(() => projects.filter((project) => project.videoUrl).length)
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
          <span>RESEARCH SCOPE · 2023</span>
          <span class="status"><i></i> ARCHIVE ONLINE</span>
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
        <h2 class="section-title">연구 아이디어를<br />직접 경험하게 만듭니다.</h2>
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
      <div><strong>{{ projects.length.toString().padStart(2, '0') }}</strong><span>Case Studies</span></div>
      <div><strong>{{ videoCount.toString().padStart(2, '0') }}</strong><span>Demo Videos</span></div>
      <div><strong>01</strong><span>Journal Article</span></div>
      <div><strong>2023</strong><span>Research Archive</span></div>
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
      <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
    </div>
  </section>

  <section class="home-cta">
    <div class="container home-cta-inner">
      <div>
        <p class="eyebrow eyebrow-light">Research Archive</p>
        <h2>영상과 기술 맥락을<br />한 프로젝트씩 살펴보세요.</h2>
      </div>
      <RouterLink class="button button-inverse" to="/projects">
        View Projects
        <ArrowRight :size="18" aria-hidden="true" />
      </RouterLink>
    </div>
  </section>
</template>
