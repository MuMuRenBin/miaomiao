import Vue from 'vue'
import Router from 'vue-router'


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
    {path:'/admin',component:()=>import('@/views/Admin'),children:[
      {path:'user',component:()=>import('@/views/Admin/users.vue')},
      {path:'movie',component:()=>import('@/views/Admin/movie.vue')},
	  {path:'cinema',component:()=>import('@/views/Admin/cinema.vue')},
	  {path:'/admin',redirect:'user'}
    ]},
  ]
})
