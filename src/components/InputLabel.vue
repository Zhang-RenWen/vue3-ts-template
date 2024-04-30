<!-- 保持無狀態，format 和 validate 用 option 傳入 -->
<template>
  <div class="text-subtitle-1 text-medium-emphasis">{{ label }}</div>
</template>

<script setup lang="ts">
import { ref, toRefs, computed } from 'vue';
interface Props {
  label?: string;
}
const props = withDefaults(defineProps<Props>(), {
  // props
  label: '',
});

const internalValue = toRefs(props);
</script>
<style scoped lang="scss">
.text-medium-emphasis {
  color: #000000 !important;
}
</style>
