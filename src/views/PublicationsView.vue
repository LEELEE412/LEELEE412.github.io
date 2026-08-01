<script setup>
import { ExternalLink, FileText } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import { publications } from '../data/publications'
</script>

<template>
  <PageHero
    eyebrow="Publications"
    title="연구 결과를 기록하고 공유합니다."
    description="논문, 학술대회 발표와 연구 성과를 연도별로 정리합니다."
    index="03"
  />

  <section class="section">
    <div class="container publication-layout">
      <aside>
        <p class="eyebrow">Archive</p>
        <h2>Publications<br />&amp; Presentations</h2>
        <p>실제 목록은 데이터 파일에서 항목을 추가하거나 수정할 수 있습니다.</p>
      </aside>

      <div class="publication-list">
        <article v-for="publication in publications" :key="publication.id">
          <div class="publication-year">{{ publication.year }}</div>
          <div class="publication-main">
            <span class="publication-type"><FileText :size="15" aria-hidden="true" /> {{ publication.type }}</span>
            <h3>{{ publication.title }}</h3>
            <p class="publication-venue">{{ publication.venue }}</p>
            <p class="publication-authors">{{ publication.authors }}</p>
          </div>
          <a
            v-if="publication.url"
            class="publication-link"
            :href="publication.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${publication.title} 원문 보기`"
          >
            <ExternalLink :size="19" aria-hidden="true" />
          </a>
        </article>

        <div class="data-note">
          <strong>콘텐츠 수정 안내</strong>
          <p><code>src/data/publications.js</code>에서 연도, 제목, 학회명, 저자와 링크를 관리합니다.</p>
        </div>
      </div>
    </div>
  </section>
</template>
