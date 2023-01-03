// 定义关于counter的store
import { defineStore } from "pinia";

import useUser from "./user";
const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
    friend: [
      { id: 1, name: "阿一" },
      { id: 2, name: "阿二" },
      { id: 3, name: "阿三" },
    ],
  }),
  getters: {
    // 1. 基本使用
    doubleCount(state) {
      return state.count * 2;
    },

    // 2. 一个getter引入另一个getter
    // 通过this来访问到当前store实例的所有其他属性
    doubleCountAddOne() {
      return this.doubleCount + 1;
    },

    // 3. getter也支持返回一个函数
    getFriendId(state) {
    //   return state.friend.find((item) => item.id === 1);
        return function(id){
            return state.friend.find(item=> item.id = id)
        }
    },

    // 4. getters中用到别的store中的数据
    showUserMsg(state){
        // 1. 获取user信息
        const userStore = useUser()
        // 2.获取自己的信息
        // 3.拼接信息
        return `${userStore.name} 要活到 ${state.count}`
    }
  },
  actions:{
    increment(state){
        console.log(state);
        // state只是调用方法的参数
        // 用this获取当前store的数据
        return this.count++
    }
  }
});

export default useCounter;
// defineStore("user")
// defineStore("home")
