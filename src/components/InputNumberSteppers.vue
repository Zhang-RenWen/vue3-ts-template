<template>
  <v-number-input
    v-model="proxy"
    v-bind="{ ...localProps, ...$attrs }"
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
    @update:modelValue="formatInternalValue"
    @input="updateParent"
  >
    <!--  
    <template #prepend>
      <slot name="prepend" />'
    </template>
    <template #prepend-inner>
     <slot name="prepend-inner"/>
    </template>
    <template #append>
      <slot name="append" />
    </template>
    <template #append-outer>
      <slot name="append-outer" />
    </template>  -->
  </v-number-input>
</template>
<script setup lang="ts">
import { ref, toRefs, computed, nextTick } from 'vue';
import { Props, propsBase, InputRules, InputFormat } from '@/model/InputModel';
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
const formatInternalValue = (updateValue: any) => {
  const value = deepClone(Number(updateValue));
  if (isNaN(Number(value))) {
    emits('blur', 0);
    emits('update:modelValue', 0);
    return;
  }
  emits('blur', Number(formatValue(value)));
  emits('update:modelValue', Number(formatValue(value)));
};
const updateParent = ($event: Event) => {
  const value = deepClone(Number($event.target.value));
  if (isNaN(Number(value))) {
    emits('update:value', 0);
    emits('update:modelValue', 0);
    emits('change', 0);
    emits('input', 0);
    return;
  }
  emits('update:value', value);
  emits('update:modelValue', value);
  emits('change', value);
  emits('input', value);
};
</script>
<style scoped lang="scss" src="@/assets/styles/inputBase.scss"></style>
<style scoped lang="scss">
.inputTextField:deep(i) {
  height: 15px;
}
</style>
