import {ref, type Ref} from "vue";
import type {FormInterface} from "@/interfaces";

const form: Ref<FormInterface> = ref({
  isPosted: false,
  name: '',
  price: 0,
  description: '',
  category: '',
  images: {
    base: [],
    files: []
  },
  tags: []
})

export function useProduct() {
  const clear = () => {
    form.value = {
      isPosted: false,
      name: '',
      price: 0,
      description: '',
      category: '',
      images: {
        base: [],
        files: []
      },
      tags: []
    }
  }

  const post = () => {
    form.value.isPosted = true
  }

  return {form, clear, post}
}
