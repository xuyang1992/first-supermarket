<template>
  <div :key="iid" @click="biger">
    <swiper class="detail-swiper" >
      <swiper-item class="swiper-item" v-for="(item,index) in topImages" :key="index" >
          <img :src="item" alt="" class="item-img"> 
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'common/swiper'
  export default {
    name: 'DetailSwiper',
    props:{
      topImages:{
        type:Array,
        default:[]
      },
      iid:{
        type:String
      } 
    },
    components:{
      Swiper, SwiperItem
    },
    methods: {
      biger(){console.log(1)
        let dom = document.querySelector(".detail-swiper")
        dom.style.height == "auto" ? dom.style.height = "300px" :dom.style.height = "auto"
          
      
          
        
      }
    },
}

</script>
<style scoped lang="less">
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
  .swiper-item{
    display: flex;
    div{
      width: 100%;
      
    }
    .item-img{
       width: 100%;
  
      
    }
  }
</style>