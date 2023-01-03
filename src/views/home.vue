<template>
  <div class="home">
    <h2>home page</h2>
    <!-- <div>计数：{{counterStore.count}}</div> -->
    <div>计数：{{ count }}</div>

    <h1>-------------------使用getters----------------</h1>
    <div>计数：{{ counterStore.doubleCount }}</div>
    <div>计数+1: {{ counterStore.doubleCountAddOne }}</div>
    <div>寻找id: {{ counterStore.getFriendId(1).name }}</div>
    <div>获取别的store的信息进行拼接: {{ counterStore.showUserMsg }}</div>

    <h1>-------------------使用actions----------------</h1>
    <button @click="add">+1</button>

    <!-- 展示数据 -->
    <h1>轮播的数据</h1>
    <ul>
        <template v-for="item in homeStore.banners">
            <li>{{item.title}}</li>
        </template>
    </ul>
  </div>
  <br>
</template>

<script setup>
import { toRefs } from "vue";
import { storeToRefs } from "pinia";
import useCounter from "@/stores/counter";
import useHome from "@/stores/home"
const counterStore = useCounter();
// 用toRefs解构数据
// const { count } = toRefs(counterStore);

// 在pinia中也有解构数据的方法
const { count } = storeToRefs(counterStore);

const add = () => {
    counterStore.increment(12)
};

const homeStore = useHome()
homeStore.fetchHome()
</script>

<style lang="less" scoped></style>
