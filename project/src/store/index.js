import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //存储状态
  state: {
    count:1,
    num:10
  },
  //修改状态
  mutations: {
    add(state,x){
      state.count+=x;
    },
    reduce(state){
      state.count--;
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    xx:function(state){
      return state.count*2+state.num;
    }
  },
    actions:{
      addAction({commit}){
        setTimeout(function(){
          commit('add',10);
        },1000)
      }
  }
})
