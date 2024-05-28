<template>
  <v-card class="main-section">
    <h1>Vuetify Settings</h1>
    <div v-for="name in Object.keys(themes.light.colors)" :key="name" class="my-6">
      <div>{{ name }}&nbsp;{{ themes.light.colors[name] }}</div>
      <div
        :style="{
          width: '100%',
          height: '50px',
          'background-color': themes.light.colors[name],
          border: '1px solid #000000',
        }"
      ></div>
    </div>
  </v-card>
</template>
<script setup lang="ts">
import { toRaw } from 'vue'
import { useUIStore } from '@/stores/useUIStore'
const uiState = useUIStore()
const themes = toRaw(uiState.themes)
</script>
