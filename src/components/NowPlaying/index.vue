<template>
    <div id="content">
        <div class="movie_body">
            <ul>
                <li v-for="(item, index) in movieList" :key="index">
                    <div class="pic_show"><img :src="item.img|setWH('64.90')" alt="" srcset=""></div>
                    <div class="info_list">
                        <h2>{{item.nm}}<img v-if="item.version" src="@/assets/imax.png" alt=""/></h2>
                        <p>观众评<span class="grade">{{item.sc}}</span></p>
                        <p>主演：{{item.star}}</p>
                        <p>{{item.showInfo}}</p>
                    </div>
                    <div class="btn_mall">购票</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'NowPlaying',
    data() {
        return {
            movieList:[],
        }
    },
    mounted() {
        this.axios.get('/movieOnInfoList?Id=42')
        .then((result) => {
            console.log(result)
            let msg = result.data.msg;
            if (msg==='ok') {
                this.movieList = result.data.data.movieList;
            }
        }).catch((err) => {
            console.log('热映数据请求失败！')
        });
    },
}
</script>

<style scoped>
    #content .movie_body{flex: 1;overflow: auto;padding-top: 95px;}
    .movie_body ul{margin: 0 12px;overflow: hidden;}
    .movie_body ul li{margin-top: 12px;display: flex;align-items: center;border-bottom: 1px #e6e6e6 solid;padding-bottom: 10px;}
    .movie_body .pic_show{width: 64px;height: 90px;}
    .movie_body .pic_show img{width: 100%;}
    .movie_body .info_list{margin-left: 10px;flex: 1;position: relative;}
    .movie_body .info_list h2{font-size: 17px;line-height: 24px;width: 150px;;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}
    .movie_body .info_list p{font-size: 13px;color: #666;line-height: 22px;width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .movie_body .info_list .grade{font-weight: 700px;color: #faaf00;font-size: 15px;margin-left: 5px;}
    .movie_body .info_list img{width: 50px;position: absolute;right: 10px;top: 5px;}
    .movie_body ul li .btn_mall{width: 47px;height: 28px;line-height: 28px;text-align: center;background-color: #f03d37;color: #fff;border-radius: 4px;font-size: 12px;cursor: pointer;}
    .movie_body .btn_pre{background-color: #3c9fe6;}
</style>