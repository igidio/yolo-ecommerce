<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="(tag, index) in tags"
      :key="index"
      class="flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors text-black bg-gray-100"
    >
      <span v-if="tag.conf && edit"
            class="mr-2 black text-[8px] rounded-full px-2 flex items-center justify-center" :class="[
              tag.conf > 0.75 ? 'bg-green-100  hover:bg-green-200' :
        tag.conf > 0.50 ? 'bg-lime-100 hover:bg-lime-200' :
        tag.conf > 0.25 ? 'bg-yellow-200 hover:bg-yellow-300' :
        'bg-red-100 text-gray-800 hover:bg-red-200'
            ]">
        {{ Math.round((tag.conf) * 100) }}%
      </span>

      <span>{{ tag.name }}</span>
      <Icon @click.stop="removeTag(index)" icon="mdi:close" color="black" width="18" class="ml-2" v-if="edit"/>
    </button>

    <button
      v-if="edit"
      class="flex px-3 py-1 rounded-full text-sm font-medium transition-colors text-white bg-black hover:dark:bg-gray-800">
      Agregar
      <Icon icon="mdi:plus" color="white" width="18" class="ml-2"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue'
import type {ModelRef} from 'vue'

interface Props {
  edit: boolean
}

withDefaults(defineProps<Props>(), {
  edit: false
})

interface TagInterface {
  name: string
  conf: number
}

const tags: ModelRef<TagInterface[]> = defineModel({required: true})

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}
</script>
