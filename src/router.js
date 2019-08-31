import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = () => import(/* webpackChunkName: "about" */ './pages/main.vue')
const Test = () => import('./pages/test.vue')
const Login = () => import('./pages/auth/Login.vue')
const CreateAccount = () => import('./pages/auth/CreateAccount.vue')

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/createaccount',
      name: 'createaccount',
      component: CreateAccount
    }
  ]
})
