// Composables
import { createRouter, createWebHistory } from 'vue-router';
import { getPage } from '@/utils/glob';
import StoryBook from '@/views/StoryBook/index.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      hidden: true,
      title: 'Home',
    },
    component: getPage('HomeView'),
  },
  {
    path: '/',
    name: 'storyBook',
    component: StoryBook,
    children: [
      {
        path: '/icon',
        name: 'icon',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Icon',
        },
        component: getPage('Icon'),
      },
      {
        path: '/input',
        name: 'input',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Input',
        },
        component: getPage('Input'),
      },
      {
        path: '/table',
        name: 'table',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Table',
        },
        component: getPage('Table'),
      },

      {
        path: '/dialog',
        name: 'dialog',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Dialog',
        },
        component: getPage('Dialog'),
      },
      {
        path: '/alert',
        name: 'alert',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Alert',
        },
        component: getPage('Alert'),
      },
      {
        path: '/confirm',
        name: 'confirm',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Confirm',
        },
        component: getPage('Confirm'),
      },
      {
        path: '/loading',
        name: 'loading',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Loading',
        },
        component: getPage('Loading'),
      },
      {
        path: '/button',
        name: 'button',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Button',
        },
        component: getPage('Button'),
      },
      {
        path: '/images',
        name: 'images',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Images',
        },
        component: getPage('Images'),
      },
      {
        path: '/color',
        name: 'color',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Color',
        },
        component: getPage('Color'),
      },
      {
        path: '/dataFlow',
        name: 'dataFlow',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'DataFlow',
        },
        component: getPage('DataFlow'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
