<template>
  <a :href="item.link">
    <article class="_blog_item">
      <!-- <Banner :item="blog.banner" :background="banner_background" /> -->
      <picture class="_image">
        <img :src="item.image" alt="Imagem do blog" width="354px" height="178px">
      </picture>
      <h3> {{ item.title }} </h3>
      <p v-text="descriptionLimited" />
      <a :href="item.link" class="default_button">
        Ver mais
      </a>
    </article>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    descriptionLimited () {
      let description = this.item.description
      description = description.split('<')[1].split('>')[1]
      description = description.split('').slice(0, 90).join('')
      return description + '...'
    }
  }
}
</script>

<style lang="scss">
  ._blog_item{
    @apply flex flex-col gap-30px rounded-19px h-full
           overflow-hidden text-center;
           box-shadow: 0 0 0 3px var(--secondary);

    ._image{
      img{
        @apply w-full h-180px object-center object-cover;
      }
    }

    h3, p {
      @apply max-w-290px mx-auto;
    }
    h3{
      @apply -mt-20px;
    }

    .default_button{
      @apply w-full rounded-0px py-10px mt-auto;
    }
  }
</style>
