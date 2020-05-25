<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" @click="backClick">
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
    methods:{
      backClick(){
        this.$emit('backClick')
      }
    }
}

</script>
<style scoped lang="less">
  .back-top{
    position: fixed;
    bottom: 50px;
    right: 10px;
    height: 50px;
    width: 50px;
    z-index: 110;
    img{
      width: 100%;
    }
  }
</style>