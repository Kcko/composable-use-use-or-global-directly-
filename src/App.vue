<template>
  <div id="app">
    <A />
    <hr />
    <B />
    <hr />
    <C />
    <hr />
    <D />
  </div>
</template>

<script>
import A from './components/A.vue';
import B from './components/B.vue';
import C from './components/C.vue';
import D from './components/D.vue';

export default {
  name: 'App',
  components: {
    A,
    B,
    C,
    D,
  },
};
</script>

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
