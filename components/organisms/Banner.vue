<template>
  <v-container :background="background" class="_banner">
    <h1>{{ item.title }}</h1>
    <p v-html="item.description" />
    <nuxt-link v-if="item.cta" :to="item.cta.url" class="default_button alt">
      {{ item.cta.text }}
    </nuxt-link>
  </v-container>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    background: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
  ._banner {
    >.container{
      @apply h-570px text-$text-light text-16px
            flex flex-col justify-center gap-30px;
      line-height: 22px;
      h1{
        @apply max-w-500px;
      }
      p{
        @apply max-w-470px;
      }
      .default_button{
        @apply px-40px;
      }
    }
  }

@media screen and (max-width: 768px) {
  ._banner {
    @apply text-center;
    >.container{
      @apply h-600px;
      h1{
        @apply max-w-500px;
      }
      p{
        @apply max-w-310px mx-auto;
      }
      .default_button{
        @apply px-30px mx-auto;
      }
    }
  }
}
</style>
