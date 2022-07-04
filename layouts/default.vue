<template>
  <div id="body" :class="{'menu_active': show}">
    <Header />
    <MobileMenu v-show="$device.isMobile" :class="{'show': show}" />
    <Nuxt />
    <Footer />
    <BaseToast />
  </div>
</template>

<script>
import footer from '@/data/ptbr/footer.json'
import social from '@/data/ptbr/social_medias.json'
import { useMenuStore } from '@/store/menuState'
export default {
  data () {
    return {
      footer,
      social,
      state: useMenuStore()
    }
  },
  computed: {
    show () {
      return this.state.show
    }
  }
}
</script>

<style lang="scss">
  #body{
    @apply flex flex-col gap-75px;

    main{
      @apply mt-66px;
    }
  }
  #toasts{
    @apply top-0 left-1/2;
  }

  @media screen and (max-width: 768px) {
    #body{
      @apply gap-50px relative;

      &.menu_active{
        ._mobile_menu_icon{
          @apply fixed z-999 right-6vw;
        }
      }
    }
  }
</style>
