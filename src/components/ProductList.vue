<script setup>
import ProductCard from './ProductCard.vue';
const products = [
  {
    id: 1,
    name: "Notebook Gamer",
    description: "Notebook com placa de vídeo dedicada, ideal para jogos e trabalho pesado.",
    price: 3999,
    image: "/laptop.webp"
  },
  {
    id: 2,
    name: "Mouse Gamer RGB",
    description: "Mouse com iluminação RGB, 7 botões programáveis e DPI ajustável.",
    price: 299,
    image: "/mouse.webp"
  },
  {
    id: 3,
    name: "Teclado Mecânico",
    description: "Teclado mecânico com switches Cherry MX, iluminação RGB e cabo removível.",
    price: 599,
    image: "/keyboard.webp"
  },
  {
    id: 4,
    name: "Monitor 27\" 4K",
    description: "Monitor Ultra HD com tecnologia IPS, 144Hz e suporte para HDR.",
    price: 2499,
    image: "/monitor.webp"
  }
]
</script>
<template>
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0"><i class="bi bi-box-seam"></i> Produtos Disponíveis</h5>
    </div>
    <div class="card-body">
      <div class="row g-2">
        <div class="col-6" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
