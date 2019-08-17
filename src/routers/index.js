import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../views/Movie'
// import Cinema from '../views/Cinema'
import Mine from '../views/Mine'


Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  base:'miaomiao',
  routes: [
    {path:'/',redirect:'/movie'},
    {path:'/movie',component:()=>import('@/views/Movie'),children:[
      {path:'city',component:()=>import('@/components/City')},
      {path:'nowplaying',component:()=>import('@/components/NowPlaying')},
      {path:'comingsoon',component:()=>import('@/components/ComingSoon')},
      {path:'search',component:()=>import('@/components/Search')},
      {path:'detail/1/:movieId',
        components:{
          default:()=>import('@/components/NowPlaying'),
          detail:()=>import('@/views/Movie/detail')
        },
        props:{
          detail:true,
        }
      },
      {path:'detail/2/:movieId',
        components:{
          default:()=>import('@/components/ComingSoon'),
          detail:()=>import('@/views/Movie/detail')
        },
        props:{
          detail:true,
        }
      },
      {path:'/movie',redirect:'/movie/nowplaying'},
    ]},
    {path:'/cinema',component:()=>import('@/views/Cinema'),children:[
      {path:'wholecity',},
      {path:'brand',},
      {path:'feature',},
      {path:'/cinema',redirect:''}
    ]},
    {path:'/mine',component:()=>import('@/views/Mine'),children:[
      {path:'center',component:()=>import('@/views/Mine/center.vue')},
      {path:'login',component:()=>import('@/components/Login')},
      {path:'register',component:()=>import('@/components/Register')},
      {path:'findPassword',component:()=>import('@/components/FindPassword')},
      {path:'/mine',redirect:'/mine/center'}
    ]},
  ]
})
