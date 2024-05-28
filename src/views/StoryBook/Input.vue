<template>
  <v-card class="main-section">
    <h1>Form Elements</h1>
    <v-container>
      <v-card class="input-demo-page-card">
        <h3>Format Text Value</h3>
        <table>
          <thead>
            <tr>
              <th>Format Type</th>
              <th>Usage</th>
              <th>&lt;InputTextField /&gt; Demo</th>
              <th>&lt;InputTextArea /&gt; Demo</th>
              <th>Real Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><InputLabel name="to-trim" /></td>
              <td>
                <div>&lt;Input... v-model="..." to-trim /&gt;</div>
              </td>
              <td>
                <div>
                  <InputTextField v-model="formatToTrim" to-trim />
                </div>
              </td>
              <td>
                <div>
                  <InputTextArea v-model="formatToTrim" to-trim />
                </div>
              </td>
              <td>{{ formatToTrim }}</td>
            </tr>
            <tr>
              <td><InputLabel name="to-upper-case" /></td>
              <td>
                <div>&lt;Input... v-model="..." to-upper-case /&gt;</div>
              </td>
              <td>
                <div>
                  <InputTextField v-model="formatToUpperCase" to-upper-case />
                </div>
              </td>
              <td>
                <div>
                  <InputTextArea v-model="formatToUpperCase" to-upper-case />
                </div>
              </td>
              <td>{{ formatToUpperCase }}</td>
            </tr>
            <tr>
              <td><InputLabel name="to-lower-case" /></td>
              <td>
                <div>&lt;Input... v-model="..." to-lower-case /&gt;</div>
              </td>
              <td>
                <div>
                  <InputTextField v-model="formatToLowerCase" to-lower-case />
                </div>
              </td>
              <td>
                <div>
                  <InputTextArea v-model="formatToLowerCase" to-lower-case />
                </div>
              </td>
              <td>{{ formatToLowerCase }}</td>
            </tr>
            <tr>
              <td><InputLabel name="to-half-width" /></td>
              <td>
                <div>&lt;Input... v-model="..." to-half-width /&gt;</div>
              </td>
              <td>
                <div>
                  <InputTextField v-model="formatToHalfWidth" to-half-width />
                </div>
              </td>
              <td>
                <div>
                  <InputTextArea v-model="formatToHalfWidth" to-half-width />
                </div>
              </td>
              <td>{{ formatToHalfWidth }}</td>
            </tr>
            <tr>
              <td><InputLabel name="to-full-width" /></td>
              <td>
                <div>&lt;Input... v-model="..." to-full-width /&gt;</div>
              </td>
              <td>
                <div>
                  <InputTextField v-model="formatToFullWidth" to-full-width />
                </div>
              </td>
              <td>
                <div>
                  <InputTextArea v-model="formatToFullWidth" to-full-width />
                </div>
              </td>
              <td>{{ formatToFullWidth }}</td>
            </tr>
          </tbody>
        </table>
        <h3>Format Number Value</h3>
        <h3>Format Date Value</h3>
        <h3>Format Text For Display</h3>
        <h3>Format Number For Display</h3>
        <h3>Format Date For Display</h3>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Type</h3>
        <table>
          <thead>
            <tr>
              <th>Description/Status</th>
              <th>Default</th>
              <th>Disabled</th>
              <th>Readonly</th>
              <th>HasChanged</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Set Status</td>
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
              <td><InputTextField v-model="inputTextFieldBindData"></InputTextField></td>
              <td><InputTextField v-model="inputTextFieldBindData" disabled></InputTextField></td>
              <td><InputTextField v-model="inputTextFieldBindData" readonly></InputTextField></td>
              <td>
                <InputTextField v-model="inputTextFieldBindData" has-changed></InputTextField>
              </td>
            </tr>
            <tr>
              <td>&lt;InputTextArea/&gt;</td>
              <td><InputTextArea v-model="inputTextAreaBindData"></InputTextArea></td>
              <td><InputTextArea v-model="inputTextAreaBindData" disabled></InputTextArea></td>
              <td><InputTextArea v-model="inputTextAreaBindData" readonly></InputTextArea></td>
              <td><InputTextArea v-model="inputTextAreaBindData" has-changed></InputTextArea></td>
            </tr>
            <tr>
              <td>&lt;InputNumber/&gt;</td>
              <td><InputNumber v-model="inputNumberBindData"></InputNumber></td>
              <td><InputNumber v-model="inputNumberBindData" disabled></InputNumber></td>
              <td><InputNumber v-model="inputNumberBindData" readonly></InputNumber></td>
              <td><InputNumber v-model="inputNumberBindData" has-changed></InputNumber></td>
            </tr>
            <tr>
              <td>&lt;InputNumberSteppers/&gt;</td>
              <td>
                <InputNumberSteppers v-model="inputNumberSteppersBindData"></InputNumberSteppers>
              </td>
              <td>
                <InputNumberSteppers
                  v-model="inputNumberSteppersBindData"
                  disabled
                ></InputNumberSteppers>
              </td>
              <td>
                <InputNumberSteppers
                  v-model="inputNumberSteppersBindData"
                  readonly
                ></InputNumberSteppers>
              </td>
              <td>
                <InputNumberSteppers
                  v-model="inputNumberSteppersBindData"
                  has-changed
                ></InputNumberSteppers>
              </td>
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
              <td><InputFormat></InputFormat></td>
              <td><InputFormat disabled></InputFormat></td>
              <td><InputFormat readonly></InputFormat></td>
              <td><InputFormat has-changed></InputFormat></td>
            </tr>
          </tbody>
        </table>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Bind Data</h3>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Align</h3>
        <v-row>
          <v-col class="pl-0" cols="12" sm="4">
            <div>
              <InputLabel name="Label" />
              <InputTextField />
            </div>
          </v-col>
          <v-col class="pl-0" cols="12" sm="4">
            <div>
              <InputLabel name="Label" />
              <InputTextField />
            </div>
          </v-col>
          <v-col class="pl-0" cols="12" sm="4">
            <div>
              <InputLabel name="Label" />
              <InputTextField />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pl-0" cols="12" sm="4">
            <div class="d-flex">
              <InputLabel name="Label" />
              <InputTextField />
            </div>
          </v-col>
          <v-col class="pl-0" cols="12" sm="4">
            <div class="d-flex">
              <InputLabel name="Label" />
              <InputTextField />
            </div>
          </v-col>
          <v-col class="pl-0" cols="12" sm="4">
            <div class="d-flex">
              <InputLabel name="Label" />
              <InputTextField />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pl-0" cols="12" sm="4">
            <div class="d-flex">
              <InputLabel name="Label" />
              <InputTextField />
            </div>
          </v-col>
          <v-col class="pl-0" cols="12" sm="8">
            <div class="d-flex">
              <InputLabel name="Label" />
              <InputTextField />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pl-0" cols="12" sm="4">
            <div class="d-flex">
              <InputLabel :width="100" :units="'px'" name="Label" />
              <InputTextField />
            </div>
            <div class="d-flex">
              <InputLabel :width="100" :units="'px'" name="Label" />
              <InputTextField />
            </div>
          </v-col>
          <v-col class="pl-0" cols="12" sm="4">
            <div class="d-flex">
              <InputLabel :width="200" :units="'px'" name="Label" />
              <InputTextField />
            </div>
            <div class="d-flex">
              <InputLabel :width="200" :units="'px'" name="Label" />
              <InputTextField />
            </div>
          </v-col>
          <v-col class="pl-0" cols="12" sm="4">
            <div class="d-flex">
              <InputLabel :width="250" :units="'px'" name="Label" />
              <InputTextField />
            </div>
            <div class="d-flex">
              <InputLabel :width="250" :units="'px'" name="Label" />
              <InputTextField />
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Slot</h3>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Events</h3>
      </v-card>
      <v-card class="input-demo-page-card">
        <h3>Validate</h3>
      </v-card>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { useTestStore } from '@/stores/test'
