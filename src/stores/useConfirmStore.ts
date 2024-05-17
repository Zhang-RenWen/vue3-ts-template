import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { ConfirmOption, defailtOption } from '@/model/ConfirmModel';

interface Message {
  title: string;
  content: string;
  buttonText: string;
  buttonCancelText: string;
  visible: boolean;
  result: boolean | null;
  showCancelButton: boolean;
}

const messageDefault: Message = {
  title: '',
  content: '',
  buttonText: '確定',
  buttonCancelText: '取消',
  visible: false,
  result: null,
  showCancelButton: true,
};

export const useConfirmsStore = defineStore('confirm', () => {
  const message = reactive(messageDefault);
  const watcher = function (resolve: any) {
    setTimeout(() => {
      if (message.result !== true && message.result !== false) {
        watcher(resolve);
      } else {
        resolve(message.result);
      }
    }, 300);
  };

  function showMessage(option: ConfirmOption) {
    setResult(null);
    Object.assign(message, { ...defailtOption, ...option, visible: true });
    return new Promise((resolve) => {
      watcher(resolve);
    });
  }

  function hideMessage() {
    message.visible = false;
  }

  function setResult(value: boolean | null) {
    message.result = value;
  }

  return {
    message,
    showMessage,
    hideMessage,
    setResult,
  };
});
