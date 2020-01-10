<template>
  <div class="msite">
    <HeaderTop :title="topTitle">
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
              <div class="swiper-slide">
                <div class="nav-slide-wapper">
                  <div class="image-wapper">
                    <img src="./images/1.jpg" />
                  </div>
                  <span>甜品饮品</span>
                </div>
                <div class="nav-slide-wapper">
                  <div class="image-wapper">
                    <img src="./images/1.jpg" />
                  </div>
                  <span>甜品饮品</span>
                </div>
                <div class="nav-slide-wapper">
                  <div class="image-wapper">
                    <img src="./images/1.jpg" />
                  </div>
                  <span>甜品饮品</span>
                </div>
                <div class="nav-slide-wapper">
                  <div class="image-wapper">
                    <img src="./images/1.jpg" />
                  </div>
                  <span>甜品饮品</span>
                </div>
                <div class="nav-slide-wapper">
                  <div class="image-wapper">
                    <img src="./images/1.jpg" />
                  </div>
                  <span>甜品饮品</span>
                </div>
                <div class="nav-slide-wapper">
                  <div class="image-wapper">
                    <img src="./images/1.jpg" />
                  </div>
                  <span>甜品饮品</span>
                </div>
                <div class="nav-slide-wapper">
                  <div class="image-wapper">
                    <img src="./images/1.jpg" />
                  </div>
                  <span>甜品饮品</span>
                </div>
                <div class="nav-slide-wapper">
                  <div class="image-wapper">
                    <img src="./images/1.jpg" />
                  </div>
                  <span>甜品饮品</span>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="nav-slide-wapper">
                  <div class="image-wapper">
                    <img src="./images/1.jpg" />
                  </div>
                  <span>甜品饮品</span>
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
          <ShopList></ShopList>
          <ShopList></ShopList>
          <ShopList></ShopList>
          <ShopList></ShopList>
          <ShopList></ShopList>
          <ShopList></ShopList>
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

export default {
  components: {
    HeaderTop,
    ShopList
  },
  data() {
    return {
      topTitle: "昌平区北七家修正大药"
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, //循环模式
      pagination: {
        el: ".swiper-pagination"
      }
    });

    new BScroll(".msite_content_wrapper", {
      click: true
    });
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.stylus'

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
      bottom-border-1px($bc = #e4e4e4)
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
        padding 10px 0 5px 10px
        font-size 13px
        color #999
        .iconicon--copy {
          font-size 16px
        }
      }
    }
  }
}
</style>

<style lang="stylus" rel="stylesheet/stylus">
// swiper样式覆盖
.msite_content_wrapper {
  //分页器颜色
  .swiper-pagination {
    >span.swiper-pagination-bullet-active {
      background: #02a774;
    }
  }
  //分页器下移
  .swiper-pagination-bullets {
    bottom: 5px;
  }
}
</style>