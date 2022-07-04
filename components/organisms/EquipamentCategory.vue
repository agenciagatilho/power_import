<template>
  <div class="_categories">
    <h3 class="_line">
      {{ category }}
    </h3>
    <div v-if="!$device.isMobile" class="_items">
      <nuxt-link
        v-for="item in computedItems"
        :key="item.title"
        :to="getLink(item)"
        class="_item"
      >
        <img :src="item.image.src" :alt="item.image.alt">
        <p>{{ item.title }}</p>
      </nuxt-link>
    </div>

    <MobileCarousel v-else-if="computedItemsInDesktop" class="_items">
      <nuxt-link
        v-for="item in computedItemsInDesktop"
        :key="item.title"
        :to="getLink(item)"
        class="_item"
      >
        <img :src="item.image.src" :alt="item.image.alt">
        <p>{{ item.title }}</p>
      </nuxt-link>
    </MobileCarousel>

    <section v-if="pagination.length > 1" class="_pagination">
      <ul>
        <li>
          <button @click="setPage(queryPage - 1)">
            <div class="_prev" />
          </button>
        </li>
        <li v-for="item in pagination" :key="item" :class="item == queryPage? 'active': ''" @click="setPage(item)">
          {{ item }}
        </li>
        <li>
          <button @click="setPage(queryPage + 1)">
            <div class="_next" />
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      quantityPostsPerPage: this.$device.isMobile ? 1 : 4,
      queryPage: 1
    }
  },
  computed: {
    computedItemsInDesktop () {
      const items = this.items
      return items
    },
    computedItems () {
      const quantityPostsPerPage = this.quantityPostsPerPage

      const array = []
      const page = this.queryPage || 1

      for (const key in this.items) {
        const item = this.items[key]
        array.push(item)
      }
      const i = (page - 1) * quantityPostsPerPage

      return array.slice(i, i + quantityPostsPerPage)
    },
    pagination () {
      const quantityPostsPerPage = this.quantityPostsPerPage

      const array = []
      const pagination = []

      let i = 0
      // eslint-disable-next-line no-unused-vars
      for (const _key in this.items) { array.push(i); i++ }
      for (let i = 0; i < Math.ceil(array.length / quantityPostsPerPage); i++) { pagination.push(i + 1) }
      return pagination
    }
  },
  methods: {
    getLink (item) {
      const category = item.category.toLowerCase()
      return `/equipamentos/${category}/${item.slug}`
    },
    setPage (index) {
      this.queryPage = index
    },
    currentButton (item) {
      const query = this.$route.query.category
      return query === item
    },
    getPageArrow (number) {
      if (this.queryPage < number[number.length - 1]) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss">
  ._categories {
    @apply flex flex-col gap-30px;

    ._line {
      @apply font-bold text-28px text-$text;
      line-height: 32px;
    }

    ._items{
      @apply grid grid-cols-4 gap-30px;

      ._item{
        @apply border-3px border-$secondary rounded-19px
               pt-70px pb-30px
               grid grid-cols-1 gap-50px;
        grid-template-rows: 230px 24px;

        img{
          @apply h-full object-cover mx-auto p-10px;
        }

        p {
          @apply text-center font-bold uppercase;
        }
      }
    }

    ._pagination{
      ul {
         @apply flex items-center justify-center gap-15px
                text-16px text-$secondary text-center;
          line-height: 30px;

         li{
          @apply flex items-center cursor-pointer;
          &.active{
            @apply underline text-$primary;
          }

          button{
            @apply rounded-full p-5px bg-transparent;

            ._prev,._next{
              @apply h-16px w-10px bg-$secondary;
              mask-repeat: no-repeat;
              mask-position: left center;
              mask-size: contain;

              -webkit-mask-repeat: no-repeat;
              -webkit-mask-position: left center;
              -webkit-mask-size: contain;
            }
            ._prev{
              mask-image: url('/prev.svg');
              -webkit-mask-image: url('/prev.svg');
            }
            ._next{
              mask-image: url('/next.svg');
              -webkit-mask-image: url('/next.svg');
            }
          }
         }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ._categories {
      @apply gap-15px;

      ._line {
        @apply text-24px pl-15px;
        line-height: 28px;
      }

      ._items{
        @apply grid-cols-1 gap-15px;

        .slick-slide{
          @apply px-15px;
          ._item{
            @apply h-full pt-50px pb-30px gap-20px;

            img{
              @apply pb-20px h-220px;
            }
          }
        }
      }

      ._pagination{
        @apply hidden;
      }
    }
  }
</style>
