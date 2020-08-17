<template>
  <div id="cart">
    <div v-for="(item,index) in carts">
      <van-checkbox-group v-model="result" @change="onChecked">
        <van-row style="background-color: white;">
          <van-col span="2" style="margin-top: 35px;">
            <van-checkbox :name="item"></van-checkbox>
          </van-col>
          <van-col span="22">
            <van-swipe-cell>
              <van-card
                  :price="item.data.actualPrice"
                  :desc="item.data.desc"
                  :title="item.data.dtitle"
                  :thumb="item.data.mainPic"
                  class="goods-card"
              >
                <template #num>
                  <van-stepper v-model="item.num" @change="onNum"/>
                </template>
              </van-card>
              <template #right >
                <van-button @click="del(item,index)" square text="删除" type="danger" class="delete-button" />
              </template>
            </van-swipe-cell>
          </van-col>
        </van-row>
      </van-checkbox-group>
    </div>
    <!-- vant提交订单栏 -->
    <van-submit-bar :price="total" button-text="提交订单">
      <van-checkbox v-model="checkedAll" @click="onAll">全选</van-checkbox>
    </van-submit-bar>
    <tabbar :active="1"></tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar/Tabbar";
export default {
  name: "cart",
  components: {Tabbar},
  data(){
    return{
      carts:[], //添加到购物车的商品
      result:[], //所有复选框选中的商品
      checkedAll:false, //全选的状态
      total:0, //总价
      isShow:true
    }
  },
  created() {
    let carts = localStorage.carts
    if(carts){
      this.carts = JSON.parse(carts)
    }
    if(this.carts.length > 0){ //显示或隐藏空状态
      this.isShow = false
    }else{
      this.isShow = true
    }
  },
  methods:{
    onNum(){ //商品数量发生变化时触发
      this.onChecked()
      localStorage.carts = JSON.stringify(this.carts)
    },
    onChecked(){ //点击复选框选中商品并计算总价
      this.total = 0
      this.result.map(item=>{
        this.total += item.data.actualPrice*100*item.num
      })

      if(this.result.length == this.carts.length){
        this.checkedAll = true
      }else{
        this.checkedAll = false
      }

    },
    onAll(){ //点击全选按钮
      if(this.checkedAll){ //如果为true的话全部选中，否则全不选
        this.result = this.carts
      }else{
        this.result = []
      }
    },
    del(item,index){ //删除
      if(this.result.includes(item)){
        this.$notify({ type: 'danger', message: '删除前请取消选中' });
      }else{
        this.carts.splice(index,1)
        this.checkedAll = this.result.length == this.carts.length
        localStorage.carts = JSON.stringify(this.carts)
      }

      if(this.carts.length > 0){ //显示或隐藏空状态
        this.isShow = false
      }else{
        this.isShow = true
        this.checkedAll = false
      }

    },
    gotoClassify(){ //跳转到分类页
      this.$router.push({
        path:'/classify'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.goods-card {
  background-color: white;
}

.delete-button {
  height: 100%;
}

.bottom-button {
  width: 180px;
  height: 40px;
}
</style>