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

<style lang="stylus" rel="stylesheet/stylus">
   .header
     background-color #02a774
     position fixed
     z-index 100
     left 0
     top 0
     width 100%
     height 45px
     
</style>