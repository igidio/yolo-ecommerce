<template>
  <div class="flex flex-col p-4 gap-4">
    <h1 class="text-xl font-bold text-center">Producto creado exitosamente</h1>
    <button class="flex flex-row hover:bg-black hover:text-white px-6 py-3 rounded-md font-semibold transition-colors justify-center w-fit self-center" @click="clear">
      Crear otro producto
    </button>
  </div>
</template>

<script setup lang="ts">
import {useProduct} from "@/composables/product.composable";
const { clear } = useProduct()
</script>
