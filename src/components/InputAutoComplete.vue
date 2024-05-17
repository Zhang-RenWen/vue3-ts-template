<!-- 保持無狀態，format 和 validate 用 option 傳入 -->
<template>
  <v-autocomplete
    v-model="proxy"
    :class="{ inputTextField: true, hasChanged: hasChanged }"
    :rules="localRules"
    :items="localItems"
    item-title="text"
    item-value="value"
    :placeholder="localPlaceholder"
    density="compact"
    variant="outlined"
    single-line
    no-data-text="沒有資料"
    @blur="emits('blur', internalValue)"
  >
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-autocomplete>
</template>

<script setup lang="ts">
import { ref, toRefs, computed, watch, nextTick } from 'vue';
import { Props, propsBase, InputRules, InputFormat } from '@/model/InputModel';
const props = withDefaults(defineProps<Props>(), propsBase);
const proxy = computed({
  get() {
    return internalValue.modelValue.value;
  },
  set(v) {
    emits('update:modelValue', v);
  },
});
const localRules = computed(() => {
  return props.rules.concat(new InputRules(props).getRulesFromProps());
});
const localPlaceholder = computed(() => {
  return props.placeholder || '請選擇';
});
const localItems = computed(() => {
  return props.items;
});
let internalValue = toRefs(props);
const emits = defineEmits([
  'update:value',
  'update:modelValue',
  'change',
  'format',
  'blur',
  'input',
]);
</script>
<style scoped lang="scss" src="@/assets/styles/inputBase.scss"></style>
