<!-- 保持無狀態，format 和 validate 用 option 傳入 -->
<template>
  <v-text-field
    v-model="internalValue"
    :label="label"
    :class="{ inputTextField: true, hasChanged: hasChanged }"
    :rules="localRules"
    :type="type"
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

const props = withDefaults(defineProps<Props>(), propsBase);
const localRules = computed(() => {
  return props.rules.concat(new InputRules(props).getRulesFromProps());
});

const inputFormat = new InputFormat(props);
const formatValue = inputFormat.formatValue;
const emits = defineEmits(['update:value', 'change', 'format', 'blur', 'input']);
let internalValue = toRefs(props);
const formatInternalValue = () => {
  emits('format', formatValue(internalValue));
  emits('blur', internalValue);
};
const updateParent = () => {
  emits('update:value', internalValue);
  emits('change', internalValue);
  emits('input', internalValue);
};
</script>
<style scoped lang="scss" src="@/assets/styles/inputBase.scss"></style>
