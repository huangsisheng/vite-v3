/*
 * @Author: your name
 * @Date: 2021-07-07 13:56:01
 * @LastEditTime: 2021-07-07 14:29:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-v3\vite.config.ts
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 别名
        alias: [
            // /@/xxxx => src/xxxx
            {
                find: /\@\//,
                replacement: pathResolve('src') + '/',
            }
        ],
    },
})
