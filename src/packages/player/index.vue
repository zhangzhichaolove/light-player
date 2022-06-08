<script setup lang='ts'>
import { timeFormat, isMobile } from '@/utils';
import { onMounted, reactive, ref, unref } from 'vue';
const options = reactive({
    //音量
    volume: 0.2,
    //静音
    muted: false,
    //音量
    loop: false,
    control: true,
    controlShow: true,
    progress: 50,
    preload: '',
    src: 'http://192.168.10.6:520/play/%E3%80%90%E9%BB%91%E8%8B%B9%E6%9E%9C%E3%80%91%E6%89%8B%E6%8A%8A%E6%89%8B%E9%BB%91%E8%8B%B9%E6%9E%9C%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B-%E5%9F%BA%E4%BA%8E%20OpenCore%EF%BC%88%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%E4%B8%AD%EF%BC%89/%E3%80%90%E9%BB%91%E8%8B%B9%E6%9E%9C%E3%80%91%E6%89%8B%E6%8A%8A%E6%89%8B%E9%BB%91%E8%8B%B9%E6%9E%9C%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B-%E5%9F%BA%E4%BA%8E%20OpenCore%EF%BC%88%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%E4%B8%AD%EF%BC%89-P1-%E7%AC%AC1%E8%8A%82%20%E6%95%99%E7%A8%8B%E6%A6%82%E8%A7%88.mp4',
    poster: 'http://192.168.10.6:520/image/%E3%80%90%E9%BB%91%E8%8B%B9%E6%9E%9C%E3%80%91%E6%89%8B%E6%8A%8A%E6%89%8B%E9%BB%91%E8%8B%B9%E6%9E%9C%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B-%E5%9F%BA%E4%BA%8E%20OpenCore%EF%BC%88%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%E4%B8%AD%EF%BC%89.jpg',
    currentTime: 0,
    duration: 0,
    //自定义播放状态:play/pause
    playState: 'play'
})
const videoEvents = null
let time = 0
const move = () => {
    options.controlShow = true;
    time && clearTimeout(time);
    time = setTimeout(() => {
        options.controlShow = false;
    }, 2000);
};
const videoRef = ref();

// 1、loadstart：视频查找。当浏览器开始寻找指定的音频/视频时触发，也就是当加载过程开始时
const loadstart = (e: any) => {
    console.log('提示视频的元数据已加载')
    console.log(e)
}

// 2、durationchange：时长变化。当指定的音频/视频的时长数据发生变化时触发，加载后，时长由 NaN 变为音频/视频的实际时长
const durationchange = (e: any) => {
    console.log('提示视频的时长已改变')
    console.log(e)
}

// 3、loadedmetadata ：元数据加载。当指定的音频/视频的元数据已加载时触发，元数据包括：时长、尺寸（仅视频）以及文本轨道
const loadedmetadata = function (e: any) {
    console.log('提示视频的元数据已加载')
    console.log(e)
}

// 4、loadeddata：视频下载监听。当当前帧的数据已加载，但没有足够的数据来播放指定音频/视频的下一帧时触发
const loadeddata = function (e: any) {
    console.log('提示当前帧的数据是可用的')
    console.log(e)
}

// 5、progress：浏览器下载监听。当浏览器正在下载指定的音频/视频时触发
const progress = function (e: any) {
    console.log('提示视频正在下载中')
    console.log(e)
}

// 6、canplay：可播放监听。当浏览器能够开始播放指定的音频/视频时触发
const canplay = function (e: any) {
    console.log('提示该视频已准备好开始播放')
    const video = unref(videoRef);
    options.currentTime = video.currentTime
    options.duration = video.duration
    options.volume = 0.1
    console.log(video.networkState, video.code, video.error)
    video.play()
}
// 7、canplaythrough：可流畅播放。当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时触发
const canplaythrough = function (e: any) {
    console.log('提示视频能够不停顿地一直播放')
    console.log(e)
}

