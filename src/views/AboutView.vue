<script setup>
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FileText,
  Link2,
  Mail,
  MapPin,
  Radio,
} from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import { awards, certifications, profile, researchAreas, skillGroups } from '../data/profile'
import { experienceGroups } from '../data/experience'
import { publications } from '../data/publications'

const experience = experienceGroups.find((group) => group.id === 'research')?.items ?? []
const education = experienceGroups.find((group) => group.id === 'education')?.items ?? []
const hasCredentials = awards.length > 0 || certifications.length > 0
</script>

<template>
  <PageHero
    eyebrow="About"
    title="About"
    description="XR, 로보틱스와 디지털 트윈을 중심으로 연구 아이디어를 실제 경험 가능한 시스템으로 구현합니다."
    compact
  />

  <div class="about-resume">
    <section id="profile" class="resume-section">
      <div class="container resume-section-grid">
        <div class="resume-section-heading">
          <p class="eyebrow">Profile</p>
          <h2>소개</h2>
        </div>
        <div class="resume-section-content profile-summary">
          <h3>{{ profile.name }}</h3>
          <p class="about-role">{{ profile.role }}</p>
          <p class="about-description">{{ profile.introduction }}</p>
          <ul class="profile-meta">
            <li><MapPin :size="17" aria-hidden="true" /> {{ profile.location }}</li>
            <li><Radio :size="17" aria-hidden="true" /> {{ profile.availability }}</li>
          </ul>
          <div class="interest-list" aria-label="주요 관심 분야">
            <article v-for="area in researchAreas" :key="area.key">
              <span>{{ area.key }}</span>
              <div>
                <h4>{{ area.title }}</h4>
                <p>{{ area.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="resume-section section-muted">
      <div class="container resume-section-grid">
        <div class="resume-section-heading">
          <p class="eyebrow">Skills</p>
          <h2>기술 스택</h2>
        </div>
        <div class="skill-groups resume-skill-groups">
          <article v-for="group in skillGroups" :key="group.title">
            <h3>{{ group.title }}</h3>
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="experience" class="resume-section">
      <div class="container resume-section-grid">
        <div class="resume-section-heading">
          <p class="eyebrow">Experience</p>
          <h2>경험 · 연구</h2>
        </div>
        <ol class="resume-timeline">
          <li v-for="item in experience" :key="`experience-${item.period}-${item.title}`">
            <time>{{ item.period }}</time>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.organization }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section id="education" class="resume-section section-muted">
      <div class="container resume-section-grid">
        <div class="resume-section-heading">
          <p class="eyebrow">Education</p>
          <h2>학력</h2>
        </div>
        <ol class="resume-timeline">
          <li v-for="item in education" :key="`education-${item.period}-${item.title}`">
            <time>{{ item.period }}</time>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.organization }}</p>
              <small>{{ item.description }}</small>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section id="publications" class="resume-section">
      <div class="container resume-section-grid">
        <div class="resume-section-heading">
          <p class="eyebrow">Publications</p>
          <h2>논문</h2>
        </div>
        <div class="resume-publications">
          <article v-for="publication in publications" :key="publication.id">
            <time>{{ publication.year }}</time>
            <div>
              <span><FileText :size="15" aria-hidden="true" /> {{ publication.type }}</span>
              <h3>{{ publication.title }}</h3>
              <p>{{ publication.venue }}</p>
              <small>{{ publication.authors }}</small>
            </div>
            <a
              v-if="publication.url"
              :href="publication.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${publication.title} 원문 보기`"
            >
              <ExternalLink :size="18" aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>

    <section v-if="hasCredentials" id="credentials" class="resume-section section-muted">
      <div class="container resume-section-grid">
        <div class="resume-section-heading">
          <p class="eyebrow">Credentials</p>
          <h2>수상 · 자격</h2>
        </div>
        <div class="credential-groups">
          <article v-if="awards.length">
            <h3>Awards</h3>
            <ul>
              <li v-for="award in awards" :key="`${award.year}-${award.title}`">
                <time>{{ award.year }}</time>
                <strong>{{ award.title }}</strong>
                <span>{{ award.issuer }}</span>
              </li>
            </ul>
          </article>
          <article v-if="certifications.length">
            <h3>Certifications</h3>
            <ul>
              <li v-for="certification in certifications" :key="`${certification.year}-${certification.title}`">
                <time>{{ certification.year }}</time>
                <strong>{{ certification.title }}</strong>
                <span>{{ certification.issuer }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="resume-section about-contact-section">
      <div class="container resume-section-grid">
        <div class="resume-section-heading">
          <p class="eyebrow eyebrow-light">Contact</p>
          <h2>연락처</h2>
        </div>
        <address class="about-contact-list">
          <a v-if="profile.emailHref" :href="profile.emailHref">
            <Mail :size="20" aria-hidden="true" />
            <span><small>Email</small><strong>{{ profile.email }}</strong></span>
            <ArrowUpRight :size="18" aria-hidden="true" />
          </a>
          <a :href="profile.githubUrl" target="_blank" rel="noopener noreferrer">
            <Code2 :size="20" aria-hidden="true" />
            <span><small>GitHub</small><strong>{{ profile.githubLabel }}</strong></span>
            <ArrowUpRight :size="18" aria-hidden="true" />
          </a>
          <a
            v-if="profile.linkedInUrl"
            :href="profile.linkedInUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link2 :size="20" aria-hidden="true" />
            <span><small>LinkedIn</small><strong>{{ profile.linkedInLabel }}</strong></span>
            <ArrowUpRight :size="18" aria-hidden="true" />
          </a>
        </address>
      </div>
    </section>
  </div>
</template>
