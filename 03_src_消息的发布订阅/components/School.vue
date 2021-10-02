<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{adress}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:"School",
    data(){
        return{
            name:'西安交通大学',
            adress:'陕西西安'
        }
    },
    mounted(){
        this.pubId=pubsub.subscribe('hello',function(msgName,data){
            console.log('有人发布了hello消息,hello消息回调执行了',msgName,data)
        })
    }
    ,beforeDestroy(){
        //组件摧毁之前取消订阅
        pubsub.unpubscrible(this.pubId)
    }
}
</script>

<style scoped>
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top:5px;
    }

    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor:pointer
    }

    .todo-footer label input{
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button{
        float: right;
        margin-top: 5px;
        border-radius: 2px;
        background-color: red;
    }
</style>