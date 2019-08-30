import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = () => import(/* webpackChunkName: "about" */ './pages/main.vue')
const Test = () => import('./pages/test.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
