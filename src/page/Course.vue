<template>
  <div class="container" style="margin-top: 100px; margin-bottom: 20px;">
    <div class="card mx-auto shadow-lg">
      <div class="card-body">
        <h2 class="card-title text-center">Welcome to: {{ product?.title }}</h2>
        <ul v-if="product" class="list-group list-group-flush">
          <li class="list-group-item"><strong>Title:</strong> {{ product.title }}</li>
          <li class="list-group-item"><strong>Price:</strong> ${{ product.price }}</li>
          <li class="list-group-item"><strong>Rating:</strong> ⭐{{ product.rate }}</li>
          <li class="list-group-item"><strong>Duration:</strong> {{ product.hour }} hrs</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { UseMyStore } from "../store/storeAPI";
const store = UseMyStore();
const route = useRoute();
const product = ref(null);
const fetchProduct = () => {
  const id = route.params.id;
  product.value = store.items.find((item) => item.id == id);
};
watch(route, fetchProduct, { immediate: true });
</script>
