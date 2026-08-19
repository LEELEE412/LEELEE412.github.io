<script setup>
import { BriefcaseBusiness, GraduationCap } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import { experienceGroups } from '../data/experience'

const icons = {
  research: BriefcaseBusiness,
  education: GraduationCap,
}
</script>

<template>
  <PageHero
    eyebrow="Experience"
    title="연구와 구현의 궤적입니다."
    description="공개 자료로 확인된 연구 활동과 교육 이력을 시간의 흐름에 따라 정리했습니다."
    index="04"
  />

  <section class="section">
    <div class="container experience-groups">
      <section v-for="group in experienceGroups" :key="group.id" class="experience-group">
        <div class="experience-heading">
          <component :is="icons[group.id]" :size="22" aria-hidden="true" />
          <p>{{ group.label }}</p>
          <h2>{{ group.title }}</h2>
        </div>

        <ol class="timeline">
          <li v-for="item in group.items" :key="`${group.id}-${item.period}-${item.title}`">
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
    </div>
  </section>
</template>
