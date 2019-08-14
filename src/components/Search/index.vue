<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li>
                    <div class="img"><img src="../../../public/images/4.jpg" alt=""></div>
                    <div class="info">
                        <p><span>3333</span><span>8.6</span></p>
                        <p>A cool fish</p>
                        <p>剧情，喜剧，犯罪</p>
                        <p>2018-11-16</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="../../../public/images/4.jpg" alt=""></div>
                    <div class="info">
                        <p><span>3333</span><span>8.6</span></p>
                        <p>A cool fish</p>
                        <p>剧情，喜剧，犯罪</p>
                        <p>2018-11-16</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
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
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){font-size: 18px;flex: 1;}
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){font-size: 16px;color: #f37103;}
</style>