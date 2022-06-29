<template>
  <section class="_fullscreen_linear_text" :style="`--color: ${color}; --text-s: ${text};`">
    <div class="container small">
      <h2>{{ item.title }}</h2>
      <p v-html="item.description" />
      <nuxt-link v-if="item.cta" class="default_button alt" :to="item.cta.url">
        {{ item.cta.text }}
      </nuxt-link>
    </div>
    <v-image v-if="image" class="background" :src="image" width="1920px" height="350px" />
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    color: {
      type: String,
      default: '#5EA756'
    },
    text: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="scss">
  ._fullscreen_linear_text{
    @apply bg-$color text-$text-s text-center relative;
    .container {
      @apply relative z-2 flex flex-col items-center justify-center gap-30px py-50px;
      p{
        @apply max-w-700px;
      }
    }
    .background{
      @apply absolute w-full h-full top-0 left-0 -z-1;
    }
  }
</style>
