<template>
  <v-card>
    <h3>About page</h3>
    <p>Pokemons list:</p>
    <p>{{ pokemonsNames }}</p>
    <v-btn @click="pokemon.addItem({ name: 'unknow' })">push item</v-btn>
    <v-row v-for="(item, index) in pokemonsNames" :key="index" class="my-3 mx-3">
      <v-btn @click="pokemon.deleteItem(item)">delete {{ item['name'] }}</v-btn>
    </v-row>
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemon';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

const pokemon = usePokemonStore();
const { pokemonsNames } = storeToRefs(pokemon);

onMounted(async () => {
  try {
    await pokemon.getPokemons();
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
