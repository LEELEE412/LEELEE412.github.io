<script setup>
import { Mail, Code2, Link2, ArrowUpRight, MapPin } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import { profile } from '../data/profile'
</script>

<template>
  <PageHero
    eyebrow="Contact"
    title="좋은 질문에서 협업이 시작됩니다."
    description="연구 협업, XR 프로토타이핑과 기술 프로젝트에 관한 대화를 기다립니다."
    index="05"
  />

  <section class="section contact-section">
    <div class="container contact-grid">
      <div class="contact-intro">
        <p class="eyebrow">Get in touch</p>
        <h2>함께 탐구할<br />주제가 있나요?</h2>
        <p>공개 포트폴리오에는 개인 연락처를 노출하지 않습니다. GitHub 프로필을 통해 프로젝트를 확인할 수 있습니다.</p>
        <span><MapPin :size="17" aria-hidden="true" /> {{ profile.location }}</span>
      </div>

      <address class="contact-list">
        <a v-if="profile.emailHref" :href="profile.emailHref">
          <span class="contact-icon"><Mail :size="23" aria-hidden="true" /></span>
          <span><small>Email</small><strong>{{ profile.email }}</strong></span>
          <ArrowUpRight :size="21" aria-hidden="true" />
        </a>

        <a :href="profile.githubUrl" target="_blank" rel="noopener noreferrer">
          <span class="contact-icon"><Code2 :size="23" aria-hidden="true" /></span>
          <span><small>Code &amp; Projects</small><strong>{{ profile.githubLabel }}</strong></span>
          <ArrowUpRight :size="21" aria-hidden="true" />
        </a>

        <a
          v-if="profile.linkedInUrl"
          :href="profile.linkedInUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-icon"><Link2 :size="23" aria-hidden="true" /></span>
          <span><small>Elsewhere</small><strong>{{ profile.linkedInLabel }}</strong></span>
          <ArrowUpRight :size="21" aria-hidden="true" />
        </a>
      </address>
    </div>
  </section>

  <section class="contact-bottom">
    <div class="container">
      <p>OPEN TO COLLABORATION</p>
      <span>VR / ROBOTICS / DIGITAL TWIN / AI</span>
    </div>
  </section>
</template>
