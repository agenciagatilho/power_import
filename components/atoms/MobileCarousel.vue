<template>
  <div class="_mobile_carousel">
    <VueSlickCarousel v-bind="settingsMobile" ref="carousel">
      <slot />
    </VueSlickCarousel>
    <span class="next_prev">
      <button class="_prev" @click="showPrev">
        <v-image src="prev.svg" alt="voltar carousel" height="17px" width="16px" />
      </button>
      <button class="_next" @click="showNext">
        <v-image src="next.svg" alt="avançar carousel" height="17px" width="16px" />
      </button>
    </span>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      settingsMobile: {
        dots: false,
        arrows: false,
        focusOnSelect: false,
        infinite: true,
        slidesToShow: 1,
        speed: 500
        // variableWidth: true
      }
    }
  },
  methods: {
    showNext () {
      this.$refs.carousel.next()
    },
    showPrev () {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style lang="scss">
  ._mobile_carousel{
    .next_prev{
      @apply flex justify-center gap-30px;
      ._next, ._prev{
        @apply h-max p-0 w-36px h-36px rounded-full
              flex items-center justify-center bg-$secondary;

        &._prev svg{
          @apply -ml-1px;
        }
        &._next svg{
          @apply ml-1px;
        }
      }
    }
  }
</style>
