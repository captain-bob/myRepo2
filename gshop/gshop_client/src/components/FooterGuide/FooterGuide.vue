<template>
  <footer class="footer_guide">
    <div class="guide_item" @click="goto('/msite')" :class="{on:isCurrent('/msite')}">
      <span class="item_icon">
        <i class="iconfont iconwaimai"></i>
      </span>
      <span>外卖</span>
    </div>

    <div class="guide_item" @click="goto('/search')" :class="{on:isCurrent('/search')}">
      <span class="item_icon">
        <i class="iconfont iconsearch"></i>
      </span>
      <span>搜索</span>
    </div>

    <div class="guide_item" @click="goto('/order')" :class="{on:isCurrent('/order')}">
      <span class="item_icon">
        <i class="iconfont iconicon--copy"></i>
      </span>
      <span>订单</span>
    </div>

    <div class="guide_item" @click="goto('/profile')" :class="{on:isCurrent('/profile')}">
      <span class="item_icon">
        <i class="iconfont iconwode"></i>
      </span>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path);
    },
    isCurrent(path) {
      console.log(this.$route.path);
      return this.$route.path === path;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/mixins.stylus';

.footer_guide {
  top-border-1px($bc);
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  width: 100%;
  height: 50px;
  display: flex;

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;

    &.on {
      color: #02a774;
    }

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;

      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>