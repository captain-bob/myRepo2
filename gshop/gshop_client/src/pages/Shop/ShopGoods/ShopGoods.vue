<template>
  <div class="goods">
    <div class="container">
      <div class="left-wraper">
        <ul class="left-content">
          <li v-for="(item,index) in 20" :key="index">
            <span>折扣大大</span>
          </li>
          <li class="pitchon">
            <span>折扣大大</span>
          </li>
        </ul>
      </div>
      <div class="right-wraper">右边</div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
mounted() {
    new BScroll(".left-wraper", {
      click: true
    });
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
          font-size 13px
          text-align center
          position relative
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
  .footer
    width 100% 
    height 46px
</style>