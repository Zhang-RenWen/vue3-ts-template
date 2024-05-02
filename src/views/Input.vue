<template>
  <v-card>
    <h3>About page</h3>
    <v-container>
      <v-form ref="Form" v-model="valid">
        <p>valid:{{ valid }}</p>
        <InputLabel label="Pure" />
        <InputTextField v-model="pokemon.text" />
        <InputLabel label="With Label" />
        <InputTextField v-model="pokemon.text" label="Enter your text" />
        <InputLabel label="has-changed detector" />
        <InputTextField
          v-model="pokemon.text"
          :has-changed="hasChange"
          @input="eventTest"
          @blur="eventTest"
          @change="change"
        />
        <InputLabel label="Disabled Input" />
        <InputTextField v-model="pokemon.text" :disabled="disabled" />
        <InputLabel label="Required Input" />
        <InputTextField v-model="pokemon.text" :required="required" />
        <InputLabel label="Slot Input" />
        <InputTextField v-model="pokemon.text">
          >
          <template #prepend>
            <v-tooltip location="bottom">
              <template #activator="{ props }">
                <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
              </template>

              I'm a tooltip
            </v-tooltip>
          </template>

          <template #append-inner>
            <v-fade-transition leave-absolute>
              <v-progress-circular color="info" size="24" indeterminate></v-progress-circular>
            </v-fade-transition>
          </template>
          <template #append>
            <v-menu>
              <template #activator="{ props }">
                <v-btn v-bind="props" class="mt-n2">
                  <v-icon icon="mdi-menu" start></v-icon>
                  Menu
                </v-btn>
              </template>

              <v-card>
                <v-card-text class="pa-6">
                  <v-btn color="primary" size="large" variant="text">
                    <v-icon icon="mdi-target" start></v-icon>

                    Click me
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-menu>
          </template>
        </InputTextField>

        <InputLabel label="Format Input" />
        <InputFormat :value="pokemon.text">
          <template #format-value>
            <InputTextField v-model="pokemon.text" checkTaiwanPhoneNumber toCurrency required />
          </template>
        </InputFormat>
        Pinia pokemon.text:
        <p>{{ pokemon.text }}</p>
        Input.vue data text :
        <p>{{ text }}</p>
        <v-btn @click="toggleHasChange">toggleHasChange {{ hasChange }}</v-btn>
        <v-btn @click="toggleDisabled">toggleDisabled {{ disabled }}</v-btn>
        <v-btn @click="toggleRequired">toggleRequired {{ required }}</v-btn>
        <v-btn @click="submit">validate</v-btn>
        <v-btn @click="reset">resetValidation</v-btn>
        <v-btn @click="clear">clearData</v-btn>
        <v-btn @click="format">formatData</v-btn>
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
const disabled = ref(false); // 綁定資料在本組件;
const required = ref(false); // 綁定資料在本組件;
const hasChange = ref(false); // 綁定資料在本組件;

const valid = ref(false); // 綁定資料在本組件;
const Form = ref();

function eventTest($event: Event) {
  console.log(pokemon.text, $event);
}
function change(value: any) {
  console.log(value);
}

function toggleHasChange() {
  hasChange.value = !hasChange.value;
  submit();
}

function toggleDisabled() {
  disabled.value = !disabled.value;
  submit();
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

function format() {
  pokemon.setText('10,000');
}

onMounted(async () => {});
</script>
<!--/********************************Script-End*********************************************/-->

<style scoped lang="scss"></style>
