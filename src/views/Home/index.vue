<!--
 * @Author: your name
 * @Date: 2021-07-07 14:07:44
 * @LastEditTime: 2021-07-07 14:27:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-v3\src\views\Home\index.vue
-->
<template>
  <div class="container">
      home
  </div>
</template>

<script lang="ts">
import {reactive,toRefs} from "vue"
 interface dataProps{

 }
export default{
  name:"",
  setup() {
   const state = reactive<dataProps>({

   })
    return {
       ...toRefs(state)
    }
  }
}
</script>

<style lang="" scoped>
</style>
