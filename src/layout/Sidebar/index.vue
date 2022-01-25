
<template>
    <Logo :collapse="isCollapse" />
    <el-menu
		class="el-menu-vertical-demo"
		mode="vertical"
		router
		:default-active="activeMenu"
		background-color="#304156"
		active-text-color="#1fb860"
		text-color="#bfcbd9"
		:collapse="isCollapse"
		:collapse-transition="true"
		:unique-opened="false"
    >
		<sidebar-item
			v-for="route in menuRoutes"
			:key="route.path"
			:item="route"
			:base-path="route.path"
		/>
    </el-menu>
</template>

<script setup lang='ts'>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"
import { routes } from "@/router"
import SidebarItem from "@/layout/Sidebar/SidebarItem.vue"
import Logo from "@/layout/Sidebar/Logo.vue"

const route = useRoute()
let activeMenu = computed(() => {
    return route.path
})
const menuRoutes = computed(() => routes)

const store = useStore()
let isCollapse = computed(() => {
    return store.state.app.isCollapse
})
</script>
<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.el-menu {
    height: calc(100% - 44px);
    .menu-icon {
        margin-right: 16px;
        margin-left: 5px;
        vertical-align: middle;
    }
}
</style>