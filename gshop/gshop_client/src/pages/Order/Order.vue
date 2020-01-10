<template>
  <div class="order">
    <HeaderTop title="订单"></HeaderTop>
    <div class="order_content_box">
      <div class="order_nologin">
        <img class="nologin_img" src="./image/person.png" />
        <p class="nologin_title">登陆后查看外卖订单</p>
        <span>立即登陆</span>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderTop from "../../components/TopHeader/TopHeader";
export default {
  name: "Order",
  components: {
    HeaderTop
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus">
.order {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .order_content_box {
    margin-top: 45px;
    width: 100%;

    .order_nologin {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      padding-top: 100px;

      .nologin_img {
        width: 60%;
      }

      .nologin_title {
        font-size: 17px;
        color: #6a6a6a;
      }
      >span {
        font-size: 14px;
        background-color: #02a774;
        color: #fff;
        padding: 10px 20px;
        margin-top: 10px;
        border-radius: 5px;
      }
    }
  }
}
</style>