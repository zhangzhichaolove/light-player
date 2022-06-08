<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Button } from 'lib';
const button = ref<CButtonElement>()
const type = ref<CButtonPropsType>("success")
onMounted(() => {
    button.value?.setProperty('bg', '#f0f')
    button.value?.setType('warn')
})
const click = () => {
    console.log('click');
};
</script>

<template>
    <Button type="default" @click="click">默认按钮</Button>
    <c-button ref="button" v-model:type="type" @click="click">
        警告按钮
    </c-button>
    <c-button type="success" @click="click">
        成功按钮
    </c-button>
</template>

<style scoped>
</style>
