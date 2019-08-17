module.exports={
    publicPath:'/miaomiao',
    devServer:{
        proxy:{

            '/api2':{
                target:'http://localhost:3000',
                changeOrigin:true,
                // ws:true,
            },
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin:true,
                ws:true,
            },
        }
    }
}