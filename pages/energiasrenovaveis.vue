<template>
  <main id="energiasrenovaveis">
    <Banner :item="energiasrenovaveis.banner" :background="banner_background" />
    <GridTwoImageWithTextAndCta :item="energiasrenovaveis.renewableEnergy" image="images/zac-durant.png" />
    <v-container class="_renewableEnergyItems">
      <component
        :is="$device.isMobile? 'VueSlickCarousel': 'div'"
        v-bind="settingsMobile"
        ref="carousel"
      >
        <div
          v-for="item in energiasrenovaveis.renewableEnergy.items"
          :key="item.title"
          class="_item"
        >
          <v-image :src="`icons/${item.image}.svg`" height="121px" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </component>
      <span class="next_prev">
        <button class="_prev" @click="showPrev">
          <v-image src="prev.svg" height="17px" width="16px" />
        </button>
        <button class="_next" @click="showNext">
          <v-image src="next.svg" height="17px" width="16px" />
        </button>
      </span>
    </v-container>
    <GridTwoImageWithTextAndCta class="our_soluctions" :item="energiasrenovaveis.ourSolutions" image="images/sungrow_1.png" />
    <GridTwoImageWithTextAndCta :item="energiasrenovaveis.equipment" image="images/sun_painel.png" />
    <FullscreenLinearText :item="energiasrenovaveis.callToAction" color="#5EA756" />
  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import energiasrenovaveis from '@/data/ptbr/energiasrenovaveis.json'

export default {
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      energiasrenovaveis,
      banner_background: {
        src: '/images/banner_energiasrenovaveis.png',
        color: '#2E4739'
      },
      settingsMobile: {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500
      }
    }
  },
  head () {
    return {
      title: 'Energias renováveis | Viener',
      meta: [
        { name: 'title', content: 'Energias renováveis | Viener' },
        { name: 'description', content: 'Saiba mais sobre como transformar sua energia elétrica reduzindo custos e contribuindo para a construção de um mundo mais sustentável.' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://viener.com.br/' },
        { property: 'og:title', content: 'Energias renováveis | Viener' },
        { property: 'og:description', content: 'Saiba mais sobre como transformar sua energia elétrica reduzindo custos e contribuindo para a construção de um mundo mais sustentável.' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://viener.com.br/' },
        { property: 'twitter:title', content: 'Energias renováveis | Viener' },
        { property: 'twitter:description', content: 'Saiba mais sobre como transformar sua energia elétrica reduzindo custos e contribuindo para a construção de um mundo mais sustentável.' }
      ]
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
  #energiasrenovaveis{
    @apply flex flex-col gap-75px;

    ._renewableEnergyItems{
      .container{
        >div{
          @apply flex justify-between;

          ._item{
            @apply w-355px h-402px rounded-3px pt-30px px-40px
                  border-3px rounded-19px border-$secondary
                  flex flex-col items-center text-center gap-30px;
          }
        }
      }
    }

    ._grid_two_image_with_text_and_cta:not(.our_soluctions){
      p {
        @apply max-w-436px;
      }
    }
    ._fullscreen_linear_text{
      @apply -mb-75px;
    }
  }

@media screen and (max-width: 768px) {
  #energiasrenovaveis{
    @apply gap-50px text-center;

    ._renewableEnergyItems{
      .container{
        >div{
          @apply flex-col justify-center gap-30px;

          ._item{
            @apply w-full h-380px p-30px;

            >*:not(svg){
              @apply mt-15px;
            }
          }
        }

        .slick-slide{
          @apply px-10px;
        }
      }

      .next_prev{
        @apply flex justify-center gap-30px mt-30px;
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

    ._grid_two_image_with_text_and_cta:not(.our_soluctions){
      p {
        @apply max-w-436px;
      }
    }
    ._fullscreen_linear_text{
      @apply -mb-75px;
    }
  }
}
</style>
