import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useAlertsStore = defineStore('alerts', () => {
  const progress = ref(false);

  const snackbar = reactive({
    content: '',
    button: 'OK',
    type: 'primary',
    timeout: 10000,
    visible: true,
  });

  const message = reactive({
    title: '',
    content: '',
    button: 'OK',
    visible: true,
  });

  function showProgress() {
    progress.value = true;
  }

  function hideProgress() {
    progress.value = false;
  }

  function showSnackbar(content: string, type: string, button: string, timeout: number) {
    snackbar.content = content;
    snackbar.type = type || 'primary';
    snackbar.button = button || 'OK';
    snackbar.timeout = timeout || 3000;
    snackbar.visible = true;
  }

  function hideSnackbar() {
    snackbar.visible = false;
  }

  function showMessage(content: string, title: string, button: string) {
    message.content = content;
    message.title = title || 'Peringatan';
    message.button = button || 'OK';
    message.visible = true;
  }

  function hideMessage() {
    message.visible = false;
  }

  return {
    progress,
    snackbar,
    message,
    showProgress,
    hideProgress,
    showSnackbar,
    hideSnackbar,
    showMessage,
    hideMessage,
  };
});
