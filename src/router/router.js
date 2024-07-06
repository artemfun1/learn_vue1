import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage'
import PostsPage from '../pages/PostsPage'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import PostsPageWithVuex from '../pages/PostsPageWithVuex'
import PostsPageCompositionApi from '../pages/PostsPageCompositionApi'

const routes = [
  {
    path:'/',
    component: MainPage,
  },
  {
    path:'/posts',
    component: PostsPage,
  },
  {
    path:'/about',
    component: About,
  },
  {
    path:'/posts/:id',
    component: PostIdPage,
  },
  {
    path:'/store',
    component: PostsPageWithVuex,
  },
  {
    path:'/comp',
    component: PostsPageCompositionApi,
  },
 
]


const router = createRouter({
  routes,
  history:createWebHistory(process.env.BASE_URL)
})


export default router