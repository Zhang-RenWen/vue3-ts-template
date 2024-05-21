<template>
  <v-card class="main-section">
    <h1>Confirm</h1>
    <h3>引入/使用範例</h3>
    <v-btn class="mb-6" color="primary" @click="openConfirm1">打開 Confirm</v-btn>
    <h3>自定義 Title</h3>
    <v-btn class="mb-6" color="primary" @click="openConfirm2">打開 Confirm</v-btn>
    <h3>自定義 Title</h3>
    <v-btn class="mb-6" color="primary" @click="openConfirm3">打開 Confirm</v-btn>
  </v-card>
</template>
<script setup lang="ts">
import { toRaw, reactive, ref } from 'vue';
import { useConfirmsStore } from '@/stores/useConfirmStore';
const confirm = useConfirmsStore();

async function openConfirm1() {
  const value = await confirm.showMessage({
    content: '測試',
  });
  console.log(value);
}
async function openConfirm2() {
  const value = await confirm.showMessage({
    content: '上方 title 有更換',
    title: '這是 自定義 title',
  });
  console.log(value);
}
async function openConfirm3() {
  const value = await confirm.showMessage({
    content: '下方按鈕文字有更換，預設是「確定」。',
    buttonText: 'ok',
  });
  console.log(value);
}
</script>
