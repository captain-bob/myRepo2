<template>
  <div class="profile">
    <HeaderTop title="我的"></HeaderTop>
    <div class="profile_content">
      <router-link class="profile_content_header flex_space_between_nowrap" :to="userinfo._id?'':'/login'">
        <div class="profile_header_title">
          <i class="iconfont iconlogout-user"></i>
          <div class="header_title_box">
            <p class="header_login" v-if="!userinfo.phone">{{userinfo.name||'登录/注册'}}</p>
            <p class="header_shouji">
              <i class="iconfont iconshouji"></i>
              <span>{{userinfo.phone||'暂无绑定手机号'}}</span>
            </p>
          </div>
        </div>
        <i class="iconfont iconqianjin"></i>
      </router-link>
      <div class="profile_content_number">
        <ul class="proflie_number_box clear_float">
          <li class="number_item number_item_right_border">
            <p class="number_item_top">
              <span class="item_top_number item_top_number_orange">0.00</span>
              <span class="item_top_title">元</span>
            </p>
            <p class="number_item_bottom">我的余额</p>
          </li>
          <li class="number_item number_item_right_border">
            <p class="number_item_top">
              <span class="item_top_number item_top_number_red">0</span>
              <span class="item_top_title">个</span>
            </p>
            <p class="number_item_bottom">我的优惠</p>
          </li>
          <li class="number_item">
            <p class="number_item_top">
              <span class="item_top_number item_top_number_green">0</span>
              <span class="item_top_title">分</span>
            </p>
            <p class="number_item_bottom">我的积分</p>
          </li>
        </ul>
      </div>
      <div class="profile_content_nav">
        <div class="profile_nav_item">
          <i class="iconfont iconicon--copy"></i>
          <p class="profile_nav_text flex_space_between_nowrap"> 
            <span class="nav_item_tile">我的订单</span>
            <i class="iconfont iconqianjin"></i>
          </p>
        </div>
        <div class="profile_nav_item">
          <i class="iconfont iconjifenzhuanhuan"></i>
          <p class="profile_nav_text flex_space_between_nowrap ">
            <span class="nav_item_tile">积分商城</span>
            <i class="iconfont iconqianjin"></i>
          </p>
        </div>
        <div class="profile_nav_item">
          <i class="iconfont iconhuiyuanqia"></i>
          <p class="profile_nav_text flex_space_between_nowrap ">
            <span class="nav_item_tile">硅谷外卖会员卡</span>
            <i class="iconfont iconqianjin"></i>
          </p>
        </div>
        <div class="profile_nav_item">
          <i class="iconfont iconfuwuzhongxin"></i>
          <p class="profile_nav_text flex_space_between_nowrap ">
            <span class="nav_item_tile">服务中心</span>
            <i class="iconfont iconqianjin"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderTop from "../../components/TopHeader/TopHeader";
import {mapState} from 'vuex'

export default {
  name: "profile",
  components: {
    HeaderTop
  },
  computed: {
    ...mapState(['userinfo'])
  },
};
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.stylus';

.profile {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .profile_content {
    margin-top: 45px;

    .profile_content_header {
      padding: 20px 10px;
      background-color: #02a774;
      border-top: 1px solid #fff;

      .profile_header_title {
        .iconlogout-user {
          float: left;
          color: #e4e4e4;
          font-size: 62px;
        }

        .header_title_box {
          float: right;
          height: 62px;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
          padding-left: 10px;

          .header_login {
            font-size: 18px;
            color: #ffffff;
            font-weight: 700;
          }

          .header_shouji {
            font-size: 14px;
            color: #fff;

            .iconshouji {
              font-size: 20px;
            }
          }
        }
      }

      .iconqianjin {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
      }
    }

    .profile_content_number {
      width: 100%;

      .number_item {
        float: left;
        width: 33%;
        text-align: center;
        padding-top: 15px;
        bottom-border-1px($bc);

        .number_item_top {
          .item_top_number {
            font-size: 30px;
            color: #f90;
            font-weight: 700;
            line-height: 30px;
            margin-right: -5px;
          }

          .item_top_number_red {
            color: #ff5f3e;
          }

          .item_top_number_green {
            color: #6ac20b;
          }

          .item_top_title {
            font-size: 14px;
            color: #333;
          }
        }

        .number_item_bottom {
          font-size: 14px;
          font-weight: 400;
          color: #666666;
          padding: 10px 0;
        }
      }

      .number_item_right_border {
        border-right: 1px solid #f1f1f1;
      }
    }
    .profile_content_nav {
      .profile_nav_item {
        display flex
        align-items center
        .iconfont {
          font-size 20px
          padding-left 10px
          &.iconicon--copy {
            color #02a774
          }
          &.iconjifenzhuanhuan {
            color #ff5f3e
          }
          &.iconhuiyuanqia {
            color #f90
          }
          &.iconfuwuzhongxin {
            color #02a774
          }
        }
        .profile_nav_text {
          flex auto 
          padding 20px 10px
          bottom-border-1px($bc)
        }
      }
    }
  }
}
</style>