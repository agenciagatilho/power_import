import { defineStore } from 'pinia'

export const useToastStore = defineStore({
  id: 'toastState',
  state: () => ({
    content: '',
    show: false
  }),
  getters: {

  },
  actions: {
    showToast (content) {
      this.show = true
      this.content = content

      setTimeout(() => {
        this.show = false
      }, 1000 * 3)
    }
  }
})
