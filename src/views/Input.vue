<template>
  <v-card>
    <h3>About page</h3>
    <v-container>
      <v-form ref="Form" v-model="valid">
        <p>valid:{{ valid }}</p>
        <InputLabel label="Enter your text" />
        <InputTextField v-model="pokemon.text" label="Enter your text" />
        <InputLabel label="Enter your text2" />
        <InputTextField
          v-model="pokemon.text"
          :has-changed="true"
          :rules="[]"
          @input="eventTest"
          @blur="eventTest"
        />
        <InputLabel label="Disabled Input" />
        <InputTextField v-model="pokemon.text" :required="required" @change="change" />
        Pinia pokemon.text:
        <p>{{ pokemon.text }}</p>
        Input.vue data text :
        <p>{{ text }}</p>
        <v-btn @click="toggleRequired">toggleRequired {{ required }}</v-btn>
        <v-btn @click="submit">validate</v-btn>
        <v-btn @click="reset">resetValidation</v-btn>
        <v-btn @click="clear">clearData</v-btn>
      </v-form>
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
let disabled = ref(false); // 綁定資料在本組件;
let required = ref(false); // 綁定資料在本組件;
let valid = ref(false); // 綁定資料在本組件;
const Form = ref();
function eventTest($event: Event) {
  console.log(pokemon.text, $event);
}
function change() {
  disabled.value = !disabled.value;
}

function toggleRequired() {
  required.value = !required.value;
  submit();
}
function submit() {
  Form.value?.validate();
}
function reset() {
  Form.value?.reset();
}
function clear() {
  pokemon.setText('');
}

onMounted(async () => {});
</script>
<!--/********************************Script-End*********************************************/-->

<style scoped lang="scss"></style>
