<script setup lang='ts'>
import { ref } from "vue";

withDefaults(defineProps<{
    checkedText?: string;
    uncheckedText?: string;
    size?: "normal" | "large" | "small";
}>(), {
    checkedText: "",
    uncheckedText: "",
    size: "normal",
});

const emits = defineEmits(["switch"]);

const checked = ref<boolean>(false);

const switchHandel = () => {
    checked.value = !checked.value;
    emits("switch", checked.value);
};
</script>
<template>
    <button class="c-switch" :class="checked ? 'c-switch-checked' : ''" @click="switchHandel" :style="{
        'background-color': checked ? '#338eff' : '#00000040',
        transform:
            size === 'small'
                ? 'scale(.7, .7)'
                : size === 'large'
                    ? 'scale(1.3, 1.3)'
                    : 'scale(1, 1)',
    }">
        <div class="c-switch-hendel"></div>
        <span class="c-switch-text" :class="checked ? 'c-switch-text-checked' : 'c-switch-text-unchecked'"
            v-if="checkedText && uncheckedText">{{ checked ? checkedText : uncheckedText }}</span>
    </button>
</template>

<style scoped lang='css'>
.c-switch {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-width: rem(44px);
    height: rem(22px);
    line-height: rem(22px);
    border-radius: rem(100px);
    font-size: rem(14px);
    vertical-align: middle;
    border: 0;
    cursor: pointer;
    box-shadow: rem(0 0 0 2px #00000020);
    overflow: hidden;
    margin-left: rem(5px);
    margin-right: rem(5px);
}

.c-switch-hendel {
    position: absolute;
    top: rem(2px);
    left: rem(2px);
    width: rem(18px);
    height: rem(18px);
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.2s ease-in-out;
}

.c-switch-checked .c-switch-hendel {
    left: calc(100% - rem(20px));
}

.c-switch-text {
    color: #fff;
    font-size: rem(12px);
    /* position: absolute; */
    font-weight: 600;
}

.c-switch-text-checked {
    left: rem(7px);
    padding-right: rem(18px);
}

.c-switch-text-unchecked {
    right: rem(7px);
    padding-left: rem(18px);
}
</style>