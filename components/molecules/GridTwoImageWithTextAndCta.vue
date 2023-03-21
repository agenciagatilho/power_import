<template>
  <v-container class="_grid_two_image_with_text_and_cta" :class="{'inverted': inverted}">
    <picture class="_image">
      <video
        v-if="image.includes('mp4')"
        controls
        playsinline
        preload="metadata"
        :src="image"
        :poster="`${image.replaceAll('.mp4', '')}-preview.webp`"
        :alt="alt"
        width="650px"
        height="425px"
      />
      <v-image v-else :src="image" width="650px" height="425px" :alt="alt" />
    </picture>
    <div class="_text">
      <h2>{{ item.title }}</h2>
      <h3 v-if="item.subtitle">
        {{ item.subtitle }}
      </h3>
      <p v-html="item.description" />
      <nuxt-link v-if="item.cta" :to="item.cta.url" class="default_button">
        {{ item.cta.text }}
      </nuxt-link>
    </div>
  </v-container>
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
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    inverted: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  ._grid_two_image_with_text_and_cta{
    .container{
      @apply grid grid-cols-2 gap-100px;

      ._image{
        width: calc(100% + 80px);
        img {
          @apply w-full h-full;
          margin-left: -80px;
        }
      }

      ._text{
        @apply flex flex-col justify-center gap-30px;

        h3{
          @apply -mt-25px;
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
      ._text{
        @apply col-start-1 row-start-1;
      }
    }
  }

@media screen and (max-width: 768px) {
  ._grid_two_image_with_text_and_cta{
    .container{
      @apply grid-cols-1 gap-30px;

      ._image{
        width: calc(100%);
        img {
          margin-left: 0px;
        }
      }

      ._text{
        .default_button{
          @apply mx-auto;
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
      ._text{
        @apply col-start-1 row-start-2;
      }
    }
  }
}
</style>
