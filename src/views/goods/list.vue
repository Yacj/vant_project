<template>
  <div id="list">
    <template v-if="list.length > 0">
      <!-- vant搜索 -->
      <div class="list-nav">
        <van-search @click="toSearch" v-model="kw" shape="round" placeholder="请输入搜索关键词">
          <!--                <template #left>-->
          <!--                    <van-icon @click="back" style="margin-right: 5px;" size="22px" name="arrow-left" />-->
          <!--                </template>-->
        </van-search>
      </div>
      <!-- 排序 -->
      <div class="list-sort flex align-center justify-center bg-white">
        <div @click="onSort" class="select flex-1 text-center" :class="{'active':isActive ===0}">综合排序</div>
        <div @click="saleSort" class="select flex-1 text-center" :class="{'active':isActive ===1}">销量</div>
        <div @click="priceSort" class="select flex align-center justify-center flex-1 text-center">
          <span>价格</span>
          <span class="flex flex-direction" style="margin-left: 5px">
                    <span :class="{'active':isActive ===2}" class="iconfont icon-jiantou"></span>
                    <span :class="{'active':isActive === 3}" class="iconfont icon-jiantouxia"></span>
                </span>
        </div>

        <div class="select flex-1 text-center" style="margin-right: 10px"><!-- 下拉菜单 -->
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" @change="screen"/>
          </van-dropdown-menu>
        </div>
      </div>
      <!--  列表 -->
      <div class="list-shop">
        <ul class="flex flex-wrap justify-around align-center">
          <li v-for="(item,index) in list" :key="index" @click="toDetails(item.id)">
            <img :src="item.mainPic" width="100%" alt=""/>
            <p class="text-cut" style="line-height: 2.5">{{item.title}}</p>
            <span class="text-price text-red">
          <span class="list-jiage">{{item.actualPrice}}</span>
           </span>
            <span class="list-yishou">已售:{{item.monthSales}}</span>
            <span>
<!--          <van-tag mark type="danger" style="margin-left:10px">{{item.shopType == 1 ? '天猫' : '淘宝'}}</van-tag>-->
        </span>
          </li>
        </ul>
        <!--      <van-card-->
        <!--          v-for="(item,index) in list"-->
        <!--          :tag="item.shopType === 1 ? '天猫':'淘宝'"-->
        <!--          :price="item.actualPrice"-->
        <!--          :title="item.title"-->
        <!--          :thumb="item.mainPic"-->
        <!--          @click="toDetails(item.id)">-->
        <!--        <template #num>-->
        <!--          <span>30天销量：{{item.monthSales}}</span>-->
        <!--        </template>-->
        <!--      </van-card>-->
      </div>
    </template>

    <template v-else>
      <van-empty image="error" description="暂无商品"/>
    </template>
  </div>
</template>

<script>
import {goodsService} from "@/api/goods";

export default {
  name: "list",
  data() {
    return {
      kw: '',
      isActive: -1, //0综合排序，1销量，2价格升序，3价格降序,
      value1: -1,
      option1: [
        {text: '店铺类型', value: -1},
        {text: '淘宝', value: 0},
        {text: '天猫', value: 1}
      ],
      list: []
    }
  },
  created() {
    this.getGoodsList()
  },
  mounted() {
  },
  methods: {
    async getGoodsList() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
      });
      await goodsService.goods().then((res) => {
        this.list = res.data.data.list
        this.$toast.clear()
      })
    },
    toSearch() {

    },
    back() {

    },
    onSort() {
      this.isActive = 0
      this.list.sort((a, b) => {
        return b.shopLevel - a.shopLevel
      })
    },
    saleSort() {
      this.isActive = 1
      this.list.sort((a, b) => {
        return b.monthSales - a.monthSales
      })
    },
    priceSort() {
      if (this.isActive < 2) {
        this.isActive = 2
        this.list.sort((a, b) => {
          return a.actualPrice - b.actualPrice
        })
      } else if (this.isActive === 2) {
        this.isActive = 3
        this.list.sort((a, b) => {
          return b.actualPrice - a.actualPrice
        })
      } else if (this.isActive === 3) {
        this.isActive = -1
        this.getGoodsList()
      }
    },
    screen(value) {
    },
    toDetails(id) {
      this.$router.push({
        path: '/goods/details',
        query: {
          id
        }
      })
    }
  },
  component: {
    //someComponent
  }
}
</script>
<style scoped lang="scss">
::v-deep {
  .van-dropdown-menu__bar {
    box-shadow: none;
  }
}

#list {
  .list-nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .list-sort {
    position: fixed;
    top: 54px;
    left: 0;
    z-index: 99;
    width: 100%;
    margin-top: -1px;
    font-weight: 300;
    font-size: 15px;

    .sort-iconfont {
      margin-left: 5px;
    }

    .iconfont {
      font-size: 15px
    }
  }

  .active {
    color: red;
  }

  .list-shop {
    margin-top: 100px;

    ul {
      width: 95%;
      margin: 90px auto;

      li {
        margin: 8px;
        width: 45%;
        font-size: 13px;

        .list-jiage {
          font-size: 20px;
        }

        .list-yishou {
          font-size: 11px;
          float: right;
          color: gray;
          margin-top:5%;
        }
      }
    }
  }
}
</style>