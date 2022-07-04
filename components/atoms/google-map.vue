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
      return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28485.92726186258!2d-53.288974143122445!3d-26.816377253269174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fafbd5e3dd18c3%3A0x2bbaf661b3275f52!2sVIENER!5e0!3m2!1spt-BR!2sbr!4v1656953968110!5m2!1spt-BR!2sbr'
    }
  }
}
</script>

<style lang="scss">
  ._google_map{
    @apply w-full;
  }
</style>
