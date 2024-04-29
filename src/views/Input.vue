<template>
  <v-card>
    <h3>About page</h3>
    <v-container>
      <InputLabel label="Enter your text" />
      <InputTextField v-model="pokemon.text" />
      <InputLabel label="Enter your text2" />
      <InputTextField v-model="pokemon.text" />
      Pinia pokemon.text:
      <p>{{ pokemon.text }}</p>
      App.vue data text :
      <p>{{ text }}</p>
    </v-container>
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemon';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

const pokemon = usePokemonStore(); // 綁定資料在 pinia store
const text = ref('固定1111'); // 綁定資料在本組件;
onMounted(async () => {});
</script>
<!--/********************************Script-End*********************************************/-->

<style scoped lang="scss">
.list-name {
  font-size: 14px;
  color: #777;
  margin-left: 15px;
}

.list-data {
  font-size: 14px;
  color: #777;
  margin-right: 15px;
}

.list-title {
  text-align: left;
  font-size: 16px;
  color: #000;
  margin: 8px 15px;
}

.list-type {
  font-size: 14px;
  color: #777;
  margin-left: 15px;
}

.list-icon {
  height: 20px;
  width: 20px;
  margin-right: 15px;
}
</style>
