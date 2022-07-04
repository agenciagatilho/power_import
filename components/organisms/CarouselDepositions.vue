<template>
  <section class="carousel_depositions">
    <h2>{{ title }}</h2>
    <VueSlickCarousel v-bind="$device.isMobile ? settingsMobile: settingsDesktop" ref="carousel" class="_carousel">
      <div
        v-for="(item, index) in items"
        :key="item.name + '_' + index"
        class="_item_carousel"
      >
        <DepositionsItem :item="item" @next="showNext" @prev="showPrev" />
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    title: {
      type: String || null,
      default: null
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      settingsDesktop: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        variableWidth: true
      },
      settingsMobile: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        speed: 500
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
  .carousel_depositions{
    @apply overflow-hidden flex flex-col gap-50px;

    h2{
      @apply text-center;
    }

    ._carousel {
      @apply h-400px;

      ._item_carousel{
        @apply px-30px opacity-50 relative;

        &::after{
          content: '';
          @apply absolute w-full h-full top-0 left-0 z-5;
        }
      }

      .slick-current{
        ._item_carousel{
          @apply opacity-100;

          &::after{
            @apply hidden;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .carousel_depositions{
      @apply gap-30px;

      h2{
        @apply  max-w-88vw mx-auto;
      }

      ._carousel {
        @apply h-full w-full;

        ._item_carousel{
          @apply px-15px opacity-50 relative;

          &::after{
            content: '';
            @apply absolute w-full h-full top-0 left-0 z-5;
          }
        }

        .slick-current{
          ._item_carousel{
            @apply opacity-100;

            &::after{
              @apply hidden;
            }
          }
        }
      }
    }
  }
</style>
