<script setup>
import { formataPreco } from "@/utils/currencyUtils"
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
      <button class="btn btn-sm btn-outline-danger">
        <i class="bi bi-trash"></i>
      </button>
    </div>
    <div class="quantity-control">
      <button class="btn btn-sm btn-outline-secondary btn-quantity">
        <i class="bi bi-dash"></i>
      </button>
      <span class="fw-bold">1</span>
      <button class="btn btn-sm btn-outline-secondary btn-quantity">
        <i class="bi bi-plus"></i>
      </button>
      <span class="ms-auto text-muted">{{ formataPreco(props.items.price) }}</span>
    </div>
  </div>
</template>
