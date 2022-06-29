<template>
  <main id="home">
    <Banner :item="home.banner" :background="banner_background" />
    <v-container class="soluctionsForSolarProducts">
      <div class="_text">
        <h2>{{ home.soluctionsForSolarProducts.title }}</h2>
        <p>{{ home.soluctionsForSolarProducts.description }}</p>
      </div>
      <span class="_buttons">
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
      </span>
    </v-container>
    <GridTwoImageWithTextAndCta :item="home.thoughtsTomorrow" image="images/young-man-working-at-renewable-energy-farm-eco.png" />
    <FullscreenLinearText :item="home.partnershipForSecurity" image="images/background-linear-home.png" color="#ED7220CC" />
    <FullscreenLinearText class="_renewable_energy" :item="home.renewableEnergy" color="#ffffff" text="#2E4739" />
    <GridTwoImageWithTextAndCta class="_support_connection_points" :item="home.supportConnectionPoints" image="images/sungrow_3.png" />

    <v-container class="newsletter_section">
      <div class="_text">
        <h2>{{ home.newsletter.title }}</h2>
        <p>{{ home.newsletter.description }}</p>
      </div>
      <form id="newsletter">
        <v-input id="name" placeholder="Nome" :maxlength="100" />
        <v-input id="email" type="email" placeholder="E-mail" :maxlength="255" />
        <button type="submit" class="alt">
          {{ home.newsletter.cta }}
        </button>
      </form>
    </v-container>
  </main>
</template>

<script>
import home from '@/data/ptbr/home.json'
export default {
  data () {
    return {
      home,
      banner_background: {
        src: 'images/banner_home.png',
        color: '#5EAC55'
      },
      currentSoluctionSelected: 'agro'
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

          &.active{
             @apply bg-$secondary;
            ._icon{
              @apply w-90px h-90px;
              background-color: var(--text-light);
            }
          }
        }
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

        p{
          @apply max-w-320px;
        }
      }

      #newsletter{
        @apply grid grid-cols-2 gap-x-45px gap-y-30px
               w-full;
        grid-template-rows: repeat(2, 39px);

        button{
          @apply col-start-2 ml-auto px-60px;
        }
      }
    }
  }
}
</style>
