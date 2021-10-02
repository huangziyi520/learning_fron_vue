<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot>没有图片</slot>
  </div>
</template>

<script>
export default {
    name:"Category",
    props:['listData','title']
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 100%;
        height: 300px;
    }
</style>