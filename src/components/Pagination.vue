<template>
  <div class="d-flex align-center py-2 px-2">
    <span class="mr-1">
      總筆數：
      <strong>{{ totalCount }}</strong>
      筆
    </span>
    <v-pagination
      v-model="page"
      :length="totalPageCount"
      :total-visible="itemsPerPage"
      @input="onChanged"
    />
    <v-spacer />
    <div class="d-flex align-center v-data-table-footer__items-per-page">
      每頁列數：
      <v-select
        v-model="selectedItem"
        :items="itemsPerPageOptions"
        dense
        density="compact"
        variant="outlined"
        hide-details
        class="mx-2"
        @change="onChanged"
      />
      <span>筆</span>
    </div>
  </div>
</template>
<!--/********************************Script-Start*********************************************/-->
<script setup lang="ts">
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue';
import { Props, propsBase } from '@/model/PaginationModel';
const props = withDefaults(defineProps<Props>(), propsBase);
const page = ref(1);
const selectedItem = ref(10);
const emits = defineEmits(['updateExpanded']);
function expandedFn(newExpandedItem: any) {
  emits('updateExpanded', newExpandedItem);
}
function setExpanded() {
  // 設定 初始化 expanded 項目
  // expanded.value = JSON.parse(JSON.stringify(props.defaultExpanded));
}
// const expandedListener = computed(() => {
//   setExpanded();
//   return props.defaultExpanded;
// });
const totalPageCount = computed(() => {
  return Math.ceil(props.totalCount / (selectedItem.value || 0));
});
function onChanged() {
  console.log('changed');
}
onMounted(async () => {
  // setExpanded();
});
</script>
<!--/********************************Script-End*********************************************/-->

<style lang="scss" scoped>
.v-data-table-footer__items-per-page :deep(.v-data-table-footer__items-per-page > .v-select) {
}
</style>
