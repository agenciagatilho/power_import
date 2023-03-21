<template>
  <main id="post">
    <article class="_post_content container">
      <!-- <Banner :item="post.banner" :background="post.bannerBackground" /> -->
      <!-- <picture class="__image"> -->
        <!-- <img :src="post.image" :alt="post.title">
      </picture>
      <h1>{{ post.title }}</h1>
      <div v-if="post.content" class="__content" v-html="post.content.rendered" /> -->
      <h1>SEM POST</h1>
    </article>
  </main>
</template>

<script>
export default {
  // async asyncData ({ params, error, payload }) {
  //   console.log(payload, params, error())
  //   if (payload) {
  //     return {
  //       post: payload
  //     }
  //   } else {
  //     return await {}
  //   }
  // },
  // data () {
  //   return {
  //     post: null
  //   }
  // }
  // created () {
  //   const params = this.$route.params;
  //   (async () => {
  //     const requestOptions = {
  //       method: 'GET',
  //       redirect: 'follow'
  //     }

  //     const base = '' + 'https://viener.com.br/proxy.php/'
  //     let post = await (await fetch(base + `https://viener.com.br/blog/wp-json/wp/v2/posts?slug=${params.post}&_embed=wp:featuredmedia`, requestOptions)).json()
  //     post = post[0]

  //     // const bannerBackground = {
  //     //   src: post?._embedded['wp:featuredmedia'][0].link,
  //     //   color: '#2E4739'
  //     // }
  //     // const banner = {
  //     //   title: post.title.rendered,
  //     //   description: ''
  //     // }

  //     this.post = {
  //       title: post.title.rendered,
  //       image: post?._embedded['wp:featuredmedia'][0].link,
  //       content: post.content
  //     }
  //   })()
  // }
}
</script>

<style lang="scss">
#post {
  ._post_content{
    @apply flex flex-col gap-75px;

    .__image{
      @apply pt-50px;
      img{
        @apply mx-auto w-full max-h-400px object-center object-cover;
      }
    }

    h1{
      @apply mx-auto;
    }

    .__content{
      p{
        @apply mb-20px;
      }
    }
  }
}
</style>
