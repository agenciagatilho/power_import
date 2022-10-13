<template>
  <div class="_equipament_modal_outer" :class="{'_open': state.open}">
    <div class="_modal_inner">
      <div>
        <img :src="state.image" :alt="state.title">
        <div class="_text">
          <h2>{{ state.title }}</h2>
          <p>{{ state.description }}</p>
        </div>
        <button class="_close" @click="closeModal">X</button>
      </div>
    </div>
    <div class="_background" @click="closeModal"/>
  </div>
</template>

<script>
import { useEquipamentState } from '~/store/equipamentState'
export default {
  data () {
    return {
      state: useEquipamentState()
    }
  },
  methods: {
    closeModal () {
      this.state.open = false
    }
  }
}
</script>

<style lang="scss">
  ._equipament_modal_outer{
    @apply fixed top-1/2 left-1/2 z-995
           w-full h-full flex items-center justify-center
           transform -translate-x-1/2 -translate-y-1/2
           opacity-0 pointer-events-none;

    /* width */
    ::-webkit-scrollbar {
      width: 12px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: #f1f1f1;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 6px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--primary);
    }

    ._modal_inner {
      @apply w-80vw h-80vh relative z-2 p-55px
              bg-$text-light text-center
              rounded-26px border-2px border-$primary;
      >div{
        @apply grid grid-cols-2 gap-20px
               h-full overflow-y-auto overflow-x-hidden;

        img{
          @apply w-full h-[calc(80vh-120px)]
                object-center object-contain;
        }

        ._text{
          @apply flex flex-col gap-20px;
          h2{
            @apply text-$primary;
          }

          p{
            @apply text-$text;
          }
        }

        ._close{
          @apply absolute top-20px right-20px
                bg-transparent text-$primary
                p-0 text-24px;
        }
      }
    }

    ._background{
      @apply absolute top-0 left-0 z-0
             w-full h-full;
      background-color: #00000040;
    }

    &._open{
      @apply opacity-100 pointer-events-auto;
    }
  }

  @media screen and (max-width: 768px) {
    ._equipament_modal_outer{
      ._modal_inner{
        @apply w-90vw h-90vh p-20px gap-15px;

        img{
          @apply w-4/5;
        }

        ._close{
          @apply absolute top-20px right-20px
                bg-transparent text-$primary
                p-0 text-24px;
        }
      }

      ._background{
        @apply absolute top-0 left-0 z-0
              w-full h-full;
        background-color: #00000040;
      }

      &._open{
        @apply opacity-100 pointer-events-auto;
      }
    }
  }
</style>
