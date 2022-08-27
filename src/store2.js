// store.js
import { ref, reactive } from 'vue';

// global
const globalStore = ref(50);
const globalIncrement = () => {
  globalStore.value = globalStore.value + 1;
};

export const useStore = () => {
  // local
  const store = reactive({
    count: 0,
    increment() {
      this.count++;
    },
  });

  return {
    globalStore,
    globalIncrement,
    store,
  };
};
