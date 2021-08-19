import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/userModules'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users
  }
})
