<template>
  <v-card class="main-section">
    <h1>Table 組件應用</h1>
    <p>主要分成2種：</p>
    <ul>
      <li>第一種由後端資料控制數量、分頁、排序、篩選</li>
      <li>第二種資料一次回傳全部，排序、篩選分頁由前端控制</li>
    </ul>
    <h2>Type1: v-data-table-server</h2>
    <p class="mb-3">資料數量、分頁、排序、篩選完全由後端回傳值控制。</p>
    <h3>v-data-table-server :Table + Pagination 綁定方法如下：</h3>
    <code class="storybook-demo-code">
      <div>&nbsp;&lt;template&gt;</div>
      <div>&nbsp;&nbsp;&lt;Table</div>
      <div>&nbsp;&nbsp;&nbsp;...</div>
      <div class="demo-high-light-color">&nbsp;&nbsp;&nbsp;:items-length="testNames.length"</div>
      <div class="demo-high-light-color">
        &nbsp;&nbsp;&nbsp;:items-per-page="pagination.itemsPerPage"
      </div>
      <div>&nbsp;&nbsp;&nbsp;...</div>
      <div>&nbsp;&nbsp;&gt;</div>
      <div>
        &nbsp;&nbsp;//
        <span class="demo-high-light-color">#top</span>
        改成
        <span class="demo-high-light-color">#bottom</span>
        可以將 Pagination 移置表格下方
        <div>&nbsp;&nbsp;&lt;template #top &gt;</div>
        <div>
          &nbsp;&nbsp;&nbsp;&lt;Pagination
          <span class="demo-high-light-color">
            :value="pagination" :total-count="testNames.length" @input="updatePagination"
          </span>
          /&gt;
        </div>

        <div>&nbsp;&nbsp;&lt;/template&gt;</div>
      </div>
      <div>&nbsp;&lt;/Table&gt;</div>
      <div>&lt;/template&gt;</div>
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp;...</div>
      <div>
        &nbsp; const
        <span class="demo-high-light-color">pagination =ref({itemsPerPage:10,page:10})</span>
      </div>

      <div>&nbsp;...</div>
      <div>&lt;/script&gt;</div>
    </code>
    <p>
      範例中的 testNames.length 指的是全部資料的總筆數，而非單頁總筆數。變數 pagination
      為控制頁碼/每頁筆數用。
    </p>
    <h3>排序綁定方法如下：</h3>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>&nbsp;&nbsp;&lt;Table</div>
      <div>&nbsp;&nbsp;&nbsp;...</div>
      <div class="demo-high-light-color">&nbsp;&nbsp;&nbsp;:sortBy="sortBy"</div>
      <div class="demo-high-light-color">&nbsp;&nbsp;&nbsp;@updateSortBy="updateSortBy"</div>
      <div>&nbsp;&nbsp;&nbsp;...</div>
      <div>&nbsp;&nbsp;&gt;</div>
      <div>&nbsp;&lt;/Table&gt;</div>
      <div>&lt;/template&gt;</div>
      <br />
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp;// 設定排序初始值</div>
      <div>&nbsp;const sortBy1 = [</div>
      <div>&nbsp;&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;key: 'name',</div>
      <div>&nbsp;&nbsp;&nbsp;order: 'asc',</div>
      <div>&nbsp;&nbsp;}</div>
      <div>&nbsp;];</div>
      <br />
      <div>
        &nbsp;const
        <span class="demo-high-light-color">sortBy</span>
        = reactive(deepClone(sortBy1));
      </div>
      <br />
      <div>&nbsp;// 重新設定排序初始值</div>
      <div>
        &nbsp;function
        <span class="demo-high-light-color">setSortBy</span>
        (newOptions: Array&lt;SortByOptions&gt;){
      </div>
      <div>
        &nbsp; Object.assign(
        <span class="demo-high-light-color">sortBy</span>
        , reactive(deepClone(newOptions)));
      </div>
      <div>&nbsp;}</div>
      <br />
      <div>&nbsp;&nbsp;// 當使用者自行選擇排序後，仍然要更新條件至母組件的響應式資料中。</div>
      <div>&nbsp;&nbsp;// 由 table sort 負責觸發請求</div>
      <div>
        &nbsp;&nbsp;// 重新呼叫 table 資料的 API 。記得在此合併 pagination 條件一起發出請求。
      </div>
      <div>&nbsp;&nbsp;// table sort 邏輯不要跟 pagination 混到。</div>
      <div>&nbsp;&nbsp;// 會很難 debug。</div>
      <div>
        &nbsp;function
        <span class="demo-high-light-color">updateSortBy</span>
        (options: any) {
      </div>
      <div>
        &nbsp;&nbsp;
        <span class="demo-high-light-color">setSortBy(options.sortBy);</span>
      </div>
      <div>&nbsp;}</div>
      <div>&lt;/script&gt;</div>
    </code>
    <h3>v-data-table-server Demo</h3>
    <!-- /*******************************Server端 Table-Start**********************************************/-->
    <v-btn class="mr-1" @click="setExpanded">toggle 單一項目</v-btn>
    <v-btn class="mr-1" @click="setAllExpanded">全部打開</v-btn>
    <v-btn class="mr-1" @click="clearAllExpanded">全部關閉</v-btn>
    <v-btn class="mr-1" @click="setPagination">重設分頁</v-btn>
    <v-btn class="mr-1" @click="setSortBy(sortBy1)">重設排序1</v-btn>
    <v-btn @click="setSortBy(sortBy2)">重設排序2</v-btn>
    <Table
      :headers="headers"
      :items="testNames"
      :items-length="testNames.length"
      :items-per-page="pagination.itemsPerPage"
      :sort-by="sortBy"
      :item-value="'name'"
      :show-expand="showExpand"
      :default-expanded="defaultExpanded"
      :style="'max-height:300px'"
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
    <br />
    <br />
    <h2>Type2: v-table</h2>
    <p class="mb-3">資料一次回傳全部，排序、篩選分頁由前端控制。</p>
    <p>為前端高度客製化時可以考慮的方案。</p>
    <h3>v-table Demo</h3>
    <!-- /*******************************純前端 Table-Start**********************************************/-->
    <v-table class="custom-table" :style="'max-height: 300px'" fixed-header>
      <thead>
        <tr>
          <th v-for="head in headers" :key="head.key" :class="head.className" :style="head.style">
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
        <tr v-for="item in testNames" :key="JSON.stringify(item)">
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

    <p>
      v-data-table is not part of vuetify 3 yet, you need to use the lab version (not stable)
      <a href="https://vuetifyjs.com/en/labs/introduction/">
        https://vuetifyjs.com/en/labs/introduction/
      </a>
    </p>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTestStore } from '@/stores/test';
