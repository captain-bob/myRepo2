<template>
   <header class="header">
       <slot name="search"></slot>
       <a class="header_title">
           <span class="header_title_text ellipsis">{{title}}</span>
       </a>
       <slot name="login"></slot>
   </header>
</template>

<script>
  export default {
      props:{
          title:String
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   .header
     background-color #02a774
     position fixed
     z-index 100
     left 0
     top 0
     width 100%
     height 45px
     .header_search
       color #ffffff
       position absolute 
       top 50%
       left 15px
       transform translateY(-50%)
       .iconsearch 
         font-size 23px
     .header_title
       color #ffffff
       position absolute 
       top 50%
       left 50%
       transform translate(-50%,-50%)
       width 50%
       text-align center
       font-size 20px
       .header_title_text
         display block
     .header_login
       position absolute 
       top 50%
       right 15px
       transform translateY(-50%)
       color #ffffff
       font-size 14px
</style>