import { storeToRefs } from 'pinia'
import { onMounted, reactive, ref } from 'vue'
const test = useTestStore()
import { useAlertsStore } from '@/stores/useAlertsStore'
const alert = useAlertsStore()
const disabled = ref(false)
const required = ref(false)
const hasChange = ref(false)
const valid = ref(false)
const Form = ref()
const inputAutoCompleteValue = ref('')
const items = reactive([{ text: '選項1', value: '1' }])
function inputEventTest($event: Event) {
  console.log(test.text, $event)
  alert.showMessage({ content: test.text, title: 'inputEventTest' })
}

function blurEventTest($event: Event) {
  alert.showMessage({ content: test.text, title: 'blurEventTest' })
  console.log(test.text, $event)
}
function changeEventTest($event: Event) {
  alert.showMessage({ content: test.text, title: 'changed' })
  console.log(test.text, $event)
}
function toggleHasChange() {
  hasChange.value = !hasChange.value
  submit()
}
function toggleDisabled() {
  disabled.value = !disabled.value
  submit()
}
function toggleRequired() {
  required.value = !required.value
  submit()
}
function submit() {
  Form.value?.validate
}
function reset() {
  Form.value?.reset()
}
function clear() {
  test.setText('')
}
function format() {
  test.setText('10,080')
}

const inputTextFieldBindData = ref(null)
const inputTextAreaBindData = ref(null)
const inputNumberBindData = ref(null)
const inputNumberSteppersBindData = ref(null)

const formatToTrim = ref(null)
const formatToUpperCase = ref(null)
const formatToLowerCase = ref(null)
const formatToHalfWidth = ref(null)
const formatToFullWidth = ref(null)
</script>

<style scoped lang="scss">
.input-demo-page-card {
  margin: 24px;
  padding: 24px;
  border: 1px solid #000000;
  overflow-x: auto;
}

table {
  min-width: 1000px;
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
