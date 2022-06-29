<template>
  <div class="_mobile_menu">
    <menu>
      <div v-for="(item, index) in menu" :key="'header_'+index" class="_menu_item">
        <nuxt-link v-if="item.url && !item.url.includes('http')" :to="item.url" :class="{'home': isHome(index)}">
          {{ item.text }}
        </nuxt-link>
        <a v-else-if="item.url && item.url.includes('http')" :href="item.url" target="_blank" rel="noopener noreferrer">
          {{ item.text }}
        </a>
        <p v-else @click="openMenu">
          {{ item.text }}
        </p>
        <div v-if="item.submenu" class="_submenu">
          <nuxt-link v-for="(_item, index) in item.submenu" :key="'header_'+index" :to="_item.url">
            {{ _item.text }}
          </nuxt-link>
        </div>
      </div>
    </menu>
  </div>
</template>

<script>
import sitemap from '@/data/ptbr/sitemap.json'
export default {
  data () {
    return {
      menu: [
        sitemap.home,
        sitemap.quemSomos,
        sitemap.energiasRenovaveis,
        sitemap.equipamentos,
        sitemap.simulador,
        sitemap.blog,
        sitemap.integrador,
        sitemap.plataforma,
        sitemap.faleComIntegrador
      ]
    }
  },
  methods: {
    isHome (page) {
      return this.$route.name !== 'index' && page === 0
    }
  }
}
</script>

<style lang="scss">
  ._mobile_menu{
    @apply fixed w-full h-full top-0 left-0
           bg-white z-10;
  }
</style>
