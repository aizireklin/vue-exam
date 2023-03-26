import { createWebHistory, createRouter } from "vue-router"
import Home from "@/pages/Home.vue"
import Object from "@/pages/Object.vue"
import JSON from "@/pages/JSON.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/json",
    name: "JSON",
    component: JSON,
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