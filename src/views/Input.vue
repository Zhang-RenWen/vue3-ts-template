<template>
  <v-card class="pa-6">
    <h1>Input</h1>
    <v-container>
      <h2>InputTextField</h2>
      <v-form ref="Form" v-model="valid">
        <p>valid:{{ valid }}</p>
        <InputLabel name="Pure" />
        <InputTextField v-model="pokemon.text" />
        <InputLabel name="With Label" />
        <InputTextField v-model="pokemon.text" name="Enter your text" />
        <InputLabel name="has-changed detector" />
        <InputTextField
          v-model="pokemon.text"
          :has-changed="hasChange"
          @input="eventTest"
          @blur="eventTest"
          @change="change"
        />
        <InputLabel name="Disabled Input" />
        <InputTextField
          v-model="pokemon.text"
          :disabled="disabled"
          toUpperCase
          @format="(v) => pokemon.setText(v)"
        />
        <InputLabel name="Required Input" />
        <InputTextField
          v-model="text"
          :required="required"
          toUpperCase
          @format="(v) => (text = v)"
        />
        <InputLabel name="Slot Input" />
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

        <InputLabel name="Format Input" />
        <InputFormat :value="pokemon.text" toCurrency>
          <template #format-value>
            <InputTextField v-model="pokemon.text" checkTaiwanPhoneNumber required />
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

        <h2>InputAutoComplete</h2>
        <p>items 一律只接受 [{text:'XXX',value:'XXX'}] 才不會亂</p>
        {{ inputAutoCompleteValue }}
        <InputAutoComplete
          v-model="inputAutoCompleteValue"
          :items="items"
          :has-changed="hasChange"
          required
        >
          <template #append-inner>
            <v-fade-transition leave-absolute>
              <v-progress-circular color="info" size="24" indeterminate></v-progress-circular>
            </v-fade-transition>
          </template>
        </InputAutoComplete>
      </v-form>
    </v-container>
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { useTestStore } from '@/stores/test';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

const pokemon = useTestStore(); // 綁定資料在 pinia store

const text = ref('固定1111'); // 綁定資料在本組件;
const disabled = ref(false); // 綁定資料在本組件;
const required = ref(false); // 綁定資料在本組件;
const hasChange = ref(false); // 綁定資料在本組件;

const valid = ref(false); // 綁定資料在本組件;
const Form = ref();

const inputAutoCompleteValue = ref('');
const items = reactive([{ text: '選項1', value: '1' }]); // 綁定資料在本組件;

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
