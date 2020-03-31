<template>
  <div class="shop-header">
    <nav class="shop-nav" style="backgroundImage:url('https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png')">
       <i class="iconfont iconhoutui"></i>
    </nav>
    <div class="shop-header-content">
       <img class="content-img" src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg">
       <div class="content-box">
          <h1>
              <span class="content-pinpai">品牌</span>
              <span class="content-title">嘉禾一品（温都水城）</span>
              <i class="iconfont iconhoutui"></i>
          </h1>
          <p class="content-huodong">
              <span class="huodong-title">首单</span>
              <span class="huodong-details">新用户下单立减17元(不与其他活动同享)</span>
              <span class="huodong-num">8个优惠</span>
          </p>    
       </div>   
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shop-header
    .shop-nav
        height 40px
        background-size cover
        padding 5px 10px
        position relative
        .iconhoutui
            color #fff
            font-size 28px
            position absolute 
            top 50%
            left 0
            transform translateY(-50%)
    .shop-header-content
        position relative
        min-height 40px 
        .content-img
            width 66px
            height 66px
            position absolute 
            top -40px
            left 50%
            transform translateX(-50%)
            box-shadow 0 0 0.4vw 0 rgba(0,0,0,0.2)
            border-radius 2px
        .content-box
            padding-top 30px
            h1
                display flex
                justify-content space-between
                align-items center
                .content-pinpai
                    font-size 12px
                    background-color #ffd992
                    padding 3px 5px
                    font-weight bold  

</style>