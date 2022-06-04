<script setup lang='ts'>
import { computed } from "vue";

const props = withDefaults(defineProps<{
    type?: "default" | "success";
}>(), {
    type: "default",
});

const emits = defineEmits(["click"]);

const click = () => {
    emits("click");
};
const bClass = computed(() => {
    return ['ds-button', `ds-button-${props.type}`]
})
</script>
<template>
    <button :class="bClass" @click="click">
        <slot></slot>
    </button>
</template>

<style scoped lang='css'>
@import "@/styles/base/inset.css";
.ds-button {
    @mixin inset-button;
    padding: 3px 12px;
    border-radius: 5px;
    border: 1px solid #ff00ff;
}

.ds-button-default {
    background-color: #00ff00;
}

.ds-button-success {
    background-color: #ff0000;
}
</style>