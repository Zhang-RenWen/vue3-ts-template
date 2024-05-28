<template>
  <v-card class="main-section">
    <h1>Button</h1>
    <h3>引入/使用範例</h3>
    <div class="d-flex">
      <v-btn class="mr-6" color="primary">打開 Alert</v-btn>

      <v-btn class="mr-6" color="primary">打開 Alert</v-btn>

      <v-btn class="mr-6" color="primary">打開 Alert</v-btn>
    </div>
  </v-card>
</template>
<script setup lang="ts">
import { useAlertsStore } from '@/stores/useAlertsStore'
const alert = useAlertsStore()
</script>
