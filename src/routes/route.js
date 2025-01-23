import { createRouter, createMemoryHistory } from "vue-router";
import Home from '../page/Home.vue';
import Course from '../page/Course.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/course', component: Course },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;

