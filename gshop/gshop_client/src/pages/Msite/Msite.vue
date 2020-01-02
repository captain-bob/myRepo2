<template>
  <div class="msite">
    <HeaderTop :title="topTitle">
      <router-link slot="search" to="/search" class="header_search">
        <i class="iconfont iconsearch"></i>
      </router-link>
      <router-link slot="login" to="/login" class="header_login">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeaderTop>
    <div>Msite vue template</div>
  </div>
</template>


<script>
import HeaderTop from "../../components/TopHeader/TopHeader";
export default {
  components: {
    HeaderTop
  },
  data() {
    return {
      topTitle: "成都市"
    };
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus"></style>