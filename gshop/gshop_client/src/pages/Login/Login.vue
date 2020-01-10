<template>
  <div class="login">
    <div class="login_wrap">
        <h1 class="login_header">硅谷外卖</h1>
        <div class="login_content">
            <p class="login_type">
                <span class="login_type_content login_type_left">短信登录</span>
                <span class="login_type_content on">密码登录</span>
            </p>
            <div class="login_content_form">
                <section class="login_content_input">
                    <input type="number" placeholder="手机号">
                    <span>短信验证码</span>
                </section>
                <section class="login_content_input">
                    <input type="number" placeholder="验证码">
                </section>
                <section>
                    温馨提示：未注册硅谷外卖账号的手机号，登录时自动注册，且代表已同意<span href="java">《用户服务协议》</span>
                </section>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.login 
  width 100%
  height 100%
  overflow hidden
  .login_wrap
    padding 50px 35px 10px
    .login_header
      text-align center
      font-size 40px
      color #02a774
      font-weight bolder
    .login_content
      padding 30px 0
      .login_type
        text-align center
        padding 10px 0
        font-size 14px
        color #333333
        .login_type_left
          margin-right 30px
        .login_type_content
          font-weight 400
          padding-bottom 5px
        .on 
          color #02a774
          border-bottom 2px solid
    .login_content_form
      padding 10px 0
      .login_content_input
        padding 17px 10px
        margin-bottom 15px
        border 1px solid #e4e4e4
        border-radius 5px
        font-size 14px
</style>