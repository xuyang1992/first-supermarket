<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar> 
    <home-swiper :banners="banner"></home-swiper>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" 
    @tabClick='tabClick'/>
    <div class="listHeight"><goods-list :goods="showGoods" :type="currentType" ref="goodsList"/></div>
    <back-top @click.native='backClick' v-show="isShow" ref="backClick"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from './chilidComps/HomeSwiper'
  import RecommendView from './chilidComps/RecommendView'
  import FeatureView from './chilidComps/FeatureView'

  import NavBar from "common/navbar/NavBar"
  import TabControl from "content/TabControl/TabControl"
  import GoodsList from "content/goods/GoodsList"
  import BackTop from 'content/backTop/BackTop'

  import getHomeAxios from 'network/home'
  import commonJs from '@/common/utils'
  export default {
    name: 'home',
    components:{
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      BackTop
    },
    data(){
      return {
        banner:[],
        recommends:[],
        goods:{
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []},
        },
        currentType: "pop",
        isShow: false,
        moveY: {
          from:0,
          to:0
        }
      }
    },
    created(){
      //请求多次数据
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      
    },
    mounted() {
      /* this.getHomeGoods('pop') */
       window.addEventListener("scroll",this.handleScroll)
      
    },
    activated() {
      window.scrollTo({
        top: this.moveY.to
      })
      window.addEventListener("scroll",this.handleScroll)
    },
    deactivated() {
      this.moveY.to = this.moveY.from
      /* this.moveTop =  window.pageYOffset || document.documentElement.scrollTop */
      window.removeEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      document.removeEventListener('scroll', this.handleScroll)
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      /*事件监听 */
      tabClick(index){
        switch(index){
          case 0 : this.currentType = 'pop'
            break;
          case 1 : this.currentType = "new"
           break;
          case 2 : this.currentType = "sell"
            break;
        }
        window.scrollTo(0,600)
      },
      backClick(){
        window.scrollTo({
          top:600,
          behavior:"smooth"
        }) 
      },
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let oneHeight = document.body.scrollHeight - window.screen.height  ;
        this.moveY.from=  scrollTop
        
         // 
        // console.log(scrollTop)
        if (scrollTop < 1000) {
          //滚动大于0的时候要做的操作
          this.isShow =false
        }
        if (scrollTop > 1000) {
          //大于200的时候要做的操作
          //console.log(1)
          this.isShow = true;
         
        }
        if(scrollTop == oneHeight ){
           let isLoad = commonJs.debounce(()=> {
              
              this.getHomeGoods(this.currentType)
           },100)
           isLoad()
        }
        
        /* if (scrollTop > oneHeight) {
          这是滑动到scrollTwo的距离要做的操作

        }
        if (scrollTop > twoHeight) {
          这是滑动到scrollThree要做的操作
        } */
      },
      /* 网络请求 */
      getHomeMultidata(){
        getHomeAxios.getHomeMultidata().then( res => {
          this.banner = res.data.data.banner.list
         this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeAxios.getHomeGoods(type,page).then( res =>{
            this.goods[type].page += 1
            this.goods[type].list.push(...res.data.data.list) 
        })
      }
    }
  }

</script>
<style scoped lang="less">
    #home{
      padding-top: 44px;
      .tab-control{
        position:sticky;
        top: 44px;
      }
    }
    .home-nav{
      width: 100%;
      background: var(--color-tint);
      color:#fff;
      font:bold;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
    }
</style>