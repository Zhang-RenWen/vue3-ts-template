<template>
  <v-dialog v-model="alert.message.visible" max-width="400">
    <v-card>
      <v-card-title class="title">
        {{ alert.message.title }}
      </v-card-title>

      <v-card-text>{{ alert.message.content }}</v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn text color="primary" @click="alert.hideMessage()">
          {{ alert.message.button }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<!--/********************************Script-Start*********************************************/-->
<script setup lang="ts">
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue';
import { useAlertsStore } from '@/stores/alerts';
const alert = useAlertsStore();
onMounted(async () => {});
</script>
<!--/********************************Script-End*********************************************/-->
