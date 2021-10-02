<template>
  <div>
      <h1>当前求和的值为:{{sum}}</h1>
      <select v-model="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
      </select>
      <button @click="increament">+</button>
      <button @click="decreament">-</button>
      <button @click="increamentOdd">当前和为奇数相加</button>
      <button @click="increamentWait">过一段时间再加</button>
  </div>
</template>

<script>
export default {
    name:"count",
    data(){
        return{
            n:1,
            sum:0
        }
    },
    methods:{
        increament(){
            this.sum+=Number(this.n);
        },
        decreament(){
            this.sum-=Number(this.n);
        },
        increamentOdd(){
            if(this.sum%2!=0){
                this.sum+=Number(this.n);
            }
        },
        increamentWait(){
            setTimeout(()=>{
                this.sum+=Number(this.n);
            },500);
        }
    }
}
</script>

<style>

</style>