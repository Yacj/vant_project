<template>
  <div id="backTop">
    <transition name="fade">
      <div class="back-to-top bg-blue"
           v-show="goTopShow"
           @click="goTop">
        <van-icon name="arrow-up"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "backTop",
  data() {
    return {
      goTopShow: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.goTopShow = this.scrollTop > 500;
    },
    goTop() {
      let timer = null,
          that = this;

      cancelAnimationFrame(timer)

      timer = requestAnimationFrame(function fn() {
        if (that.scrollTop > 0) {
          that.scrollTop -= 50;
          document.body.scrollTop = document.documentElement.scrollTop = that.scrollTop;
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer);
          that.goTopShow = false;
        }
      })
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped lang="scss">
.back-to-top {
  position: fixed;
  z-index: 9999;
  bottom: 60px;
  right: 15px;
  display: inline-block;
  width: 35px;
  line-height: 35px;
  border-radius: 35px;
  text-align: center;
  font-size: 12px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>