import { defineStore } from "pinia";

const useUser = defineStore("user",{
    state:()=>({
        name:'张三',
        age:18,
        level:1
    })
})

export default useUser