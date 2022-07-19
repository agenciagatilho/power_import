<template>
  <main id="equipamentos">
    <Banner :item="equipamentos.banner" :background="banner_background" />
    <v-container v-if="items" class="_sections_equipaments">
      <EquipamentCategory v-for="item in items" :key="item.title" :category="item.title" :items="item.docs" />
    </v-container>
    <v-container v-else class="_sections_equipaments">
      <h2 class="_not_found">
        Nenhum equipamento encontrado.
      </h2>
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
      const itemsSplited = {}
      const category = this.$route.params.type
      const items = await this.$firebase.list(category)

      for (const key in items.docs) {
        if (!items.docs[key]?.inative) {
          const element = items.docs[key]
          const slug = element.slug
          const title = element.category[0].toUpperCase() + element.category.substring(1)

          if (!itemsSplited[element.category]) {
            itemsSplited[element.category] = { title, docs: {} }
          }
          itemsSplited[element.category].docs[slug] = element
        }
      }
      this.items = itemsSplited
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
