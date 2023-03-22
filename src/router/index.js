import { createWebHistory, createRouter } from "vue-router"
import Home from "@/pages/Home.vue"
import Object from "@/pages/Object.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/object",
    name: "Object",
    component: Object,
  },
  {
    path: "/object/:id",
    name: "ObjectChild",
    component: Object,
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router