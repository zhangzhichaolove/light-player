<script setup lang="ts">
// import DsSwitch from './components/Switch/index.vue'
// import DsButton from './components/Button/index.vue'
const click = () => {
  console.log('click');
};
</script>

<template>
  <ds-switch checkedText="开" uncheckedText="关" />
  <ds-switch checkedText="打开" uncheckedText="关闭" />
  <br>
  <br>
  <ds-button @click="click">
    按钮
  </ds-button>
  <ds-button type="success" @click="click">
    按钮
  </ds-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
