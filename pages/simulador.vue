<template>
  <main id="simulador">
    <Banner :item="simulador.banner" :background="banner_background" />
    <v-container id="section_form_simulador" class="_grid_two_image_with_form_simulador">
      <picture class="_image">
        <v-image src="images/sungrow_5.webp" width="650px" height="425px" />
      </picture>
      <div class="_form">
        <form id="form_simulador" @submit="submit">
          <v-input id="state" placeholder="Estado" :maxlength="255" list="data_states" @change="getCities" />
          <v-input id="city" placeholder="Cidade" :maxlength="255" list="data_cities" />
          <v-input id="address" placeholder="Endereço" :maxlength="1000" />
          <v-input id="payment" placeholder="Quanto você paga de energia no mês?" type="number" :maxlength="255" />
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
import sitemap from '@/data/ptbr/sitemap.json'
import states from '@/data/ptbr/states.json'
import { useToastStore } from '@/store/toastState'
export default {
  data () {
    return {
      toast: useToastStore(),
      simulador,
      states,
      sitemap,
      banner_background: {
        src: 'images/banner_simulador.webp',
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
    },
    submit (e) {
      e.preventDefault()
      const form = e.target

      const data = {
        name: form.name.value,
        telphone: form.telphone.value,
        email: form.email.value,
        city: form.city.value,
        company: form.company.value,
        message: form.message.value,
        subject: 'Formulario de ' + this.id,
        msg: `
          <h2>Formulario vindo do site em:<br>
            <a href="${window.location.href}"> ${window.location.href}</a>
          </h2>
          <br><br>
          <strong>Nome: </strong> ${form.name.value}<br>
          <strong>Telefone: </strong> ${form.telphone.value}<br>
          <strong>Email: </strong> ${form.email.value}<br>
          <strong>Cidade: </strong> ${form.city.value}<br>
          <strong>Empresa: </strong> ${form.company.value}<br>
          <strong>Mensagem: </strong> ${form.message.value}<br>
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

            ._privacy{
              @apply px-5px flex flex-col gap-10px;

              p{
                @apply font-bold text-22px;
              }

              label{
                @apply text-15px
                      grid gap-10px;
                grid-template-columns: 15px 1fr;

                .__box{
                  @apply w-14px h-14px relative mt-4px
                        border border-$primary;
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
                    @apply bg-$primary;
                  }
                }

                a{
                  @apply underline;
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

@media screen and (max-width: 768px) {
  #simulador{
    @apply gap-50px;

    ._grid_two_image_with_form_simulador{
      .container{
        @apply grid-cols-1 gap-50px;

        ._image{
          img{
            @apply -ml-40px;
          }
        }

        ._form{
          form{
            .input-box{
              label{
                @apply text-17px;
              }
            }
            #span_input_payment:hover::after{
              @apply right-15px;
              top: calc(50% - 2px);
            }
          }
        }
      }
    }
  }
}
</style>
