<template>
  <v-app-bar
    id="headerBar"
    app
    clipped-left
    dark
    color="primary"
    height="50"
    style="width: 100%; left: 0"
  >
    <v-app-bar-nav-icon @click="uiStatus.navIconClicked" />
    <v-spacer></v-spacer>
    <v-menu ref="menu" class="mr-1" offset-y bottom left :min-width="200">
      <template #activator="{ props: menu }">
        <v-btn icon v-bind="mergeProps(menu)"><v-icon>mdi-account</v-icon></v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in accountItemList" :key="item.text" @click="item.eventHandler">
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script setup lang="ts">
import { useUIStore } from '@/stores/useUIStore';
import { reactive, mergeProps } from 'vue';
const accountItemList = reactive([
  {
    text: '個人檔案',
  },
  {
    text: '登出',
    eventHandler: () => {},
  },
]);
const uiStatus = useUIStore();
</script>
