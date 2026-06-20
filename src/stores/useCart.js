import { defineStore } from 'pinia';

export const useCartStore = defineStore ('cart',{
  state: () => ({
    items: []
  }),

  actions: {
    addItem(product) {
      const existing = this.items.find(o => o.id === product.id)

      if(existing) {
        existing.qty++
      } else {
        this.items.push({ ...product, qty: 1})
      }
    }
  },

  getters: {},
})
