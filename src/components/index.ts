import InputLabel from './InputLabel.vue';
import InputTextField from './InputTextField.vue';
import InputFormat from './InputFormat.vue';

import type { App } from 'vue';

export function registerComponents(app: App) {
  app.component('InputLabel', InputLabel);
  app.component('InputTextField', InputTextField);
  app.component('InputFormat', InputFormat);
}
