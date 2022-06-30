<template>
  <div class="_mobile_menu">
    <nuxt-link to="/">
      <v-image src="logo-header.svg" width="208px" height="35px" />
    </nuxt-link>
    <menu>
      <div v-for="(item, index) in menu" :key="'header_'+index" class="_menu_item" @click="closeMenu">
        <nuxt-link v-if="item.url && !item.url.includes('http')" :to="item.url" :class="{'home': isHome(index)}">
          {{ item.text }}
        </nuxt-link>
        <a v-else-if="item.url && item.url.includes('http')" :href="item.url" target="_blank" rel="noopener noreferrer">
          {{ item.text }}
        </a>
        <p v-else @click="openMenu" class="show">
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
import { useMenuStore } from '@/store/menuState'
export default {
  data () {
    return {
      menu: [
        sitemap.home,
        // sitemap.quemSomos,
        // sitemap.energiasRenovaveis,
        // sitemap.equipamentos,
        // sitemap.simulador,
        // sitemap.blog,
        // sitemap.integrador,
        sitemap.plataforma,
        sitemap.faleComIntegrador
      ],
      state: useMenuStore()
    }
  },
  methods: {
    isHome (page) {
      return this.$route.name !== 'index' && page === 0
    },
    openMenu (e) {
      const submenu = e.target.offsetParent
      submenu.classList.toggle('show')
    },
    closeMenu (e) {
      if (e.target.localName === 'a') {
        this.state.show = false
      }
    }
  }
}
</script>

<style lang="scss">
  ._mobile_menu{
    @apply fixed w-full h-full top-0 left-0
           bg-white z-10 p-20px
           transform -translate-x-3/2 pointer-events-none;
    transition: all 0.1s ease-in-out;

    &.show{
      @apply translate-x-0 pointer-events-auto;
    }

    menu{
      @apply p-0 flex flex-col z-10 gap-25px max-w-88vw mx-auto text-20px;

      ._menu_item{
        @apply flex flex-col relative w-max;

        a,p {
          @apply font-normal cursor-pointer
                  flex items-center;

          &.nuxt-link-active:not(.home){
            font-weight: 700;
          }
        }

        p::after{
          content: '▼';
          @apply text-10px ml-5px mt-1px flex transform scale-y-60 rotate-0 origin-center;
          transition: all 0.15s ease-in-out;
        }

        ._submenu{
          @apply flex flex-col pl-5px mt-10px gap-10px
                  absolute left-0 top-0
                  transform scale-y-0 origin-top opacity-0 pointer-events-none;
          transition: transform 0.15s ease-in-out;
          a,p {
            color: var(--text);
          }
        }

        &.show {
          p::after{
            @apply rotate-180 mt-0px;
          }
          ._submenu{
            @apply relative scale-y-100 opacity-100 pointer-events-auto -mb-0px;
          }
        }

        &:nth-last-child(1){
          @apply border border-$primary  bg-$primary px-16px py-8px rounded-7px;

          *{
            @apply text-$text-light;
          }
        }

        &:nth-last-child(2){
          @apply border border-$text px-16px py-8px rounded-7px;
        }
      }
    }
  }
</style>
