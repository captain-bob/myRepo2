<template>
   <div class="star">
       <span class="star-item" v-for="(val,index) in starArry" :key="index" :class="val"></span>
   </div>
</template>

<script>
//类名常量
const CLASS_ON="on"
const CLASS_OFF="off"
const CLASS_HALF="half"

export default {
    
    props:{
        score:Number,
        size:Number
    },

    data() {
        return {
            // starArry:["on","on","on","on","off"]
           
        }
    },

    computed: {
        starArry() {
          const {score}=this
          const arry=[]
          const integerScore=Math.floor(score)
          for(let i=0;i<integerScore;i++) {
            arry.push(CLASS_ON)
          }
          if(score*10-integerScore*10>5) {
            arry.push(CLASS_HALF)
          }
          while(arry.length<5) {
            arry.push(CLASS_OFF)
          }

          return arry
        }
    },
    
}
</script>


<style lang="stylus" rel="stylesheet/stylus">

@import "../../assets/stylus/mixins.stylus"

.star
  float left 
  .star-item
    display inline-block
    width 10px
    height 10px
    background-position center
    background-size cover
    margin-right 3px
    &:last-child
      margin-right 0
    &.on
      bg-image('./image/star24_on')
    &.off
      bg-image('./image/star24_off')
    &.half
      bg-image('./image/star24_half')
    
</style>