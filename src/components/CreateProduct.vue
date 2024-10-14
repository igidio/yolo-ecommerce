<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-2xl font-bold text-foreground mb-6">Publicar nuevo producto</h1>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Product Name -->
      <div>
        <label for="productName" class="block text-sm font-medium text-foreground mb-1">Nombre</label>
        <input
          id="productName"
          v-model="form.productName"
          type="text"
          required
          class="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <!-- Product Description -->
      <div>
        <label for="description" class="block text-sm font-medium text-foreground mb-1">Descripción</label>
        <textarea
          id="description"
          v-model="form.description"
          rows="4"
          class="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>

      <!-- Price -->
      <div>
        <label for="price" class="block text-sm font-medium text-foreground mb-1">Precio</label>
        <div class="relative">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">$</span>
          <input
            id="price"
            v-model="form.price"
            type="number"
            step="0.01"
            required
            class="w-full pl-7 pr-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <!-- Category -->
      <div>
        <label for="category" class="block text-sm font-medium text-foreground mb-1">Categoría</label>
        <select
          id="category"
          v-model="form.category"
          required
          class="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Selecciona una categoría</option>
          <option value="electronics">Productos electrónicos</option>
          <option value="clothing">Ropa</option>
          <option value="books">Libros</option>
          <option value="home">Hogar</option>
        </select>
      </div>

      <!-- Multiple Image Upload -->
      <div>
        <label for="images" class="block text-sm font-medium text-foreground mb-1">Imágenes del producto</label>
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-input rounded-md">
          <div class="space-y-1 text-center">
            <svg class="mx-auto h-12 w-12 text-muted-foreground" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                 aria-hidden="true">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-muted-foreground">
              <label for="images"
                     class="relative cursor-pointer bg-background rounded-md font-medium text-primary hover:text-primary-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                <span>Cargar imágenes</span>
                <input id="images" name="images" type="file" multiple @change="handleImageUpload" class="sr-only" />
              </label>
              <p class="pl-1">o arrastra y suelta los archivos acá.</p>
            </div>
            <p class="text-xs text-muted-foreground">Admite archivos PNG, JPG, GIF de hasta 10 MB</p>
          </div>
        </div>
        <div v-if="form.images.length > 0" class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <div v-for="(image, index) in form.images" :key="index" class="relative">
            <img :src="image" alt="Product preview" class="h-24 w-full object-cover rounded-md" />
            <button @click="removeImage(index)"
                    class="absolute top-0 right-0 bg-black text-foreground rounded-full p-1 m-1 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary">
              <Icon icon="mdi:close" color="white" width="24" />
            </button>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Add Product
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { Icon } from '@iconify/vue'

interface FormInterface {
  productName: string
  description: string
  price: string
  category: string
  images: string[]
}

const form: Ref<FormInterface> = ref({
  productName: '',
  description: '',
  price: '',
  category: '',
  images: []
})

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files) return
  const files = input.files
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (file.size > 10 * 1024 * 1024) {
      alert(`El archivo ${file.name} pesa demasiado. El tamaño máximo es de 10MB.`)
      continue
    }
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && e.target.result) {
        form.value.images.push(e.target.result as string)
      }
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = (index: number) => {
  form.value.images.splice(index, 1)
}

const handleSubmit = () => {
  form.value = {
    productName: '',
    description: '',
    price: '',
    category: '',
    images: []
  }
  alert('Producto agregado exitosamente')
}
</script>
