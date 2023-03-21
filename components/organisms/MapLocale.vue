<template>
  <section class="map_locale">
    <h2>{{ title }}</h2>
    <google-map :address="address" />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .map_locale {
    @apply text-center flex flex-col gap-50px;
  }
</style>
