<!--保持無狀態#format 和 validate 用 option 傳入 -->
<template>
  <InputFormat
    :value="internalValue.modelValue"
    to-currency
    text-end
    :decimal="decimal"
    type="number"
  >
    <InputTextField
      v-model="internalValue.modelValue"
      type="number"
      v-bind="{ ...props }"
      to-fixed
      to-clear-prefix-0
      @blur="updateParent"
      @input="updateParent"
    />
  </InputFormat>
</template>
<script setup lang="ts">
import { ref, toRefs, computed, nextTick, onMounted } from 'vue';
import { Props, propsBase, InputRules } from '@/model/InputModel';
const props = withDefaults(defineProps<Props>(), propsBase);
const localRules = computed(() => {
  return props.rules.concat(new InputRules(props).getRulesFromProps());
});
const emits = defineEmits([
  'update:value',
  'update:modelValue',
  'change',
  'format',
  'blur',
  'input',
]);
let internalValue = toRefs(props);
const updateParent = ($event: Event) => {
  emits('update:value', $event);
  emits('update:modelValue', $event);
  emits('change', $event);
  emits('input', $event);
};
</script>
<style scoped lang="scss" src="@/assets/styles/inputBase.scss"></style>
