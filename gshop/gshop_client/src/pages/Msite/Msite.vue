<template>
  <div class="msite">
    <HeaderTop :title="$store.state.address">
      <router-link slot="search" to="/search" class="header_search">
        <i class="iconfont iconsearch"></i>
      </router-link>
      <router-link slot="login" to="/login" class="header_login">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeaderTop>

    <div class="msite_content_wrapper">
      <div class="msite_content">
        <div class="msite_content_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
                <div class="nav-slide-wapper" v-for="(category,index) in categorys" :key="index">
                  <div class="image-wapper">
                    <img :src="baseImageUrl+category.image_url" />
                  </div>
                  <span>{{category.title}}</span>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="msite_shop_list">
          <p class="shop_header">
            <i class="iconfont iconicon--copy"></i>
            <span class="shop_header_title">附近商家</span>
          </p>
          <ShopList v-for="(item,index) in $store.state.shoplist" :key="index" :shopdata="item"></ShopList>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";

import Swiper from "swiper";
import "swiper/css/swiper.min.css";

import HeaderTop from "../../components/TopHeader/TopHeader";
import ShopList from "@/components/ShopList/ShopList";


import { reqShoplist } from "../../api/index";

export default {
  components: {
    HeaderTop,
    ShopList,
  },
  data() {
    return {
      topTitle: "昌平区北七家修正大药",
      baseImageUrl: "https://fuss10.elemecdn.com" //食品图片基础路径
    };
  },
  mounted() {
    new BScroll(".msite_content_wrapper", {
      click: true
    });

    this.$store.dispatch("getAddress");
    this.$store.dispatch("getcategorys");
    this.$store.dispatch("getshoplist");
  },
  watch: {
    //使用watch监听categorysArr相当于是监听食品分类数据categorys。重点：监听数据更新，作出后面步骤
    categorysArr(value) {
      this.$nextTick(() => { //一旦完成界面更新，立即调用回调函数（前提是在数据改变之后）
        //创建一个swiper实例，实现轮播(创建swiper实例必须在数据categorys获取之后,所以才有这里的数据监听和nextTIck)
        new Swiper(".swiper-container", {
          loop: true, //循环模式
          //分页器创建
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  computed: {
    //将食品分类的一维数组变成二维数组
    categorysArr() {
      //准备空的二维数组
      const arr = [];
      //准备一个空的一维数组
      let minarr = [];
      //遍历食品类别列表
      this.$store.state.categorys.forEach(item => {
        //如果当前一维小数组已经满8个数，则创建一个新的
        if (minarr.length === 8) {
          minarr = [];
        }
        //如果当前一维小数组是个新的数组，则push 到二维数组里面。
        if (minarr.length === 0) {
          arr.push(minarr);
        }
        //将当前的食品类保存到小数组中
        minarr.push(item);
      });
      console.log(arr);
      return arr;
    }
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.stylus';

.msite_content_wrapper {
  position: fixed;
  top: 45px;
  bottom: 46px;
  width: 100%;

  .msite_content {
    background-color: #fff;

    .msite_content_nav {
      padding-top: 15px;
      height: 200px;
      bottom-border-1px($bc = #e4e4e4);

      .swiper-container {
        height: 100%;

        .swiper-wrapper {
          .swiper-slide {
            display: flex;
            flex-wrap: wrap;
            height: 100%;

            .nav-slide-wapper {
              width: 25%;
              height: 50%;
              text-align: center;

              span {
                font-size: 13px;
              }

              .image-wapper {
                padding-bottom: 10px;

                img {
                  width: 50px;
                }
              }
            }
          }
        }
      }
    }

    .msite_shop_list {
      .shop_header {
        padding: 10px 0 5px 10px;
        font-size: 13px;
        color: #999;

        .iconicon--copy {
          font-size: 16px;
        }
      }
    }
  }
}
</style>

<style lang="stylus" rel="stylesheet/stylus">
// swiper样式覆盖
.msite_content_wrapper {
  // 分页器颜色
  .swiper-pagination {
    >span.swiper-pagination-bullet-active {
      background: #02a774;
    }
  }

  // 分页器下移
  .swiper-pagination-bullets {
    bottom: 5px;
  }
}
</style>