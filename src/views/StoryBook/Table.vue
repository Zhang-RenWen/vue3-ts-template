<template>
  <v-card class="main-section">
    <h1>Table</h1>
    <p>
      v-data-table is not part of vuetify 3 yet, you need to use the lab version (not stable)
      <a href="https://vuetifyjs.com/en/labs/introduction/">
        https://vuetifyjs.com/en/labs/introduction/
      </a>
    </p>
    <p>data length: {{ testNames.length }}</p>

    <h2>.v-data-table-server</h2>
    <!-- /*******************************Server端 Table-Start**********************************************/-->
    <v-btn class="mr-1" @click="setExpanded">toggle 單一項目</v-btn>
    <v-btn class="mr-1" @click="setAllExpanded">全部打開</v-btn>
    <v-btn @click="clearAllExpanded">全部關閉</v-btn>
    <Table
      :headers="headers"
      :items="testNames"
      :items-length="testNames.length"
      :items-per-page="pagination.itemsPerPage"
      :sort-by="sortBy"
      :item-value="'name'"
      :show-expand="showExpand"
      :default-expanded="defaultExpanded"
      @updateSortBy="updateSortBy"
    >
      <template #top>
        <Pagination :value="pagination" :total-count="testNames.length" @input="updatePagination" />
      </template>
      <template #[`header.action`]>
        <div class="d-flex justify-center">
          <v-btn :color="'success'" class="btn" @click="test.addItem({ name: 'unknown' })">
            <v-icon icon="mdi-plus-thick"></v-icon>
          </v-btn>
        </div>
      </template>
      <template #[`item.action`]="{ item }">
        <div class="d-flex justify-center">
          <v-btn :color="'error'" class="btn mr-1" @click="test.deleteItem(item)">
            <v-icon icon="mdi-trash-can"></v-icon>
          </v-btn>
          <v-btn :color="'info'" class="btn">
            <v-icon icon="mdi-square-edit-outline"></v-icon>
          </v-btn>
        </div>
      </template>
      <template #expanded-row="{ columns, index, item, isExpanded }">
        <td class="pa-4 py-6" :colspan="columns.length">
          <div>{{ columns }}</div>
          <div>{{ index }}</div>
          <div>{{ item }}</div>
          <div>{{ isExpanded(item) }}</div>
        </td>
      </template>
      <!-- 客製化 item row 範例-->
      <!-- <template #item="{ columns, index, item, isExpanded(item),toggleExpand }">
        <tr>
          <td :colspan="columns.length">
            <v-btn @click="toggleExpand(item)">Toggle</v-btn>
          </td>
        </tr>
      </template> -->
    </Table>
    <!-- /*******************************Server端 Table-Start**********************************************/-->
    <h2>.v-table</h2>
    <!-- /*******************************純前端 Table-Start**********************************************/-->
    <v-table class="custom-table" :style="'max-height: 1000px'" fixed-header>
      <thead>
        <tr>
          <th v-for="head in headers" :key="head.value" :class="head.className" :style="head.style">
            <div v-if="head.key === 'action'" class="d-flex justify-center">
              <v-btn :color="'success'" class="btn" @click="test.addItem({ name: 'unknown' })">
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
              <v-btn :color="'error'" class="btn mr-1" @click="test.deleteItem(item)">
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
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { useTestStore } from '@/stores/test';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

const test = useTestStore();
const { testNames } = storeToRefs(test);

/*******************************Table Expanded-Start**********************************************/
const defaultExpanded = ref(['electrode']);
const showExpand = ref(true);

function setExpanded() {
  const testItemName = 'exeggcute';
  if (!defaultExpanded.value.includes(testItemName)) {
    defaultExpanded.value.push(testItemName);
  } else {
    const index = defaultExpanded.value.find((key: string) => key === testItemName);
    defaultExpanded.value.splice(index, 1);
  }
}

function setAllExpanded() {
  defaultExpanded.value = test.testNames.map((o: any) => o.name);
}
function clearAllExpanded() {
  defaultExpanded.value = [];
}
/*******************************Table Expanded-Start**********************************************/

/*******************************Table Pagination binding-Start**********************************************/
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

const pagination = ref({
  itemsPerPage: 100, // 一頁幾筆
  page: 10, // 當前頁數
});

const sortBy1 = [
  {
    key: 'name',
    order: 'asc',
  },
];
const sortBy = reactive(deepClone(sortBy1));

function updateSortBy(options: any) {
  console.log(options);
  // 由 table sort 負責觸發請求
  // 重新呼叫 API 記得在此綁上 pagination 條件。
  // table sort 邏輯不要跟 pagination 混到。
  // 會很難 debug。
}
function updatePagination(value: any) {
  pagination.value = value;
  // 由 pagination 負責觸發請求
  // 重新呼叫 API 記得在此綁上 sort 條件。
  // table sort 邏輯不要跟 pagination 混到。
  // 會很難 debug。
}
/*******************************Table Pagination binding-End**********************************************/

import { useLoadingStore } from '@/stores/useLoadingStore';
import { deepClone } from '@/utils/deepClone';
const loading = useLoadingStore();

onMounted(async () => {
  try {
    loading.toggleLoading(true);
    await test.getApiData();
  } catch (error) {
    console.log(error);
  } finally {
    loading.toggleLoading(false);
  }
});
</script>
<!--/********************************Script-End*********************************************/-->

<style lang="scss" scoped>
@import '@/assets/styles/tableBase.scss';
</style>
