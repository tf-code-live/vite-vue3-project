<template>
    <div class="home">
        <p>Home</p>
        <el-button type="primary">el-button</el-button>
        <p>
            <el-checkbox
                v-model="checked5"
                label="Option 1"
                size="small"
            ></el-checkbox>
        </p>
        <Child foo="Vite" @edit="edit" @add="add"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { IGlobalState } from '@/store'
import Child from './Child.vue'

const homeState = useStore<IGlobalState>()
const checked5 = ref(false)

const edit = (number: number) => {
    console.log(number)
}
const add = (str: number) => {
    console.log(str)
}
</script>
<style lang='scss' scoped>
.home {
    color: $test-color;
    font-size: 32px;
}
</style>