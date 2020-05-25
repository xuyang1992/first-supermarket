<template>
  <div class="goods-item" @click="goodsItemClick">
    <div class="goods-img">
      <img v-lazy="goodsItem.show.img" alt="" @load="imgLoad">
    </div>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
     
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    data(){
      return {
        imgLoadNume: 0
      }
    },
    props:{
      goodsItem:{
        type: Object,
        default:{}
      }
    },
    methods: {
      imgLoad(){
        this.imgLoadNum++
      },
      goodsItemClick(){
        this.$router.push({
          path:'detail',
          query:{
            iid:this.goodsItem.iid
          }
        })
      }
    },

}

</script>
<style scoped lang="less">
    .goods-item{
      margin-top:5px;
      width: 48%;
      padding: 2px;
      .goods-img{
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .goods-info{
        padding-top: 5px ;
        width: 100%;
        text-align: center;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
        p{
          width: 100%;
          overflow: hidden;
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .price{
          color:var(--color-tint);
          font-size:14px
        }
        .collect{
          margin-left:20px;
          font-size:14px;
          position: relative;
          &::before{
             content: '';
              position: absolute;
              left: -15px;
              top: 0;
              width: 14px;
              height: 14px;
              background: url("~assets/img/common/collect.svg") 0 14px;
              background-size: 14px 14px;
          }
        }
      }
    }
</style>`