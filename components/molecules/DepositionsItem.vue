<template>
  <div class="_depositions_item">
    <button class="alt _prev" @click="goToPrev">
      <v-image src="prev.svg" alt="voltar carousel" height="17px" width="16px" />
    </button>
    <div class="content">
      <h3 class="_name">{{ item.name }}</h3>
      <p class="_job_title">{{ item.job_title }}</p>
      <h3 class="_locale">{{ item.locale }}</h3>
      <p class="description">
        {{ item.description }}
      </p>
    </div>
    <button class="alt _next" @click="goToNext">
      <v-image src="next.svg" alt="avançar carousel" height="17px" width="16px" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToPrev () {
      this.$emit('prev')
    },
    goToNext () {
      this.$emit('next')
    }
  }
}
</script>

<style lang="scss">
  ._depositions_item {
    @apply px-15px w-525px h-400px
           rounded-20px border-2px border-$secondary-dark
           grid gap-30px items-center;
    grid-template-columns: 26px 1fr 26px;

    .content{
      @apply flex flex-col;

      ._name{
        @apply text-16px text-$primary;
        line-height: 18px;
      }
      ._job_title{
        @apply text-12px;
        color: #414042;
        line-height: 18px;
      }
      ._locale{
        @apply text-14px text-$primary;
        line-height: 18px;
      }

      .description{
        @apply mt-30px text-16px;
        color: #414042;
        line-height: 22px;
      }
    }

    .alt{
      @apply h-max p-0 w-26px h-26px rounded-full
             flex items-center justify-center;

      &._prev svg{
        @apply -ml-1px;
      }
      &._next svg{
        @apply ml-1px;
      }
    }
  }

@media screen and (max-width: 768px) {
  ._depositions_item {
    @apply p-15px w-full h-full gap-15px;

    .content{
      .description{
        @apply mt-20px;
      }
    }
  }
}
</style>
