<template>
  <v-card class="main-section">
    <h1>Loading</h1>
    <p>按下按鈕一秒後關閉</p>
    <v-btn class="mb-6" color="primary" @click="openLoading">打開 loading</v-btn>
    <code class="storybook-demo-code">
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp; import { useLoadingStore } from '@/stores/useLoadingStore';</div>
      <div>&nbsp; const loading = useLoadingStore();</div>
      <div>&nbsp; loading.toggleLoading(true); // 開啟 loading</div>
      <div>&nbsp; loading.toggleLoading(false); // 關閉 loading</div>
      <div>&lt;/script&gt;</div>
    </code>
  </v-card>
</template>
<script setup lang="ts">
// import { onMounted, reactive, ref } from 'vue';
import { useLoadingStore } from '@/stores/useLoadingStore'
const loading = useLoadingStore()
function openLoading() {
  loading.toggleLoading(true)
  setTimeout(() => {
    loading.toggleLoading(false)
  }, 1000)
}
</script>
