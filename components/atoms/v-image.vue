<template>
  <component :is="require('@/assets/svgs/'+src+'?inline')" v-if="isSvg" :width="compWidth" :height="compHeight" />
  <img v-else :src="src" :alt="alt" :width="compWidth" :height="compHeight">
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
      required: false
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    mobWidth: {
      type: String,
      default: null
    },
    mobHeight: {
      type: String,
      default: null
    }
  },
  computed: {
    isSvg () {
      if (this.src.includes('.svg')) {
        return true
      }
      return false
    },
    isMobile () {
      if (this.$device.isMobile) {
        return true
      }
      return false
    },
    compWidth () {
      if (this.isMobile && this.mobWidth) {
        return this.mobWidth
      }
      return this.width
    },
    compHeight () {
      if (this.isMobile && this.mobHeight) {
        return this.mobHeight
      }
      return this.height
    }
  }
}
</script>
