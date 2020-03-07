import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"音乐",
    color:"red"
  },
  mutations: {
    change(state,{title,color}){
      state.title=title;
      state.color=color
    }
  },
  actions: {
  },
  modules: {
  }
})
