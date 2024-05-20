<template>
  <v-card class="main-section">
    <h1>輸入框/表單</h1>
    <InputNumber v-model="numberFormat" />
    <v-container></v-container>
  </v-card>
</template>

<script setup lang="ts">
import { useTestStore } from '@/stores/test';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';
const test = useTestStore();
import { useAlertsStore } from '@/stores/useAlertsStore';
const alert = useAlertsStore();
const text = ref('');
const disabled = ref(false);
const required = ref(false);
const hasChange = ref(false);
const valid = ref(false);
const Form = ref();
const testValue = ref('');
const taiwanId = ref('');
const inputAutoCompleteValue = ref('');
const items = reactive([{ text: '選項1', value: '1' }]);
function inputEventTest($event: Event) {
  console.log(test.text, $event);
  alert.showMessage({ content: test.text, title: 'inputEventTest' });
}

function blurEventTest($event: Event) {
  alert.showMessage({ content: test.text, title: 'blurEventTest' });
  console.log(test.text, $event);
}
function changeEventTest($event: Event) {
  alert.showMessage({ content: test.text, title: 'changed' });
  console.log(test.text, $event);
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
  Form.value?.validate;
}
function reset() {
  Form.value?.reset();
}
function clear() {
  test.setText('');
}
function format() {
  test.setText('10,080');
}
const numberFormat = ref('');
const numberStepper = ref(0);
const numberStepper2 = ref(0);
const numberStepper3 = ref(0);
</script>

<style scoped lang="scss">
.input-demo-page-card {
  margin: 24px;
  padding: 24px;
  border: 1px solid #000000;
}
</style>
