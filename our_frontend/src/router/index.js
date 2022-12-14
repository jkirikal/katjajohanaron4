import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from "../auth";
import ContactView from "../views/ContactView.vue";
import Post from "../views/Post.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUpView.vue";
import LogIn from "../views/LogInView.vue";

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
{
  path: "/post/:id",
  name: "Post",
  component: Post,
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
  path: "/addpost",
  name: "AddPost",
  component: AddPost,
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
  path: "/login",
  name: "LogIn",
  component: LogIn,
},
{
  path: "/signup",
  name: "SignUp",
  component: SignUp,
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
