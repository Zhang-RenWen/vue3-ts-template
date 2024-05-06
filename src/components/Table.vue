<template>
  {{ expanded }}
  <v-data-table-server
    v-model:expanded="expanded"
    class="custom-table"
    :headers="headers"
    :items="items"
    density="compact"
    no-data-text="無資料"
    fixed-header
    :item-value="itemValue"
    show-expand
  >
    <!-- expand-on-click
    @updated:expanded="expandedFn" -->
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-data-table-server>
</template>
<!--/********************************Script-Start*********************************************/-->
<script setup lang="ts">
import { useTestStore } from '@/stores/test';
import { storeToRefs } from 'pinia';
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue';
import { Props, propsBase } from '@/model/TableModel';
const props = withDefaults(defineProps<Props>(), propsBase);
const expanded = reactive(['electrode']); // 綁定資料在本組件;

function expandedFn(newEx) {
  console.log(newEx);
}

onMounted(async () => {});
</script>
<!--/********************************Script-End*********************************************/-->

<style lang="scss" scoped>
@import '@/assets/styles/tableBase.scss';
</style>
