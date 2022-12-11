import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from "../auth";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
},
{
  path: "/contact",
  name: "Contact Us",
  component: ContactView,
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
