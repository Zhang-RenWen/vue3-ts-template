/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import '@/assets/styles/main.scss';
import App from './App.vue';
// Plugins
import { createApp, nextTick } from 'vue';
import { registerPlugins } from '@/plugins';
import { registerComponents } from '@/components';
import { Lazyload, showFailToast } from 'vant';
import router from '@/router';

import pinia from '@/stores/index';
import { useUserStore } from '@/stores/useUserStore';

const app = createApp(App);
registerPlugins(app);
registerComponents(app);
app.use(Lazyload);
app.use(pinia);
app.mount('#app');
export { pinia };
/**
 * 登入攔截器
 */
const userStore = useUserStore();

router.beforeEach((to, from, next) => {
  if (to.matched.some((m) => m.meta.auth)) {
    if (userStore.getLoginState) {
      next();
    } else {
      showFailToast('請登入後操作！');
      next('/loginPage');
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  if (to.meta.scrollState == true) {
    // const scrollTop: number = useGlobal.getScrollKeyValue.get(to.path) as number;
    // nextTick().then(() => {
    //   document.documentElement.scrollTop = scrollTop;
    // });
  } else {
    // nextTick().then(() => {
    //   document.documentElement.scrollTop = 0;
    // });
  }
});
