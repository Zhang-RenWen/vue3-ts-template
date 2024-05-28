<template>
  <v-data-table-server
    v-model:expanded="expanded"
    v-bind="{ ...attr }"
    :headers="headers"
    :items="items"
    density="compact"
    class="custom-table"
    no-data-text="無資料"
    fixed-header
    :items-per-page="itemsPerPage"
    :items-length="itemsLength"
    :sort-by="sortByListener"
    :item-value="itemValue"
    :show-expand="showExpand"
    expand-on-click
    @update:expanded="expandedFn"
    @update:options="onSortConditionChanged"
  >
    <!-- expand-on-click 點擊整條 row 觸發toggle-expand-->
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>

    <!-- hide-default-pagination -->
    <template #bottom></template>
  </v-data-table-server>
  <!-- 代替 WATCH 監聽/更新狀態 -->
  <div class="d-none">{{ expandedListener }}</div>
</template>
<!--/********************************Script-Start*********************************************/-->
<script setup lang="ts">
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue'
import { Props, propsBase } from '@/model/TableModel'
import { deepClone } from '@/utils/deepClone'
import { useAttrs } from 'vue'
const attr = useAttrs()
const props = withDefaults(defineProps<Props>(), propsBase)
let expanded = ref([]) // 綁定資料在本組件;
const emits = defineEmits(['updateExpanded', 'updateSortBy'])
function expandedFn(newExpandedItem: any) {
  emits('updateExpanded', newExpandedItem)
}

function setExpanded() {
  // 設定 初始化 expanded 項目
  expanded.value = deepClone(props.defaultExpanded)
}
function onSortConditionChanged(options: any) {
  emits('updateSortBy', options)
}
const expandedListener = computed(() => {
  setExpanded()
  return props.defaultExpanded
})

const sortByListener = computed(() => {
  return deepClone(props.sortBy)
})
onMounted(async () => {
  setExpanded()
})
</script>
<!--/********************************Script-End*********************************************/-->

<style lang="scss" scoped>
@import '@/assets/styles/tableBase.scss';
</style>
