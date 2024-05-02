<template>
  <v-card>
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
    await test.getPokemons();
  } catch (error) {
    console.log(error);
  }
});
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
