<template>
  <main id="home">
    <Banner :item="home.banner" :background="banner_background" />
    <v-container class="soluctionsForSolarProducts">
      <div class="_text">
        <h2>{{ home.soluctionsForSolarProducts.title }}</h2>
        <p>{{ home.soluctionsForSolarProducts.description }}</p>
      </div>
      <div v-if="!$device.isMobile" class="_buttons">
        <div
          v-for="(item, index) in home.soluctionsForSolarProducts.items"
          :key="index"
          class="_item"
          :class="{'active': currentSoluctionSelected === index}"
          @click="setCurrentSoluction(index)"
        >
          <div class="_icon" :style="`--icon: url(${require('assets/svgs/icons/'+index+'.svg')});`" />
          <p>{{ item.text }}</p>
        </div>
      </div>
      <VueSlickCarousel v-else v-bind="settingsMobile" ref="carousel" class="_buttons">
        <div
          v-for="(item, index) in home.soluctionsForSolarProducts.items"
          :key="index"
          class="_item"
          :class="{'active': currentSoluctionSelected === index}"
          @click="setCurrentSoluction(index)"
        >
          <div class="_icon" :style="`--icon: url(${require('assets/svgs/icons/'+index+'.svg')});`" />
          <p>{{ item.text }}</p>
        </div>
      </VueSlickCarousel>
      <span class="next_prev">
        <button class="_prev" @click="showPrev">
          <v-image src="prev.svg" height="17px" width="16px" />
        </button>
        <button class="_next" @click="showNext">
          <v-image src="next.svg" height="17px" width="16px" />
        </button>
      </span>
    </v-container>
    <GridTwoImageWithTextAndCta :item="home.thoughtsTomorrow" image="videos/video-home-sobre.mp4" alt="Video explicativo sobre a Viener" />
    <FullscreenLinearText :item="home.partnershipForSecurity" image="images/background-linear-home.webp" color="#ED7220CC" />
    <FullscreenLinearText class="_renewable_energy" :item="home.renewableEnergy" color="#ffffff" text="#2E4739" />
    <GridTwoImageWithTextAndCta class="_support_connection_points" :item="home.supportConnectionPoints" image="images/sungrow_3.webp" alt="paineis solares em sequência" />

    <v-container class="newsletter_section">
      <div class="_text">
        <h2>{{ home.newsletter.title }}</h2>
        <p>{{ home.newsletter.description }}</p>
      </div>
      <form id="newsletter" @submit="submit">
        <v-input id="name" placeholder="Nome" :maxlength="100" />
        <v-input id="email" type="email" placeholder="E-mail" :maxlength="255" />
        <span class="_bottom">
          <div class="_privacy">
            <p>{{ sitemap.privacy.text }}</p>
            <label>
              <input type="radio" name="accept_privacy" required>
              <div class="__box" />
              <a :href="sitemap.privacy.url" target="_blank">
                Aceito todo os termos e condições da Política de Privacidade.
              </a>
            </label>
            <label>
              <input type="radio" name="accept_privacy" required>
              <div class="__box" />
              <a :href="sitemap.privacy.url" target="_blank">
                Não aceito os termos e condições da Política de Privacidade.
              </a>
            </label>
            <label>
              <input type="checkbox" name="accept_receive_email">
              <div class="__box" />
              Tenho interesse em receber e-mails da Viener sobre as novidades, ofertas e demais materiais informativos sobre os produtos.
            </label>
          </div>
          <button type="submit" class="alt">
            {{ home.newsletter.cta }}
          </button>
        </span>
      </form>
    </v-container>
  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import home from '@/data/ptbr/home.json'
import sitemap from '@/data/ptbr/sitemap.json'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { useToastStore } from '@/store/toastState'

