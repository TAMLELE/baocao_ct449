import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import AddPostView from '../views/AddPost.vue'
import PostView from '../views/Post.vue'
import EditPostView from '../views/EditPost.vue'
import AboutView from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPostView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPostView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
