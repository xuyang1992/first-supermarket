<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
    :key="index" 
    :class="{item,active: index === currentIndex}"
    @click="itemClick(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props:{
      titles:{
        type:Array,
        default:[]
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    },
}

</script>
<style scoped lang="less">
    .tab-control{
      display: flex;
      text-align: center;
      background: #fff;
      z-index: 99;
      .item{
        flex: 1;
        height: 40px;
        font: 15px bold;
        span{
          padding: 5px;
          line-height: 40px;
        }
      }
      .active{
        span{
          color:var(--color-high-text);
          border-bottom: 3px solid ;
        }
      }
    }
</style>