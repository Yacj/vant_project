<template>
    <div id="list">
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

            <div @click="priceSort"   class="select flex align-center justify-center flex-1 text-center">
                <div>价格</div>
                <div>
                    <div :class="{'active':isActive ===2}" class="iconfont icon-jiantou"></div>
                    <div :class="{'active':isActive === 3}" class="iconfont icon-jiantouxia"></div>
                </div>
            </div>

            <div class="select flex-1 text-center" style="margin-right: 10px"><!-- 下拉菜单 -->
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" @change="screen" />
                </van-dropdown-menu>
            </div>

        </div>
        <div class="list-shop">
            <!-- 商品卡片 -->
            <van-card
                    v-for="(item,index) in list"
                    :tag="item.shopType === 1 ? '天猫':'淘宝'"
                    :price="item.actualPrice"
                    :title="item.title"
                    :thumb="item.mainPic"
                    @click="toDetails(item.id)">

                <template #num>
                    <span>30天销量：{{item.monthSales}}</span>
                </template>
            </van-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        data() {
            return {
                kw:'',
                isActive:-1, //0综合排序，1销量，2价格升序，3价格降序,
                value1: -1,
                option1: [
                    { text: '店铺类型', value: -1 },
                    { text: '淘宝', value: 0 },
                    { text: '天猫', value: 1 }
                ],
                list:[
                    {
                        shopType:1,
                        actualPrice:20,
                        title:'商品1',
                        mainPic:'https://www.17sucai.com/preview/573531/2020-04-09/%E6%89%8B%E6%9C%BA%E5%95%86%E5%9F%8E/images/6.jpg',
                        monthSales:1000
                    },
                    {
                        shopType:2,
                        actualPrice:30,
                        title:'商品2',
                        mainPic:'https://www.17sucai.com/preview/573531/2020-04-09/%E6%89%8B%E6%9C%BA%E5%95%86%E5%9F%8E/images/4.jpg',
                        monthSales:10000
                    }
                ]
            }
        },
        mounted() {
        },
        methods: {
            toSearch(){

            },
            back(){

            },
            onSort(){

            },
            saleSort(){

            },
            priceSort(){

            },
            screen(value){},
            toDetails(){

            }
        },
        component: {
            //someComponent
        }
    }
</script>
<style scoped lang="scss">
    ::v-deep{
        .van-dropdown-menu__bar{
            box-shadow: none;
        }
    }
#list{
    .list-nav{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }
    .list-sort{
        position: fixed;
        top: 54px;
        left: 0;
        z-index: 99;
        width: 100%;
        margin-top: -1px;
        font-weight: 300;
        font-size: 15px;
        .iconfont{
            font-size: 15px
        }
        .select{
        }
    }
    .active{
        color: red;
    }
    .list-shop{
        margin-top: 100px;
    }
}
</style>