<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <Login></Login>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Login from '@/components/Login'
export default {
    name:'Mine',
    data() {
        return {

        }
    },
    methods: {
        
    },
    components:{
        TabBar,Header,Login,
    }
}
</script>

<style>
    
</style>