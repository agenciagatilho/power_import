<template>
  <main id="quem_somos">
    <Banner :item="quemsomos.banner" :background="banner_background" />
    <GridTwoImageWithTextAndCta :item="quemsomos.detailsAttention" image="images/young-architect-standing.webp" alt="arquiteto para na frente de paineis solares" />
    <FullscreenLinearText :item="quemsomos.careAndResponsibility" image="images/background-linear-quemsomos.webp" color="#2E4739CC" />
    <GridTwoImageWithTextAndCta inverted class="_transform_energy_with_viener" :item="quemsomos.transformEnergyWithViener" image="images/sungrow_2.webp" alt="painel solar" />
    <!-- <CarouselDepositions :title="quemsomos.depositions.title" :items="depositions" /> -->
  </main>
</template>

<script>
import quemsomos from '@/data/ptbr/quemsomos.json'
import depositions from '@/data/ptbr/depositions/clients.json'
export default {
  data () {
    return {
      quemsomos,
      depositions,
      banner_background: {
        src: 'images/banner_quemsomos.webp',
        color: '#ED7220'
      }
    }
  },
  head () {
    return {
      title: 'Conheça a Viener | Energias Renováveis',
      meta: [
        { name: 'title', content: 'Conheça a Viener | Energias Renováveis' },
        { name: 'description', content: 'Conheça a Viener e entenda como levamos segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos.' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://viener.com.br/' },
        { property: 'og:title', content: 'Conheça a Viener | Energias Renováveis' },
        { property: 'og:description', content: 'Conheça a Viener e entenda como levamos segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos.' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://viener.com.br/' },
        { property: 'twitter:title', content: 'Conheça a Viener | Energias Renováveis' },
        { property: 'twitter:description', content: 'Conheça a Viener e entenda como levamos segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos.' }
      ]
    }
  }
}
</script>

<style lang="scss">
#quem_somos {
  @apply flex flex-col gap-75px;

  ._renewable_energy{
    .container{
      @apply w-540px;

      .default_button{
        @apply bg-$primary px-60px;
      }
    }
  }

  ._transform_energy_with_viener{
    h2{
      @apply max-w-415px;
    }
  }
}

@media screen and (max-width: 768px) {
  #quem_somos {
    @apply text-center gap-50px;

    ._banner {
      >.container{
        p{
          @apply max-w-295px;
        }
      }
    }
  }
}
</style>
