<template>
  <div class="pre-code-box">
    <span class="m-copy" v-if="showCode" @click="copyCode"><i class="m-icon-copy"></i></span>
    <transition name="slide-fade">
      <pre class="language-html" v-if="showCode" v-highlight><code class="language-html">{{ sourceCode }}</code></pre>
    </transition>
    <div class="showCode" @click="showCodeText">
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
      <i class="m-icon-code"></i>
    </div>
    <textarea id="inputCopy"></textarea>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps({
  compName: {
    type: String,
    default: "",
    require: true,
  },
  demoName: {
    type: String,
    default: "",
    require: true,
  },
});

const showCode = ref(false);
const border = ref("1px solid rgba(0,0,0,.06)");
const showCodeText = () => {
  showCode.value = !showCode.value;
  if (showCode.value) {
    border.value = "0";
  } else {
    border.value = "1px solid rgba(0,0,0,.06)";
  }
};
const sourceCode = ref("");
async function getSourceCode() {
  const isDev = import.meta.env.MODE === "development";
  if (isDev) {
    sourceCode.value = (
      await import(
        /* @vite-ignore */ `/src/packages/${props.compName}/doc/${props.demoName}.vue?raw`
      )
    ).default;
  } else {
    sourceCode.value = await fetch(
      `/src/packages/${props.compName}/doc/${props.demoName}.vue`
    ).then((res) => res.text());
  }
}
const copyCode = () => {
  const input: any = document.getElementById("inputCopy");
  input.value = sourceCode.value;
  input.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
    console.log('复制成功!');
  } else {
    console.log('复制失败!');
  }
};
onMounted(() => {
  getSourceCode();
});
</script>

<style scoped lang="css">
#inputCopy {
  opacity: 0;
  border: 0;
  outline: none;
  height: 0;
  position: fixed;
  z-index: -99999999;
}
</style>