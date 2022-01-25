<template>
    <div class="sidebar-logo-container">
        <router-link
            v-if="collapse"
            key="collapse"
            class="sidebar-logo-link"
            to="/"
        >
            <img
                style="height: 32px;"
                src="@/assets/cmb.png"
            >
        </router-link>
        <router-link
            v-else
            key="expand"
            class="sidebar-logo-link"
            to="/"
        >
            <img
                style="height: 34px;"
                src="@/assets/company.png"
            >
        </router-link>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{collapse: boolean}>(), {
    collapse: true
})

</script>

<style lang="scss" scoped>
.sidebar-logo-container {
	position: relative;
	width: 100%;
	height: 44px;
	line-height: 44px;
	background: #ffffff;
	text-align: center;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		width: 1px;
		height: 50%;
		top: 25%;
		right: 0;
		background: #dddddd;
	}

	& .sidebar-logo-link {
        display: flex;
        align-items: center;
        justify-content: center;
		height: 100%;
		width: 100%;

	}
}
</style>
