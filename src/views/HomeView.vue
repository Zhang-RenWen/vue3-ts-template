<template>
  <v-card class="pa-6">
    <h3>About page</h3>
    <p>Pokemons list:</p>
    <p>{{ testNames }}</p>
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { useTestStore } from '@/stores/test';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

const test = useTestStore();
const { testNames } = storeToRefs(test);

onMounted(async () => {
  try {
    await test.getApiData();
  } catch (error) {
    console.log(error);
  }
});
</script>
<!--/********************************Script-End*********************************************/-->

<style scoped lang="scss"></style>
