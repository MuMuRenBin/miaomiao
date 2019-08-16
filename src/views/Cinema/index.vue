<template>
    <div id="main" >
        <Header title="喵喵影院"/>
        <div class="cinema_menu">
            <router-link tag='div' to="/cinema/wholecity" class="city_switch">
                全城<van-icon name="arrow-down" />
            </router-link>
            <router-link tag='div' to="/cinema/brand" class="brand_switch">
                品牌<van-icon name="arrow-down" />
            </router-link>
            <router-link tag='div' to="/cinema/feature" class="feature_switch">
                特色<van-icon name="arrow-down" />
            </router-link>
        </div>
        <CinemaList></CinemaList>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import CinemaList from '@/components/CinemaList';
export default {
    name:'Cinema',
    data() {
        return {

        }
    },
    methods: {
        
    },
    components:{
        TabBar,Header,CinemaList,
    }
}
</script>
<style scoped>
    .cinema_menu{width: 100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-around;align-items: center;background-color: #fff;}
    .cinema_menu .city_switch{height: 100%;line-height: 45px;}
    .cinema_menu .city_switch.active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .cinema_menu .city_switch.router-link-active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .cinema_menu .brand_switch{height: 100%;line-height: 45px;}
    .cinema_menu .brand_switch.active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .cinema_menu .brand_switch.router-link-active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .cinema_menu .feature_switch{height: 100%;line-height: 45px;}
    .cinema_menu .feature_switch.active{color: #ef4238;border-bottom: 2px solid #ef4238;}
    .cinema_menu .feature_switch.router-link-active{color: #ef4238;border-bottom: 2px solid #ef4238;}
</style>