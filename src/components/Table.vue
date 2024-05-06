<template>
  <v-data-table-server
    v-model:expanded="expanded"
    class="custom-table"
    :headers="headers"
    :items="items"
    density="compact"
    no-data-text="無資料"
    fixed-header
    :item-value="itemValue"
    :show-expand="showExpand"
    expand-on-click
    @update:expanded="expandedFn"
  >
    <!-- expand-on-click 點擊整條 row 觸發toggle-expand-->
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-data-table-server>
  <!-- 代替 WATCH 監聽/更新狀態 -->
  <div class="d-none">{{ expandedListener }}</div>
</template>
<!--/********************************Script-Start*********************************************/-->
<script setup lang="ts">
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue';
import { Props, propsBase } from '@/model/TableModel';
const props = withDefaults(defineProps<Props>(), propsBase);
let expanded = ref([]); // 綁定資料在本組件;
const emits = defineEmits(['updateExpanded']);
function expandedFn(newExpandedItem: any) {
  emits('updateExpanded', newExpandedItem);
}
function setExpanded() {
  // 設定 初始化 expanded 項目
  expanded.value = JSON.parse(JSON.stringify(props.defaultExpanded));
}
const expandedListener = computed(() => {
  setExpanded();
  return props.defaultExpanded;
});
onMounted(async () => {
  setExpanded();
});
</script>
<!--/********************************Script-End*********************************************/-->

<style lang="scss" scoped>
@import '@/assets/styles/tableBase.scss';
</style>
