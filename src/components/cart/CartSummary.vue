<script setup>
import { formataPreco } from '@/utils/currencyUtils';
import { useCartStore } from '../../stores/useCart'
const cartStore = useCartStore();
</script>

<template>
  <div class="d-flex justify-content-between mb-3">
    <span class="fw-bold">Total:</span>
    <span class="h5 mb-0 text-primary fw-bold">{{ formataPreco(cartStore.totalPrice) }}</span>
  </div>
  <button class="btn btn-success w-100 mb-2">
    <i class="bi bi-check-circle"></i> Finalizar Compra
  </button>
  <button class="btn btn-outline-secondary w-100">
    <i class="bi bi-arrow-counterclockwise"></i> Limpar Carrinho
  </button>
</template>
