import InputLabel from './InputLabel.vue';
import InputTextField from './InputTextField.vue';

import type { App } from 'vue';

export function registerComponents(app: App) {
  app.component('InputLabel', InputLabel);
  app.component('InputTextField', InputTextField);
}
