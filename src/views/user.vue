<template>
  <div class="home">
    <h2>user page</h2>
    <!-- <div>计数：{{counterStore.count}}</div> -->
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <div>等级：{{ level }}</div>

    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
import useUser from "@/stores/user";
import { storeToRefs } from "pinia";
const userStore = useUser();
const {name,age,level} = storeToRefs(userStore)
const changeState = () => {
    // 1. 一个个修改状态
    // userStore.name = '李四',
    // userStore.age = 19,
    // userStore.level = 100

    // 2. 一次性修改多个状态
    // userStore.$patch({
    //     name:'王五',
    //     age:20
    // })

    // 3. 设置为新对象来替换store的整个状态(很少用)
    // userStore.$state = {
    //     name:'阿达',
    //     age:21,
    //     level:20
    // }
}
const resetState = () => {
    userStore.$reset()
}
</script>

<style lang="less" scoped></style>
