<template>
  <v-card class="main-section">
    <h1>Form Elements</h1>
    <v-container>
      <v-card class="input-demo-page-card">
        <h3>Type</h3>
        <table>
          <thead>
            <tr>
              <th>Type/Status</th>
              <th>Default</th>
              <th>Disabled</th>
              <th>Readonly</th>
              <th>HasChanged</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Usage</td>
              <td>&lt;Input... /&gt;</td>
              <td>&lt;Input... disabled /&gt;</td>
              <td>&lt;Input... readonly /&gt;</td>
              <td>&lt;Input... hasChanged /&gt;</td>
            </tr>
            <tr>
              <td>&lt;InputLabel /&gt;</td>
              <td><InputLabel name="Title Name"></InputLabel></td>
              <td><InputLabel name="Title Name"></InputLabel></td>
              <td><InputLabel name="Title Name"></InputLabel></td>
              <td><InputLabel name="Title Name"></InputLabel></td>
            </tr>
            <tr>
              <td>&lt;InputTextField /&gt;</td>
              <td><InputTextField></InputTextField></td>
              <td><InputTextField disabled></InputTextField></td>
              <td><InputTextField readonly></InputTextField></td>
              <td><InputTextField has-changed></InputTextField></td>
            </tr>
            <tr>
              <td>&lt;InputTextArea/&gt;</td>
              <td><InputTextArea></InputTextArea></td>
              <td><InputTextArea disabled></InputTextArea></td>
              <td><InputTextArea readonly></InputTextArea></td>
              <td><InputTextArea has-changed></InputTextArea></td>
            </tr>
            <tr>
              <td>&lt;InputNumber/&gt;</td>
              <td><!-- <InputNumber></InputNumber> --></td>
              <td><!-- <InputNumber disabled></InputNumber> --></td>
              <td><!-- <InputNumber readonly></InputNumber> --></td>
              <td><!-- <InputNumber has-changed></InputNumber> --></td>
            </tr>
            <tr>
              <td>&lt;InputNumberSteppers/&gt;</td>
              <td><InputNumberSteppers></InputNumberSteppers></td>
              <td><InputNumberSteppers disabled></InputNumberSteppers></td>
              <td><InputNumberSteppers readonly></InputNumberSteppers></td>
              <td><InputNumberSteppers has-changed></InputNumberSteppers></td>
            </tr>
            <tr>
              <td>&lt;InputAutoComplete/&gt;</td>
              <td><inputAutoComplete></inputAutoComplete></td>
              <td><inputAutoComplete disabled></inputAutoComplete></td>
              <td><inputAutoComplete readonly></inputAutoComplete></td>
              <td><inputAutoComplete has-changed></inputAutoComplete></td>
            </tr>
            <tr>
              <td>&lt;InputFormat/&gt;</td>
              <td><!-- <InputFormat></InputFormat> --></td>
              <td><!-- <InputFormat></InputFormat> --></td>
              <td><!-- <InputFormat></InputFormat> --></td>
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

table {
  border-collapse: collapse;
}
table th,
table td {
  border: 1px solid rgba(#000000, 0.5);
  padding: 12px;
  border-spacing: 0;
  margin: 0;
}
</style>
