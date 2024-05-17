import Header from './Header';
import VueDraggableResizable from 'vue-draggable-resizable';
import InputLabel from './InputLabel.vue';
import InputTextField from './InputTextField.vue';
import InputFormat from './InputFormat.vue';
import InputAutoComplete from './InputAutoComplete.vue';
import Table from './Table.vue';
import Pagination from './Pagination.vue';
import Dialog from './Dialog.vue';
import Alert from './Alert.vue';
import Loading from './Loading.vue';
import type { App } from 'vue';

export function registerComponents(app: App) {
  app.component('Header', Header);
  app.component('InputLabel', InputLabel);
  app.component('InputTextField', InputTextField);
  app.component('InputFormat', InputFormat);
  app.component('InputAutoComplete', InputAutoComplete);
  app.component('Table', Table);
  app.component('Pagination', Pagination);
  app.component('Dialog', Dialog);
  app.component('Alert', Alert);
  app.component('Loading', Loading);
  app.component('VueDraggableResizable', VueDraggableResizable);
}
