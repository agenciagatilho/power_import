<template>
  <main id="blog">
    <Banner :item="blog.banner" :background="banner_background" />
    <v-container class="_blog_content">
      <BlogItem v-for="post in blogPosts" :key="post.title" :item="post" />
    </v-container>
  </main>
</template>

<script>
import blog from '@/data/ptbr/blog.json'
export default {
  data () {
    return {
      blog,
      banner_background: {
        src: 'images/banner_blog.png',
        color: '#2E4739'
      },
      blogPosts: []
    }
  },
  head () {
    return {
      title: 'Blog | Viener',
      meta: [
        { name: 'title', content: 'Blog | Viener' },
        { name: 'description', content: 'Aqui você encontra informações, tendências, oportunidades e novidades sobre o mercado de energias renováveis.' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://viener.com.br/' },
        { property: 'og:title', content: 'Blog | Viener' },
        { property: 'og:description', content: 'Aqui você encontra informações, tendências, oportunidades e novidades sobre o mercado de energias renováveis.' },

        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://viener.com.br/' },
        { property: 'twitter:title', content: 'Blog | Viener' },
        { property: 'twitter:description', content: 'Aqui você encontra informações, tendências, oportunidades e novidades sobre o mercado de energias renováveis.' }
      ]
    }
  },
  created () {
    const basePosts = require('@/data/blog.json')
    const blogPosts = []

    basePosts.forEach((item) => {
      const image = item._links['wp:featuredmedia'][0]
      blogPosts.push({
        image: image.href,
        title: item.title.rendered,
        description: item.content.rendered,
        link: item.link
      })
    })

    blogPosts.map(async (item) => {
      const baseImage = item.image
      const finalImage = await (await fetch(baseImage, { method: 'GET' })).json()
      return {
        ...item,
        image: finalImage
      }
    })
    for (let i = 0; i < blogPosts.length; i++) {
      const item = blogPosts[i];
      (async () => {
        const baseImage = item.image
        const finalImage = await (await fetch(baseImage, { method: 'GET' })).json()
        item.image = finalImage.media_details.sizes.medium
          ? finalImage.media_details.sizes.medium.source_url
          : finalImage.guid.rendered
      })()
    }
    this.blogPosts = blogPosts.slice(0, 9)
  }
}
</script>

<style lang="scss">
  #blog{
    @apply flex flex-col gap-75px;
    ._blog_content{
      .container{
        @apply grid grid-cols-3 gap-75px;
      }
    }
  }
</style>
