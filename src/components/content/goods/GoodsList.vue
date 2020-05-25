<template>
  <div class="goods-list" :key="currentType">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"
  export default {
    name: 'GoodList',
    components:{
      GoodsListItem 
    },
    props: {
      goods:{
        type: Array,
        dafault:[]
      },
     currentType:{
       type: String,
       default: 'pop'
     }
    }
}

</script>
<style scoped>
    .goods-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom:49px;
    }
</style>