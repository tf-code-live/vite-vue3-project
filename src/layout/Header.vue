<template>
    <div class="header">
        <el-icon @click="collapse" v-if="isCollapse" :size="20"><expand /></el-icon>
        <el-icon @click="collapse" v-else :size="20"><fold /></el-icon>
        <el-breadcrumb separator="/">
            <template v-for="(route, idx) in routerMatched">
                <el-breadcrumb-item
                    v-if="idx !== (routerMatched.length - 1)"
                    :to="{ path: route.path }">
                    {{ route.meta.title }}
                </el-breadcrumb-item>
                <el-breadcrumb-item
                    v-else>
                    {{ route.meta.title }}
                </el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>

<script setup lang='ts'>
import {computed} from 'vue'
import { useStore } from 'vuex'
import { useRouter, RouteRecordRaw } from 'vue-router'
const store = useStore()
let isCollapse = computed(() => store.state.app.isCollapse)
const collapse = () => {
    store.dispatch('app/set_collapse')
}

const router = useRouter()
let routerMatched = computed(() => {
    return (router.currentRoute.value.matched || []).filter((item: RouteRecordRaw) => {
        return item.path !== '/'
    })
})
</script>
<style lang='scss' scoped>
.header {
    display: flex;
    align-items: center;
    height: 44px;
    border-bottom: 1 solid;
    .el-icon {
        margin: 15px;
    }
}
</style>