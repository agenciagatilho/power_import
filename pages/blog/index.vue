<template>
  <main id="blog">
    <Banner :item="blog.banner" :background="banner_background" />
    <v-container class="_blog_content">
      <BlogItem v-for="post in blogPosts" :key="post.title" :item="post" />
      <span class="_pagination">
        <nuxt-link class="__lateral-buttons" :to="`/blog?page=${pagination[0]}`">
          &lt;
        </nuxt-link>
        <nuxt-link :class="{'_current': item==currentPage}" v-for="item in pagination" :key="item" :to="`/blog?page=${item}`">
          {{ item }}
        </nuxt-link>
        <nuxt-link class="__lateral-buttons" :to="`/blog?page=${pagination[pagination.length - 1]}`">
          >
        </nuxt-link>
      </span>
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
        src: 'images/banner_blog.webp',
        color: '#2E4739'
      },
      blogPosts: [],
      pagination: 0,
      existNext: true,
      currentPage: parseInt(this.$route.query.page || '1')
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
  watch: {
    '$route.query.page' (newVal, oldVal) {
      this.generatePage()
    }
  },
  mounted () {
    this.generatePage()
  },
  methods: {
    generatePage () {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      const base = '' + 'https://viener.com.br/proxy.php/'

      const postUrl = (page) => {
        if (this.$device.isMobile) {
          return `${base}https://viener.com.br/blog/wp-json/wp/v2/posts?page=${page}&per_page=3&_embed=wp:featuredmedia`
        } else {
          return `${base}https://viener.com.br/blog/wp-json/wp/v2/posts?page=${page}&per_page=6&_embed=wp:featuredmedia`
        }
      }

      fetch(postUrl(this.$route.query.page || '1'), requestOptions).then(res => (res.json().then((posts) => {
        const basePosts = posts // require('@/data/blog.json')
        const blogPosts = []

        basePosts.forEach((item) => {
          let image = { href: '/default_image.jpg' }
          if (item._embedded['wp:featuredmedia']) {
            image = item?._embedded['wp:featuredmedia'][0] || ''
          }

          blogPosts.push({
            image: image.source_url,
            title: item.title.rendered,
            description: item.content.rendered,
            link: item.link
          })
        })

        this.blogPosts = blogPosts
      })))

      fetch(postUrl(parseInt(this.$route.query.page) + 1 || '2'), requestOptions).then(res => (res.json().then((posts) => {
        const pagination = []
        if (posts.length) {
          pagination.push(parseInt(this.$route.query.page) - 1 || '0')
          pagination.push(parseInt(this.$route.query.page) || '1')
          pagination.push(parseInt(this.$route.query.page) + 1 || '2')
          this.existNext = true
        } else {
          pagination.push(parseInt(this.$route.query.page) - 2 || '0')
          pagination.push(parseInt(this.$route.query.page) - 1 || '0')
          pagination.push(parseInt(this.$route.query.page) || '1')
          this.existNext = false
        }
        this.pagination = pagination.filter(p => p > 0)
      })))
    }
  }
}
</script>

<style lang="scss">
  #blog{
    @apply flex flex-col gap-75px;
    ._blog_content{
      .container{
        @apply grid grid-cols-3 gap-75px;

        ._pagination{
          @apply flex justify-center
                 gap-10px
                 col-span-3;

          .__lateral-buttons.nuxt-link-exact-active {
            @apply opacity-0 pointer-events-none;
            transition: opacity 0s ease-in 0.05s;
          }
          .nuxt-link-exact-active{
            @apply font-bold;
          }
        }
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
