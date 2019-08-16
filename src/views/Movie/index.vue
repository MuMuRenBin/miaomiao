<template>
    <div id="main">
        <Header title="喵喵电影"/>
            <div id="content">
                <div class="movie_menu">
                    <router-link tag="div" to="/movie/city" class="city_name">
                        <span>{{$store.state.city.nm}}</span><van-icon name="arrow-down" />
                    </router-link>
                    <div class="hot_switch">
                        <router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
                        <router-link tag="div" to="/movie/comingsoon" class="hot_item">即将上映</router-link>
                    </div>
                    <router-link tag="div" to="/movie/search" class="search_entry">
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                </div>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
                <!-- <MessageBox/> -->
            </div>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import {messageBox} from '@/components/JS';
export default {
    name:'Movie',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components:{
        TabBar,Header,
    },
    mounted() {
        setTimeout(()=>{
            this.axios.get('/getLocation')
            .then(res => {
                 if (res.data.msg==='ok') {
                     var nm = res.data.data.nm;
                     var id = res.data.data.id;
                     if (this.$store.state.city.id==id) {return;}
                     messageBox({
                         title:'定位',
                         content:nm,
                         cancel:'取消',
                         ok:'切换定位',
                         handleOk(){
                             window.localStorage.setItem('nowNm',nm);
                             window.localStorage.setItem('nowId',id);
                             window.location.reload();
                         },
                     })
                 }
            })
        },3000)
    },
}
</script>

<style scoped>
    #content .movie_menu {width: 100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-between;margin-bottom: 1px;position: fixed;top: 50px;}
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
    /* router-view{margin-top: 95px; } */
</style>