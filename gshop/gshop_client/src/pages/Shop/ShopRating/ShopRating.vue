<template>
  <div class="rating">
    <div class="header">
      <div class="header-left">
        <p class="totle-rating-num">4.2</p>
        <p class="totle-rating-title">综合评分</p>
        <p class="totle-rating-percent">高于周边商家99%</p>
      </div>
      <div class="header-right">
        <div class="service-attitude">
          <span>服务态度<span class="number">4.1</span></span>
        </div>
        <div class="commodity-grade">
          <span>商品评分<span class="number">4.3</span></span>
        </div>
        <p class="time">送达时间<span>28分钟</span></p>
      </div>
    </div>
    <div class="body">
      <p class="hr"></p>
      <div class="totle-rating-select">
        <div class="select-button">
          <span class="button-num on">
            全部
            <span>24</span>
          </span>
          <span class="button-num">
            满意
            <span>18</span>
          </span>
          <span class="button-num">
            不满意
            <span>6</span>
          </span>
        </div>
        <p class="select-button-text">
          <i class="iconfont iconsousuo"></i>
          <span>只看有内容的</span>
        </p>
      </div>
      <div class="rating-one-box">
        <div class="rating-one">
          <img class="one-img" src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png">
          <div class="one-content">
            <p class="one-one">
              <span>3****c</span>
              <span>2016-07-23 21:52:44</span>
            </p>
            <p class="one-num">
                <Star></Star>
              <span>30</span>
            </p>
            <p class="one-rating">看到的扩啦扩绿多多扩绿绿绿绿绿绿绿绿绿啦奥奥打开来得快代课老师</p>
            <div class="like">
              <i class="iconfont iconsousuo"></i>
              <span>南瓜粥</span>
              <span>皮蛋瘦肉粥</span>
              <span>扁豆蒙面</span>
              <span>蚂蚁上树</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../../../components/star/star'
export default {
components:{
  Star,
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.rating
  width 100%
  height 100% 
  overflow hidden
  .header
    display flex
    padding 17px 0
    font-size 12px
    border-bottom 1px solid #DADDE0
    .header-left         //头部左侧
      text-align center
      padding 10px 18px
      border-right 1px solid #e6e7e8
      box-sizing border-box
      .totle-rating-num
        color #FF9900
        font-size 24px
        margin-bottom 5px
      .totle-rating-title
        margin-bottom 5px
      .totle-rating-percent
        color #93999F
    .header-right       //头部右侧
      flex 1
      padding 10px 0 10px 18px
      box-sizing border-box
      .service-attitude
        margin-bottom 15px
        .number
          color #FF9900
      .commodity-grade
        margin-bottom 15px
        .number
          color #FF9900
      .time span 
        padding-left 15px
        color #93999F
  .body  //评论内容
    .hr 
      height 20px
      background-color #F3F5F7
    .totle-rating-select
      padding 17px
      border-bottom 1px solid #E5E6E7
      border-top 1px solid #E5E6E7
      .select-button
        margin-bottom 30px
        .button-num 
          padding 10px
          margin-right 10px
          font-size 12px
          color #4D555D
          background-color #DBDDDE
          display inline-block
          &.on
            background-color #02A774
            color #fff
      .select-button-text
        font-size 12px
        color #B6BABE
    .rating-one-box
      .rating-one
        padding 17px
        display flex
        font-size 13px
        .one-img
          width 30px
          height 30px
          border-radius 3rem
          margin-right 15px
        .one-content
          .one-one
            position relative
            span:last-child
              position absolute 
              top 50%
              right 0
              transform translateY(-50%)
              color #A1A7AC
          .one-num
            margin-bottom 10px
          .one-rating
            line-height 16px
</style>