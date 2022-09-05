<template>
  <main id="contato">
    <Banner :item="contato.banner" :background="banner_background" />
    <GridTwoImageWithForm id="contato" image="/images/sungrow_4.webp" alt="varios paineis solares" :cta="contato.form.cta" />
    <MapLocale :title="contato.map.title" :address="media.address" />
  </main>
</template>

<script>
import contato from '@/data/ptbr/contato.json'
import media from '@/data/ptbr/social_medias.json'

export default {
  data () {
    return {
      contato,
      media,
      banner_background: {
        src: '/images/banner_contato.webp',
        color: '#ED7220'
      }
    }
  },
  head () {
    return {
      title: 'contato | Viener',
      meta: [
        { name: 'title', content: 'contato | Viener' },
        { name: 'description', content: 'Fale com a Viener e tire todas as suas dúvidas sobre nossos serviços e produtos para a geração de energias renováveis.' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://viener.com.br/' },
        { property: 'og:title', content: 'contato | Viener' },
        { property: 'og:description', content: 'Fale com a Viener e tire todas as suas dúvidas sobre nossos serviços e produtos para a geração de energias renováveis.' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://viener.com.br/' },
        { property: 'twitter:title', content: 'contato | Viener' },
        { property: 'twitter:description', content: 'Fale com a Viener e tire todas as suas dúvidas sobre nossos serviços e produtos para a geração de energias renováveis.' }
      ]
    }
  }
}
</script>

<style lang="scss">
  #contato{
    @apply flex flex-col gap-75px;

    ._banner {
      h1{
        @apply max-w-280px;
      }
    }
  }
@media screen and (max-width: 768px) {
  #contato{
    @apply gap-50px;

    ._banner {
      h1{
        @apply mx-auto;
      }
    }
  }
}
</style>
