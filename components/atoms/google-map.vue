<template>
  <iframe
    :src="addressComputed"
    class="_google_map"
    width="1090"
    height="495"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  />
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      required: true
    }
  },
  computed: {
    addressComputed () {
      const before = 'https://maps.google.com/maps?q='
      const after = '&t=&z=13&ie=UTF8&iwloc=&output=embed'
      const address = this.address
      return before + address + after
    }
  }
}
</script>

<style lang="scss">
  ._google_map{
    @apply w-full;
  }
</style>
