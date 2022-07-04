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
      // const before = 'https://maps.google.com/maps?q='
      // const after = '&t=&z=13&ie=UTF8&iwloc=&output=embed'
      // const address = this.address
      // return before + address + after
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56966.11152817741!2d-53.362533927185844!3d-26.82780072490499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fafb67ec57cfe5%3A0x590dfd2a1f091c82!2sPi%20Energy!5e0!3m2!1spt-BR!2sbr!4v1656948046037!5m2!1spt-BR!2sbr'
    }
  }
}
</script>

<style lang="scss">
  ._google_map{
    @apply w-full;
  }
</style>