export default {
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      toast: useToastStore(),
      home,
      sitemap,
      banner_background: {
        src: 'images/banner_home.webp',
        color: '#5EAC55'
      },
      currentSoluctionSelected: 'agro',
      settingsMobile: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        variableWidth: true
      }
    }
  },
  head () {
    return {
      title: 'Viener | Distribuindo energia, gerando conexões.',
      meta: [
        { name: 'title', content: 'Viener | Distribuindo energia, gerando conexões.' },
        { name: 'description', content: 'Trabalhamos com energias renováveis, levando às pessoas uma fonte inesgotável de benefícios e ajudando a construir um futuro melhor e mais sustentável.' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://viener.com.br/' },
        { property: 'og:title', content: 'Viener | Distribuindo energia, gerando conexões.' },
        { property: 'og:description', content: 'Trabalhamos com energias renováveis, levando às pessoas uma fonte inesgotável de benefícios e ajudando a construir um futuro melhor e mais sustentável.' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://viener.com.br/' },
        { property: 'twitter:title', content: 'Viener | Distribuindo energia, gerando conexões.' },
        { property: 'twitter:description', content: 'Trabalhamos com energias renováveis, levando às pessoas uma fonte inesgotável de benefícios e ajudando a construir um futuro melhor e mais sustentável.' }
      ]
    }
  },
  methods: {
    setCurrentSoluction (index) {
      this.currentSoluctionSelected = index
    },
    showNext () {
      this.$refs.carousel.next()
    },
    showPrev () {
      this.$refs.carousel.prev()
    },
    submit (e) {
      e.preventDefault()
      const form = e.target

      const data = {
        name: form.name.value,
        email: form.email.value,
        subject: 'Newsletter',
        msg: `
          <h2>Newsletter vindo de:<br>
            <a href="${window.location.href}"> ${window.location.href}</a>
          </h2>
          <br><br>
          <strong>Nome: </strong> ${form.name.value}<br>
          <strong>Email: </strong> ${form.email.value}<br>
          <br>
          <strong>Uso de dados:</strong> ${form.accept_privacy[0].checked ? 'permitido' : 'negado'}<br>
          <strong>Envio de emails:</strong> ${form.accept_receive_email.checked ? 'permitido' : 'negado'}<br>
        `
      }

      this.$api.send(data).then((res) => {
        this.toast.showToast('Formulário enviado com sucesso')
        form.reset()
      })
    }
  }
}
</script>

<style lang="scss">
#home {
  @apply flex flex-col gap-75px;

  .soluctionsForSolarProducts{
    @apply bg-$text py-50px -mt-75px;
    >*{
      @apply flex gap-75px items-center text-$text-light justify-between;
      ._text{
        @apply w-350px flex flex-col gap-30px;
      }

      ._buttons{
        @apply flex gap-15px;
        ._item{
          @apply flex flex-col items-center justify-center gap-18px
                 rounded-18px border-2px px-15px pt-20px pb-15px cursor-pointer
                 border-$secondary;
          transition: all 0.15s ease-in-out;

          ._icon{
            @apply w-90px h-90px;
            @apply bg-$secondary;

            mask-image: var(--icon);
            mask-repeat: no-repeat;
            mask-position: left center;
            mask-size: contain;

            -webkit-mask-image: var(--icon);
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: left center;
            -webkit-mask-size: contain;
          }

          &:hover{
             @apply bg-$secondary;
            ._icon{
              background-color: var(--text-light);
            }
          }
        }
      }

      .next_prev{
        @apply hidden;
      }
    }
  }

  ._renewable_energy{
    .container{
      @apply w-540px;

      .default_button{
        @apply bg-$primary px-60px;
      }
    }
  }

  ._support_connection_points{
    h2{
      @apply max-w-340px;
    }
  }

  .newsletter_section {
    @apply bg-$secondary text-$text-light py-50px -mb-75px;
    .container{
      @apply flex gap-65px;

      ._text{
        @apply max-w-460px flex flex-col gap-30px;

        h2{
          @apply -mt-8px;
        }
        p{
          @apply max-w-320px;
        }
      }

      #newsletter{
        @apply grid grid-cols-2 gap-x-45px gap-y-30px
               w-full;
        grid-template-rows: 39px 1fr;

        >._bottom{
          @apply grid col-span-2;
          grid-template-columns: 2fr 1fr
        }

        ._privacy{
          @apply  px-5px
                  flex flex-col gap-10px;

          p{
            @apply font-bold text-22px;
          }

          label{
            @apply text-15px
                    grid gap-10px;
            grid-template-columns: 15px 1fr;

            .__box{
              @apply w-14px h-14px relative mt-4px
                      border border-$text-light;

              &::after{
                content: '';
                @apply absolute w-4/5 h-4/5
                        top-1/2 left-1/2
                        transform -translate-x-1/2 -translate-y-1/2;
                transition: background-color 0.2s ease-in-out;
              }
            }

            input{
              @apply opacity-0 pointer-events-none absolute;
              &:checked + .__box::after{
                @apply bg-$text-light;
              }
            }

            a{
              @apply underline;
            }
          }
        }

        button{
          @apply col-start-2 ml-auto px-60px max-h-39px mt-auto;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #home {
    @apply gap-50px text-center;

    ._banner {
      >.container{
        p{
          @apply max-w-280px;
        }
      }
    }

    .soluctionsForSolarProducts{
      @apply py-30px -mt-50px;
      >*{
        @apply flex-col gap-50px;
        ._text{
          @apply w-350px flex flex-col gap-30px;
        }

        ._buttons{
          @apply block gap-0px max-w-100vw;

          .slick-slide{
            @apply px-15px;

            ._item{
              @apply px-20px text-center;

              ._icon{
                @apply mx-auto mb-10px;
              }

              &.active{
                  @apply bg-transparent;
                ._icon{
                  background-color: var(--secondary);
                }
              }
            }

            &.slick-current{
              ._item{
                @apply bg-$secondary;
                ._icon{
                  background-color: var(--text-light);
                }
              }
            }
          }
        }

        .next_prev{
          @apply flex gap-30px;
          ._next, ._prev{
            @apply h-max p-0 w-36px h-36px rounded-full
                  flex items-center justify-center bg-$secondary;

            &._prev svg{
              @apply -ml-1px;
            }
            &._next svg{
              @apply ml-1px;
            }
          }
        }
      }
    }

    ._renewable_energy{
      .container{
        @apply w-full;

        .default_button{
          @apply bg-$primary px-60px;
        }
      }
    }

    .newsletter_section {
      @apply bg-$secondary text-$text-light py-50px -mb-75px;
      .container{
        @apply flex-col gap-50px;

        ._text{
          @apply max-w-full gap-25px;

          p{
            @apply max-w-full;
          }
        }

        #newsletter{
          @apply grid-cols-1 gap-y-15px
                w-full;

          button{
            @apply col-start-1 w-full;
          }
        }
      }
    }
  }
}
</style>
