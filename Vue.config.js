const PtoViewPort = require("postcss-px-to-viewport");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  configureWebpack: (config) => {
    // 返回一个将会被合并的对象
    return {
      optimization: {
        minimizer: [
          new TerserPlugin({
            sourceMap: false,
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ],
      },
    };
  },
  productionSourceMap: false,
  devServer: {
    host: "192.168.0.100",
    port: "8888",
    open: true, //是否自动弹出浏览器页面
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          PtoViewPort({
            viewportWidth: 375,
            selectorBlackList: ["vant"],
          }),
        ],
      },
    },
  },
};
