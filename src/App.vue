<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <van-tabbar v-model="active" active-color='#fd6377'>
      <van-tabbar-item name='movie' to="/movie">
        <div class="van-tabbar-item__icon">
          <i class="iconfont icon-dianying"></i>
        </div>
        <span >热映</span>
      </van-tabbar-item>
      <van-tabbar-item name='cinema' to="/cinema">
        <div class="van-tabbar-item__icon">
          <i class="iconfont icon-yingyuan"></i>
        </div>
        <span >影院</span>
      </van-tabbar-item>
      <van-tabbar-item name='mine' to="/mine">
        <div class="van-tabbar-item__icon">
          <i class="iconfont icon-wode"></i>
        </div>
        <span >我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  data() {
    return {
      active: 'movie',
    }
  },
  methods: {
      
  },
  components:{
      Header,
  }
}
</script>

<style >
  *{padding: 0;margin: 0;}
  .van-tabbar-item__text{text-align: center;}
  /* router-view{padding-bottom:50px; } */
</style>
