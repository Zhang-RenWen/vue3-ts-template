<template>
  <v-card>
    <h3>About page</h3>
    <p>Pokemons list:</p>
    <p>{{ testNames }}</p>
    <v-btn @click="test.addItem({ name: 'unknow' })">push item</v-btn>
    <v-row v-for="(item, index) in testNames" :key="index" class="my-3 mx-3">
      <v-btn @click="test.deleteItem(item)" :color="'primary'">delete {{ item['name'] }}</v-btn>
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
