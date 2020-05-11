import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前登录用户登录状态 token等数据
    user: JSON.parse(window.localStorage.getItem('user'))
  },
  mutations: {
    setUser (state, data) {
      state.user = data

      // 为了防止页面刷新,需要本地存储
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
