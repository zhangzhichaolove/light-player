<script setup lang="ts">
const click = () => {
    console.log('click');
};
</script>

<template>
    <c-button @click="click">
        默认按钮
    </c-button>
    <c-button type="success" @click="click">
        成功按钮
    </c-button>
</template>

<style scoped>
</style>
