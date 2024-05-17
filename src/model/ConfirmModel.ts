export interface ConfirmOption {
  title?: string;
  content?: string;
  buttonText?: string;
  buttonCancelText?: string;
}

export const defaultOption = {
  title: '確認',
  content: '',
  buttonText: '確定',
  buttonCancelText: '取消',
};
