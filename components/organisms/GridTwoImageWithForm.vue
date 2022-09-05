<template>
  <v-container :id="'section_'+id" class="_grid_two_image_with_form" :class="{'inverted': inverted}">
    <picture class="_image">
      <v-image :src="image" :alt="alt" width="650px" height="425px" />
    </picture>
    <div class="_form">
      <form :id="'form_'+id" @submit="submit">
        <v-input id="name" placeholder="Nome" :maxlength="100" />
        <v-input id="telphone" type="tel" placeholder="Telefone" :mask="'(##) #####-####'" :maxlength="15" />
        <v-input id="email" type="email" placeholder="E-mail" :maxlength="255" />
        <v-input id="city" placeholder="Cidade" :maxlength="255" />
        <v-input id="company" placeholder="Empresa" :maxlength="255" />
        <v-input id="message" placeholder="Mensagem" type="textarea" :rows="5" />
        <button type="submit">
          {{ cta }}
        </button>
      </form>
    </div>
  </v-container>
</template>

<script>
import { useToastStore } from '@/store/toastState'
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    inverted: {
      type: Boolean,
      default: false
    },
    cta: {
      type: String,
      default: 'Enviar'
    },
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      toast: useToastStore()
    }
  },
  methods: {
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
  ._grid_two_image_with_form{
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
          @apply grid grid-cols-2 gap-20px;

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

          #span_input_email, #span_input_message{
            @apply col-span-2;
          }

          button{
            @apply col-start-2 px-27px ml-auto;
          }
        }
      }
    }

    &.inverted .container{
      ._image{
        @apply col-start-2;
        img {
          @apply w-full h-full;
          margin-left: 0px;
        }
      }
      ._form{
        @apply col-start-1 row-start-1;
      }
    }
  }

@media screen and (max-width: 768px) {
  ._grid_two_image_with_form{
    .container{
      @apply grid-cols-1 gap-50px;

      ._image{
        width: 100%;
        img {
          @apply m-0;
        }
      }

      ._form{
        @apply flex flex-col justify-center gap-20px;

        form {
          @apply grid-cols-1 gap-15px;

          .input-box{
            @apply flex-col gap-5px;
            label {
              @apply opacity-100 text-17px;
              line-height: 22px;
            }
          }

          #span_input_email, #span_input_message{
            @apply col-span-1;
          }

          button{
            @apply col-start-1 px-27px mx-auto;
          }
        }
      }
    }

    &.inverted .container{
      ._image{
        @apply col-start-1;
        img {
          @apply w-full h-full;
          margin-left: 0px;
        }
      }
      ._form{
        @apply col-start-1 row-start-1;
      }
    }
  }
}
</style>
