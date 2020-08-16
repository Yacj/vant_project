import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      name:'home',
      meta:{
        title:'首页'
      },
      component:()=>import('../views/home/Home')
    },
    {
      path:'/goods/list',
      name:'goodsList',
      meta:{
        title:'商品列表'
      },
      component:()=>import('../views/goods/list')
    }
  ]

const router = new VueRouter({
  routes
})

export default router
