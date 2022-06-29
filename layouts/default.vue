<template>
  <div id="body">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import footer from '@/data/ptbr/footer.json'
import social from '@/data/ptbr/social_medias.json'
export default {
  data () {
    return {
      footer,
      social
    }
  }
}
</script>

<style lang="scss">
  #body{
    @apply flex flex-col gap-75px;
  }

  @media screen and (max-width: 768px) {
    #body{

    }
  }
</style>
