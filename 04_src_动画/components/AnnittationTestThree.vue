<template>
  <div>
    <button @click="myShow=!myShow">显示/隐藏</button>
    <br/>
    <button @click="myShow=!myShow">显示/隐藏</button>
    <br/>
    <button @click="myShow=!myShow">显示/隐藏</button>
    <br/>
    <button @click="myShow=!myShow">显示/隐藏</button>
    <br/>
    <button @click="myShow=!myShow">显示/隐藏</button>
    <br/>
    <button @click="myShow=!myShow">显示/隐藏</button>
    <transition 
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInUp" 
        leave-active-class="animate__backOutDown"
        >
        <h1 class="annotationClass" 
            v-show="myShow" 
            >这是vue动画</h1>
    </transition>
    <!-- <h1 
        class="animate__animated animate__bounce my-animation" 
        v-show="myShow"
        >An animated element</h1> -->
  </div>
</template>

<script>
// 引入css样式
import 'animate.css'
export default {
    name:'AnnittationTestThree',
    data(){
        return{
            myShow:true
        }
    }
}
</script>
   
<style>

    .annotationClass{
      background-color: brown;  
    }

    .my-animation {
        display: block;
        margin: 0 0.5rem;
        animation: bounce; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 2s; /* don't forget to set a duration! */
    }
    
    
</style>