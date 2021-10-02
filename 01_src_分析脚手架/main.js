import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false 
Vue.config.productionTip= false

new Vue ({
    el:'#app',
    template:`<App></App>`,
    // render: h => h(App)
    components:{
        App
    }
})