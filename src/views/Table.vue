<template>
  <v-card class="pa-6">
    <h1>Table</h1>
    <p>
      v-data-table is not part of vuetify 3 yet, you need to use the lab version (not stable)
      <a href="https://vuetifyjs.com/en/labs/introduction/">
        https://vuetifyjs.com/en/labs/introduction/
      </a>
    </p>
    <p>data length: {{ testNames.length }}</p>
    <!-- /*******************************純前端 Table-Start**********************************************/-->
    <v-table class="custom-table" :style="'max-height: 1000px'" fixed-header>
      <thead>
        <tr>
          <th v-for="head in headers" :key="head.value" :class="head.className" :style="head.style">
            <div v-if="head.key === 'action'" class="d-flex justify-center">
              <v-btn @click="test.addItem({ name: 'unknown' })" :color="'success'" class="btn">
                <v-icon icon="mdi-plus-thick"></v-icon>
              </v-btn>
            </div>
            <div v-else>
              {{ head.title }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in testNames" :key="item.key">
          <!-- action -->
          <td>
            <div class="d-flex justify-center">
              <v-btn @click="test.deleteItem(item)" :color="'error'" class="btn mr-1">
                <v-icon icon="mdi-trash-can"></v-icon>
              </v-btn>
              <v-btn :color="'info'" class="btn">
                <v-icon icon="mdi-square-edit-outline"></v-icon>
              </v-btn>
            </div>
          </td>
          <!-- name -->
          <td>{{ item.name }}</td>
          <!-- url -->
          <td>{{ item.url }}</td>
        </tr>
        <!-- append -->
        <tr v-if="testNames.length === 0">
          <!-- +1 代表有 action -->
          <td class="text-center" :colspan="headers.length">沒有資料</td>
        </tr>
      </tbody>
    </v-table>
    <!-- /*******************************純前端 Table-End**********************************************/-->
    <!-- /*******************************Server端 Table-Start**********************************************/-->
    <Table :headers="headers" :items="testNames" :itemValue="'name'">
      <template #top>
        {{ 'space of pagination' }}
      </template>
      <template #[`header.action`]>
        <div class="d-flex justify-center">
          <v-btn @click="test.addItem({ name: 'unknown' })" :color="'success'" class="btn">
            <v-icon icon="mdi-plus-thick"></v-icon>
          </v-btn>
        </div>
      </template>
      <template #[`item.action`]="{ item }">
        <div class="d-flex justify-center">
          <v-btn @click="test.deleteItem(item)" :color="'error'" class="btn mr-1">
            <v-icon icon="mdi-trash-can"></v-icon>
          </v-btn>
          <v-btn :color="'info'" class="btn">
            <v-icon icon="mdi-square-edit-outline"></v-icon>
          </v-btn>
        </div>
      </template>
      <template #expanded-row="{ columns, index, item, isExpanded, toggleExpand }">
        <td class="pa-4 py-6" @click="toggleExpand(item)" :colspan="headers.length">
          <span>{{ columns }}{{ index }}{{ item }}{{ isExpanded }}{{ toggleExpand }}</span>
        </td>
      </template>
    </Table>
    <!-- /*******************************Server端 Table-Start**********************************************/-->
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { useTestStore } from '@/stores/test';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

const test = useTestStore();
const { testNames } = storeToRefs(test);
const headers = reactive([
  {
    key: 'action',
    title: '',
    className: 'text-center',
    style: 'width:30px', // v-table setting
    width: 30, // v-data-table-server setting
  },
  {
    key: 'name',
    title: 'Name',
    className: 'text-left',
    style: '',
  },
  {
    key: 'url',
    title: 'Url',
    className: 'text-left',
    style: '',
  },
]);

onMounted(async () => {
  try {
    await test.getApiData();
  } catch (error) {
    console.log(error);
  }
});
</script>
<!--/********************************Script-End*********************************************/-->

<style lang="scss" scoped>
@import '@/assets/styles/tableBase.scss';
</style>
