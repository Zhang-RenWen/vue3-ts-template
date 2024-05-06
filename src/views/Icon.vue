<template>
  <v-card class="pa-6">
    <h3>About page</h3>
    <v-icon>mdi-eye</v-icon>
    <p>
      For a list of all available icons, visit the official
      <a href="https://pictogrammers.com/library/mdi/">Material Design Icons page.</a>
    </p>
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { useTestStore } from '@/stores/test';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

const pokemon = useTestStore();
const { testNames } = storeToRefs(pokemon);

onMounted(async () => {});
</script>
<!--/********************************Script-End*********************************************/-->

<style scoped lang="scss"></style>
