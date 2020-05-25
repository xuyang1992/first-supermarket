<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'navbar',

}

</script>
<style scoped lang="less">
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 0 4px rgba(100,100,100,.3);
    line-height: 44px;
    .left, .right{
      width:60px;
    }
    .center{
      flex: 1;
      
    }
  }
</style>