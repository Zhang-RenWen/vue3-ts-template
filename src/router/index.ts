// Composables
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Icon from '@/views/Icon.vue';
import Input from '@/views/Input.vue';
import Table from '@/views/Table.vue';
import DataFlow from '@/views/DataFlow.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      hidden: true,
      title: 'Home',
    },
    component: HomeView,
  },
  {
    path: '/icon',
    name: 'icon',
    meta: {
      hidden: true,
      title: 'Icon',
    },
    component: Icon,
  },
  {
    path: '/input',
    name: 'input',
    meta: {
      hidden: true,
      title: 'Input',
    },
    component: Input,
  },
  {
    path: '/table',
    name: 'table',
    meta: {
      hidden: true,
      title: 'Table',
    },
    component: Table,
  },
  {
    path: '/dataFlow',
    name: 'dataFlow',
    meta: {
      hidden: true,
      title: 'DataFlow',
    },
    component: DataFlow,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
