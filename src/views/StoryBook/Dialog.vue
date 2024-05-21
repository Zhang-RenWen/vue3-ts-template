<template>
  <v-card class="main-section">
    <h1 class="mb-6">Dialog</h1>
    <h3>資料綁定</h3>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>
        &nbsp; &lt;v-btn class="mb-3" color="primary" @click="dialog1 =
        !dialog1"&gt;開啟dialog1&lt;/v-btn&gt;
      </div>
      <br />
      <div>
        &nbsp;&nbsp;&lt;Dialog
        <span class="demo-high-light-color">v-model="dialog1"</span>
      </div>
      <div>&nbsp;&nbsp;&nbsp;... 自定義模板</div>
      <div>&nbsp;&nbsp;&lt;/Dialog&gt;</div>
      <div>&lt;/template&gt;</div>
      <br />
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp;import { ref } from 'vue';</div>
      <div>
        &nbsp;
        <span class="demo-high-light-color">const dialog1 = ref(false);</span>
        // 開關資料綁在這
      </div>
      <div>&lt;/script&gt;</div>
    </code>

    <p>按下方按鈕開啟小視窗，並嘗試拖動小視窗或者調整視窗大小。</p>
    <v-btn class="mb-3" color="primary" @click="dialog1 = !dialog1">開啟dialog1</v-btn>
    <Dialog v-model="dialog1">
      <v-card
        :style="'height:100%;overflow-y:auto'"
        prepend-icon="mdi-account"
        title="User Profile"
      >
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field label="First name*" required></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                hint="example of helper text only on focus"
                label="Middle name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                hint="example of persistent helper text"
                label="Last name*"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Confirm Password*" type="password" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="[
                  'Skiing',
                  'Ice hockey',
                  'Soccer',
                  'Basketball',
                  'Hockey',
                  'Reading',
                  'Writing',
                  'Coding',
                  'Basejump',
                ]"
                label="Interests"
                auto-select-first
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" text="Save" variant="tonal" @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
    </Dialog>
    <br />
    <br />
    <h3>客製化設定</h3>
    <p>
      透過傳入 vue-draggable-resizable-options 自定義
      className，掛載在需要可抓取拖動的元素上，限制可抓取範圍。
    </p>
    <p>如需針對 drag 或 resize 行為做其他設定，可參考 vue-draggable-resizable 官方文件。</p>
    <p>將所需設定的往 Dialog 元件的 vue-draggable-resizable-options props 送即可。</p>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>
        &nbsp; &lt;v-btn class="mb-3" color="primary" @click="dialog2 =
        !dialog1"&gt;開啟dialog2&lt;/v-btn&gt;
      </div>
      <br />
      <div>
        &nbsp;&nbsp;&lt;Dialog v-model="dialog2"
        <span class="demo-high-light-color">
          :vue-draggable-resizable-options="{ 'drag-handle': '.drag-title', }"
        </span>
      </div>
      <div>&nbsp;&nbsp;&nbsp;... 自定義模板</div>
      <div>
        &nbsp;&nbsp;&nbsp;&lt;v-card-title
        <span class="demo-high-light-color">class="drag-title"</span>
        &gt;...title text &lt;/v-card-title&gt;
      </div>
      <div>&nbsp;&nbsp;&nbsp;... 自定義模板</div>
      <div>&nbsp;&nbsp;&lt;/Dialog&gt;</div>
      <div>&lt;/template&gt;</div>
    </code>
    <v-btn color="primary" @click="dialog2 = !dialog2">開啟dialog2</v-btn>
    <Dialog
      v-model="dialog2"
      :vue-draggable-resizable-options="{
        'drag-handle': '.drag-title',
      }"
    >
      <v-card :style="'height:100%;overflow-y:auto'">
        <v-card-title
          class="drag-title"
          :style="{
            color: themes.light.colors.white,
            'background-color': themes.light.colors.primary,
          }"
        >
          只有這塊能拖動！ .drag-title 是自定義 class
          名稱，掛載在需要可抓取拖動的元素上，限制可抓取範圍。
        </v-card-title>
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field label="First name*" required></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                hint="example of helper text only on focus"
                label="Middle name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                hint="example of persistent helper text"
                label="Last name*"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Confirm Password*" type="password" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="[
                  'Skiing',
                  'Ice hockey',
                  'Soccer',
                  'Basketball',
                  'Hockey',
                  'Reading',
                  'Writing',
                  'Coding',
                  'Basejump',
                ]"
                label="Interests"
                auto-select-first
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="dialog2 = false"></v-btn>
          <v-btn color="primary" text="Save" variant="tonal" @click="dialog2 = false"></v-btn>
        </v-card-actions>
      </v-card>
    </Dialog>
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { toRaw, ref } from 'vue';
import { useUIStore } from '@/stores/useUIStore';
const uiStatus = useUIStore();
const themes = toRaw(uiStatus.themes);
const dialog1 = ref(false);
const dialog2 = ref(false);
</script>
<!--/********************************Script-End*********************************************/-->

<style scoped lang="scss"></style>
