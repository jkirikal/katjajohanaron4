import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from "../auth";
import ContactView from "../views/ContactView.vue";
import Post from "../views/Post.vue";
import AddPost from "../views/AddPost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // beforeEnter: async(to, from, next) => {
    //     let authResult = await auth.authenticated();
    //     if (!authResult) {
    //         next('/login')
    //     } else {
    //         next();
    //     }
    // }
},
{
  path: "/contact",
  name: "Contact Us",
  component: ContactView,
},
{
  path: "/post/:id",
  name: "Post",
  component: Post,
},
{
  path: "/addpost",
  name: "AddPost",
  component: AddPost,
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