import { SortByOptions } from '@/model/TableModel';

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
/*******************************Table Expanded-End**********************************************/
/*******************************Table Pagination binding-Start**********************************************/

const paginationDefault = {
  itemsPerPage: 10, // 一頁幾筆
  page: 1, // 當前頁數
};

// 預設分頁
const pagination = ref(deepClone(paginationDefault));

function setPagination() {
  pagination.value = deepClone(paginationDefault);
}

function updatePagination(value: any) {
  pagination.value = value;
  // 由 pagination 負責觸發請求
  // 重新呼叫 API 記得在此綁上 sort 條件。
  // table sort 邏輯不要跟 pagination 混到。
  // 會很難 debug。
}
/*******************************Table Pagination binding-End**********************************************/
/*******************************Table Sortby Start**********************************************/
const sortBy1 = [
  {
    key: 'name',
    order: 'asc',
  },
];
const sortBy2 = [
  {
    key: 'url',
    order: 'asc',
  },
];
const sortBy = reactive(deepClone(sortBy1));

function setSortBy(newOptions: Array<SortByOptions>) {
  Object.assign(sortBy, reactive(deepClone(newOptions)));
}

function updateSortBy(options: any) {
  console.log(options);
  // 由 table sort 負責觸發請求
  // 重新呼叫 API 記得在此綁上 pagination 條件。
  // table sort 邏輯不要跟 pagination 混到。
  // 會很難 debug。
}
/*******************************Table Sortby End**********************************************/

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

<style lang="scss" scoped>
@import '@/assets/styles/tableBase.scss';
</style>
