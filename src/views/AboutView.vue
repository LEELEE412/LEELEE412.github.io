<script setup>
import { MapPin, Radio, ArrowRight } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import { profile, researchAreas, skillGroups } from '../data/profile'
</script>

<template>
  <PageHero
    eyebrow="About"
    title="연구와 구현 사이를 연결합니다."
    description="문제를 관찰하고, 기술을 엮고, 직접 경험할 수 있는 시스템으로 만듭니다."
    index="01"
  />

  <section class="section">
    <div class="container about-intro">
      <div class="portrait-placeholder" role="img" aria-label="프로필 사진 준비 중">
        <span>PROFILE</span>
        <strong>PHOTO</strong>
        <small>이미지를 추가해 주세요</small>
      </div>
      <div class="about-copy">
        <p class="eyebrow">Profile</p>
        <h2>{{ profile.name }}</h2>
        <p class="about-role">{{ profile.role }}</p>
        <p class="about-description">{{ profile.introduction }}</p>
        <ul class="profile-meta">
          <li><MapPin :size="18" aria-hidden="true" /> {{ profile.location }}</li>
          <li><Radio :size="18" aria-hidden="true" /> {{ profile.availability }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section section-muted">
    <div class="container">
      <div class="section-heading-row">
        <div>
          <p class="eyebrow">Research Interests</p>
          <h2 class="section-title">연구 관심 분야</h2>
        </div>
        <p class="section-aside">현실과 가상 세계, 사람과 로봇 사이의<br />더 자연스러운 연결을 탐구합니다.</p>
      </div>

      <div class="interest-grid">
        <article v-for="(area, index) in researchAreas" :key="area.key">
          <div class="interest-number">0{{ index + 1 }}</div>
          <span>{{ area.key }}</span>
          <h3>{{ area.title }}</h3>
          <p>{{ area.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container skills-layout">
      <div>
        <p class="eyebrow">Capabilities</p>
        <h2 class="section-title">주요 기술 스택</h2>
        <p class="skills-lead">실제 사용 기술에 맞게 <code>src/data/profile.js</code>만 수정하면 이 목록을 업데이트할 수 있습니다.</p>
      </div>
      <div class="skill-groups">
        <article v-for="(group, index) in skillGroups" :key="group.title">
          <span>0{{ index + 1 }}</span>
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="slim-cta">
    <div class="container slim-cta-inner">
      <p>구체적인 결과물은 프로젝트에서 확인할 수 있습니다.</p>
      <RouterLink class="text-link text-link-light" to="/projects">
        프로젝트 보기 <ArrowRight :size="17" aria-hidden="true" />
      </RouterLink>
    </div>
  </section>
</template>
