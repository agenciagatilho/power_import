<template>
  <main id="simulador">
    <Banner :item="simulador.banner" :background="banner_background" />
    <v-container id="section_form_simulador" class="_grid_two_image_with_form_simulador">
      <picture class="_image">
        <v-image src="images/sungrow_5.png" width="650px" height="425px" />
      </picture>
      <div class="_form">
        <form id="form_simulador">
          <v-input id="state" placeholder="Estado" :maxlength="255" list="data_states" @change="getCities" />
          <v-input id="city" placeholder="Cidade" :maxlength="255" list="data_cities" />
          <v-input id="address" placeholder="Endereço" :maxlength="1000" />
          <v-input id="payment" placeholder="Quanto você paga de energia no mês?" type="number" :maxlength="255" />
          <button type="submit">
            {{ simulador.form.cta }}
          </button>

          <datalist id="data_cities">
            <option v-for="city in cities" :key="city" v-text="city" />
          </datalist>

          <datalist id="data_states">
            <option v-for="state in states" :key="state.value" :value="state.name" v-text="state.value" />
          </datalist>
        </form>
      </div>
    </v-container>
  </main>
</template>

<script>
import simulador from '@/data/ptbr/simulador.json'
import states from '@/data/ptbr/states.json'
export default {
  data () {
    return {
      simulador,
      states,
      banner_background: {
        src: 'images/banner_quemsomos.png',
        color: '#ED7220'
      }
    }
  },
  head () {
    return {
      title: 'Simulador | Viener',
      meta: [
        { name: 'title', content: 'Simulador | Viener' },
        { name: 'description', content: 'Faça sua simulação e veja quanto você economiza quando utiliza um sistema de energias renováveis.' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://viener.com.br/' },
        { property: 'og:title', content: 'Simulador | Viener' },
        { property: 'og:description', content: 'Faça sua simulação e veja quanto você economiza quando utiliza um sistema de energias renováveis.' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://viener.com.br/' },
        { property: 'twitter:title', content: 'Simulador | Viener' },
        { property: 'twitter:description', content: 'Faça sua simulação e veja quanto você economiza quando utiliza um sistema de energias renováveis.' }
      ]
    }
  },
  methods: {
    getCities (e) {
      const id = document.querySelector('#data_states')
        .querySelector(`option[value="${e.target.value}"]`)
        .innerHTML

      this.$cities.get(id).then((cities) => {
        this.cities = cities
      })
    }
  }
}
</script>

<style lang="scss">
  #simulador{
    @apply flex flex-col gap-75px;
    ._banner > .container h1{
      @apply max-w-600px;
    }
    ._grid_two_image_with_form_simulador{
      .container{
        @apply grid grid-cols-2 gap-100px;

        ._image{
          width: calc(100% + 80px);
          img {
            @apply w-full h-full;
            margin-left: -80px;
          }
        }

        ._form{
          @apply flex flex-col justify-center gap-30px;

          form {
            @apply grid grid-cols-1 gap-20px;

            .input-box{
              @apply flex-col gap-5px;
              label {
                @apply opacity-100 w-auto h-auto
                      text-$text text-22px font-bold;
                line-height: 22px;
              }
              input, textarea {
                @apply border border-$text rounded-15px;

                &::placeholder{
                    @apply text-transparent;
                }
              }
            }

            #span_input_payment{
              @apply relative;
              &::after{
                content: 'R$';
                @apply absolute mt-2px top-1/2 right-60px opacity-0;
                transition: all 0.15s ease-in-out;
              }
              &:hover{
                &::after{
                  content: 'R$';
                  @apply opacity-100;
                }
              }
            }

            button{
              @apply px-27px ml-auto;
            }
          }
        }
      }
    }
  }

</style>
