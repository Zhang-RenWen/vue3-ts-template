<template>
  <v-dialog v-model="confirm.message.visible" persistent max-width="400">
    <v-card>
      <v-card-title
        :style="{
          color: themes.light.colors.white,
          'background-color': themes.light.colors.primary,
        }"
        class="confirm-title"
      >
        {{ confirm.message.title }}
      </v-card-title>
      <v-card-text>{{ confirm.message.content }}</v-card-text>
      <div class="d-flex justify-center pa-3">
        <v-btn
          color="primary"
          :class="{ 'mr-6': confirm.message.showCancelButton }"
          class=""
          @click="goAhead"
        >
          {{ confirm.message.buttonText }}
        </v-btn>
        <v-btn v-if="confirm.message.showCancelButton" color="success" @click="cancel">
          {{ confirm.message.buttonCancelText }}
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref, toRefs, computed, nextTick, onMounted, reactive, toRaw } from 'vue';
import { useConfirmsStore } from '@/stores/useConfirmStore';
const confirm = useConfirmsStore();
import { useUIStore } from '@/stores/useUIStore';
const uiStatus = useUIStore();
const themes = toRaw(uiStatus.themes);
const emits = defineEmits(['getConfirmResult']);
function goAhead() {
  emits('getConfirmResult', true);
  confirm.setResult(true);
  confirm.hideMessage();
}

function cancel() {
  emits('getConfirmResult', false);
  confirm.setResult(false);
  confirm.hideMessage();
}
onMounted(async () => {});
</script>
<style scoped lang="scss">
.confirm-title {
  height: 48px;
  box-shadow:
    0 2px 4px-1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
