import { createRouter, createWebHashHistory } from 'vue-router'
import { findProject } from '../data/projects'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue'), meta: { title: 'Home' } },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'About' } },
  { path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue'), meta: { title: 'Projects' } },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: () => import('../views/ProjectDetailView.vue'),
    meta: { title: 'Project' },
  },
  { path: '/publications', redirect: { name: 'about', hash: '#publications' } },
  { path: '/experience', redirect: { name: 'about', hash: '#experience' } },
  { path: '/contact', redirect: { name: 'about', hash: '#contact' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        window.setTimeout(() => {
          resolve({ el: to.hash, top: 88, behavior: 'smooth' })
        }, 120)
      })
    }
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const project = to.name === 'project-detail' ? findProject(to.params.id) : null
  document.title = project ? `${project.title} | 이세진 Portfolio` : `${to.meta.title} | 이세진 Portfolio`
})

export default router
