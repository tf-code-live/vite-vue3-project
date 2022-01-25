<template>
    <!-- 一个路由下只有一个子路由的时候 只渲染这个子路由 -->
    <template v-if="theOnlyOneChildRoute && !theOnlyOneChildRoute.children">
		<el-menu-item :index="resolvePath(theOnlyOneChildRoute.path)">
			<component :is="theOnlyOneChildRoute.meta.icon"></component>
			<template #title>
				<span>{{ theOnlyOneChildRoute.meta.title }}</span>
			</template>
		</el-menu-item>
    </template>
    <!-- 多个子路由时 -->
    <el-sub-menu
		v-else
		:index="resolvePath(item.path)"
		popper-append-to-body
    >
		<template #title>
			<component :is="item.meta.icon" />
			<span class="submenu-title">{{ item.meta.title }}</span>
		</template>
		<sidebar-item
			v-for="child in item.children"
			:key="child.path"
			:item="child"
			:base-path="resolvePath(child.path)"
		>
    	</sidebar-item>
    </el-sub-menu>
</template>

<script setup lang='ts'>
import { computed } from "vue"
import { RouteRecordRaw } from "vue-router"

interface Props {
    item: RouteRecordRaw
    basePath: String
}
const props = withDefaults(defineProps<Props>(), {
    item: {},
    basePath: ""
})
let { item } = props
// 子路由数量
const showingChildNumber = computed(() => {
    // hidden路由排除掉 只算可渲染子路由
    const children = (props.item.children || []).filter(
        (child: RouteRecordRaw) => {
            if (child.meta && child.meta.hidden) return false
            return true
        }
    )
    return children.length
})
// 要渲染的单个路由 如果该路由只有一个子路由 默认直接渲染这个子路由
// theOnlyOneChildRoute直接通过el-menu-item组件来渲染
const theOnlyOneChildRoute = computed(() => {
    // 多个children时 直接return null 多children需要用el-submenu来渲染并递归
    if (showingChildNumber.value > 1) {
        return null
    }
    // 只有一个子路由 还要筛选路由meta里有无hidden属性 hidden：true则过滤出去 不用管
    // 路由meta里我们会配置hidden属性表示不渲染成菜单，比如login 401 404页面是不渲染成菜单的
    if (item.children) {
        for (const child of item.children) {
            if (!child.meta || !child.meta.hidden) {
                return child
            }
        }
    }
    // showingChildNumber === 0 无可渲染的子路由 （可能有子路由 hidden属性为true）
    // 无可渲染chiildren时 把当前路由item作为仅有的子路由渲染
    return {
        ...props.item,
        path: "" // resolvePath避免resolve拼接时 拼接重复
    }
})
const resolvePath = (childPath: string) => {
    return `${props.basePath === "/" ? "" : props.basePath}${
        childPath ? "/" : ""
    }${childPath}`
}
</script>
<style lang='scss' scoped>
.el-menu-item * {
    vertical-align: middle !important;
}
.icon {
    margin-right: 5px;
}
</style>