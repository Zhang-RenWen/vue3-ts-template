<template>
  <v-card class="main-section">
    <h1>Alert</h1>
    <h3>引入/使用範例</h3>
    <v-btn
      class="mb-6"
      color="primary"
      @click="
        alert.showMessage({
          content: '測試',
        })
      "
    >
      打開 Alert
    </v-btn>
    <h3>自定義 Title</h3>
    <v-btn
      class="mb-6"
      color="primary"
      @click="
        alert.showMessage({
          content: '上方 title 有更換',
          title: '這是 自定義 title',
        })
      "
    >
      打開 Alert
    </v-btn>
    <h3>自定義 Title</h3>
    <v-btn
      class="mb-6"
      color="primary"
      @click="
        alert.showMessage({
          content: '下方按鈕文字有更換，預設是「確定」。',
          buttonText: 'ok',
        })
      "
    >
      打開 Alert
    </v-btn>
  </v-card>
</template>
<script setup lang="ts">
import { useAlertsStore } from '@/stores/useAlertsStore';
const alert = useAlertsStore();
</script>
