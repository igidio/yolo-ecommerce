<template>
  <ProductVisualization/>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import {onBeforeMount} from "vue";
import ProductVisualization from "@/components/ProductVisualization.vue";
import {useProduct} from "@/composables/product.composable";

const router = useRouter()
const { form } = useProduct()

onBeforeMount(() => {
  if ( !form.value.isPosted ) router.push({ name: "post"})
})
</script>
