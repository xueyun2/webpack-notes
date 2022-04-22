<template>
    <div>
        <div>
            首页5
            <i class="iconfont icon-bianji"></i>
        </div>
        <img src="~@/assets/img/tu.jpeg" alt />
        <button type="button" class="button">按888</button>
        <div class="m-t-20"></div>
        <div v-for="(item,index) in this.swiperList" :key="index">
            <!-- {{item.image_src}} -->
            <img :src="item.image_src" alt />
        </div>
    </div>
</template>
<script>
import { onMounted , toRefs , reactive} from 'vue'
import { swiperdata } from '@/service/api'
export default {
    setup() {
        const state = reactive({
            swiperList:[]
        })
        onMounted(async () => {
            let res = await swiperdata()
            state.swiperList = res.data.message
            console.log('输入',res.data.message)
        })
        return {
            ...toRefs(state),
        }
    },
}
</script>
<style scoped>
img {
    width: 400px;
}
</style>