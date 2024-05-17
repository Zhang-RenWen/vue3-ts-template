<template>
  <v-dialog v-model="alert.message.visible" max-width="400">
    <v-card>
      <v-card-title
        :style="{
          color: themes.light.colors.white,
          'background-color': themes.light.colors.primary,
        }"
        class="alert-title"
      >
        {{ alert.message.title }}
      </v-card-title>
      <v-card-text>{{ alert.message.content }}</v-card-text>
      <div class="d-flex justify-center pa-3">
        <v-btn color="primary" @click="alert.hideMessage()">
          {{ alert.message.buttonText }}
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>
<!--/********************************Script-Start*********************************************/-->
<script setup lang="ts">
import { toRaw, onMounted } from 'vue';
import { useAlertsStore } from '@/stores/useAlertsStore';
const alert = useAlertsStore();

import { useUIStore } from '@/stores/useUIStore';
const uiStatus = useUIStore();
const themes = toRaw(uiStatus.themes);

onMounted(async () => {});
</script>
<!--/********************************Script-End*********************************************/-->
<style scoped lang="scss">
.alert-title {
  height: 48px;
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
