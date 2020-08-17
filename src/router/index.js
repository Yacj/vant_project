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
      path:'/cart',
      name:'cart',
      meta:{
        title: '购物车'
      },
      component:()=>import('../views/home/cart')
    },
    {
      path:'/goods/list',
      name:'goodsList',
      meta:{
        title:'商品列表'
      },
      component:()=>import('../views/goods/list')
    },
    {
      path: '/goods/categories',
      name:'goodsCategories',
      meta: {
        title: '商品分类'
      },
      component:()=>import('../views/goods/categories')
    },
    {
      path: '/goods/details',
      name:'goodsDetails',
      meta: {
        title: '商品详情'
      },
      component:()=>import('../views/goods/details')
    }
  ]

const router = new VueRouter({
  routes
})

export default router
