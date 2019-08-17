<template>
    <!-- <Scroller> -->
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="(item, index) in hotList" :key="index" @click='handleToCity(item.nm,item.id)'>{{item.nm}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for="(item, index) in cityList" :key="index">
                    <h2>{{item.index}}</h2>
                    <ul>
                        <li v-for="(itemlist, index) in item.list" :key="index" @click='handleToCity(itemlist.nm,itemlist.id)'>{{itemlist.nm}}</li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="(item, index) in cityList" :key="index" @click="handleToIndex(index)">{{item.index}}</li>
            </ul>
        </div>
    </div>
    <!-- </Scroller> -->
</template>

<script>
export default {
    name:'City',
    data() {
        return {
            cityList:[],
            hotList:[],
        }
    },
    methods: {
        formatCityList(cities){
            let cityList=[];
            let hotList=[];

            for (let i = 0; i < cities.length; i++) {
                if (cities[i].isHot===1) {
                    hotList.push(cities[i]);
                }
                
            }

            for (let i = 0; i < cities.length; i++) {
                let firstLetter = cities[i].py.substring(0,1).toUpperCase();
                if (toCom(firstLetter)) {//新添加index
                    cityList.push({index:firstLetter,list:[{nm:cities[i].nm,id:cities[i].id}]});
                    // console.log(cityList)
                }else{//累加到已有index中
                    for (let j = 0; j < cityList.length; j++) {
                        if (cityList[j].index===firstLetter) {
                            cityList[j].list.push({nm:cities[i].nm,id:cities[i].id})
                        }
                    }
                } 
            }
            cityList.sort((a,b)=>{
                if (a.index>b.index) {
                    return 1;
                }else if(a.index<b.index){
                    return -1;
                }else{
                    return 0;
                }
            })

            function toCom(firstLetter) {
                for (let i = 0; i < cityList.length; i++) {
                    if(cityList[i].index===firstLetter){
                        return false;
                    }
                }
                return true;
            }
            // console.log(cityList)
            return {cityList,hotList}
        },
        handleToIndex(index){
            console.log(index);
            let h2 = this.$refs.city_sort.getElementsByTagName('h2');
            // console.log(h2);
            this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop;
            console.log(h2[index].offsetTop);
        },
        handleToCity(nm,id){
            console.log('11111111111')
            this.$store.commit('city/CITY_INFO',{nm,id});
            window.localStorage.setItem('nowNm',nm)
            window.localStorage.setItem('nowId',id)
            this.$router.push('/movie/nowplaying')
        }
    },
    mounted() {
        let cityList =window.localStorage.getItem('cityList');
        let hotList = window.localStorage.getItem('hotList');

        if(cityList&&hotList){
            this.cityList = JSON.parse(cityList);
            this.hotList = JSON.parse(hotList);

        }else{
            this.axios.get('/api/cityList').then((result) => {
                console.log(result);
                let cities=result.data.data.cities;
                // console.log(cities)
                let {cityList,hotList}=this.formatCityList(cities);
                this.cityList = cityList;
                this.hotList = hotList;
                console.log(this.cityList);
                window.localStorage.setItem('cityList',JSON.stringify(cityList));
                window.localStorage.setItem('hotList',JSON.stringify(hotList));
    
    
            }).catch((err) => {
                console.log('城市数据请求失败')
            });
        }
    },
}
</script>

<style scoped>
    #content .city_body{padding-top:95px;display: flex;flex:1;width: 100%;position: fixed; top: 0;bottom: 0;margin-top: 2px;}
    .city_body .city_list{flex:1;overflow:auto;background-color: #fff5f0;}
    .city_body .city_list::-webkit-scrollbar{background-color: transparent;width: 0;}
    .city_body .city_hot{margin-top: 20px;}
    .city_body .city_hot h2{padding-left: 15px;line-height: 30px;font-size: 14px;background-color: hsl(0, 0%, 94%);font-weight: normal;}
    .city_body .city_hot ul{display: flex;flex-wrap: wrap;}
    .city_body .city_hot ul li{background-color: #fff;width: 29%;height: 33px;margin-top: 15px;margin-left: 3%;padding: 0 4px;border: 1px solid #e6e6e6;border-radius: 3px;line-height: 33px;text-align: center;box-sizing: border-box;}
    .city_body .city_sort div{margin-top: 20px;}
    .city_body .city_sort h2{padding-left: 30px;line-height: 30px;font-size: 14px;background-color: #f0f0f0;font-weight: normal;}
    .city_body .city_sort ul{padding-left: 30px;margin-top: 10px;}
    .city_body .city_sort ul li{line-height: 30px;}
    .city_body .city_index{width:20px;display: flex;flex-direction: column;text-align:center;border-left: 1px solid #e6e6e6;position: fixed; right:0;}
</style>