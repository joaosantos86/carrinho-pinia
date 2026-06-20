<script setup>
import { useCartStore } from "@/stores/useCart"
import { formataPreco } from "@/utils/currencyUtils"
const cartStore = useCartStore()
const props = defineProps({
  items: {
    items: Object,
  }
})
</script>

<template>
  <div class="cart-item">
    <div class="d-flex justify-content-between align-items-start mb-2">
      <div class="flex-grow-1">
        <h6 class="mb-1">{{ props.items.name }}</h6>
        <p class="text-muted small mb-0">{{ formataPreco(props.items.price) }}</p>
      </div>
      <button @click="cartStore.removeItem(props.items.id)" class="btn btn-sm btn-outline-danger">
        <i class="bi bi-trash"></i>
      </button>
    </div>
    <div class="quantity-control">
      <button @click="cartStore.decreaseQty(props.items.id)" class="btn btn-sm btn-outline-secondary btn-quantity">
        <i class="bi bi-dash"></i>
      </button>
      <span class="fw-bold">{{ cartStore.itemQty(props.items.id) }}</span>
      <button @click="cartStore.increaseQty(props.items.id)" class="btn btn-sm btn-outline-secondary btn-quantity">
        <i class="bi bi-plus"></i>
      </button>
      <span class="ms-auto text-muted">{{ formataPreco(cartStore.itemSubtotal(props.items.id)) }}</span>
    </div>
  </div>
</template>
