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
    <EquipamentModal />
  </main>
</template>

<script>
import equipamentos from '@/data/ptbr/equipamentos.json'
export default {
  data () {
    return {
      equipamentos,
      banner_background: {
        src: 'images/banner_equipamentos.webp',
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
      let itemsSplited = {}
      const newItems = []
      const category = this.$route.params.type
      const order = await this.$firebase.get('order', category)

      const items = await this.$firebase.list(category)

      for (const key in items.docs) {
        if (!items.docs[key]?.inative) {
          const element = items.docs[key]
          const slug = element.slug
          const title = element.category[0].toUpperCase() + element.category.substring(1).toLowerCase()

          if (!itemsSplited[element.category]) {
            itemsSplited[element.category] = { title, docs: {} }
          }
          itemsSplited[element.category].docs[slug] = element
        }
      }

      if (order !== 'documento não existe') {
        itemsSplited = Object.values(itemsSplited)
        itemsSplited = itemsSplited.sort((a, b) => {
          if (a.title > b.title) {
            return 1
          }
          if (a.title < b.title) {
            return -1
          }
          return 0
        })

        itemsSplited.forEach((item) => {
          const key = item.title.toLowerCase()

          if (order[key]) {
            newItems.push(item)
          }
        })

        newItems.sort((a, b) => {
          const keyA = a.title.toLowerCase()
          const keyB = b.title.toLowerCase()

          if (order[keyA] < order[keyB]) {
            return -1
          }
          return 1
        })

        itemsSplited.forEach((item) => {
          if (!newItems.includes(item)) {
            newItems.push(item)
          }
        })
      } else {
        itemsSplited.forEach((item) => {
          if (!newItems.includes(item)) {
            newItems.push(item)
          }
        })
      }

      this.items = newItems
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
