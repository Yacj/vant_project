<template>
  <div class="home">
    <!-- 居中 -->
    <van-row type="flex" justify="center" class="hd">
      <van-col class="text text-sl">Vant-Project</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col span="6" class="text-center">span: 6</van-col>
      <van-col class="text-center" span="6">span: 6</van-col>
      <van-col class="text-center" span="6">span: 6</van-col>
    </van-row>
    <back-top/>
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import commonMixin from "@/utils/mixins/commonMixin";
import Tabbar from "../../components/Tabbar/Tabbar";
import BackTop from "@/components/FloatButton/backTop";

export default {
  name: 'Home',
  components: {BackTop, Tabbar},
  mixins: [commonMixin],
  mounted() {
    console.log(this.count)
  }
}
</script>


<style lang="scss" scoped>
.home {
  background: #f6f6f6;
  min-height: 100vh;

  .hd {
    padding: 80px 10px;
  }

  .cell {
    padding: 0 15px;
  }

  .test {
    color: $theme;
  }
}
</style>
