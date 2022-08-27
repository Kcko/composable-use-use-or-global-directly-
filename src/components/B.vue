<!-- ComponentB.vue -->
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
  B<button @click="store.increment()">From B: {{ store.count }}</button>
  B<button @click="globalIncrement()">global From B: {{ globalStore }}</button>
</template>
