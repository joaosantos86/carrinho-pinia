<script setup>
import CartItem from './components/cart/CartItem.vue';
import CartSummary from './components/cart/CartSummary.vue';
import ProductList from './components/product/ProductList.vue';
import { useCartStore } from './stores/useCart';
const cartStore = useCartStore();
</script>
<template>

  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <h1 class="display-5 fw-bold">Carrinho de Compras</h1>
        <p class="text-muted">Carrinho de compras utilizando pinia e LocalStorage.</p>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-lg-8">
        <ProductList />
      </div>

      <div class="col-lg-4">
        <div class="cart-summary">
          <h5 class="mb-4">
            <i class="bi bi-cart3"></i> Seu Carrinho
            <span class="badge bg-primary rounded-pill ms-2">{{ cartStore.totalItems }}</span>
          </h5>

          <div id="cart-items">
             <CartItem v-for="item in cartStore.items" :key="item.id" :items="item"/>
          </div>

          <div class="border-top pt-3 mt-3">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

