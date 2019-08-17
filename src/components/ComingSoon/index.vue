<template>
    <!-- <Scroller> -->
        <div class="movie_body">
            <Loading v-if="isLoading"/>
            <ul>
                <li v-for="(item, index) in comingList" :key="index">
                    <div class="pic_show" @click='handleToDetail(item.id)'><img :src="item.img|setWH('64.90')" alt="" srcset=""></div>
                    <div class="info_list"  @click='handleToDetail(item.id)'>
                        <h2 >{{item.nm}}<img v-if="item.version" src="@/assets/imax.png" alt=""/></h2>
                        <p><span class="person">{{item.wish}}</span>人想看</p>
                        <p>主演：{{item.star}}</p>
                        <p>{{item.rt}}上映</p>
                    </div>
                    <div class="btn_pre">预售</div>
                </li>
            </ul>
        </div>
    <!-- </Scroller> -->
</template>

<script>
export default {
    name:'ComingSoon',
    data() {
        return {
            comingList:[],
            isLoading:true,
            prevCityId:-1,
        }
    },
    methods: {
        handleToDetail(movieId){
            // console.log(movieId)
            this.$router.push('/movie/detail/2/'+movieId)
        },
    },
    activated() {
        let cityId = this.$store.state.city.id;
        if (this.prevCityId===cityId) {return;}
        this.isLoading = true;
        this.axios.get('/api/movieComingList?cityId='+cityId)
        .then((result) => {
            console.log(result);
            if (result.data.msg==='ok') {
                this.comingList= result.data.data.comingList;
                this.isLoading = false;
                this.prevCityId = cityId;
            }
        }).catch((err) => {
            
        });
    },
}
</script>

<style scoped>
    #content .movie_body{flex: 1;overflow: auto;margin-top: 50px;}
    .movie_body ul{margin: 0 12px;overflow: hidden;}
    .movie_body ul li{margin-top: 12px;display: flex;align-items: center;border-bottom: 1px #e6e6e6 solid;padding-bottom: 10px;}
    .movie_body .pic_show{width: 64px;height: 90px;}
    .movie_body .pic_show img{width: 100%;}
    .movie_body .info_list{margin-left: 10px;flex: 1;position: relative;}
    .movie_body .info_list h2{font-size: 17px;line-height: 24px;width: 150px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}
    .movie_body .info_list p{font-size: 13px;color: #666;line-height: 22px;width: 200px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
    .movie_body .info_list .person{font-weight: 700px;color: #faaf00;font-size: 15px;margin-right: 5px;}
    .movie_body .info_list img{width: 50px;position: absolute;right: 10px;top: 5px;}
    .movie_body ul li .btn_mall,.movie_body .btn_pre{width: 47px;height: 28px;line-height: 28px;text-align: center;background-color: #f03d37;color: #fff;border-radius: 4px;font-size: 12px;cursor: pointer;}
    .movie_body .btn_pre{background-color: #3c9fe6;}
</style>