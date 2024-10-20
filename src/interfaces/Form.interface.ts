import type {TagInterface} from "@/interfaces/Tag.interface";

export interface FormInterface {
  isPosted: boolean,
  name: string
  price: number
  description: string
  category: string
  images: {
    files: File[]
    base: string[]
  }
  tags: TagInterface[]
}
