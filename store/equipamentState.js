import { defineStore } from 'pinia'

export const useEquipamentState = defineStore({
  id: 'equipamentState',
  state: () => ({
    img: '',
    title: '',
    description: '',
    open: false
  }),
  getters: {},
  actions: {}
})
