import Vue from 'vue'
import App from './App.vue'
// 引入store 名字必须为store[s不能为小写]
import store from './store/index'

Vue.config.productionTip = false
new Vue ({
    el:'#app',
    template:`<App></App>`,
    render: h => h(App),
    store,
    beforeCreate(){
        // 全局事件总线
        Vue.prototype.$bus=this
    }
})