// 8、play：播放监听
const play = function (e: any) {
    console.log('提示该视频正在播放中')
    console.log(e)
}

// 9、pause：暂停监听
const pause = function (e: any) {
    console.log('暂停播放')
    console.log(e)
}

// 10、seeking：查找开始。当用户开始移动/跳跃到音频/视频中新的位置时触发
const seeking = function (e: any) {
    console.log('开始移动进度条')
    console.log(e)
}

// 11、seeked：查找结束。当用户已经移动/跳跃到视频中新的位置时触发
const seeked = function (e: any) {
    console.log('进度条已经移动到了新的位置')
    console.log(e)
}

// 12、waiting：视频加载等待。当视频由于需要缓冲下一帧而停止，等待时触发
const waiting = function (e: any) {
    console.log('视频加载等待')
    console.log(e)
}

// 13、playing：当视频在已因缓冲而暂停或停止后已就绪时触发
const playing = function (e: any) {
    console.log('playing')
    console.log(e)
}

// 14、timeupdate：目前的播放位置已更改时，播放时间更新
const timeupdate = function (e: any) {
    const video = unref(videoRef);
    options.currentTime = video.currentTime
    options.progress = video.currentTime / video.duration * 100
    console.log('timeupdate')
    console.log(e)
}

// 15、ended：播放结束
const ended = function (e: any) {
    console.log('视频播放完了')
    options.playState = 'pause'
    console.log(e)
}

// 16、error：播放错误
const error = function (e: any) {
    console.log('视频出错了')
    options.playState = 'pause'
    console.log(e)
}

// 17、volumechange：当音量更改时
const volumechange = function (e: any) {
    console.log('volumechange')
    console.log(e)
}

// 18、stalled：当浏览器尝试获取媒体数据，但数据不可用时
const stalled = function (e: any) {
    console.log('stalled')
    options.playState = 'pause'
    console.log(e)
}

