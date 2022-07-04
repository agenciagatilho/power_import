<template>
  <main id="equipamentos">
    <Banner :item="equipamentos.banner" :background="banner_background" />
    <v-container class="_sections_equipaments" v-if="items">
      <EquipamentCategory category="Deye" :items="items.docs" v-for="i in 4" :key="i" />
    </v-container>
    <v-container class="_sections_equipaments" v-else>
      <h2 class="_not_found"> Nenhum equipamento encontrado. </h2>
    </v-container>
  </main>
</template>

<script>
import equipamentos from '@/data/ptbr/equipamentos.json'
export default {
  data () {
    return {
      equipamentos,
      banner_background: {
        src: '/images/banner_equipamentos.png',
        color: '#5EAC55'
      },
      items: null
    }
  },
  head () {
    return {
      title: 'Equipamentos | Viener',
      meta: [
        { name: 'title', content: 'Equipamentos | Viener' },
        { name: 'description', content: 'Trabalhamos com grandes marcas do mercado para entregar a você produtos e kits com máxima qualidade para o seu projeto de geração de energia renovável.' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://viener.com.br/' },
        { property: 'og:title', content: 'Equipamentos | Viener' },
        { property: 'og:description', content: 'Trabalhamos com grandes marcas do mercado para entregar a você produtos e kits com máxima qualidade para o seu projeto de geração de energia renovável.' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://viener.com.br/' },
        { property: 'twitter:title', content: 'Equipamentos | Viener' },
        { property: 'twitter:description', content: 'Trabalhamos com grandes marcas do mercado para entregar a você produtos e kits com máxima qualidade para o seu projeto de geração de energia renovável.' }
      ]
    }
  },
  mounted () {
    (async () => {
      const category = this.$route.params.type
      this.items = await this.$firebase.list(category)
    })()
  }
}
</script>

<style lang="scss">
  #equipamentos{
    @apply flex flex-col gap-75px;

    ._sections_equipaments{
      .container{
        @apply flex flex-col gap-75px;
      }
    }

    ._not_found{
      @apply text-center;
    }
  }

@media screen and (max-width: 768px) {
  #equipamentos{
    @apply gap-50px;

    ._sections_equipaments{
      .container{
        @apply flex flex-col gap-50px;
      }
    }
  }
}
</style>
