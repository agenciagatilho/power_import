<template>
  <main id="admin_equipamentos">
    <v-container class="_equipamentos">
      <form id="form_equipamentos" class="_form" @submit="submit">
        <v-input id="slug" placeholder="Slug" :maxlength="100" desabled />
        <v-input id="type" type="select" placeholder="Tipo" :maxlength="100" :options="categories" />
        <v-input id="category" placeholder="Categoria" :maxlength="100" />
        <v-input id="title" placeholder="Nome do equipamento" :maxlength="100" @change="changeSlug" />
        <v-input id="description" type="textarea" placeholder="Descrição do equipamento" rows="5" />
        <FormulateInput
          id="span_input_pdf"
          type="file"
          name="file"
          label="Manual"
          help="tipo de documento suportado: pdf. *Opcional"
          accept="mime:application/pdf"
          validation="mime:application/pdf"
          @file-upload-complete="e=>saveFile(e, 'docState')"
          @file-upload-progress="clearFileInput"
        />
        <FormulateInput
          id="span_input_image"
          type="image"
          name="headshot"
          label="Imagem"
          help="Tipos de imagem suportadas: png, jpg ou gif."
          accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
          validation="mime:image/jpeg,image/jpg,image/png,image/gif,image/webp"
          @file-upload-complete="e=>saveFile(e, 'imageState')"
          @file-upload-progress="clearImageInput"
        />
        <span>
          <button type="submit">
            Enviar
          </button>
          <button v-if="itemSelected" class="_cancel" type="button" @click="cancelSelected">
            Cancelar
          </button>
        </span>
      </form>

      <section class="_section_equips">
        <span class="_all_categories">
          <button
            v-for="item in categories"
            :key="item.name"
            :class="{'active': item.name === category}"
            @click="setType(item.name)"
            v-text="item.title"
          />
        </span>
        <div v-if="items" class="items">
          <div
            v-for="item in items.docs"
            :key="item.title"
            class="_item"
            @click="getItem(item)"
          >
            <img v-if="item.image" :src="item.image.src" :alt="item.image.alt">
            <p>{{ item.title }}</p>
            <p class="category">{{ item.category }}</p>
          </div>
        </div>
        <v-container v-else class="_sections_equipaments">
          <h2 class="_not_found">
            Nenhum equipamento encontrado.
          </h2>
        </v-container>
      </section>
    </v-container>
  </main>
</template>

