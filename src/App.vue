<template>
  <div>
    <myHeader></myHeader>
  </div>
</template>

<script>
//引入axios
import axios from 'axios'
import myHeader from './components/myHeader.vue'
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
export default {
    name:'App',
    data(){
      return{
       sum:5
      }
    },
    methods:{
        fetchStudentDatas(){
            axios.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
              response=>{
                console.log('请求成功',response)
              },
              error=>{
                console.log('请求失败',error.message)
              }
            )
        }
    },
    components:{
      myHeader
    }
    // mounted(){
    //   console.log("app",this)
    // }
}
</script>
<style scoped>
  img,video{
    width: 100%;
  }
</style>