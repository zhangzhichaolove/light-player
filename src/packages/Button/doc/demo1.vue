<script setup lang="ts">
const click = () => {
    console.log('click');
};
</script>

<template>
    <ds-button @click="click">
        默认按钮
    </ds-button>
    <ds-button type="success" @click="click">
        成功按钮
    </ds-button>
</template>

<style scoped>
</style>
