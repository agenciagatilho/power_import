<template>
  <main id="energiasrenovaveis">
    <Banner :item="energiasrenovaveis.banner" :background="banner_background" />
    <GridTwoImageWithTextAndCta :item="energiasrenovaveis.renewableEnergy" image="images/zac-durant.png" />
    <v-container class="_renewableEnergyItems">
      <div
        v-for="item in energiasrenovaveis.renewableEnergy.items"
        :key="item.title"
        class="_item"
      >
        <v-image :src="`icons/${item.image}.svg`" height="121px" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </v-container>
    <GridTwoImageWithTextAndCta class="our_soluctions" :item="energiasrenovaveis.ourSolutions" image="images/sungrow_1.png" />
    <GridTwoImageWithTextAndCta :item="energiasrenovaveis.equipment" image="images/sun_painel.png" />
    <FullscreenLinearText :item="energiasrenovaveis.callToAction" color="#5EA756" />
  </main>
</template>

<script>
import energiasrenovaveis from '@/data/ptbr/energiasrenovaveis.json'
export default {
  data () {
    return {
      energiasrenovaveis,
      banner_background: {
        src: 'images/banner_energiasrenovaveis.png',
        color: '#2E4739'
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
  }
}
</script>

<style lang="scss">
  #energiasrenovaveis{
    @apply flex flex-col gap-75px;

    ._renewableEnergyItems{
      .container{
        @apply flex justify-between;

        ._item{
          @apply w-355px h-402px rounded-3px pt-30px px-40px
                 border-3px rounded-19px border-$secondary
                 flex flex-col items-center text-center gap-30px;
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
</style>
