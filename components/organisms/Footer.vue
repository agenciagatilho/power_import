<template>
  <v-container element="footer" id="footer">
    <span class="_top_footer">
      <div class="_left">
        <nuxt-link to="/">
          <v-image src="logo-footer.svg" width="377px" />
        </nuxt-link>
        <p>{{ footer.social_media }}</p>
        <span>
          <a :href="media.facebook" target="_blank" rel="noopener noreferrer">
            <v-image src="facebook.svg" height="30px" />
          </a>
          <a :href="media.linkedin" target="_blank" rel="noopener noreferrer">
            <v-image src="linkedin.svg" height="28px" />
          </a>
          <a :href="media.instagram" target="_blank" rel="noopener noreferrer">
            <v-image src="instagram.svg" height="28px" />
          </a>
        </span>
      </div>
      <menu class="_center">
        <div v-for="(item, index) in menu" :key="'footer_'+index" class="_menu_item">
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
            <nuxt-link v-for="(_item, index) in item.submenu" :key="'footer_'+index" :to="_item.url">
              {{ _item.text }}
            </nuxt-link>
          </div>
        </div>
      </menu>
      <div class="_right">
        <span class="address">
          <v-image src="address.svg" height="20px" />
          <a :href="media.addressMap" target="_blank" rel="noopener noreferrer">
            {{ footer.contact.address }}
          </a>
        </span>
        <span class="telphone">
          <v-image src="telphone.svg" height="15px" />
          <a :href="media.whatsapp" target="_blank" rel="noopener noreferrer">
            {{ footer.contact.telphone }}
          </a>
        </span>
        <span class="address">
          <v-image src="email.svg" height="11px" />
          <a :href="media.email" target="_blank" rel="noopener noreferrer">
            {{ footer.contact.email }}
          </a>
        </span>
      </div>
    </span>
    <hr>
    <span class="_bottom_footer">
      <!-- <a :href="media.privacy" target="_blank" rel="noopener noreferrer">
        {{ footer.privacy }}
      </a> -->
      <a :href="media.gatilho" target="_blank" rel="noopener noreferrer">
        {{ footer.gatilho }}
      </a>
    </span>
  </v-container>
</template>

<script>
import media from '@/data/ptbr/social_medias.json'
import footer from '@/data/ptbr/footer.json'
import sitemap from '@/data/ptbr/sitemap.json'
export default {
  data () {
    return {
      media,
      footer,
      menu: [
        sitemap.home,
        sitemap.blog,
        sitemap.quemSomos,
        sitemap.integrador,
        sitemap.contato,
        sitemap.energiasRenovaveis,
        sitemap.simulador,
        sitemap.equipamentos
      ]
    }
  },
  methods: {
    openMenu (e) {
      const submenu = e.target.offsetParent
      submenu.classList.toggle('show')
    },
    isHome (page) {
      return this.$route.name !== 'index' && page === 0
    }
  }
}
</script>

<style lang="scss">
  #footer{
    @apply bg-$secondary-dark text-$text-light py-50px text-14px;
    line-height: 22px;
    .container{
      ._top_footer{
        @apply flex justify-between items-start;

        >*{
          @apply w-max;
        }

        ._left{
          @apply flex flex-col gap-15px;
          svg{
            @apply mb-15px;
          }

          span{
            @apply flex gap-23px items-center;
          }
        }

        ._center{
          @apply grid grid-cols-2 gap-x-75px gap-y-20px p-0 my-15px;
          grid-template-rows: repeat(4, max-content);

          ._menu_item{
            @apply flex flex-col relative;

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
              @apply flex flex-col pl-5px mt-5px
                     absolute left-0 top-0
                     transform scale-y-0 origin-top opacity-0 pointer-events-none;
              transition: transform 0.15s ease-in-out;
              a,p {
                color: var(--text-light);
              }
            }

            &.show {
              p::after{
                @apply rotate-180 mt-0px;
              }
              ._submenu{
                @apply relative scale-y-100 opacity-100 pointer-events-auto -mb-60px;
              }
            }
          }
        }

        ._right{
          @apply flex flex-col gap-20px my-15px;

          span{
            @apply grid gap-15px items-center;
            grid-template-columns: 15px 1fr;
          }
        }
      }
      hr{
        @apply mt-50px mb-10px;
      }
      ._bottom_footer{
        @apply flex justify-center;
        font-family: 'Intelo';
      }
    }
  }

@media screen and (max-width: 768px) {
  #footer{
    .container{
      @apply text-center;
      ._top_footer{
        @apply flex-col items-center;

        >*{
          @apply w-200px;
        }

        ._left{
          @apply items-center gap-10px;
          svg{
            @apply mb-0px w-full;
          }
          a{
            @apply h-22px;
            svg{
              @apply h-full;
            }
          }
        }

        ._center{
          @apply grid-cols-1 my-50px gap-10px;
          ._menu_item{
            @apply items-center;
            &.show {
              ._submenu{
                @apply mb-0px;
              }
            }
          }
        }

        ._right {
          @apply gap-10px;
          span {
            svg{
              @apply hidden;
            }
            @apply items-center grid-cols-1;
          }
        }
      }
      hr{
        @apply mt-20px;
      }
      ._bottom_footer{
        @apply flex-col items-center gap-15px;
      }
    }
  }
}
</style>
