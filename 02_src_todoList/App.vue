<template>
  <div>
      <Header :addTodo="addTodo"></Header>
      <List :todos="todos"></List>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/MyHeader.vue'
import List from './components/MyList.vue'
import Footer from './components/MyFooter.vue'
// 引入组件
export default {
    name:'App',
    methods:{
        addTodo(todoObj){
            this.todos.unshift(todoObj)
            // console.log(todoObj)
        }
    },
    data(){
      return{
          todos:[
              {id:'001',title:'抽烟',done:true},
              {id:'002',title:'喝酒',done:false},
              {id:'003',title:'开车',done:true}
          ]
      }  
    },
    components:{
        Header,
        List,
        Footer
    }
}
</script>