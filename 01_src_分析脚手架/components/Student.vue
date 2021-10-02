<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生姓名:{{studentName}}</h2>
        <h2>学生年龄:{{age}}</h2>
        <button @click="showStudent">点击显示学生信息</button>
    </div>
</template>
<script>
// 组件的交互代码
    export default {
        name:'Student',
        data(){
            return{
              studentName:'黄子超',
              age:'27' 
            }
        },
        methods:{
            showStudent(){
                alert("学生姓名:"+this.studentName)
                alert("学生姓名:"+this.age)
            }
        }
    }
</script>
<style>
/* 样式注解 */
.demo{
    background-color: palegreen;
}
</style>