import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { AlertOption, defaultOption } from '@/model/AlertModel';

export const useAlertsStore = defineStore('alerts', () => {
  const message = reactive({
    title: '',
    content: '',
    buttonText: 'OK',
    visible: false,
  });

  function showMessage(option: AlertOption) {
    Object.assign(message, { ...defaultOption, ...option, visible: true });
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
