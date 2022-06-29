/* eslint-disable no-new */
import { createPinia } from 'pinia'
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

const pinia = createPinia()

new Vue({
  el: '#__nuxt'
})

Vue.use(pinia)
