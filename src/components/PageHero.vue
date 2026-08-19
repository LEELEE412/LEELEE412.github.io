<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  index: { type: String, default: '' },
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <section class="page-hero" :class="{ 'page-hero-compact': compact }">
    <div class="container page-hero-inner">
      <div>
        <p class="eyebrow eyebrow-light">{{ eyebrow }}</p>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <span v-if="index" class="page-index" aria-hidden="true">{{ index }}</span>
    </div>
  </section>
</template>
