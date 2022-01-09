import { createRouter, createWebHistory } from 'vue-router';

import FrontPage from './pages/Frontpage/FrontPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/Frontpage' },
        { path: '/frontpage', component: FrontPage },
    ]
})

export default router;