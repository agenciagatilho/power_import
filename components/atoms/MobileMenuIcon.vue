<template>
  <div class="_mobile_menu_icon" :class="{'active': show}" @click="click">
    <span />
    <span />
    <span />
  </div>
</template>

<script>
import { useMenuStore } from '@/store/menuState'
export default {
  data () {
    return {
      state: useMenuStore()
    }
  },
  computed: {
    show () {
      return this.state.show
    }
  },
  methods: {
    click () {
      this.state.show = !this.state.show
    }
  }
}
</script>

<style lang="scss">
  ._mobile_menu_icon{
    @apply hidden;
  }

@media screen and (max-width: 768px) {
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
}
</style>
