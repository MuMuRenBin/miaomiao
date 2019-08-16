<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>


<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroller',
    // props:{
    //     handleToScroll:{
    //         type:Function,
    //         defalut:function(){}
    //     },
    //     handleToTouchEnd:{
    //         type:Function,
    //         defalut:function(){}
    //     },
    // },
    mounted() {
        let scroll=new BScroll(this.$refs.wrapper,{
            tap:true,
            probeType:1,
        })
        // console.log(scroll)
        // scroll.on('scroll',(pos)=>{
        //     this.handleToScroll(pos);
        // });
        // scroll.on('touchEnd',(pos)=>{
        //     this.handleToTouchEnd(pos);
        // });
    },
}
</script>


<style>
    .wrapper{height: 100%;}
</style>