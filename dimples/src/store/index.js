import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"韦德",
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
