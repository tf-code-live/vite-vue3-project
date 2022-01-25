<template>
    <el-container>
        <el-aside>
            <Sidebar />
        </el-aside>
        <el-container >
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import Sidebar from "@/layout/Sidebar/index.vue"
import Header from "@/layout/Header.vue"
</script>
<style lang='scss' scoped>
.el-container {
    height: 100%;
    .el-aside {
        height: 100%;
        width: auto;
        min-width: 64px;
    }
    .el-header {
        height: 44px;
        padding: 0;
    }
}
</style>