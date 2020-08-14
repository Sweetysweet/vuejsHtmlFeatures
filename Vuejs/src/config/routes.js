export default [
    {
        path: '/',
        name: 'home',
        meta: { layout: 'main' },
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'empty' },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: { layout: 'empty' },
        component: () => import('../views/Register.vue')
    },
    {
        path: '/categories',
        name: 'Categories',
        meta: { layout: 'main' },
        component: () => import('../views/Categories.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        meta: { layout: 'main' },
        component: () => import('../views/Detail.vue')
    },
    {
        path: '/history',
        name: 'history',
        meta: { layout: 'main' },
        component: () => import('../views/History.vue')
    },
    {
        path: '/planning',
        name: 'planning',
        meta: { layout: 'main' },
        component: () => import('../views/Planning.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        meta: { layout: 'main' },
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/record',
        name: 'record',
        meta: { layout: 'main' },
        component: () => import('../views/Record.vue')
    },
]