<template>
  <button @click="store.count++">From D: {{ store.count }}</button>
</template>

<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    };
  },
};
</script>
