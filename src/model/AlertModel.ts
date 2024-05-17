export interface AlertOption {
  title?: string;
  content?: string;
  buttonText?: string;
}

export const defaultOption = {
  title: '提示',
  content: '',
  buttonText: '確定',
};
