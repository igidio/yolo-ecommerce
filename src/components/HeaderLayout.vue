<template>
  <header class="bg-background border-b border-border">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">

      <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="text-2xl font-bold text-primary">YOLOv11</a>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-4">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Search Bar -->
        <div class="hidden md:block flex-1 max-w-sm mx-4">
          <div class="relative">
            <input
              type="search"
              placeholder="Search products..."
              class="w-full py-2 pl-10 pr-4 text-sm text-foreground bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon icon="mdi:search" width="24"/>
            </div>
          </div>
        </div>

        <!-- User Account and Cart -->
        <div class="flex space-x-4">
          <a
            href="/cart"
            class="text-muted-foreground hover:text-primary transition-colors relative"
          >
            <Icon icon="mdi:shopping-cart-outline" height="24" />
            <span
              class="absolute -top-2 -right-4 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartItemCount }}
            </span>
          </a>
          <div
            class="relative"
            @mouseenter="showUserMenu = true"
            @mouseleave="showUserMenu = false"
          >
            <button
              class="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon icon="mdi:user-outline" height="24" />
            </button>
            <div
              v-if="showUserMenu"
              class="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-1 z-10"
            >
              <a
                href="/account"
                class="block px-4 py-2 text-sm text-foreground hover:bg-accent"
              >Mi cuenta</a
              >
              <a
                href="/"
                class="block px-4 py-2 text-sm text-foreground hover:bg-accent"
              >Lista de deseos</a
              >
              <a
                href="/"
                class="block px-4 py-2 text-sm text-foreground hover:bg-accent"
              >Cerrar sesión</a
              >
            </div>
          </div>

        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon icon="mdi:menu" />
            <Icon icon="mdi:times" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md"
        >
          {{ item.label }}
        </a>
      </div>
      <div class="px-4 py-3">
        <div class="relative">
          <input
            type="search"
            placeholder="Search products..."
            class="w-full py-2 pl-10 pr-4 text-sm text-foreground bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon icon="mdi:search" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Categorías', href: '/' },
  { label: 'Novedades', href: '/' },
  { label: 'Ofertas', href: '/' }
]

const cartItemCount = ref(3)
const showUserMenu = ref(false)
const mobileMenuOpen = ref(false)
</script>

