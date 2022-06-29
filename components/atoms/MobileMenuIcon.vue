<template>
  <div class="_mobile_menu_icon" :class="{'active': state}" @click="click">
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: false
    }
  },
  methods: {
    click () {
      this.state = !this.state
      this.$emit('click', this.state)
    }
  }
}
</script>

<style lang="scss">
  ._mobile_menu_icon{
    @apply flex flex-col gap-5px
           w-30px;
    span{
      @apply w-full h-2px rounded-full
             bg-$text transform;
      transition: all 0.2s ease-in-out;
    }

    &.active{
      span{
        &:nth-child(1){
          @apply rotate-z-45 translate-y-7px;
        }
        &:nth-child(2){
          @apply -rotate-y-90;
        }
        &:nth-child(3){
          @apply -rotate-z-225 -translate-y-7px;
        }
      }
    }
  }
</style>