// 19、ratechange：当视频的播放速度已更改时
const ratechange = function (e: any) {
    console.log('ratechange')
    console.log(e)
}
const videoEmits = new Map<String, Function>([['loadstart', loadstart],
['durationchange', durationchange], ['loadedmetadata', loadedmetadata],
['loadeddata', loadeddata], ['progress', progress], ['canplay', canplay],
['canplaythrough', canplaythrough], ['play', play], ['pause', pause],
['seeking', seeking], ['seeked', seeked], ['waiting', waiting],
['playing', playing], ['timeupdate', timeupdate], ['ended', ended],
['error', error], ['volumechange', volumechange], ['stalled', stalled],
['ratechange', ratechange]])
onMounted(() => {
    const video = unref(videoRef);
    videoEmits.forEach((item, key) => {
        video && video.addEventListener(key, item)
    })
})
const onPlay = () => {
    const video = unref(videoRef);
    console.log('播放状态-->', video.paused);

    if (video.paused) {
        video.play()
        options.playState = 'play'
    } else {
        video.pause()
        options.playState = 'pause'
    }
    // video.currentTime = 10
    // video.playbackRate = 2


}
</script>
<template>
    <div class="container" @mousemove="move">
        <video ref="videoRef" class="c-player-main" :controls="isMobile" :webkit-playsinline="options"
            :playsinline="options" v-bind="videoEvents" :volume="options.volume" :muted="options.muted"
            :loop="options.loop" :preload="options.preload" :src="options.src"
            :poster="options.poster">您的浏览器不支持Video标签。</video>
        <div class="c-player-control" v-if="!isMobile && options.control && options.controlShow">
            <!-- 进度条 -->
            <div class="c-progress-outer">
                <div class="c-progress-inner" :style="`width: ${options.progress}%;`"></div>
            </div>
            <div class="control-container">
                <div class="icon-groups">
                    <svg v-if="options.playState === 'pause'" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="21" height="21" style="cursor: pointer;padding: 1px;"
                        @click="onPlay">
                        <path
                            d="M744.727273 551.563636L325.818182 795.927273c-30.254545 18.618182-69.818182-4.654545-69.818182-39.563637v-488.727272c0-34.909091 39.563636-58.181818 69.818182-39.563637l418.909091 244.363637c30.254545 16.290909 30.254545 62.836364 0 79.127272z"
                            fill="#ffffff"></path>
                    </svg>
                    <svg v-if="options.playState === 'play'" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="15" height="15" style="cursor: pointer; padding: 4px;"
                        @click="onPlay">
                        <path
                            d="M268.97201558 114.31784297c73.21218086 0 132.56071902 59.34853814 132.56071901 132.560719v530.24287606c0 73.21218086-59.34853814 132.56071902-132.56071901 132.560719s-132.56071902-59.34853814-132.56071901-132.560719V246.87856197c0-73.21218086 59.34853814-132.56071902 132.56071901-132.560719z m486.05596884 0c73.21218086 0 132.56071902 59.34853814 132.56071901 132.560719v530.24287606c0 73.21218086-59.34853814 132.56071902-132.56071901 132.560719s-132.56071902-59.34853814-132.56071901-132.560719V246.87856197c0-73.21218086 59.34853814-132.56071902 132.56071901-132.560719z"
                            fill="#e6e6e6"></path>
                    </svg>
                    <span class="control-text control-text-top">{{ timeFormat(options.currentTime) }}/{{
                    timeFormat(options.duration)
                    }}</span>
                </div>
                <div class="icon-groups">
                    <span class="control-text control-click">倍速</span>
                    <svg class="icon control-click" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                        <path
                            d="M128 420.576v200.864h149.12l175.456 140.064V284.288l-169.792 136.288H128z m132.256-64l204.288-163.968a32 32 0 0 1 52.032 24.96v610.432a32 32 0 0 1-51.968 24.992l-209.92-167.552H96a32 32 0 0 1-32-32v-264.864a32 32 0 0 1 32-32h164.256zM670.784 720.128a32 32 0 0 1-44.832-45.664 214.08 214.08 0 0 0 64.32-153.312 213.92 213.92 0 0 0-55.776-144.448 32 32 0 1 1 47.36-43.04 277.92 277.92 0 0 1 72.416 187.488 278.08 278.08 0 0 1-83.488 198.976zM822.912 858.88a32 32 0 1 1-45.888-44.608A419.008 419.008 0 0 0 896 521.152c0-108.704-41.376-210.848-114.432-288.384a32 32 0 0 1 46.592-43.872c84.16 89.28 131.84 207.04 131.84 332.256 0 127.84-49.76 247.904-137.088 337.728z"
                            fill="#ffffff"></path>
                    </svg>
                    <svg class="icon control-click" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                        <path
                            d="M553.948279 55.153116a48.580465 48.580465 0 0 0-30.684279 11.121117L258.714791 294.816744H73.013581c-40.20986 0-72.489674 32.279814-72.489674 71.953861L0 679.995535c0 39.685953 32.803721 72.477767 73.013581 72.477767H261.35814l260.834232 205.288186a46.734884 46.734884 0 0 0 30.684279 11.097303c25.373767 0 48.663814-19.57507 48.663814-48.128l1.047814-817.413954c0.559628-28.600558-23.242419-48.163721-48.64-48.163721z m-24.349767 816.354233L305.806884 695.331721a71.930047 71.930047 0 0 0-44.436837-15.336186H71.95386l1.059721-312.689116 185.70121-0.512c17.467535 0 33.863442-6.370233 47.092093-17.467535l224.851349-194.16707-1.059721 716.347535z m0 0"
                            fill="#ffffff"></path>
                        <path
                            d="M1012.950326 624.568558c14.57414 14.57414 14.764651 38.018977 0.416744 52.366884-14.347907 14.347907-37.792744 14.169302-52.366884-0.404837L683.901023 399.431442c-14.57414-14.57414-14.764651-38.018977-0.416744-52.366884 14.347907-14.347907 37.792744-14.157395 52.366884 0.416744l277.099163 277.087256z m0 0"
                            fill="#ffffff"></path>
                        <path
                            d="M960.988279 347.481302c14.57414-14.57414 38.018977-14.764651 52.366884-0.416744 14.347907 14.347907 14.157395 37.792744-0.416744 52.366884L735.851163 676.518698c-14.57414 14.57414-38.018977 14.764651-52.366884 0.404837-14.347907-14.347907-14.169302-37.792744 0.404837-52.366884l277.099163-277.075349z m0 0"
                            fill="#ffffff"></path>
                    </svg>
                    <svg class="icon control-click" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                        <path
                            d="M856.078011 639.690194l102.189404 0L958.267415 384.311853l-102.189404 0c-0.560772 0-14.33959-21.947871-14.33959-22.448268l77.935-71.762417L751.082702 124.630509l-77.686337 79.429027c-11.222599-5.361101-34.353412-8.665357-34.353412-12.841469L639.042953 65.085344 383.662565 65.085344l0 126.132722c0 4.176113-15.150048 8.978489-26.373671 14.33959l-73.821309-77.873602L116.997156 296.214399l78.932724 65.650209c-5.361101 11.286044-9.165754 22.448268-13.343913 22.448268L64.43708 384.312876l0 255.378341 118.148887 0c-0.433882 0 14.34266 38.906102 14.34266 38.407752l-77.937047 79.742159 168.589696 169.4636 69.706595-77.435627c11.223622 5.362124 26.373671 10.662851 26.373671 14.839986l0 94.206592 255.379365 0 0-94.206592c0 0.435928 33.917484-14.402011 34.353412-14.402011l77.812203 77.937047 168.465876-168.529321-77.935-81.614809C847.099523 666.811902 851.899852 639.690194 856.078011 639.690194zM835.379597 759.712755l-84.296895 84.232426-69.518307-67.647703c-31.236422 20.698414-42.522466 35.788088-106.365516 43.518143l0 75.257008L447.506638 895.072629l0-75.257008c-63.844074-7.731078-67.148329-22.820752-98.385774-43.518143l-64.031339 67.647703-83.047438-84.232426 68.333318-73.573669c-20.575618-31.236422-34.916231-46.448892-42.646286-110.292965l-99.446943 0L128.282177 448.155926l99.446943 0c7.731078-63.844074 22.695908-63.09706 43.332924-94.334505l-67.772546-62.160735 84.293825-81.989339 67.711148 68.895113c31.172977-20.761859 66.462714-43.270503 104.495936-50.937113l-4.303003-98.697883 127.691217 0-4.304026 99.196233c38.033221 7.732102 73.323982 26.809599 104.495936 47.51006l67.711148-65.715701 84.296895 85.292572-67.772546 58.108442c20.635993 31.236422 35.599799 30.988782 43.331901 94.832855l83.48439 0 0 127.690194-83.48439 0c-7.732102 63.845097-22.695908 79.056544-43.331901 110.292965L835.379597 759.712755z"
                            fill="#ffffff"></path>
                        <path
                            d="M519.332501 337.423963c-105.804744 0-191.534268 85.730547-191.534268 191.536314 0 105.805768 85.729523 191.533244 191.534268 191.533244 105.805768 0 191.536314-85.727477 191.536314-191.533244C710.868815 423.154509 625.137245 337.423963 519.332501 337.423963zM519.332501 656.649448c-70.391187 0-127.688147-57.296961-127.688147-127.689171 0-70.39221 57.296961-127.689171 127.688147-127.689171 70.39221 0 127.689171 57.296961 127.689171 127.689171C647.021671 599.351464 589.724711 656.649448 519.332501 656.649448z"
                            fill="#ffffff"></path>
                    </svg>
                    <svg class="icon control-click" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                        <path
                            d="M768 213.333333H256a85.333333 85.333333 0 0 0-85.333333 85.333334v426.666666a85.333333 85.333333 0 0 0 85.333333 85.333334h170.666667a42.666667 42.666667 0 1 1 0 85.333333H256a170.666667 170.666667 0 0 1-170.666667-170.666667V298.666667a170.666667 170.666667 0 0 1 170.666667-170.666667h512a170.666667 170.666667 0 0 1 170.666667 170.666667v128a42.666667 42.666667 0 1 1-85.333334 0V298.666667a85.333333 85.333333 0 0 0-85.333333-85.333334z m-128 341.333334a128 128 0 0 0-128 128v85.333333a128 128 0 0 0 128 128h170.666667a128 128 0 0 0 128-128v-85.333333a128 128 0 0 0-128-128h-170.666667z"
                            fill="#ffffff"></path>
                    </svg>
                    <svg class="icon control-click" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                        <path
                            d="M928 128H96a53.393333 53.393333 0 0 0-53.333333 53.333333v661.333334a53.393333 53.393333 0 0 0 53.333333 53.333333h832a53.393333 53.393333 0 0 0 53.333333-53.333333V181.333333a53.393333 53.393333 0 0 0-53.333333-53.333333z m10.666667 714.666667a10.666667 10.666667 0 0 1-10.666667 10.666666H96a10.666667 10.666667 0 0 1-10.666667-10.666666V181.333333a10.666667 10.666667 0 0 1 10.666667-10.666666h832a10.666667 10.666667 0 0 1 10.666667 10.666666zM377.753333 560.913333a21.333333 21.333333 0 0 1 0 30.173334L200.833333 768H320a21.333333 21.333333 0 0 1 0 42.666667H149.206667a21.333333 21.333333 0 0 1-21.206667-21.206667V618.666667a21.333333 21.333333 0 0 1 42.666667 0v119.166666l176.913333-176.92a21.333333 21.333333 0 0 1 30.173333 0zM896 234.54V405.333333a21.333333 21.333333 0 0 1-42.666667 0V286.166667l-176.913333 176.92a21.333333 21.333333 0 0 1-30.173333-30.173334L823.166667 256H704a21.333333 21.333333 0 0 1 0-42.666667h170.793333a21.333333 21.333333 0 0 1 21.206667 21.206667z"
                            fill="#ffffff"></path>
                    </svg>
                    <svg class="icon control-click" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                        <path
                            d="M801 179H552c-19.9 0-36 16.1-36 36s16.1 36 36 36h171.3L537.8 436.4c-14.1 14.1-14.1 36.8 0 50.9 7 7 16.2 10.6 25.5 10.6 9.2 0 18.4-3.5 25.4-10.5L765 311.1V480c0 19.9 16.1 36 36 36s36-16.1 36-36V215c0-19.9-16.1-36-36-36zM464 785H292.7l185.5-185.4c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L251 724.9V556c0-19.9-16.1-36-36-36s-36 16.1-36 36v265c0 19.9 16.1 36 36 36h249c19.9 0 36-16.1 36-36s-16.1-36-36-36z"
                            fill="#ffffff"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang='css'>
.container {
    width: 60%;
    display: flex;
    flex-direction: column;
}

.c-player-main {
    width: 100%;
    padding-top: rem(30px);
    padding-bottom: rem(30px);
    background-color: black;
}

.c-player-control {
    background-color: black;
    display: flex;
    flex-direction: column;
    margin-top: rem(-30px);
}

.c-progress-outer {
    background-color: #f5f5f5;
    width: 100%;
    height: rem(5px);
}

.c-progress-inner {
    background-color: #ff00ff;
    width: 100%;
    height: rem(5px);
}

.control-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.control-text {
    color: white;
    margin-top: rem(2px);
    font-size: rem(12px);
}

.control-text-top {
    margin-top: rem(2px);
}

.control-click {
    cursor: pointer;
}

.icon-groups {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icon-groups>svg {
    padding: rem(0px 4px);
}
</style>