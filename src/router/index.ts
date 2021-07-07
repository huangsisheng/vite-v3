/*
 * @Author: your name
 * @Date: 2021-07-07 14:05:31
 * @LastEditTime: 2021-07-07 14:26:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-v3\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        name: "home",
        path: '/',
        component: import(/* webpackChunkName: "block" */ "@/views/Home/index.vue"),
        meta: {
            title: '首页'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router

