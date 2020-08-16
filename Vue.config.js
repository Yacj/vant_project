const PtoViewPort = require('postcss-px-to-viewport')
module.exports = {
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