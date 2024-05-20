// Composables
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/StoryBook/HomeView.vue';
import StoryBook from '@/views/StoryBook/index.vue';
import Icon from '@/views/StoryBook/Icon.vue';
import Input from '@/views/StoryBook/Input.vue';
import Table from '@/views/StoryBook/Table.vue';
import Dialog from '@/views/StoryBook/Dialog.vue';
import DataFlow from '@/views/StoryBook/DataFlow.vue';

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
    path: '/storyBook',
    name: 'storyBook',
    component: StoryBook,
    children: [
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
        path: '/dialog',
        name: 'dialog',
        meta: {
          hidden: true,
          title: 'Dialog',
        },
        component: Dialog,
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
