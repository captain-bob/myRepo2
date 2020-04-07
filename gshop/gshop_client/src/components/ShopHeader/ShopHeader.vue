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
              <span class="content-title">商品列</span>
              <i class="iconfont iconhoutui"></i>
          </h1>
          <p class="business-situation">
              <span>4.2</span>
              <span>月售90单</span>
              <span>硅谷专送</span>
              <span>约28分钟</span>
              <span>距离1000m</span>
          </p>       
       </div>   
    </div>
    <p class="content-huodong">
        <span class="huodong-title">
            <span class="huodong-title-inner">首单</span>
        </span>
        <span class="huodong-details">新用户下单立减17元(不与其他活动同享)新用户下单立减17元(不与其他活动同享)</span>
        <span class="huodong-num">8个优惠</span>
    </p> 
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
                justify-content center
                align-items center
                padding 0 20px
                .content-pinpai
                    font-size 12px
                    background-color #ffd992
                    padding 3px 5px
                    font-weight bold 
                    margin-right 10px 
                    width 24px 
                    text-align center
                    white-space nowrap 
                .content-title 
                    font-size 20px
                    font-weight 600
                    height 24px
                    line-height 24px
                    overflow hidden
                    text-overflow ellipsis 
                    white-space nowrap 
            .business-situation
                display flex
                justify-content center
                padding 6px  20px
                font-size 12px
                span 
                    margin 0 5px
                    text-align center 
    .content-huodong 
        font-size 12px
        color #716b6b
        margin 0 25px
        padding 5px
        border 1px solid #e4e4e4
        text-align center
        display flex
        justify-content center
        align-items center
        .huodong-title
            width 30px
            margin-right 5px
            background-color green
            color #ffffff
            .huodong-title-inner
                transform scale(0.8)
                display block
                font-weight bolder
        .huodong-details
            white-space nowrap 
            overflow hidden
            height 12px
            line-height 12px
            flex 1
            text-overflow ellipsis 
            margin-right 5px    
        .huodong-num 
            width 50px             
</style>