<template>
  <HeaderLayout />

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderLayout from './components/HeaderLayout.vue'
</script>
