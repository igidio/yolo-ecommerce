import {createRouter, createWebHistory} from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import PostPage from "@/pages/PostPage.vue";
import DetailPage from "@/pages/DetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/post',
      name: 'post',
      component: PostPage
    },
    {
      path: '/post/:id',
      name: 'detail',
      component: DetailPage
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.name == 'index') return { name: 'post' }
})

export default router
