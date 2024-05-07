<template>
  <div class="d-flex align-center py-2 px-2">
    <span class="mr-1">
      總筆數：
      <strong>{{ totalCount }}</strong>
      筆
    </span>
    <div>page: {{ page }}</div>
    <v-pagination
      v-model="page"
      :length="totalPageCount"
      variant="text"
      :total-visible="totalVisible"
      @update:modelValue="onPageChanged"
    >
      <!-- 未來客製化使用 -->
      <!-- <template #prev="props">
        <v-btn _as="VPaginationBtn" :href="`?page=${page - 1}`" v-bind="props" />
      </template>
      <template #item="{ isActive, key, props, page }">
        <v-btn
          _as="VPaginationBtn"
          :active="isActive"
          :key="key"
          :href="`?page=${page}`"
          v-bind="props"
        >
          {{ page }}
        </v-btn>
      </template>
      <template #next="props">
        <v-btn _as="VPaginationBtn" :href="`?page=${page + 1}`" v-bind="props" />
      </template> -->
    </v-pagination>
    <v-spacer />
    <div class="d-flex align-center v-data-table-footer__items-per-page">
      每頁列數：
      <v-select
        v-model="itemsPerPage"
        :items="itemsPerPageOptions"
        dense
        density="compact"
        variant="outlined"
        hide-details
        class="mx-2"
        @update:modelValue="onItemsPerPageChanged"
      />
      <span>筆</span>
    </div>
    <!-- 代替 WATCH 監聽/更新狀態 -->
    <div class="d-none">{{ paginationListener }}</div>
  </div>
</template>
<!--/********************************Script-Start*********************************************/-->
<script setup lang="ts">
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue';
import { Props, propsBase } from '@/model/PaginationModel';
const props = withDefaults(defineProps<Props>(), propsBase);
const page = ref(1); // 當前頁碼
const itemsPerPage = ref(10); // 一頁幾筆
const totalPageCount = computed(() => {
  return Math.ceil(props.totalCount / (itemsPerPage.value || 0)); // 總頁數
});
let internalValue = toRefs(props);
const emits = defineEmits(['input']);
function onPageChanged(page: number) {
  emits('input', { ...internalValue.value.value, page, itemsPerPage: itemsPerPage.value });
}
function onItemsPerPageChanged(itemsPerPage: number) {
  emits('input', { ...internalValue.value.value, page: page.value, itemsPerPage });
}

function setPagination() {
  // 設定 初始化 pagination 項目
  const bindValue = JSON.parse(JSON.stringify(props.value));
  page.value = bindValue.page;
  itemsPerPage.value = bindValue.itemsPerPage;
}
const paginationListener = computed(() => {
  setPagination();
  return props.value;
});

onMounted(async () => {});
</script>
<!--/********************************Script-End*********************************************/-->

<style lang="scss" scoped>
.v-data-table-footer__items-per-page :deep(.v-data-table-footer__items-per-page > .v-select) {
}
</style>
