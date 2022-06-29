<template>
  <main id="integrador">
    <Banner :item="integrador.banner" :background="banner_background" />
    <GridTwoImageWithForm id="integrador" image="images/sungrow_4.png" :cta="integrador.form.cta" />
    <CarouselDepositions :title="integrador.depositions.title" :items="depositions" />
  </main>
</template>

<script>
import integrador from '@/data/ptbr/integrador.json'
import depositions from '@/data/ptbr/depositions/integrador.json'
export default {
  data () {
    return {
      integrador,
      depositions,
      banner_background: {
        src: 'images/banner_integrador.png',
        color: '#5EA756'
      }
    }
  },
  head () {
    return {
      title: 'Seja um integrador | Viener',
      meta: [
        { name: 'title', content: 'Seja um integrador | Viener' },
        { name: 'description', content: 'Valorizamos nossas parcerias criando laços a partir de um mesmo propósito e sendo uma base sólida que ajuda a impulsionar negócios. Faça parte da nossa equipe de integradores.' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://viener.com.br/' },
        { property: 'og:title', content: 'Seja um integrador | Viener' },
        { property: 'og:description', content: 'Valorizamos nossas parcerias criando laços a partir de um mesmo propósito e sendo uma base sólida que ajuda a impulsionar negócios. Faça parte da nossa equipe de integradores.' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://viener.com.br/' },
        { property: 'twitter:title', content: 'Seja um integrador | Viener' },
        { property: 'twitter:description', content: 'Valorizamos nossas parcerias criando laços a partir de um mesmo propósito e sendo uma base sólida que ajuda a impulsionar negócios. Faça parte da nossa equipe de integradores.' }
      ]
    }
  }
}
</script>

<style lang="scss">
  #integrador{
    @apply flex flex-col gap-75px;
  }
</style>
