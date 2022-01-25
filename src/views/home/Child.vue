<template>
    Child
    <p>{{foo}}</p>
    <el-button type="primary" @click="edit">edit</el-button>
    <el-button type="primary" @click="add">add</el-button>
</template>

<script setup lang='ts'>
const props = defineProps<{
    foo: string
    bar?: number
}>()

const emit = defineEmits<{
    (e: 'edit'): void
    (e: 'add'): void
}>()

const edit = () => {
    emit('edit', 1)
}
const add = () => {
    emit('add', 'add')
}

</script>
<style lang='scss' scoped>

</style>