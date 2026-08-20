<script setup>
import { ExternalLink, FileText, PlayCircle } from '@lucide/vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="case-study" aria-labelledby="case-study-title">
    <figure class="case-study-cover">
      <img
        :src="project.caseStudy.coverImage || project.image"
        :alt="project.caseStudy.coverAlt || project.imageAlt"
      />
      <figcaption>
        <span>Flagship Project</span>
        가상 시뮬레이션에서 실제 수상 실험까지
      </figcaption>
    </figure>

    <section class="case-study-opening">
      <div class="case-study-heading">
        <p class="eyebrow">Project Story</p>
        <h2 id="case-study-title">{{ project.caseStudy.headline }}</h2>
      </div>
      <div class="case-study-opening-copy">
        <p v-for="paragraph in project.caseStudy.introduction" :key="paragraph">{{ paragraph }}</p>
      </div>
    </section>

    <section class="case-study-scope" aria-labelledby="case-study-scope-title">
      <div class="case-study-section-heading">
        <p class="eyebrow">My Scope</p>
        <h2 id="case-study-scope-title">직접 맡은 범위와 협업한 범위</h2>
      </div>
      <div class="case-study-scope-grid">
        <div class="case-study-scope-card case-study-scope-card-primary">
          <span>직접 수행</span>
          <ul>
            <li v-for="item in project.caseStudy.scope.direct" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="case-study-scope-card">
          <span>협업과 학습</span>
          <p>{{ project.caseStudy.scope.collaboration }}</p>
        </div>
      </div>
    </section>

    <section class="case-study-metrics" aria-label="프로젝트 핵심 수치">
      <article v-for="metric in project.caseStudy.metrics" :key="metric.label">
        <strong>{{ metric.value }}</strong>
        <span>{{ metric.label }}</span>
      </article>
    </section>

    <section class="case-study-system-flow" aria-labelledby="case-study-flow-title">
      <div class="case-study-section-heading">
        <p class="eyebrow">System Flow</p>
        <h2 id="case-study-flow-title">하나의 인터페이스로 가상과 실물을 잇다</h2>
      </div>
      <ol>
        <li v-for="item in project.caseStudy.systemFlow" :key="item.title">
          <span>{{ item.step }}</span>
          <strong>{{ item.title }}</strong>
          <small>{{ item.description }}</small>
        </li>
      </ol>
    </section>

    <section
      v-for="(chapter, chapterIndex) in project.caseStudy.chapters"
      :key="chapter.number"
      class="case-study-chapter"
      :class="{ 'case-study-chapter-reverse': chapterIndex % 2 === 1 }"
    >
      <div class="case-study-chapter-copy">
        <div class="case-study-chapter-number">{{ chapter.number }}</div>
        <p class="eyebrow">{{ chapter.eyebrow }}</p>
        <h2>{{ chapter.title }}</h2>
        <p v-for="paragraph in chapter.paragraphs" :key="paragraph">{{ paragraph }}</p>
        <ul v-if="chapter.points?.length" class="case-study-point-list">
          <li v-for="point in chapter.points" :key="point">{{ point }}</li>
        </ul>
      </div>

      <div
        v-if="chapter.media?.length"
        class="case-study-media-grid"
        :class="`case-study-media-${chapter.media.length}`"
      >
        <figure v-for="item in chapter.media" :key="item.src">
          <img :src="item.src" :alt="item.alt" loading="lazy" />
          <figcaption>{{ item.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="case-study-video-section" aria-labelledby="case-study-video-title">
      <div class="case-study-section-heading">
        <p class="eyebrow">Simulation & Field Test</p>
        <h2 id="case-study-video-title">가상 검증과 실물 검증을 영상으로 연결하다</h2>
      </div>
      <div class="case-study-video-grid">
        <article v-for="video in project.caseStudy.videos" :key="video.src">
          <video controls playsinline preload="metadata" :poster="video.poster">
            <source :src="video.src" type="video/mp4" />
            이 브라우저에서는 영상을 재생할 수 없습니다.
          </video>
          <div>
            <PlayCircle :size="20" aria-hidden="true" />
            <span>
              <strong>{{ video.title }}</strong>
              <small>{{ video.description }}</small>
            </span>
          </div>
        </article>
      </div>
    </section>

    <section class="case-study-results" aria-labelledby="case-study-results-title">
      <div class="case-study-section-heading">
        <p class="eyebrow">40 Field Trials</p>
        <h2 id="case-study-results-title">네 가지 임무를 같은 조건에서 반복 검증하다</h2>
        <p>{{ project.caseStudy.resultIntro }}</p>
      </div>
      <div class="case-study-result-grid">
        <article v-for="result in project.caseStudy.results" :key="result.title">
          <span>{{ result.score }}</span>
          <h3>{{ result.title }}</h3>
          <p>{{ result.description }}</p>
        </article>
      </div>
    </section>

    <section class="case-study-learnings" aria-labelledby="case-study-learnings-title">
      <div class="case-study-section-heading">
        <p class="eyebrow">What I Learned</p>
        <h2 id="case-study-learnings-title">성공률보다 실패 원인을 다음 설계에 남기다</h2>
      </div>
      <div class="case-study-learning-grid">
        <article v-for="learning in project.caseStudy.learnings" :key="learning.title">
          <span>{{ learning.label }}</span>
          <h3>{{ learning.title }}</h3>
          <p>{{ learning.description }}</p>
        </article>
      </div>
    </section>

    <section class="case-study-conclusion">
      <p class="eyebrow">Conclusion</p>
      <h2>{{ project.caseStudy.conclusion.title }}</h2>
      <p>{{ project.caseStudy.conclusion.description }}</p>
      <a
        v-if="project.paperUrl"
        class="case-study-thesis-link"
        :href="project.paperUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FileText :size="21" aria-hidden="true" />
        <span>
          <small>{{ project.paperType || 'Thesis' }}</small>
          <strong>{{ project.paperTitle }}</strong>
        </span>
        <ExternalLink :size="17" aria-hidden="true" />
      </a>
    </section>
  </article>
</template>
