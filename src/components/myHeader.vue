<template>
    <div>
        <h1>当前求和为:{{$store.state.sum}}</h1>
        <h2>当前求和放大10倍为:{{$store.getters.bigSum}}</h2>
        <select v-model="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name:'Count',
    data(){
        return{
            n:1
        }
    },
    methods:{
        increment(){
          this.$store.dispatch('jia',Number(this.n));
        },
        decrement(){
          this.$store.dispatch('jian',Number(this.n));
        },
        incrementOdd(){
          if((this.$store.state.sum % 2)!=0){
            this.$store.dispatch('jia',Number(this.n));
          }
        },
        incrementWait(){
          setTimeout(()=>{
            this.$store.dispatch('jia',Number(this.n));
          },500);
        }
    },
    mounted(){
      console.log(this)
    }
}
</script>