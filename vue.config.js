const PtoViewPort = require("postcss-px-to-viewport");


module.exports = {
  productionSourceMap: false,
  devServer: {
    // host: "192.168.0.100",
    host:'localhost',
    port: "8888",
    open: true, //是否自动弹出浏览器页面
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        additionalData: `@import "src/assets/css/variables.scss";`
      },
      postcss: {
        plugins: [
          PtoViewPort({
            viewportWidth: 375
          })
        ]
      }
    }
  },
};
