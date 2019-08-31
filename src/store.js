import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null,
    userName: '나는야 김상민',
    token: null,
    refreshtoken: null,
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    loginSuccess (state, data) {
      // 여기에 userName바꾸는거 만들기
      state.isLogin = true
      state.isLoginError = false
      state.userId = data.data.id
      state.token = data.data.token
      state.refreshtoken = data.data.refreshtoken
    },
    loginError (state) {
      state.isLogin = false
      state.isLoginError = true
    }
  },
  actions: {
    login ({ commit }, loginObj) {
      axios // FIXME 서버통신
        .post('http://susirecipe.cf/auth/login', {
          email: loginObj.email,
          password: loginObj.password
        })
        .then(response => {
          console.log(response)
          commit('loginSuccess', response)
          router.push({ name: 'main' })
        })
        .catch(error => {
          console.error(error)
          console.log('로그인 실패')
          commit('loginError')
          alert('로그인 에러')
        })
    }
  }
})
