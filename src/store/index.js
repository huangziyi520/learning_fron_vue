// 该文件用于创建vuex中最为核心的store

// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 准备actions-用于响应组件中的动作
const actions={
    jia(context,value){
        context.commit('JIA',value);
    },
    jian(context,value){
        context.commit('JIAN',value);
    }
}
// 准备mutations-用于操作数据(state)
const mutations={
    JIA(miniState,value){
        miniState.sum+=value;
    },
    JIAN(miniState,value){
        miniState.sum-=value;
    }
}
// 准备state-用于存储数据
const state={
    sum:1
}
//将state中的数据进行加工后显示
const getters={
    bigSum(state){
        return state.sum*10
    }
}
// 创建并暴露store
Vue.use(Vuex)
export default new Vuex.Store({
    actions,mutations,state,getters
})