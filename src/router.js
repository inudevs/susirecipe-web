import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = () => import(/* webpackChunkName: "about" */ './pages/main.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
})
