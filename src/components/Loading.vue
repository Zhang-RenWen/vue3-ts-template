<template>
  <v-overlay
    v-model="loading.state.visible"
    persistent
    :z-index="3000"
    class="d-flex justify-center align-center"
  >
    <v-card width="400">
      <v-card-text class="d-flex justify-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-card-text>
    </v-card>
  </v-overlay>
</template>
<!--/********************************Script-Start*********************************************/-->
<script setup lang="ts">
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue'
import { useLoadingStore } from '@/stores/useLoadingStore'
const loading = useLoadingStore()
onMounted(async () => {})
</script>
<!--/********************************Script-End*********************************************/-->
