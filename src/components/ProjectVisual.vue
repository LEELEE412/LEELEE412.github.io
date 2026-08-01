<script setup>
import { Image as ImageIcon } from '@lucide/vue'

defineProps({
  project: { type: Object, required: true },
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <div class="project-visual" :class="[`visual-${project.index}`, { compact }]">
    <img v-if="project.image" :src="project.image" :alt="project.imageAlt" />
    <div v-else class="visual-placeholder" role="img" :aria-label="`${project.title} 이미지 준비 중`">
      <div class="visual-grid" aria-hidden="true"></div>
      <div class="visual-orbit" aria-hidden="true">
        <span></span>
      </div>
      <div class="placeholder-label">
        <ImageIcon :size="19" aria-hidden="true" />
        <span>PROJECT IMAGE</span>
      </div>
      <strong aria-hidden="true">{{ project.index }}</strong>
    </div>
  </div>
</template>
