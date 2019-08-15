<template>
    <div id="content">
        <div class="movie_menu">
            <router-link tag="div" to="/movie/city" class="city_name">
                <span>西安</span><van-icon name="arrow-down" />
                <!-- <i class="iconfont "></i> -->
            </router-link>
            <div class="hot_switch">
                <router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
                <router-link tag="div" to="/movie/comingsoon" class="hot_item">即将上映</router-link>
            </div>
            <!-- <van-tabs >
                <van-tab title="正在热映"></van-tab>
                <van-tab title="即将上映"></van-tab>
            </van-tabs> -->
            <router-link tag="div" to="/movie/search" class="search_entry">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- <NowPlaying></NowPlaying> -->
    </div>
</template>

<script>
import Header from '@/components/Header';
import NowPlaying from '@/components/NowPlaying';
export default {
    name:'Movie',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components:{
        Header,NowPlaying,
    }
}
</script>

<style scoped>
    #content{flex: 1;overflow: auto;margin-bottom: 50px;position: relative;display: flex;flex-direction: column;}
    .movie_menu {width: 100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-between;margin-bottom: 1px;position: fixed;top: 50px;z-index: 3}
    .movie_menu .city_name{margin-left: 20px;height: 100%;line-height: 45px;}
    .movie_menu .city_name.active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .movie_menu .city_name.router-link-active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .movie_menu .hot_switch{display: flex;height: 100%;line-height: 45px;}
    .movie_menu .hot_item{font-size: 15px;color: #666;width: 80px;text-align: center;margin: 0 12px;font-weight: 700px;}
    .movie_menu .hot_item.active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .movie_menu .hot_item.router-link-active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .movie_menu .search_entry{margin-right: 20px;height: 100%;line-height: 45px;}
    .movie_menu .search_entry.active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .movie_menu .search_entry.router-link-active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .movie_menu .search_entry i{font-size: 24px;color: red};
    router-view{margin-top: 95px; }
</style>