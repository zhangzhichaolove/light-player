<script setup lang="ts">
import { routes } from '../router/index'
const coms = routes[1].children
</script>

<template>
    <div class="container">
        <div class="catalogue">
            <span class="title">目录</span>
            <router-link class="item" v-for="com in coms" :to="`/guide/${com.path}`">
                <span>
                    {{ com.name }}
                </span>
            </router-link>
        </div>
        <main class="content">
            <router-view />
        </main>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}

.catalogue {
    width: 300px;
    display: flex;
    flex-direction: column;
}

.catalogue>.title {
    font-weight: 700;
    font-size: 25px;
}

.item {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.item:hover {
    background: #f5f5f5;
}

.content {
    flex: 1;
}
</style>
