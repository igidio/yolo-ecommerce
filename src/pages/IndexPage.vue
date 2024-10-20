<template>
  <CreateProduct v-if="!form.isPosted"/>
  <ProductVisualization v-else/>
</template>

<script setup lang="ts">
import CreateProduct from '@/components/CreateProduct.vue'
import ProductVisualization from "@/components/ProductVisualization.vue"
import {useProduct} from "@/composables/product.composable";

const { form } = useProduct()
</script>
