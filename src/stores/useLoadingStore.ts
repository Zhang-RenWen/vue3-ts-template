import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', () => {
  const state = reactive({
    visible: false,
  });

  function toggleLoading(value: boolean) {
    state.visible = value;
  }
  return {
    state,
    toggleLoading,
  };
});
