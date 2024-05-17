<!-- 保持無狀態，format 和 validate 用 option 傳入 -->
<template>
  <v-text-field
    v-model="proxy"
    :label="label"
    :class="{
      inputTextField: true,
      hasChanged: hasChanged,
      'text-center': textCenter,
      'text-end': textEnd,
    }"
    :rules="localRules"
    :type="type"
    :max-length="maxLength"
    :placeholder="localPlaceholder"
    density="compact"
    variant="outlined"
    single-line
    @blur="formatInternalValue"
    @input="updateParent"
  >
    <!-- <template #prepend>
      <slot name="prepend" />
    </template>
    <template #prepend-inner>
      <slot name="prepend-inner" />
    </template>
    <template #append>
      <slot name="append" />
    </template>
    <template #append-outer>
      <slot name="append-outer" />
    </template> -->
  </v-text-field>
</template>

<script setup lang="ts">
import { ref, toRefs, computed, nextTick } from 'vue';
import { Props, propsBase, InputRules, InputFormat } from '@/model/InputModel';
import { deepClone } from '@/utils/deepClone';
const props = withDefaults(defineProps<Props>(), propsBase);
const localRules = computed(() => {
  return props.rules.concat(new InputRules(props).getRulesFromProps());
});
const localPlaceholder = computed(() => {
  return props.placeholder || '請輸入';
});
const inputFormat = new InputFormat(props);
const formatValue = inputFormat.formatValue;
const emits = defineEmits([
  'update:value',
  'update:modelValue',
  'change',
  'format',
  'blur',
  'input',
]);
let internalValue = toRefs(props);
const proxy = computed({
  get() {
    return internalValue.modelValue.value;
  },
  set(v) {
    emits('update:modelValue', v);
  },
});
const formatInternalValue = ($event) => {
  const value = deepClone($event.target.value);
  emits('blur', formatValue(value));
  emits('update:modelValue', formatValue(value));
};
const updateParent = ($event) => {
  const value = deepClone($event.target.value);
  emits('update:value', value);
  emits('update:modelValue', value);
  emits('change', value);
  emits('input', value);
};
</script>
<style scoped lang="scss" src="@/assets/styles/inputBase.scss"></style>
