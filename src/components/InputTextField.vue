<!-- 保持無狀態，format 和 validate 用 option 傳入 -->
<template>
  <v-text-field
    v-model="internalValue"
    :label="label"
    class="inputTextField"
    density="compact"
    variant="outlined"
    hide-details
    single-line
    @input="$emit('update:value', internalValue)"
  />
</template>

<script setup lang="ts">
import { ref, toRefs, computed } from 'vue';
interface Props {
  value?: string;
  label?: string;
  type?: string;
}
const props = withDefaults(defineProps<Props>(), {
  // props
  value: '',
  label: '',
  type: '', // 外部標記用，若未來有需要改變寫法時方便批量調整   ['text','email','id','name','address'...]
});
const emits = defineEmits(['update:value']);

const internalValue = toRefs(props);

const updateParent = () => {
  emits('update:value', internalValue.value);
};
</script>
<style scoped lang="scss">
.inputTextField :deep(.v-field__input) {
  max-height: 30px;
  min-height: 30px;
  padding: 0 6px;
}
</style>
