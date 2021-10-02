<template>
  <div>
      <button @click="myShow=!myShow">显示/隐藏</button>
      <transition>
          <h1 class="annotationClass" v-show="myShow">这是vue动画</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'AnnittationTestSecond',
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

    .v-enter-active{
        animation: myannotation 0.3s linear;
    }
    .v-leave-active{
        animation: myannotation 0.3s reverse linear;
    }
    @keyframes myannotation {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>