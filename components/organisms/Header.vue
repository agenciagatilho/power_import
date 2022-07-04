<template>
  <v-container id="header" element="header">
    <nuxt-link to="/">
      <v-image src="logo-header.svg" width="142px" height="24px" />
    </nuxt-link>
    <MobileMenuIcon />
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
        <div v-if="item.submenu" class="_submenu" @click="openMenuNoToggle">
          <nuxt-link v-for="(_item, index) in item.submenu" :key="'header_'+index" :to="_item.url">
            {{ _item.text }}
          </nuxt-link>
        </div>
      </div>
    </menu>
  </v-container>
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
        sitemap.contato,
        sitemap.plataforma,
        sitemap.faleComIntegrador
      ]
    }
  },
  methods: {
    openMenu (e) {
      const submenu = e.target.offsetParent
      submenu.classList.toggle('show')
    },
    openMenuNoToggle () {
      const submenu = document.querySelectorAll('._menu_item.show')
      submenu.forEach((el) => {
        el.classList.remove('show')
      })
    },
    isHome (page) {
      return this.$route.name !== 'index' && page === 0
    }
  }
}
</script>

<style lang="scss">
  #header {
    background-color: #F4F4F4;
    >*{
      @apply flex justify-between items-center -mb-75px;
      >menu{
        @apply flex p-0 gap-20px items-center;

        ._menu_item{
          @apply flex flex-col relative;

          a,p {
            @apply font-normal text-12px text-center text-$text
                   cursor-pointer
                   flex items-center;
            line-height: 22px;

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
            @apply flex flex-col py-10px px-15px rounded-10px z-9999
                   absolute bg-$primary -left-25px -right-25px
                   transform scale-y-0 origin-top opacity-0 pointer-events-none;
            transition: all 0.15s ease-in-out;
            top: calc(100% + 10px);
            a,p {
              color: var(--text-light);

              &:nth-child(2){
                 font-size: 11px;
              }
            }
          }

          &.show {
            p::after{
              @apply rotate-180 mt-0px;
            }
            ._submenu{
              @apply scale-y-100 opacity-100 pointer-events-auto;
            }
          }

          &:nth-last-child(1){
            @apply border border-$primary  bg-$primary px-8px py-3px rounded-7px;

            *{
              @apply text-$text-light;
            }
          }

          &:nth-last-child(2){
            @apply border border-$text px-8px py-3px rounded-7px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #header {
      @apply h-75px -mb-50px;
      >*{
        @apply h-full -mb-0px;
        >menu{
          @apply hidden;
        }
      }
    }
  }
</style>
