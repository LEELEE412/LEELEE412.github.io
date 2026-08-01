import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue'), meta: { title: 'Home' } },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'About' } },
  { path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue'), meta: { title: 'Projects' } },
  { path: '/publications', name: 'publications', component: () => import('../views/PublicationsView.vue'), meta: { title: 'Publications' } },
  { path: '/experience', name: 'experience', component: () => import('../views/ExperienceView.vue'), meta: { title: 'Experience' } },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | R&D Portfolio`
})

export default router
