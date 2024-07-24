<!-- src/components/Products.vue -->
<template>
  <div>
    <input v-model="searchKeyword" placeholder="Search products" />
    <div v-for="product in filteredProducts" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
      <button @click="addToWishlist(product)">Add to Wishlist</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';



const searchKeyword = ref('');
const products = ref([
  { id: 1, name: 'Laptop', category: 'Electronics', price: 900 },
  { id: 2, name: 'Book', category: 'Books', price: 20 },
  { id: 3, name: 'T-shirt', category: 'Clothing', price: 30 },
  { id: 4, name: 'Headphones', category: 'Electronics', price: 100 },
  { id: 5, name: 'Novel', category: 'Books', price: 15 },
  { id: 6, name: 'Jeans', category: 'Clothing', price: 50 },
]);

console.log(products)
const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});

const addToCart = (product) => {
  // Add to cart logic
  console.log(`Added to cart: ${product.name}`);
};

const addToWishlist = (product) => {
  // Add to wishlist logic
  console.log(`Added to wishlist: ${product.name}`);
};
</script>
