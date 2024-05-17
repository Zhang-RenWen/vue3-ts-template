import { defineStore } from 'pinia';
import $vuetify from '@/plugins/vuetify';
import { toRaw } from 'vue';

export const useUIStore = defineStore('uiStatus', {
  state: () => {
    return {
      drawer: true,
      $vuetify: $vuetify,
      theme: $vuetify.theme,
      themes: toRaw($vuetify.theme.themes),
    };
  },

  getters: {
    getDrawer: (state) => {
      return state.drawer;
    },
  },

  actions: {
    navIconClicked() {
      this.drawer = !this.drawer;
    },
    setDrawerStatus(value: boolean) {
      this.drawer = value;
    },
  },
});
