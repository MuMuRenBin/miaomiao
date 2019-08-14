export default{
    devServer:{
        proxy:{
            '/api':{
                target:'http://v.juhe.cn/movie',
                changeOrigin:true,
            }
        }
    }
}