<template>
  <div class="goods">
    <div class="container">
      <div class="left-wraper">
        <ul class="left-content">
          <li v-for="(item,index) in goods" :key="index" :class="{pitchon:index===1}">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="right-wraper">
        <ul class="right-content">
          <li class="outer-li" v-for="(goodstype,index) in goods" :key="index">
            <h1 class="category">{{goodstype.name}}</h1>
            <ul class="inner-ul">
              <li class="inner-li" v-for="(food,index) in goodstype.foods" :key="index">
                <img class="feature-img" :src="food.icon" alt="">
                <div class="details">
                  <h1>{{food.name}}</h1>
                  <p class="feature" v-show="food.description">{{food.description}}</p>
                  <div class="sell">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评{{food.rating}}%</span>
                  </div>
                  <p class="price">￥{{food.price}}</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="shopping-cart"></div>
      <div class="footer-right">
        <div class="charge">
          <p class="num">￥0</p>
          <p class="shipping-fee">另需配送费￥4元</p>
        </div>
        <div class="result">
          还差￥4元起送
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'


export default {
mounted() {
    new BScroll(".left-wraper", {
      click: true,
      useTransition:false
    });
    new BScroll(".right-wraper", {
      click: true,
      useTransition:false
    });
    this.$store.dispatch('getshopgoods')
},
computed: {
  ...mapState(['goods'])
},
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods
  width 100% 
  height 100%
  .container
    width 100% 
    height calc(100% - 46px)
    overflow hidden
    position relative
    display flex
    .left-wraper
      width 80px
      height 100%
      background-color #F3F5F7
      ul
        background-color #F3F5F7
        li 
          font-size 12px
          text-align center
          position relative
          &.pitchon
            color #18AE80
            background-color #fff
          &::after 
            content ''
            height 2px
            width 60px
            position absolute 
            bottom 0
            left 50% 
            transform translateX(-50%) scaleY(0.5)
            background-color #E7E9EB
          span 
            padding 20px 0
            display block

    .right-wraper
      width calc(100% - 80px)
      height 100%
      .category
        font-size 12px
        color #B1B5B9
        background-color #F3F5F7
        height 26px
        line-height 26px
        padding-left 13px
        border-left 2px solid #e4e4e4
      .inner-li 
        margin 15px
        padding-bottom 15px
        display flex
        position relative
        &::after//一像素下边框
          content ''
          position absolute 
          bottom 0
          left 0
          height 1px
          width 100%
          transform scaleY(0.5)
          background-color #e4e4e4
        &:last-child //去除最后一个元素一像素下边框
          padding-bottom 0
          &::after
            width 0
        .feature-img
          width 57px
          height 57px
          margin-right 10px
        .details
          flex 1
          font-size 12px
          h1 
            font-size 14px
            padding-top 3px
          .feature 
            color #B1B5B9
            margin-top 6px
          .sell
            color #B1B5B9
            padding-top 6px
            span 
              margin-right 15px
          .price
            color red 
            font-size 14px
            padding-top 6px
  .footer
    width 100% 
    height 46px
    background-color #141D27
    position relative
    color #fff
    .shopping-cart
      width 40px
      height 40px
      position absolute 
      top -10px
      left 15px
      background-color #2B343C
      border-radius 3rem
      border 6px solid #141D27
    .footer-right
      height 100% 
      display flex
      align-items center
      margin-left 70px
      .charge
        flex 1
        .num
          font-szie 14px
          font-weight bolder
          margin-bottom 5px
          padding-left 5px
        .shipping-fee
          font-size 10px
          color #676D74
      .result
        font-size 12px
        font-weight bold
        height 100% 
        line-height 46px
        width 110px
        text-align center
        background-color #2B333B
</style>