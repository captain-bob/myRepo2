<template>
  <div class="login">
    <i class="iconfont iconhoutui" @click="$router.go(-1)"></i>
    <div class="login_wrap">
        <h1 class="login_header">OK</h1>
        <div class="login_content">
            <p class="login_type">
                <span class="login_type_content login_type_left" :class="{on:showLoginType}" @click="showLoginType=true">短信登录</span>
                <span class="login_type_content" :class="{on:!showLoginType}" @click="showLoginType=false">密码登录</span>
            </p>
            <div class="login_content_form">
                <div class="login-note" v-if="showLoginType">
                  <section class="login_content_input ">
                    <input type="number" placeholder="手机号" v-model="phoneNum">
                    <span class="input_right" :class="{get_verification:rightPhone}" @click="getVerification">{{time?'已发送('+time+'s)':'获取验证码'}}</span>
                  </section>
                  <section class="login_content_input">
                      <input type="number" placeholder="验证码"  v-model="phone_verification_code">
                  </section>
                  <section class="hint">
                      温馨提示：未注册硅谷外卖账号的手机号，登录时自动注册，且代表已同意<span href="java">《用户服务协议》</span>
                  </section>
                </div>
                <div class="login-note" v-else>
                  <section class="login_content_input">
                    <input type="text" placeholder="手机/邮箱/用户名" v-model="password_login_user">
                  </section>
                  <section class="login_content_input">
                      <input type="text" placeholder="密码" v-show="switch_buttton_control" v-model="passWord">
                      <input type="password" placeholder="密码" v-show="!switch_buttton_control" v-model="passWord">
                      <div class="switch_button input_right" :class="switch_buttton_control?'on':'off'" @click="switch_buttton_control=!switch_buttton_control">
                        <div class="button_circle"></div>
                        <span class="button_text">{{switch_buttton_control?'abc':'...'}}</span>
                      </div>
                  </section>
                  <section class="login_content_input">
                    <input type="text" placeholder="验证码" v-model="password_login_code">
                    <img class="input_right graph_code" src="http://localhost:4000/captcha" ref="captcha" @click="getgraphcode"/>
                  </section>
                </div>
                <button class="login_submit" @click="login">登录</button>
            </div>
            <p class="about_us">关于我们</p>
        </div>
    </div>
  </div>
</template>

<script>

  import {reqpasswordlogin,reqsmscode,reqsmslogin} from '../../api'
  export default {
    data() {
      return {
        switch_buttton_control:true,//控制密码显示
        showLoginType:true,//控制密码登录和短信验证码登录,true为短信登录，false为密码登录
        phoneNum:'',//用户输入手机号
        phone_verification_code:'',//手机验证码
        time:0,//短信验证码发送时间
        password_login_user:'',//密码登录账号
        passWord:'',//密码输入框
        password_login_code:'',//密码登录的一次性图片验证码
      }
    },
    computed: {
      rightPhone() {
        if(/^1\d{10}$/.test(this.phoneNum)) {
          return true
        }
        return false
      }
    },

    methods: {


      //获取短信验证码
      async getVerification() {
        var that = this
        if(that.rightPhone) {
          if(!that.time) {
          
            //发送ajax请求获取短信验证码
            const result = await reqsmscode(that.phoneNum)
            if(result.code===0) {
              that.time = 30
              var timer = setInterval(function() {
              that.time--
              if(that.time===0) {
                clearInterval(timer)
              }
              },1000)
            }else if(result.code===1) {
                const msg=result.msg
                console.log(msg)
                clearInterval(timer)
            }
          }
        }
        
      },

      //获取一次性图片验证码
      getgraphcode() {
        this.$refs.captcha.src="http://localhost:4000/captcha?time="+Date.now()
      },

      //登录
      async login() {
        let result
        if(this.showLoginType===true) {
          
          //短信登录
          const {rightPhone,phoneNum,phone_verification_code} = this
          if(!rightPhone) {
            console.log('手机号不正确') //这里需要提示框
            return 
          }else if(!/^\d{6}$/.test(phone_verification_code)) {
            console.log('验证码需要六位')
            return
          }
          result = await reqsmslogin(phoneNum,phone_verification_code)
          
        }else if(this.showLoginType===false) {
          //密码登录
          const {password_login_user,passWord,password_login_code} = this
          if(!password_login_user) {
            console.log('用户名不能为空') //这里需要提示框
            return
          }else if (!passWord) {
            console.log('密码不能为空') //这里需要提示框
            return 
          }else if (!/^[0-9a-zA-Z]{4}$/.test(password_login_code)) {
            console.log('输入四位验证码') //这里需要提示框
            return 
          }

          result = await reqpasswordlogin({'name':password_login_user,'pwd':passWord,'captcha':password_login_code})
          
        }
        //请求ajax登录后的结果处理
        if(result.code===0) {
            //存储用户信息到state
            this.$store.dispatch('recorduserinfo',result.data)
            //页面跳转到个人中心页
            this.$router.replace('/profile')
          }else if(result.code===1) {
            console.log(result.msg) //这里需要提示框
          }
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.login 
  width 100%
  height 100%
  overflow hidden
  .iconhoutui
    position fixed
    top 4px
    font-size 25px
    left 2px
    color #999
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
        .login_submit
          width 100%
          height 42px
          line-height 42px
          color #ffffff
          background-color #4cd96f
          padding 0
          margin 15px 0 0 0
          border none 
          border-radius 5px
        .login_content_input
          margin-bottom 15px
          font-size 14px
          position relative
          input 
            outline none
            width 100%
            height 48px
            padding-left 10px
            border 1px solid #e4e4e4
            border-radius 5px
            box-sizing border-box
            &:focus
              border 1px solid #02a774
          .input_right
            color #ccc
            position absolute 
            top 50%
            transform translateY(-50%)
            right 10px
            &.get_verification 
              color #333
            &.graph_code
              height 45px
            &.switch_button
              width 45px
              border 1px solid #e4e4e4
              height 16px
              border-radius 8px
              line-height 16px
              transition background-color .3s
              .button_circle
                width 16px
                height 16px
                border 1px solid #e4e4e4
                border-radius 50%
                position absolute
                transition transform .3s
              .button_text
                height 16px
                line-height 12px
                position absolute
                font-size 12px

            &.off 
              .button_circle
                top -1px
                left -1px
              .button_text
                right 15px
            &.on
              background-color #4cd96f
              .button_circle
                transform translateX(30px)
                background-color #fff
              .button_text
                left 5px
                color #fff
        .hint
          font-size 14px
          line-height 20px
          color #999
          span
            color #02a774 
      .about_us
        text-align center
        font-size 12px
        margin-top 10px
        color #999       



</style>