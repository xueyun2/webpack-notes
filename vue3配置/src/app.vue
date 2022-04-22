<template>
    <div>
        <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/about">其他页面</router-link>
            </li>
        </ul>
        <input type="text" value="">
        <router-view />
    </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        console.log(store.state.count)
    },
}
</script>
<style lang="scss"> 
    @use './assets/scss/public';
    @use "./assets/css/iconfont.css";
    .button{
        background: red;
    }
</style>