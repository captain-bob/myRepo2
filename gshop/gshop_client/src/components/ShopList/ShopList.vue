/* 商家列表组件 */
<template>
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li">
        <div class="shop_li_left">
          <img class="shop_li_img" src="../../../static/shop/2.jpg" />
        </div>
        <div class="shop_li_right">
          <div class="shop_detail_header">
            <h4 class="shop_title">锄禾日当午</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </div>
          <div class="shop_rating_order flex_space_between_nowrap">
            <!-- 五星好评组件 -->
            <div class="shop_rating_order_left">
              <div class="star"></div>
              <span class="rating_span">3.6</span>
              <span class="order_span">月售106单</span>
            </div>
            <div class="shop_rating_oder_right">
              <span class="delivery_style delivery_left">硅谷转送</span>
              <span class="delivery_style delivery_right">准时达</span>
            </div>
          </div>
          <div class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥20起送</span>
              <span class="segmentation">/</span>
              <span>配送费¥5</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.stylus';

.shop_container {
  background: #fff;

  .shop_li {
    display: flex;
    flex-wrap: nowrap;
    padding: 15px 8px;
    bottom-border-1px($bb1-color);

    .shop_li_left {
      // flex: auto;
      padding-right: 10px;

      >img {
        width: 75px;
        height: 75px;
      }
    }

    .shop_li_right {
      flex: auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      padding-bottom: 2px;

      .shop_detail_header {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;

        .shop_title {
          font-size: 16px;
          color: #333;
          font-weight: 700;
        }

        .shop_detail_ul {
          display: flex;

          .supports {
            font-size: 10px;
            color: #999;
            border: 1px solid #f1f1f1;
            padding: 0 2px;
            border-radius: 2px;
          }
        }
      }

      .shop_rating_order {
        .shop_rating_order_left {
          font-size: 10px;

          .rating_span {
            color: #ff6000;
          }

          .order_span {
            color: #666;
            padding-left: 2px;
          }
        }

        .shop_rating_oder_right {
          font-size: 0; // 去除inline-block元素间的间距

          .delivery_style {
            color: #02a774;
            border: 1px solid #02a774;
            font-size: 10px;
            padding: 1px;
            border-radius: 2px;
            transform: scale(0.7);
            display: inline-block;
          }
        }
      }

      .shop_distance {
        font-size: 12px;
        color: #666;

        .segmentation {
          color: #ccc;
        }
      }
    }
  }
}
</style>