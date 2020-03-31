<template>
  <div>
    <ShopHeader/>
    <div>shop</div>
    <router-view></router-view>
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

<style lang="stylus" rel="stylesheet/stylus"></style>