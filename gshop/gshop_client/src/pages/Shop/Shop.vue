<template>
  <div class="shop">
    <ShopHeader/>
    <div class="shop-nav">
      <div class="nav-item">
        <router-link to="" class="item-text pitchon">点餐</router-link>
      </div>
      <div class="nav-item">
        <router-link to="" class="item-text">评价</router-link>
      </div>
      <div class="nav-item">
        <router-link to="" class="item-text">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'

export default {
  components:{
    ShopHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shop
  width 100%
  height 100% 
  display flex
  flex-flow column nowrap 
  .shop-nav
    display flex
    position relative
    // 一像素下边框
    &::after
      content ''
      width 100%
      height 1px
      background-color #e4e4e4
      position absolute 
      left 0
      bottom 0
      transform scaleY(0.5)
    .nav-item
      flex 1
      text-align center
      height 40px
      line-height  40px
      .item-text
        width 100%
        height 100%
        display block
        font-size 14px
        &.pitchon
          color #02A774
          position relative
          &::after
            content ''
            width 32px
            height 2px
            background-color #02A774
            position absolute
            bottom 1px
            left 50%
            transform translateX(-50%) 
  .content
    flex 1
    overflow hidden         
</style>