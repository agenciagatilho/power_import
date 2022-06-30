<template>
  <div class="_base_toast" :class="{'show': show}">
    <p>{{ message }}</p>
    <div class="_menu_close" @click="close">
      <span />
      <span />
    </div>
  </div>
</template>

<script>
import { useToastStore } from '@/store/toastState'
export default {
  data () {
    return {
      state: useToastStore()
    }
  },
  computed: {
    message () {
      return this.state.content
    },
    show () {
      return this.state.show
    }
  },
  methods: {
    close () {
      this.state.show = false
    }
  }
}
</script>

<style lang="scss">
._base_toast{
  @apply fixed -top-2/1 left-1/2 pl-40px py-20px pr-60px
         transform -translate-x-1/2 rounded-10px z-999
         flex gap-30px items-center
         w-50vw max-w-400px;
  transition: all 0.2s ease-in-out;
  background-color: #e9e9e9;
  box-shadow: 0 0 0 3px #e1e1e1;

  ._menu_close{
    @apply flex flex-col gap-5px items-center justify-center
          w-18px h-20px absolute right-20px top-15px cursor-pointer;
    span{
      @apply w-full h-2px rounded-full
            bg-$text transform;

      &:nth-child(1){
        @apply rotate-z-45 translate-y-4px;
      }

      &:nth-child(2){
        @apply -rotate-z-45 -translate-y-4px;
      }
    }
  }

  &.show{
    @apply top-20px;
  }
}
</style>
