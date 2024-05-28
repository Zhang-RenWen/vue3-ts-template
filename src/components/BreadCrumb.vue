<template>
  <div class="breadcrumb-outer mx-3">
    <div ref="bc" class="breadcrumb">
      <div class="breadcrumb-inner d-flex align-center justify-space-between">
        <div class="text-h6 mx-3">{{ routerListener.value.meta.title }}</div>
        <div class="title-path d-flex">
          <div class="title-path-text grey--text font-weight-bold">
            {{ routerListener.value.path }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUIStore } from '@/stores/useUIStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue'
import { deepClone } from '@/utils/deepClone'
const uiStatus = useUIStore()
const router = useRouter()
const routerListener = computed(() => {
  return reactive(router.currentRoute)
})
</script>
<style lang="scss" scoped>
.breadcrumb {
  width: 100%;
  padding: 12px 0;
  background-color: #ddd;
  &.is-fixed {
    position: fixed;
    z-index: 9;
  }
  &.is-no-toolbar {
    margin-top: -72px;
  }
}
.breadcrumb-inner {
  padding: 8px 12px;
  background-color: #d7e4fa;
  color: #000;
}
.breadcrumb-push {
  margin-top: 50px;
}
.title-path-text {
  margin: 0 5px;
  text-shadow: 0 1px 0 rgba($color: #fff, $alpha: 0.8);
  &:not(:first-child):before {
    content: '|';
    position: relative;
    left: -3px;
  }
}
</style>
