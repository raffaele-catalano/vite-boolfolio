import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import ProjectDetails from './pages/ProjectDetails.vue';

const router = createRouter ({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path :'/details/:slug',
            name: 'projectdetails',
            component : ProjectDetails
        },
    ]
})

export {router};