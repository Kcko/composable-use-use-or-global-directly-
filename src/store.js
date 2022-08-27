// store.js
import { ref, reactive } from 'vue';

// all is shared like global

export const globalStore = ref(50);
export const globalIncrement = () => {
  globalStore.value = globalStore.value + 1;
};

export const store = reactive({
  count: 0,
  increment() {
    this.count++;
  },
});