<script>
import { useToastStore } from '@/store/toastState'
export default {
  data () {
    return {
      toast: useToastStore(),
      categories: [
        { name: 'inversores', title: 'Inversores' },
        { name: 'materiaisdeprotecao', title: 'Materiais de proteção' },
        { name: 'outrosmateriais', title: 'Outros materiais' },
        { name: 'modulos', title: 'Módulos' },
        { name: 'estrutura', title: 'Estrutura ' }
      ],
      items: null,
      category: 'inversores',
      itemSelected: null,
      docState: null,
      imageState: null
    }
  },
  head () {
    return {
      title: 'Conheça a Viener | Energias Renováveis',
      meta: [
        { name: 'title', content: 'Conheça a Viener | Energias Renováveis' },
        { name: 'description', content: 'Conheça a Viener e entenda como levamos segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos.' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://viener.com.br/' },
        { property: 'og:title', content: 'Conheça a Viener | Energias Renováveis' },
        { property: 'og:description', content: 'Conheça a Viener e entenda como levamos segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos.' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://viener.com.br/' },
        { property: 'twitter:title', content: 'Conheça a Viener | Energias Renováveis' },
        { property: 'twitter:description', content: 'Conheça a Viener e entenda como levamos segurança às pessoas conectadas à nossa marca com a excelência dos nossos serviços e produtos.' }
      ]
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    setType (category) {
      this.category = category
      this.getItems()
    },
    async getItems () {
      this.items = await this.$firebase.list(this.category)
    },
    getItem (item) {
      this.itemSelected = item
      const form = document.querySelector('#form_equipamentos')
      const image = document.querySelector('.formulate-input-element--image')
      const docs = document.querySelector('.formulate-input-element--file .formulate-input-upload-area-mask')

      form.slug.value = item.slug
      form.type.value = item.type
      form.title.value = item.title
      form.description.value = item.description
      form.category.value = item.category
      this.docState = item.doc
      this.imageState = item.image

      if (item.image && item.image.src.includes('http')) {
        image.style = `
          background: url('${item.image.src}') no-repeat center;
          background-size: contain;
          border: 2px dashed #a8a8a8;
          border-radius: 0.4em;
        `
        image.querySelector('.formulate-input-upload-area-mask').style = 'display: none;'
        if (document.querySelector('.formulate-input-upload-area .formulate-file-remove')) {
          document.querySelector('.formulate-input-upload-area .formulate-file-remove').click()
        }
      } else {
        image.style = ''
        image.querySelector('.formulate-input-upload-area-mask').style = ''
      }

      if (item.doc && item.doc.src.split('?')[0].split('o/equipamentos')[1]) {
        if (document.querySelector('._doc')) {
          document.querySelector('._doc').innerText = item.doc.src.split('?')[0].split('o/equipamentos')[1]
        } else {
          const doc = document.createElement('p')
          doc.classList.add('_doc')
          doc.innerText = item.doc.src.split('?')[0].split('o/equipamentos')[1]
          docs.before(doc)
        }
      } else if (document.querySelector('._doc')) {
        document.querySelector('._doc').innerText = ''
        if (image.querySelector('.formulate-file-remove')) {
          image.querySelector('.formulate-file-remove').click()
        }
      }
    },
    saveFile (item, dataState) {
      this.$firebase.file(item.file).then((response) => {
        const url =
          `https://firebasestorage.googleapis.com/v0/b/${response.metadata.bucket}/o/${response.metadata.fullPath.replace('/', '%2F')}?alt=media`

        this[dataState] = {
          src: url,
          alt: response.metadata.name.split('.')[0]
        }

        if (dataState === 'imageState') {
          document.querySelector('#title').value = response.metadata.name.split('.')[0] + '.'
        }
      })
    },
    submit (e) {
      e.preventDefault()
      const form = e.target

      const data = {}

      if (form.slug.value) { data.slug = form.slug.value }
      if (form.type.value) { data.type = form.type.value }
      if (form.title.value) { data.title = form.title.value }
      if (form.description.value) { data.description = form.description.value }
      if (form.category.value) { data.category = form.category.value }
      if (this.imageState) { data.image = this.imageState }
      if (this.docState) { data.doc = this.docState }

      try {
        this.$firebase.set(data.type, data.slug, data).then((response) => {
          this.toast.showToast(response)
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        })
      } catch (err) {
        console.log(err)
      }
    },
    cancelSelected () {
      const image = document.querySelector('.formulate-input-element--image')
      this.itemSelected = null
      document.querySelector('#form_equipamentos').reset()
      image.style = 'background: none; border: none; border-radius: 0;'
      image.querySelector('.formulate-input-upload-area-mask').style = ''
      if (image.querySelector('.formulate-file-remove')) {
        image.querySelector('.formulate-file-remove').click()
      }
      if (document.querySelector('.formulate-input-upload-area .formulate-file-remove')) {
        document.querySelector('.formulate-input-upload-area .formulate-file-remove').click()
      }
      document.querySelector('._doc').innerText = ''
    },
    clearImageInput () {
      const image = document.querySelector('.formulate-input-element--image')
      image.style = 'background: none; border: none; border-radius: 0;'
    },
    clearFileInput () {
      if (document.querySelector('._doc')) {
        document.querySelector('._doc').innerHTML = ''
      }
    },
    changeSlug (e) {
      const title = e.target.value
      document.querySelector('#slug').value = title.toLowerCase().replaceAll(' ', '_')
    }
  }
}
</script>

<style lang="scss">
@import '@/node_modules/@braid/vue-formulate/themes/snow/snow.scss';
#admin_equipamentos {
  @apply flex flex-col gap-75px;

  ._equipamentos{
    .container{
      @apply min-h-60vh grid grid-cols-2 py-30px
             items-start justify-between gap-20px;

      ._form {
        @apply grid gap-20px;
        grid-template-columns: minmax(auto, 260px) minmax(auto, 260px);

        .input-box{
          @apply flex-col gap-5px ;
          label {
            @apply opacity-100 w-auto h-auto
                  text-$text text-22px font-bold;
            line-height: 22px;
          }
          input, textarea, select {
            @apply border border-$text rounded-15px;

            &::placeholder{
                @apply text-transparent;
            }
          }

          &#span_input_description{
            @apply col-span-2;
          }
        }

        .formulate-input-label{
          @apply font-bold text-22px h-auto w-auto text-$text mb-7px;
          line-height: 22px;
        }
        .formulate-file{
          @apply h-75px;

          .formulate-file-progress[data-is-finished="true"]{
            @apply hidden;
          }
        }
        span{
          @apply flex gap-20px;
          button{
            @apply border border-$primary;
            &._cancel{
              @apply bg-transparent text-$primary;
            }
          }
        }

        ._doc{
          @apply absolute left-10px -z-1 text-14px font-bold;
          top: calc(50% - 6px)
        }
      }
    }

    ._section_equips{
      @apply flex flex-col gap-20px;
      ._all_categories{
        @apply flex justify-between;
        button{
          @apply text-14px bg-transparent text-$primary
                 border-$primary border;
          transition: all 0.1s ease-in-out;

          &:hover, &.active{
            @apply bg-$primary text-$text-light;
          }
        }
      }

      >div{
        @apply grid grid-cols-3 gap-30px overflow-y-auto max-h-60vh;

        ._item{
          @apply border-3px border-$secondary rounded-19px
                pt-35px pb-15px
                grid grid-cols-1 gap-10px;
          grid-template-rows: 115px 1fr;

          img{
            @apply h-full object-cover mb-40px mx-auto;
          }

          p {
            @apply text-center font-bold uppercase;

            &.category{
              @apply text-14px;
            }
          }
        }
      }
      ._not_found{
        @apply text-center text-32px col-span-2
                max-w-400px mx-auto;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #admin_equipamentos {
    @apply text-center gap-50px;
  }
}
</style>
