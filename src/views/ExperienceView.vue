<script setup>
import { BriefcaseBusiness, GraduationCap, Award } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import { experienceGroups } from '../data/experience'

const icons = [BriefcaseBusiness, GraduationCap, Award]
</script>

<template>
  <PageHero
    eyebrow="Experience"
    title="배움과 실험의 궤적입니다."
    description="경력, 연구 활동, 교육과 수상 내역을 시간의 흐름에 따라 정리합니다."
    index="04"
  />

  <section class="section">
    <div class="container experience-groups">
      <section v-for="(group, groupIndex) in experienceGroups" :key="group.id" class="experience-group">
        <div class="experience-heading">
          <component :is="icons[groupIndex]" :size="22" aria-hidden="true" />
          <p>{{ group.label }}</p>
          <h2>{{ group.title }}</h2>
        </div>

        <ol class="timeline">
          <li v-for="item in group.items" :key="`${group.id}-${item.title}`">
            <span class="timeline-dot" aria-hidden="true"></span>
            <div class="timeline-period">{{ item.period }}</div>
            <div>
              <h3>{{ item.title }}</h3>
              <p class="timeline-organization">{{ item.organization }}</p>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <div class="data-note experience-note">
        <strong>콘텐츠 수정 안내</strong>
        <p><code>src/data/experience.js</code>에서 각 항목을 추가하거나 수정할 수 있습니다.</p>
      </div>
    </div>
  </section>
</template>
