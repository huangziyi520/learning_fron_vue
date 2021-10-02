<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称:{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点击显示学校信息</button>
    </div>
</template>
<script>
// 组件的交互代码
    export default {
        name:'Scholl',
        data(){
            return{
              schoolName:'西安交通大学',
              address:'陕西西安' 
            }
        },
        methods:{
            showName(){
                alert("学校名称:"+this.schoolName)
                alert("学校地址:"+this.address)
            }
        }
    }
</script>
<style>
/* 样式注解 */
    .demo{
        background-color: orange;
    }
</style>