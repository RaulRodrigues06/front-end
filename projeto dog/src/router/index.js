import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import breed from '../views/breed.vue'
import breeds from '../views/breeds.vue'
import fav from '../views/fav.vue'
import signup from '../views/signup.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signup',
        component: signup
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/fav',
        component: fav
    },
    {
        path: '/breeds',
        component: breeds

    },
    {
        path: '/breeds/:id',
        component: breed
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router