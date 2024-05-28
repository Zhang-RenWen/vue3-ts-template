<!-- 保持無狀態，format 和 validate 用 option 傳入 -->
<template>
  <div :style="{ 'min-width': `${width}${units}` }" class="text-subtitle-1 text-medium-emphasis">
    <strong>{{ name }}</strong>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, computed } from 'vue'
interface Props {
  name?: string
  width?: number | string
  units?: string
}
const props = withDefaults(defineProps<Props>(), {
  // props
  name: '',
  width: 'auto',
  units: '%',
})

const internalValue = toRefs(props)
</script>
<style scoped lang="scss">
.text-medium-emphasis {
  margin-right: 8px;
  color: #000000 !important;
}
</style>
