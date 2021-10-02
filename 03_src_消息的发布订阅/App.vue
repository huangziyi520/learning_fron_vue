<template>
  <div>
    <school></school>
     <hr>
    <student></student>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
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
        Student,
        School
    }
}
</script>