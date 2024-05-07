import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useAlertsStore = defineStore('alerts', () => {
  const message = reactive({
    title: '',
    content: '',
    button: 'OK',
    visible: false,
  });

  function showMessage(content: string, title: string, button: string) {
    message.content = content || '';
    message.title = title || '';
    message.button = button || 'OK';
    message.visible = true;
  }

  function hideMessage() {
    message.visible = false;
  }

  return {
    message,
    showMessage,
    hideMessage,
  };
});
