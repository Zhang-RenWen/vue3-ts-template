<template>
  <v-card class="main-section">
    <h1 class="mb-6">常用Icon</h1>
    <p class="mb-6">以下常用icon参考 保服系統</p>
    <p class="mb-6">如需其他更多種類的icon 可已造訪連結搜尋：</p>
    <a href="https://pictogrammers.com/library/mdi/">Material Design Icons page.</a>
    <h3>使用方式</h3>
    <code class="demo-code-block mb-3">&lt;v-icon&gt;{{ `{\{icon-name}\}` }}&lt;/v-icon&gt;</code>
    <div class="container">
      <v-card v-for="(icon, index) in icons" :key="index" class="icon-card">
        <v-card-title class="icon d-flex">
          <v-icon>{{ icon.name }}</v-icon>
        </v-card-title>
        <v-card-title class="name d-flex">{{ icon.name }}</v-card-title>
      </v-card>
    </div>
  </v-card>
</template>
<script setup lang="ts">
import { useTestStore } from '@/stores/test'
import { storeToRefs } from 'pinia'
import { onMounted, reactive, ref } from 'vue'
const icons = reactive([
  { name: 'mdi-eye' },
  { name: 'mdi-eye-off' },
  { name: 'mdi-bell' },
  { name: 'mdi-view-grid' },
  { name: 'mdi-help-circle-outline' },
  { name: 'mdi-menu' },
  { name: 'mdi-target' },
  { name: 'mdi-plus-thick' },
  { name: 'mdi-trash-can' },
  { name: 'mdi-square-edit-outline' },
  { name: 'mdi-content-duplicate' },
  { name: 'mdi-hand-pointing-right' },
  { name: 'mdi-account-details' },
  { name: 'mdi-close' },
  { name: 'mdi-file-remove' },
  { name: 'mdi-check' },
  { name: 'mdi-image-plus' },
  { name: 'mdi-file-import' },
  { name: 'mdi-autorenew' },
  { name: 'mdi-crosshairs-gps' },
  { name: 'mdi-crosshairs-off' },
  { name: 'mdi-format-list-bulleted-square' },
  { name: 'mdi-account' },
  { name: 'mdi-alert-circle' },
  { name: 'mdi-database-search' },
  { name: 'mdi-magnify' },
  { name: 'mdi-check-all' },
  { name: 'mdi-checkbox-marked-outline' },
  { name: 'mdi-checkbox-blank-outline' },
  { name: 'mdi-currency-usd' },
  { name: 'mdi-vector-arrange-above' },
  { name: 'mdi-vector-difference-ab' },
  { name: 'mdi-clipboard-alert-outline' },
  { name: 'mdi-trophy-award' },
  { name: 'mdi-file-powerpoint-box' },
  { name: 'mdi-stack-overflow' },
  { name: 'mdi-clipboard-text-outline' },
  { name: 'mdi-chevron-left' },
  { name: 'mdi-chevron-down' },
  { name: 'mdi-chevron-up' },
  { name: 'mdi-chevron-right' },
  { name: 'mdi-chevron-double-down' },
  { name: 'mdi-call-split' },
  { name: 'mdi-dots-vertical' },
  { name: 'mdi-typewriter' },
  { name: 'mdi-file-compare' },
  { name: 'mdi-file-alert-outline' },
  { name: 'mdi-message-alert-outline' },
  { name: 'mdi-account-group' },
  { name: 'mdi-account-details' },
  { name: 'mdi-cached' },
  { name: 'mdi-pencil' },
  { name: 'mdi-pen' },
  { name: 'mdi-gesture-double-tap' },
  { name: 'mdi-message' },
  { name: 'mdi-alert' },
  { name: 'mdi-tab' },
  { name: 'mdi-triangle' },
  { name: 'mdi-table' },
  { name: 'mdi-directions' },
  { name: 'mdi-dots-horizontal' },
  { name: 'mdi-palette' },
  { name: 'mdi-format-letter-case' },
  { name: 'mdi-account' },
  { name: 'mdi-calendar' },
  { name: 'mdi-comment-text-outline' },
  { name: 'mdi-reload' },
  { name: 'mdi-message-text' },
  { name: 'mdi-stack-overflow' },
  { name: 'mdi-clipboard-text-outline' },
  { name: 'mdi-vector-arrange-above' },
  { name: 'mdi-vector-difference-ab' },
  { name: 'mdi-clipboard-alert-outline' },
  { name: 'mdi-flag-variant' },
  { name: 'mdi-flag-variant-outline' },
  { name: 'mdi-file-document-outline' },
  { name: 'mdi-file-outline' },
  { name: 'mdi-backup-restore' },
  { name: 'mdi-database-check' },
  { name: 'mdi-content-copy' },
  { name: 'mdi-view-dashboard' },
  { name: 'mdi-briefcase' },
  { name: 'mdi-truck-fast' },
  { name: 'mdi-file-document-edit' },
  { name: 'mdi-link' },
  { name: 'mdi-cogs' },
  { name: 'mdi-server' },
])

onMounted(async () => {})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.icon-card {
  width: 200px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  margin: 0 6px 6px 0;
  .icon {
    width: 30px;
    height: 30px;
    padding: 0;
  }
  .name {
    height: 80px;
  }
  .v-card-title {
    word-break: break-all;
    white-space: normal;
  }
}
</style>
