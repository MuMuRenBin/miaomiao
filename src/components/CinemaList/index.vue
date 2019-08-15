<template>
    <div class='cinema_body'>
        <ul>
            <li v-for="(item, index) in cinemaList" :key="index">
                <div>
                    <span>{{item.nm}}</span>
                    <span class="q"><span class="price">{{item.sellPrice}}</span>元起</span>
                </div>
                <div class="address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="card">
                    <div v-for="(itemCard, key) in item.tag" v-if="itemCard==true" :key="key" :class="key|classCard">{{key|formatCard}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CinemaList',
    data() {
        return {
            cinemaList:[],
        }
    },
    methods: {
        
    },
    mounted() {
        this.axios.get('/cinemaList?cityId=42')
        .then((result) => {
            console.log(result)
            if (result.data.msg==='ok') {
                this.cinemaList= result.data.data.cinemas;
            }
        }).catch((err) => {
            console.log('影院数据请求失败！')
        });
    },
    filters:{
        formatCard(key){
            let card=[
                {key:'allowRefund',value:'改签'},
                {key:'buyout',value:'团购'},
                // {key:'cityCardTag',value:''},
                // {key:'deal',value:''},
                {key:'endorse',value:'退票'},
                {key:'sell',value:'可售'},
                {key:'snack',value:'观影小吃'},
                {key:'vipTag',value:'折扣卡'},
            ];
            for (let i = 0; i < card.length; i++) {
                if (card[i].key===key) {
                    return card[i].value
                }
                
            }
            return '';
        },
        classCard(key){
            let card=[
                {key:'allowRefund',value:'or'},
                {key:'buyout',value:'or'},
                // {key:'cityCardTag',value:''},
                // {key:'deal',value:''},
                {key:'endorse',value:'or'},
                {key:'sell',value:'or'},
                {key:'snack',value:'bl'},
                {key:'vipTag',value:'bl'},
            ];
            for (let i = 0; i < card.length; i++) {
                if (card[i].key===key) {
                    return card[i].value
                }
                
            }
            return '';
        }
    }
}
</script>

<style>
    .cinema_body{flex:1;overflow: auto;}
    .cinema_body ul{padding: 20px;}
    .cinema_body li{border-bottom: 1px solid #e6e6e6;margin-bottom: 20px;}
    .cinema_body div{margin-bottom: 10px;}
    .cinema_body .q{font-size: 11px;color: #f03d37;}
    .cinema_body .price{font-size: 18px;}
    .cinema_body .address{font-size: 13px;color: #666;}
    .cinema_body .address span:nth-of-type(2){float: right;}
    .cinema_body .card{display: flex;}
    .cinema_body .card div{padding: 0 3px;height: 15px;line-height: 15px;border-radius: 2px;color: #f90;border:1px solid #f90;font-size: 13px;margin-right: 5px;}
    .cinema_body .card div.or{color: #f90;border: 1px solid #f90;}
    .cinema_body .card div.bl{color: #589daf;border: 1px solid #589daf;}
</style>