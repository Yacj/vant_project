<template>
  <div class="home">
    <div class="hd text-center flex justify-center align-center">
      <div class="text text-sl">Vant-Project</div>
    </div>
    <div class="text-xxl padding">
      <span class="text-price  text-xsl">23</span>
    </div>
    <div class="test">
      我
    </div>
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>


import Tabbar from "../../components/Tabbar/Tabbar";
export default {
  name: 'Home',
  components: {Tabbar},
}
</script>


<style lang="scss" scoped>
  .home{
    background: #f6f6f6;
    min-height: 100vh;
    .hd{
      padding: 80px 10px;
    }
    .cell{
      padding: 0 15px;
    }
    .test{
      color: $theme;
    }
  }
</style>