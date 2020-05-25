<template>
  <div id="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props:{
      recommends:{
        type:Array,
        default:[]
      }
    }
}

</script>
<style scoped lang="less">
  #recommend{
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 6px solid #eee;
    .recommend-item{
      flex: 1;
      img{
        width: 65px;
        margin-bottom: 10px;
      }
    }
  }
</style>