import { createRouter, createWebHistory } from "vue-router";

const LayoutDefault = () => import("../layouts/default.vue");

const Dashboard = () => import("../views/index.vue");

const routes = [
    {
        path: "/",
        component: LayoutDefault,
        children: [
            {
                path: "/",
                component: Dashboard,
                name: "dashboard",
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
