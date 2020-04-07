<template>
  <div class="shop">
    <ShopHeader/>
    <div class="shop-nav">
      <div class="nav-item" @click="navselect='goods'">
        <router-link to="/shop/goods" class="item-text" :class="{pitchon:navselect==='goods'}">点餐</router-link>
      </div>
      <div class="nav-item" @click="navselect='rating'">
        <router-link to="/shop/rating" class="item-text" :class="{pitchon:navselect==='rating'}">评价</router-link>
      </div>
      <div class="nav-item" @click="navselect='info'">
        <router-link to="/shop/info" class="item-text" :class="{pitchon:navselect==='info'}">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
import {mapState} from 'vuex'
 

export default {
  data() {
    return {
      navselect:'',//goods显示点餐，rating显示评价页面,info显示商家页面
    }
  },
  mounted() {
    this.toPage()
    this.$store.dispatch('getshopinfo')
  },
  components:{
    ShopHeader
  },
  computed: {
     ...mapState(['info'])
  },
  methods: {
    //初始化页面二级导航
    toPage() {
      var name=this.$route.name
      console.log(name.lastIndexOf('/'))
      this.navselect=name.slice(1)
      console.log(name.slice(name.lastIndexOf('/')))
    }
  },
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