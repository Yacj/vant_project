<template>
  <div id="categories">
    <div class="flex">
      <div class="oneNav">
        <!-- vant侧边导航 -->
        <van-sidebar style="height:100vh; white-space: nowrap; overflow-y: scroll;" v-model="activeKey">
          <van-sidebar-item
              v-for="(item,index) in oneClass"
              :title="item.cname"
              @click="oneNav(index)"/>
        </van-sidebar>
      </div>
      <div class="twoNav">
        <!-- vant宫格 -->
        <van-grid :gutter="10" column-num="3" :border="false" icon-size="60px">
          <van-grid-item
              v-for="(item,index) in twoClass"
              :icon="item.scpic"
              :text="item.subcname"
              @click="onList(item.subcid)"/>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import {goodsService} from "@/api/goods";

export default {
  name: "categories",
  data() {
    return {
      oneClass: [], //一级分类数据
      activeKey: 0,
      twoClass: [] //二级分类数据
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    async getCategory() {
      await goodsService.category().then((res) => {
        this.oneClass = res.data.data
        this.twoClass = this.oneClass[0].subcategories
      })
    },
    oneNav(index) {
      goodsService.category().then((res) => {
        this.oneClass = res.data.data
        this.twoClass = this.oneClass[index].subcategories
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>