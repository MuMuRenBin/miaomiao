import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../views/Movie'
// import Cinema from '../views/Cinema'
import Mine from '../views/Mine'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',redirect:'/movie'},
    {path:'/movie',component:Movie,children:[
      {path:'/movie',redirect:'/movie/nowplaying'},
      {path:'city',component:()=>import('@/components/City')},
      {path:'nowplaying',component:()=>import('@/components/NowPlaying')},
      {path:'comingsoon',component:()=>import('@/components/ComingSoon')},
      {path:'search',component:()=>import('@/components/Search')},
    ]},
    {path:'/cinema',component:()=>import('@/views/Cinema'),children:[
      {path:'wholecity',},
      {path:'brand',},
      {path:'feature',},
      {path:'/cinema',redirect:''}
    ]},
    {path:'/mine',component:Mine},
  ]
})
