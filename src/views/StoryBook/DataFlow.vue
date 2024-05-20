<template>
  <v-card class="main-section">
    <h3>About page</h3>
    <p>Pokemons list:</p>
    <p>{{ testNames }}</p>
    <v-btn @click="test.addItem({ name: 'unknow' })">push item</v-btn>
    <v-row v-for="(item, index) in testNames" :key="index" class="my-3 mx-3">
      <v-btn :color="'primary'" @click="test.deleteItem(item)">delete {{ item['name'] }}</v-btn>
    </v-row>

    Pinia test.text:
    <p>{{ test.text }}</p>
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { useTestStore } from '@/stores/test';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

const test = useTestStore();
const { testNames } = storeToRefs(test);
</script>
<!--/********************************Script-End*********************************************/-->

<style scoped lang="scss"></style>
