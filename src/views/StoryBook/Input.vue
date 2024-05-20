<template>
  <v-card class="main-section">
    <h1>Form Elements</h1>
    <v-container>
      <v-card class="input-demo-page-card">
        <h3>Type</h3>
        <table>
          <thead>
            <tr>
              <th>type/status</th>
              <th>default</th>
              <th>disabled</th>
              <th>readonly</th>
              <th>hasChanged</th>
              <th>error</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>InputLabel</td>
              <td><InputLabel name="Title Name"></InputLabel></td>
            </tr>
            <tr>
              <td>InputTextField</td>
              <td><InputTextField></InputTextField></td>
            </tr>
            <tr>
              <td>InputTextArea</td>
              <td><InputTextArea></InputTextArea></td>
            </tr>
            <tr>
              <td>InputNumber</td>
              <td><!-- <InputNumber></InputNumber> --></td>
            </tr>
            <tr>
              <td>InputNumberSteppers</td>
              <td><InputNumberSteppers></InputNumberSteppers></td>
            </tr>
            <tr>
              <td>inputAutoComplete</td>
              <td><inputAutoComplete></inputAutoComplete></td>
            </tr>
            <tr>
              <td>InputFormat</td>
              <td><!-- <InputFormat></InputFormat> --></td>
            </tr>
          </tbody>
        </table>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Align</h3>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Slot</h3>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Events</h3>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Bind Data</h3>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Format</h3>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Validate</h3>
      </v-card>
    </v-container>
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
