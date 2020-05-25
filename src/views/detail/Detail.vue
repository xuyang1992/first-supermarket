<template>
    <div id="detail">
      <detail-nav/>
      <detail-swiper :topImages="topImages" :iid="iid"></detail-swiper>
    </div>
</template>

<script>
  import DetailNav from "./childComp/DetailNav"
  import DetailSwiper from "./childComp/DetailSwiper"
  
 
  import detailAxios from 'network/detail'
 
  export default {
    name: 'Detail',
    data(){
      return {
        topImages:null,
        iid:null
      }
    },
    components:{
       DetailNav,
       DetailSwiper
    },
    created(){
      this.iid = this.$route.query.iid 
      detailAxios.getDetail(this.iid).then( res => {
          this.topImages = res.data.result.itemInfo.topImages
      })
    },
    activated() {
      /* this.iid = this.$route.query.iid 
      detailAxios.getDetail(this.iid).then( res => {
          this.topImages = res.data.result.itemInfo.topImages
      }) */
    },
  }

</script>
<style scoped>
</style>