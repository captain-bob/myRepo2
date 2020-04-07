<template>
  <div class="info">
    <div class="info-container">
      <div class="delivery">
        <h1>配送信息</h1>
        <p class="p-1">
          <span class="delivery-title">{{info.description}}</span>
          <span class="delivery-text">有商家配送提供配送，约{{info.deliveryTime}}分钟送达，距离{{info.distance}}</span>
        </p>
        <p class="p-2">配送费￥{{info.deliveryPrice}}</p>
      </div>
      <div class="activity">
        <h1>活动与服务</h1>
        <ul>
          <li v-for="(item,index) in info.supports" :key="index">
            <span class="activity-tltle">{{item.name}}</span>
            <span class="activty-text">{{item.content}}</span>
          </li>
        </ul>
      </div>
      <div class="environment">
        <h1>商家实景</h1>
        <div class="img">
          <div class="img-container">
            <img :src="item" v-for="(item,index) in info.pics" :key="index">
          </div>
        </div>
      </div>
      <div class="info-info">
        <h1>商家信息</h1>
        <p>
          <span class="info-title">品类</span>
          <span class="info-text">{{info.category}}</span>
        </p>
        <p>
          <span class="info-title">商家电话</span>
          <span class="info-text">{{info.phone}}</span>
        </p>
        <p>
          <span class="info-title">地址</span>
          <span class="info-text">{{info.address}}</span>
        </p>
        <p>
          <span class="info-title">营业时间</span>
          <span class="info-text">{{info.workTime}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'

export default {
mounted() {
  new BScroll('.info',{
    click:true
  })

  new BScroll('.img', {
  scrollX: true // 水平滑动
  })

},
computed: {
  ...mapState(['info'])
},
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.info
  width 100%
  height 100%
  overflow hidden
  background-color #ffffff
  .info-container
    background-color #F3F5F7
    font-size 13px
    .delivery
      background-color #ffffff
      padding 17px
      box-shadow 0 2px 2px #DADDE0
      margin-bottom 18px
      h1 
        font-size 16px
        font-weight bold
      .p-2
        color #898989
      .p-1
        margin 15px 0 5px 0
        line-height 20px
        .delivery-title
          background-color #0097FF
          padding 2px 3px
          border-radius 5px
          color #ffffff
          margin-right 10px
          font-size 12px
        .delivery-text 
          color #898989
    .activity
      background-color #ffffff
      padding 17px
      box-shadow 0 2px 2px #DADDE0,0 -2px 2px #DADDE0
      margin-bottom 18px
      h1 
        font-size 16px
        font-weight bold
      ul 
        padding 17px 0 0 0
        li 
          margin-bottom 13px
          display flex
          align-items center
          color #787878
          .activity-tltle
            background-color #70BC46
            padding 3px 5px
            color #ffffff
            margin-right 10px
            white-space nowrap
            border-radius 3px
            font-size 12px
          .activty-text
            line-height 20px
    .environment
      background-color #ffffff
      padding 15px 17px
      box-shadow 0 2px 2px #DADDE0,0 -2px 2px #DADDE0
      margin-bottom 18px
      h1 
        font-size 16px
        font-weight bold
      .img
        width 100%
        overflow hidden
        margin-top 20px
        white-space nowrap
        .img-container
          // display flex
          // overflow visible
          // white-space nowrap
          float left //加float让 .img-container随子元素宽度
          font-size 0
          img
            width 120px
            height 90px
            margin-right 6px
            display inline-block
            &:last-child
              margin 0
    .info-info
      background-color #ffffff
      padding 17px 17px 0 17px
      box-shadow 0 -2px 2px #DADDE0
      h1 
        font-size 16px
        font-weight bold
      p 
        padding 16px 0
        position relative
        line-height 15px
        &:after
          content ''
          height 1px
          width 100%
          position absolute 
          bottom 0
          left 0
          background-color #EEEEEE
        .info-text
          position absolute 
          top 50%
          right 0
          transform translateY(-51%)
          color #787878
</style>