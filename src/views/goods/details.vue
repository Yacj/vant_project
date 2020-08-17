<template>
  <div id="details">
    <div class="details">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item v-for="(item,index) in details.imgs">
          <img :src="item" width="100%">
        </van-swipe-item>
      </van-swipe>
      <div style="padding: 5px;line-height: 20px">
        <span class="shopName">{{details.shopName}}</span>
        <span style="font-weight: 700;" class="text-lg">{{details.title}}</span>
      </div>
      <div class="shop">
        <div class="flex justify-between">
          <span class="text-price text-red text-xxl">
            <span style="">{{details.actualPrice}}</span>
          </span>
          <img :src="details.shopLogo">
        </div>
      </div>
    </div>
    <div>
      <div v-for="(item,index) in details.detailPics">
        <img :src="item.img" width="100%">
      </div>
    </div>
    <div style="height: 50px;"></div>
    <!-- vant商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" to="/cart"/>
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import {goodsService} from "@/api/goods";

export default {
  name: "Details",
  data() {
    return {
      details: [],
      carts:[] //购物车商品
    }
  },
  created() {
    this.getDetails()
  },
  methods: {
    async getDetails() {
      let id = this.$route.query.id
      await goodsService.details({
        id
      }).then((res) => {
        this.details = res.data.data
        this.details.imgs = this.details.imgs.split(',')
        this.details.detailPics = JSON.parse(this.details.detailPics)
      })
    },
    addCart(){
      let rel = true
      this.carts.map(item=>{
        if(item.data.id === this.details.id){
          item.num++;
          rel = false;
        }
      })
      if(rel){
        this.carts.push({
          data:this.details,
          num:1
        })
      }
      localStorage.carts = JSON.stringify(this.carts)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep{
  .van-swipe__track {
    text-align: center;
  }
}
#details {
  .details {
    background-color: #FFFFFF;
    border-radius: 0 0 15px 15px;
    margin-bottom: 15px;

    .shop {
      margin: 10px;
      img {
        width: 30px;
        height: 30px;
      }

    }
  }
  .shopName {
    margin-right: 5px;
    font-size: 12px;
    background-color: #FF0000;
    color: white;
    padding: 2px 2px;
    border-radius: 2px;
  }
}
</style>