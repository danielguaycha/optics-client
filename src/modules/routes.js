import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from './auth/auth.routes';
Vue.use(VueRouter)

//Adding here all routes for modules
const routerList = [
    authRoutes
]

// auto-adding routes
let routes = [
    {
        path: "/",
        name: "home",
        redirect: '/login'
    },
    {
        path: '/main',
        name: 'main',
        component: () =>
            import ('./master/views/Main'),
    }
]

for (const list of routerList) {
    for (const route of list) {
        routes.push(route);
    }
}
const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
    const private_ = (to.meta.private);

    if (!localStorage.getItem('token') && private_ === undefined) {
        return next({ name: `login`, query: { redirect: to.fullPath } })
    }

    next();
});

export default router
