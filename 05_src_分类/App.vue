<template>
  <div>
    <category title="foods" :listData="foods">
        <img class="myImg" src="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF" alt=""/>
    </category>
    <category title="games" :listData="games"/>
    <category title="films" :listData="films">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </category>
  </div>
</template>

<script>
//引入axios
import axios from 'axios'
import category from './components/Category.vue'
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
export default {
    name:'App',
    data(){
      return{
        keyWord:'',
        foods:['火锅','臭豆腐','苗条'],
        games:['吃鸡','王者','射击'],
        films:['教父','功夫','无间道']
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
      category
    },
    mounted(){
      console.log("app",this)
    }
}
</script>
<style scoped>
  img,video{
    width: 100%;
  }
</style>