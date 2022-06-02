<script setup lang='ts'>
import { ref } from "vue";

interface Prop {
    checkedText?: string;
    uncheckedText?: string;
    size?: string;
}
const props = withDefaults(defineProps<Prop>(), {
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
    <button class="ds-switch" :class="checked ? 'ds-switch-checked' : ''" @click="switchHandel" :style="{
        'background-color': checked ? '#338eff' : '#00000040',
        transform:
            size === 'small'
                ? 'scale(.7, .7)'
                : size === 'large'
                    ? 'scale(1.3, 1.3)'
                    : 'scale(1, 1)',
    }">
        <div class="ds-switch-hendel"></div>
        <span class="ds-switch-text" :class="checked ? 'ds-switch-text-checked' : 'ds-switch-text-unchecked'"
            v-if="checkedText && uncheckedText">{{ checked ? checkedText : uncheckedText }}</span>
    </button>
</template>

<style scoped lang='css'>
.ds-switch {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-width: 44px;
    height: 22px;
    line-height: 22px;
    border-radius: 100px;
    font-size: 14px;
    vertical-align: middle;
    border: 0;
    cursor: pointer;
    box-shadow: 0 0 0 2px #00000020;
    overflow: hidden;
}

.ds-switch-hendel {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.2s ease-in-out;
}

.ds-switch-checked .ds-switch-hendel {
    left: calc(100% - 20px);
}

.ds-switch-text {
    color: #fff;
    font-size: 12px;
    position: absolute;
    font-weight: 600;
}

.ds-switch-text-checked {
    left: 7px;
}

.ds-switch-text-unchecked {
    right: 7px;
}
</style>