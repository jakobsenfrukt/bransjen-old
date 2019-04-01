import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/om',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    { 
      path: '/prosjekter/:slug',
      component: () => import('./views/Project.vue')
    },
    {
      path: '/bransjenytt',
      name: 'news',
      component: () => import('./views/News.vue')
    },
    { 
      path: '/bransjenytt/:slug',
      component: () => import('./views/Entry.vue')
    },
    {
      path: '/skissebok',
      name: 'sketchbook',
      component: () => import('./views/Sketchbook.vue')
    },
  ],
  scrollBehavior (to) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({ selector: to.hash })
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 100)
    })
  },
})
