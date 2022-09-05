<template>
  <component :is='element' :class="{'bg-size': background}">
    <div class="container" :class="{'small': small}">
      <slot></slot>
    </div>
    <masked-background v-if="background" :src="background.src" alt="background_do_banner" :color="background.color" />
  </component>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false
    },
    element: {
      type: String,
      default: 'section'
    },
    background: {
      type: Object || null,
      default: null
    }
  }
}
</script>

<style lang="scss">
  .bg-size{
    @apply relative;

    .container{
      @apply relative z-2;
    }
  }
  .container{
    @apply max-w-1200px mx-auto;
  }
  .container.small{
    @apply max-w-900px;
  }

  @media (max-width: 768px) {
    .container{
      @apply w-88vw;
    }
  }
</style>
