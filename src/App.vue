<script setup>
import ProductList from './components/ProductList.vue';

</script>
<template>

  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <h1 class="display-5 fw-bold">🛒 Carrinho de Compras</h1>
        <p class="text-muted">Aprenda Pinia construindo um carrinho completo</p>
      </div>
    </div>

    <div class="row g-4">
      <!-- Coluna Esquerda: Lista de Produtos -->
      <div class="col-lg-8">
        <ProductList />
      </div>

      <!-- Coluna Direita: Carrinho -->
      <div class="col-lg-4">
        <div class="cart-summary">
          <h5 class="mb-4">
            <i class="bi bi-cart3"></i> Seu Carrinho
            <span class="badge bg-primary rounded-pill ms-2">3</span>
          </h5>

          <!-- Itens do Carrinho -->
          <div id="cart-items">
            <!-- Item 1 -->
            <div class="cart-item">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="flex-grow-1">
                  <h6 class="mb-1">Notebook Gamer</h6>
                  <p class="text-muted small mb-0">R$ 3.999,00</p>
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
                <span class="ms-auto text-muted">R$ 3.999,00</span>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="cart-item">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="flex-grow-1">
                  <h6 class="mb-1">Mouse Gamer RGB</h6>
                  <p class="text-muted small mb-0">R$ 299,00</p>
                </div>
                <button class="btn btn-sm btn-outline-danger">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
              <div class="quantity-control">
                <button class="btn btn-sm btn-outline-secondary btn-quantity">
                  <i class="bi bi-dash"></i>
                </button>
                <span class="fw-bold">2</span>
                <button class="btn btn-sm btn-outline-secondary btn-quantity">
                  <i class="bi bi-plus"></i>
                </button>
                <span class="ms-auto text-muted">R$ 598,00</span>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="cart-item">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="flex-grow-1">
                  <h6 class="mb-1">Teclado Mecânico</h6>
                  <p class="text-muted small mb-0">R$ 599,00</p>
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
                <span class="ms-auto text-muted">R$ 599,00</span>
              </div>
            </div>
          </div>

          <!-- Resumo do Carrinho -->
          <div class="border-top pt-3 mt-3">
            <div class="d-flex justify-content-between mb-3">
              <span class="fw-bold">Total:</span>
              <span class="h5 mb-0 text-primary fw-bold">R$ 5.196,00</span>
            </div>
            <button class="btn btn-success w-100 mb-2">
              <i class="bi bi-check-circle"></i> Finalizar Compra
            </button>
            <button class="btn btn-outline-secondary w-100">
              <i class="bi bi-arrow-counterclockwise"></i> Limpar Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

