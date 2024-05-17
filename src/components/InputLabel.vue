<!-- 保持無狀態，format 和 validate 用 option 傳入 -->
<template>
  <div class="text-subtitle-1 text-medium-emphasis">
    <strong>{{ name }}</strong>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, computed } from 'vue';
interface Props {
  name?: string;
}
const props = withDefaults(defineProps<Props>(), {
  // props
  name: '',
});

const internalValue = toRefs(props);
</script>
<style scoped lang="scss">
.text-medium-emphasis {
  width: 100%;
  margin-right: 8px;
  color: #000000 !important;
}
</style>
