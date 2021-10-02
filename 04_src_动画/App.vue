<template>
  <div>
    <AnnittationTestThree></AnnittationTestThree>
  </div>
</template>

<script>
import AnnittationTestSecond from './components/AnnittationTestSecond.vue'
import AnnittationTestThree from './components/AnnittationTestThree.vue'
// 引入组件
export default {
    name:'App',
    methods:{
        addTodo(todoObj){
            this.todos.unshift(todoObj)
            // console.log(todoObj)
        }
    },
    components:{
        AnnittationTestSecond,
        AnnittationTestThree
    }
}
</script>