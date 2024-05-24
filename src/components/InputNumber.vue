<!--保持無狀態#format 和 validate 用 option 傳入 -->
<template>
  <InputFormat
    :value="internalValue.modelValue"
    to-currency
    text-end
    :decimal="decimal"
    :has-changed="hasChanged"
    type="number"
  >
    <InputTextField
      v-model="internalValue.modelValue"
      type="number"
      v-bind="{ ...localProps, ...$attrs }"
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
import { deepClone } from '@/utils/deepClone';

const props = withDefaults(defineProps<Props>(), propsBase);
const localProps = computed(() => {
  let selectedProps = {};
  Object.keys(props).forEach((key: string) => {
    if (!['value', 'modelValue'].includes(key)) {
      selectedProps[key] = deepClone(props[key]);
    }
  });

  return selectedProps;
});
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
