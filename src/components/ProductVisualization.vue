<template>


  <div class="min-h-screen bg-background text-foreground p-4 md:p-8">

    <div class="max-w-6xl mx-auto">
    <SubmitMessage/>
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Product Image Slider -->
        <div class="bg-muted rounded-lg overflow-hidden relative">
          <div class="aspect-w-1 aspect-h-1">
            <img
              :src="(form.images.base.length > 0) ? form.images.base[currentImageIndex] : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'"
              :alt="`${form.name} - Imagen ${currentImageIndex + 1}`"
              class=" aspect-[1/1] h-128 w-full object-cover"
            />
          </div>
          <button
            v-if="hasManyFiles"
            @click="prevImage"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-100"
            aria-label="Previous image"
          >
            <Icon icon="mdi:chevron-left"/>
          </button>
          <button
            v-if="hasManyFiles"
            @click="nextImage"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-100"
            aria-label="Next image"
          >
            <Icon icon="mdi:chevron-right"/>
          </button>
          <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button
              v-for="(_, index) in form.images.base"
              :key="index"
              @click="currentImageIndex = index"
              :class="[
                  'w-2 h-2 rounded-full transition-colors',
                  currentImageIndex === index ? 'bg-primary' : 'bg-background/80'
                ]"
              :aria-label="`Go to image ${index + 1}`"
            ></button>
          </div>
        </div>

        <!-- Product Details -->
        <div class="flex flex-col justify-between">
          <div>
            <h1 class="text-3xl font-bold mb-4">{{ form.name }}</h1>
            <h6 class="text-xl font-bold mb-4">{{ form.category }}</h6>
            <p class="text-xl font-semibold mb-4 text-primary">${{ form.price.toFixed(2) }}</p>
            <p class="text-muted-foreground mb-6">{{ form.description }}</p>
            <TagButton v-model="form.tags"/>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              class="flex flex-row text-black border-2 border-black hover:bg-black hover:text-white px-6 py-3 rounded-md font-semibold transition-colors w-full justify-center"
            >
              <Icon icon="mdi:cart" height="20" class="mr-2"/>
              <span>Agregar al carrito</span>

            </button>
            <button
              class="flex flex-row bg-black text-white hover:bg-gray-700 px-6 py-3 rounded-md font-semibold transition-colors w-full justify-center"
            >
              <Icon icon="mdi:wallet-bifold" color="white" height="20" class="mr-2"/>
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {Icon} from "@iconify/vue";
import TagButton from "@/components/TagButton.vue";
import SubmitMessage from "@/components/SubmitMessage.vue";
import {useProduct} from "@/composables/product.composable";
const { form } = useProduct()

const currentImageIndex = ref(0)

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % form.value.images.base.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + form.value.images.base.length) % form.value.images.base.length
}

const hasManyFiles = computed(() => form.value.images.base.length > 1)

</script>
