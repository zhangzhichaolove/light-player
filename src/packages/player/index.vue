<script setup lang='ts'>
import { reactive } from 'vue';

const options = reactive({
    volume: 1,
    muted: true,
    loop: false,
    preload: '',
    src: 'http://192.168.10.6:520/play/%E3%80%90%E9%BB%91%E8%8B%B9%E6%9E%9C%E3%80%91%E6%89%8B%E6%8A%8A%E6%89%8B%E9%BB%91%E8%8B%B9%E6%9E%9C%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B-%E5%9F%BA%E4%BA%8E%20OpenCore%EF%BC%88%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%E4%B8%AD%EF%BC%89/%E3%80%90%E9%BB%91%E8%8B%B9%E6%9E%9C%E3%80%91%E6%89%8B%E6%8A%8A%E6%89%8B%E9%BB%91%E8%8B%B9%E6%9E%9C%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B-%E5%9F%BA%E4%BA%8E%20OpenCore%EF%BC%88%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%E4%B8%AD%EF%BC%89-P1-%E7%AC%AC1%E8%8A%82%20%E6%95%99%E7%A8%8B%E6%A6%82%E8%A7%88.mp4',
    poster: 'http://192.168.10.6:520/image/%E3%80%90%E9%BB%91%E8%8B%B9%E6%9E%9C%E3%80%91%E6%89%8B%E6%8A%8A%E6%89%8B%E9%BB%91%E8%8B%B9%E6%9E%9C%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B-%E5%9F%BA%E4%BA%8E%20OpenCore%EF%BC%88%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%E4%B8%AD%EF%BC%89.jpg'
})
const videoEvents = null
</script>
<template>
    <div>
        <video class="c-player-main" :controls="true" :webkit-playsinline="options" :playsinline="options"
            v-bind="videoEvents" :volume="options.volume" :muted="options.muted" :loop="options.loop"
            :preload="options.preload" :src="options.src" :poster="options.poster">您的浏览器不支持Video标签。</video>
    </div>
</template>

<style scoped lang='css'>
.c-player-main {
    width: 100%;
}
</style>