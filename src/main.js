import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './vant/index'
import './assets/fonts/iconfont.css'
import './assets/css/common.scss'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // if (to.meta.needLogin) {
  //   //页面是否登录
  //   if (cookie.getCookie("token")) {
  //     next(); //表示已经登录
  //   } else {
  //     next({
  //       path: '/login',
  //     })
  //   }
  // }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
