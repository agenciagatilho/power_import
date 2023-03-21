<template>
  <div class="_masked_background">
    <div :style="`--color: ${color};`" height="600px" class="_mask" />
    <v-image :src="src" width="1920px" :alt="alt" height="600px" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
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
             w-full h-full object-right object-cover;
    }
    ._mask{
      @apply absolute top-0 left-0 z-1
             w-full h-full bg-$color;

      mask-image: url('/mask-background.svg');
      mask-repeat: no-repeat;
      mask-position: right center;
      mask-size: cover;

      -webkit-mask-image: url('/mask-background.svg');
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: right center;
      -webkit-mask-size: cover;
    }
  }

@media screen and (max-width: 768px) {
  ._masked_background{
    ._mask{
      mask-position: 45%;
      -webkit-mask-position: 45%;
      mask-image: url('/mask-background-mobile.svg');
      -webkit-mask-image: url('/mask-background-mobile.svg');
    }
  }
}
</style>
