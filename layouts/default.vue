<template>
  <div id="body" :class="{'menu_active': menu}">
    <Header @MobileMenu="state=>menu=state" />
    <MobileMenu v-show="$device.isMobile" :class="{'show': menu}" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import footer from '@/data/ptbr/footer.json'
import social from '@/data/ptbr/social_medias.json'
export default {
  data () {
    return {
      footer,
      social,
      menu: false
    }
  }
}
</script>

<style lang="scss">
  #body{
    @apply flex flex-col gap-75px;
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
