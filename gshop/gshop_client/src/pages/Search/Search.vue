<template>
  <div class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <form class="search_form">
      <input class="search_header_input" placeholder="请输入商家名称" />
      <input class="search_header_button" type="button" value="提交" />
    </form>
  </div>
</template>


<script>
import HeaderTop from "../../components/TopHeader/TopHeader";

export default {
  name: "search",
  components: {
    HeaderTop
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus">
.search {
   width 100%
   height 100%
   overflow hidden
  .search_form {
    margin-top: 45px;
    padding: 12px 8px;

    .search_header_input {
      width: 75%;
      background-color: #f2f2f2;
      padding: 8px 5px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 5px;
    }

    .search_header_button {
      border: 0;
      float: right;
      outline: none;
      background-color: #02a774;
      color: #fff;
      font-size: 16px;
      line-height: 16px;
      padding: 8px 10px;
      width: 19%;
      border-radius: 5px;
      font-weight 700
    }
  }
}
</style>