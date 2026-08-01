<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, ArrowUpRight } from '@lucide/vue'

const route = useRoute()
const menuOpen = ref(false)

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Publications', to: '/publications' },
  { label: 'Experience', to: '/experience' },
]

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<template>
  <a class="skip-link" href="#main-content">본문으로 바로가기</a>

  <header class="site-header">
    <div class="header-inner container">
      <RouterLink class="brand" to="/" aria-label="포트폴리오 홈">
        <span class="brand-mark" aria-hidden="true">R</span>
        <span class="brand-copy">
          <strong>R&amp;D PORTFOLIO</strong>
          <small>Immersive Intelligence</small>
        </span>
      </RouterLink>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        :aria-label="menuOpen ? '메뉴 닫기' : '메뉴 열기'"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="22" aria-hidden="true" />
        <Menu v-else :size="22" aria-hidden="true" />
      </button>

      <nav id="main-navigation" class="main-nav" :class="{ open: menuOpen }" aria-label="주요 메뉴">
        <RouterLink v-for="item in navigation" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
        <RouterLink class="nav-contact" to="/contact">
          Contact
          <ArrowUpRight :size="15" aria-hidden="true" />
        </RouterLink>
      </nav>
    </div>
  </header>

  <main id="main-content" tabindex="-1">
    <RouterView />
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <p class="footer-title">R&amp;D PORTFOLIO</p>
        <p>VR · Robotics · Digital Twin · AI</p>
      </div>
      <div class="footer-meta">
        <RouterLink to="/contact">연구 및 프로젝트 문의</RouterLink>
        <p>© {{ new Date().getFullYear() }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
