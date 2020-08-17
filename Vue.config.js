const PtoViewPort = require('postcss-px-to-viewport')
module.exports = {
    devServer: {
        host: "192.168.0.100",
        port: '8888',
        open: true, //是否自动弹出浏览器页面
    },
    css:{
        loaderOptions:{
            postcss: {
                plugins: [
                    PtoViewPort({
                        viewportWidth: 375,
                        selectorBlackList: ['vant']
                    })
                ]
            }
        }
    }
}