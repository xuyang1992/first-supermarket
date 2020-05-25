<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="item" 
        :class="{active: currentIndex == index}" 
        @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'

  
  export default {
    name: 'DetailNav',
    components:{
      NavBar
    },
    data(){
      return {
        titles:['商品',"参数","评论","推荐"],
        currentIndex:0
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex = idnex
      },
      backClick(){
        this.$router.back()
      }
    },
    

}

</script>
<style scoped lang="less">
  .detail-nav{
    .back{
      img{
        text-align: center;
        vertical-align: middle;
      }
     }
   .title{
     display: flex;
     div{
       flex: 1;
        text-align: center;
        font-size: 13px;
        &.active{
        color:var(--color-high-text)
      }
    }
   }
  }
</style>