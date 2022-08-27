<!-- ComponentA.vue -->
<script>
import { useStore } from '../store2.js';

export default {
  setup() {
    const { globalStore, globalIncrement, store } = useStore();

    return {
      globalStore,
      globalIncrement,
      store,
    };
  },
};
</script>

<template>
  A<button @click="store.increment()">From A: {{ store.count }}</button>
  A<button @click="globalIncrement()">global From A: {{ globalStore }}</button>
</template>
