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
        src: '/images/banner_blog.webp',
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
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    const base = '' + 'https://viener.com.br/proxy.php/'
    fetch(base + 'https://viener.com.br/blog/wp-json/wp/v2/posts?page=1&per_page=3&_embed=wp:featuredmedia', requestOptions).then(res => (res.json().then((posts) => {
      const basePosts = posts // require('@/data/blog.json')
      const blogPosts = []

      basePosts.forEach((item) => {
        let image = { href: '/default_image.jpg' }
        if (item._embedded['wp:featuredmedia']) {
          image = item._embedded['wp:featuredmedia'][0]
        }

        blogPosts.push({
          image: image.source_url,
          title: item.title.rendered,
          description: item.content.rendered,
          link: item.link
        })
      })

      if (this.$device.isMobile) {
        this.blogPosts = blogPosts.slice(0, 3)
      } else {
        this.blogPosts = blogPosts.slice(0, 9)
      }
    })))
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

@media screen and (max-width: 768px) {
  #blog{
    @apply gap-50px;
    ._blog_content{
      .container{
        @apply grid grid-cols-1 gap-50px;
      }
    }
  }
}
</style>
