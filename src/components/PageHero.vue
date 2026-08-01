<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  index: { type: String, required: true },
})
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero-inner">
      <div>
        <p class="eyebrow eyebrow-light">{{ eyebrow }}</p>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <span class="page-index" aria-hidden="true">{{ index }}</span>
    </div>
  </section>
</template>
