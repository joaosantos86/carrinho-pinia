import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore ('cart',{
  state: () => ({
    items: useStorage('cart-items', [])
  }),

  actions: {
    addItem(product) {
      const existing = this.items.find(o => o.id === product.id)

      if(existing) {
        existing.qty++
      } else {
        this.items.push({ ...product, qty: 1})
      }
    },

    removeItem(id) {
      this.items = this.items.filter(e => e.id !== id)
    },

    increaseQty(id) {
      const item = this.items.find(o => o.id === id)

      if(item) {
        item.qty++
      }
    },

    decreaseQty(id) {
      const item = this.items.find(o => o.id === id)

      if(item && item.qty > 1) {
        item.qty--
      } else {
        this.removeItem(id)
      }
    },

    cleanCart() {
      this.items = []
    }
  },

  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.qty, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + item.price * item.qty, 0)
  },
})
