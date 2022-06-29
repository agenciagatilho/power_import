<template>
  <div class="_masked_background">
    <div :style="`--mask: url('mask-background.png'); --color: ${color};`" height="600px" class="_mask" />
    <v-image :src="src" width="1920px" height="600px" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'var(--primary)'
    }
  }
}
</script>

<style lang="scss">
  ._masked_background{
    @apply absolute top-0 left-0 -z-1
           h-full w-full;
    img{
      @apply absolute top-0 left-0
             w-full h-full;
    }
    ._mask{
      @apply absolute top-0 left-0 z-1
             w-full h-full bg-$color;

      mask-image: var(--mask);
      mask-repeat: no-repeat;
      mask-position: left center;
      mask-size: cover;

      -webkit-mask-image: var(--mask);
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: left center;
      -webkit-mask-size: cover;
    }
  }
</style>
