<!-- 保持無狀態，format 和 validate 用 option 傳入 -->
<template>
  <v-autocomplete
    v-model="internalValue"
    :label="label"
    :class="{ inputTextField: true, hasChanged: hasChanged }"
    :rules="localRules"
    :items="localItems"
    density="compact"
    variant="outlined"
    single-line
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
const localRules = computed(() => {
  return props.rules.concat(new InputRules(props).getRulesFromProps());
});
const localItems = computed(() => {
  return props.items;
});
let internalValue = toRefs(props);
</script>
<style scoped lang="scss" src="@/assets/styles/inputBase.scss"></style>
