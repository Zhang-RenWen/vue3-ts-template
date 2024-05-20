<template>
  <v-navigation-drawer
    v-model="getDrawer"
    app
    class="drawer"
    style="z-index: 12"
    @update:modelValue="setDrawerStatus"
  >
    <v-list density="compact" nav>
      <v-list-item
        v-for="(menu, i) in menus"
        :key="i"
        :prepend-icon="menu.meta.icon"
        :title="menu.meta.title"
        :value="menu.meta.title"
        @click="router.push({ path: menu.path })"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useUIStore } from '@/stores/useUIStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue';
import { deepClone } from '@/utils/deepClone';

const uiStatus = useUIStore();
const router = useRouter();

let menus = toRefs(reactive([]));

function getStoryBookRouteList() {
  if (router?.options?.routes) {
    const storyBookRoute = router.options.routes.find((r) => r.name === 'storyBook');

    if (storyBookRoute) {
      menus = reactive(storyBookRoute.children);
    }
  }
}

function setDrawerStatus(value: boolean) {
  uiStatus.setDrawerStatus(value);
}

onMounted(async () => {
  getStoryBookRouteList();
});

const { getDrawer } = storeToRefs(uiStatus);
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.drawer {
  margin-top: 50px;
}
.drawer :deep(.v-list .v-list-item--active) {
  color: lighten($color-primary, 10);
}

.drawer :deep(.v-list--dense .v-list-item .v-list-item__title) {
  font-size: 1rem;
}

.drawer
  :deep(.v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon) {
  min-width: auto;
}

.drawer :deep(.v-list-group__header__append-icon.v-icon.v-icon) {
  font-size: 0.75rem;
}

.drawer :deep(.v-list-item__icon.v-list-group__header__prepend-icon) {
  margin-right: 12px;
}
.drawer :deep(.v-list-group--no-action > .v-list-group__items > .v-list-item) {
  padding-left: 50px;
}
.drawer
  :deep(.v-list-group--no-action.v-list-group--sub-group > .v-list-group__items > .v-list-item) {
  padding-left: 72px;
}

.drawer ~ :deep(.v-navigation-drawer__scrim) {
  z-index: 10 !important;
}
</style>
