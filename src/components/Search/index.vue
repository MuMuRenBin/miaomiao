<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="message">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="(item, index) in movieList" :key="index">
                    <div class="img"><img :src="item.img|setWH('60.88')" alt=""></div>
                    <div class="info">
                        <p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
                        <p>{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.pubDesc}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message:'',
            movieList:[],
        }
    },
    methods: {
        cancelRequest(){
            if (typeof this.source==='function') {
                this.source('终止请求')
            }
        }
    },
    watch: {
        message(newVal){
            let that = this;
            this.cancelRequest()
            this.axios.get('/searchList?cityId=42&kw='+newVal,{
                cancelToken:new this.axios.CancelToken(function (c){
                    that.source=c
                })
            })
            .then((result) => {
                console.log(result);
                if (result.data.msg&&result.data.data.movies) {
                    this.movieList = result.data.data.movies.list
                }
            }).catch((err) => {
                if (this.axios.isCancel(err)) {
                    console.log('Request canceled',err.message);//请求如果被取消，这里是返回取消的message
                }else{
                    //handle error
                    console.log('搜索数据失败！'+err);
                }
            });            
        }
    },
}
</script>

<style scoped>
    .search_body{flex:1;overflow: auto;padding-top: 95px;}
    .search_body .search_input{padding: 8px 10px;background-color: #f5f5f5;border-bottom: 1 solid #e5e5e5;}
    .search_body .search_input_wrapper{padding: 0 10px;border: 1px solid #e6e6e6;border-radius: 5px;background-color: #fff;display: flex;line-height: 20px;}
    .search_body .search_input_wrapper i{font-size: 16px;padding: 4px 0;}
    .search_body .search_input_wrapper input{border:none;font-size: 13px;color: #333;padding: 4px 0;outline: none;margin-left: 5px;width: 100%;}
    /* .search_body .search_result{} */
    .search_body .search_result h3{font-size: 15px;color: #999;padding: 9px 15px;border-bottom: 1px solid #e6e6e6;}
    /* .search_body .search_result ul {} */
    .search_body .search_result ul li{border-bottom: 1px #c9c9c9 dashed;padding: 10px 15px;box-sizing: border-box;display: flex;}
    .search_body .search_result ul li .img {width: 60px;float: left;}
    .search_body .search_result .img img {width: 100%;}
    .search_body .search_result .info {float: left;margin-left: 15px;flex: 1;}
    .search_body .search_result .info p{height: 22px;display: flex;line-height: 22px;font-size: 12px;}
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){font-size: 18px;flex: 1;overflow: hidden;text-overflow: ellipsis;}
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){font-size: 16px;color: #f37103;}
</style>