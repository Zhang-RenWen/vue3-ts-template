<template>
  <v-navigation-drawer
    v-model="getDrawer"
    app
    class="drawer"
    style="z-index: 12"
    @update:modelValue="setDrawerStatus"
  >
    <v-list density="compact" nav>
      <template v-for="firstGroup in menus">
        <v-list-group
          v-if="firstGroup.children"
          :key="`v-list-group-${firstGroup}`"
          :value="firstGroup?.meta?.isOpened"
        >
          <template #activator="{ props }">
            <v-list-item v-bind="mergeProps(props)">
              <v-list-item-title :title="firstGroup?.meta?.title">
                <v-icon class="mr-7">{{ firstGroup?.meta?.icon }}</v-icon>
                {{ firstGroup?.meta?.title }}
              </v-list-item-title>
            </v-list-item>
          </template>
          <template v-for="secondGroup in firstGroup.children">
            <v-list-group
              v-if="secondGroup.children"
              :key="`v-list-group-${secondGroup}`"
              :value="secondGroup?.meta?.isOpened"
            >
              <template #activator="{ props }">
                <v-list-item v-bind="mergeProps(props)">
                  <v-list-item-title :title="secondGroup?.meta?.title">
                    <v-icon class="mr-7">{{ secondGroup?.meta?.icon }}</v-icon>
                    {{ secondGroup?.meta?.title }}
                  </v-list-item-title>
                </v-list-item>
              </template>
              <template v-for="thirdGroup in secondGroup.children">
                {{ thirdGroup }}
              </template>
            </v-list-group>

            <v-list-item
              v-else
              :key="`v-list-item-${secondGroup}`"
              @click="router.push({ path: secondGroup.path })"
            >
              <v-list-item-title :title="secondGroup?.meta?.title">
                <v-icon class="mr-7">{{ secondGroup?.meta?.icon }}</v-icon>
                {{ secondGroup?.meta?.title }}
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list-group>
        <v-list-item
          v-else
          :key="`v-list-item-${firstGroup}`"
          @click="router.push({ path: firstGroup.path })"
        >
          <v-list-item-title :title="firstGroup?.meta?.title">
            <v-icon class="mr-7">{{ firstGroup?.meta?.icon }}</v-icon>
            {{ firstGroup?.meta?.title }}
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useUIStore } from '@/stores/useUIStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { ref, toRefs, computed, nextTick, onMounted, reactive, mergeProps } from 'vue';
import { deepClone } from '@/utils/deepClone';

const uiStatus = useUIStore();
const router = useRouter();

let menus = toRefs(reactive([]));
function getAllRouteList() {
  if (router?.options?.routes) {
    const routes = router.options.routes;
    if (routes) {
      menus = reactive(routes);
    }
  }
}

function setDrawerStatus(value: boolean) {
  uiStatus.setDrawerStatus(value);
}

onMounted(async () => {
  getAllRouteList();
});

const { getDrawer } = storeToRefs(uiStatus);
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.drawer {
  margin-top: 50px;
}

.drawer :deep(.v-list .v-icon) {
  color: rgba(0, 0, 0, 0.5);
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
