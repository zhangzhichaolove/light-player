<script setup lang='ts'>
import { computed } from "vue";

const props = withDefaults(defineProps<{
    type?: CButtonPropsType;
}>(), {
    type: "default",
});

const emits = defineEmits(["click", "update:type"]);

const click = () => {
    emits("click");
};
const bClass = computed(() => {
    console.log('---->', props.type);
    return ['c-button', `c-button-${props.type}`]
})

//类型定义
const setType: CButtonElement['setType'] = (value: CButtonPropsType) => {
    emits('update:type', value)
    console.log('setType', value);
}
const setProperty: CButtonElement['setProperty'] = (key: CButtonPropsKey, value: any) => {
    console.log('setProperty');
}

defineExpose({
    setType,
    setProperty
})
</script>
<template>
    <button :class="bClass" @click="click">
        <slot></slot>
    </button>
</template>

<style scoped lang='css'>
@import "@/styles/base/inset.css";

.c-button {
    @mixin inset-button;
    margin-left: rem(5px);
    margin-right: rem(5px);
    padding: rem(3px 12px);
    border-radius: 5px;
    border: rem(1px solid #ff00ff);
}


.c-button-default {
    background-color: #00ff00;
}

.c-button-warn {
    background-color: #ff00ff;
}

.c-button-success {
    background-color: #ff0000;
}
</style>