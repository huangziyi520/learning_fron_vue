<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="sendStudentName">点击我发布消息给学校</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  
  name:"Student",
  data(){
    return{
      name:'黄子超',
      age:27
    }
  },
  methods:{
        sendStudentName(){
          pubsub.publish('hello','你好,世界!')
        }
    }
}
</script>

<style scoped>
  .todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus{
    outline: none;
    border-color: rgba(82, 168, 236,0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),0,0 8px rgba(82, 168, 236, 0.6);
  }
</style>