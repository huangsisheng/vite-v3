/*
 * @Author: your name
 * @Date: 2021-07-07 14:05:24
 * @LastEditTime: 2021-07-07 14:39:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-v3\src\store\index.ts
 */
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import modules from './modules/index'

/* 在vuex 中继承typescript */
declare module '@vue/runtime-core' {
    // 声明自己的 store state
    interface State {
    }

    // 为 `this.$store` 提供类型声明
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}


// 为 store state 声明类型
export interface State { }

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
    state: {
    },
    mutations: {},
    actions: {},
    getters: {},
    modules
})
export default store