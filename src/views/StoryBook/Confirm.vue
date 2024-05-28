<template>
  <v-card class="main-section">
    <h1>Confirm</h1>
    <h3>引入/使用範例</h3>
    <v-btn class="mb-6" color="primary" @click="openConfirm1">打開 Confirm</v-btn>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>&nbsp; &lt;v-btn @click="@click="confirm.showMessage({ content: '測試' })"&gt;</div>
      <div>&lt;/template&gt;</div>
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp; import { useConfirmsStore } from '@/stores/useConfirmStore';</div>
      <div>&nbsp; const confirm = useConfirmsStore();</div>
      <div>&lt;/script&gt;</div>
    </code>
    <h3>自定義 Title</h3>
    <v-btn class="mb-6" color="primary" @click="openConfirm2">打開 Confirm</v-btn>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>
        &nbsp; &lt;v-btn @click="confirm.showMessage({content:'上方 title 有更換',title:'這是 自定義
        title'})"&gt;
      </div>
      <div>&lt;/template&gt;</div>
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp; import { useConfirmsStore } from '@/stores/useConfirmStore';</div>
      <div>&nbsp; const confirm = useConfirmsStore();</div>
      <div>&lt;/script&gt;</div>
    </code>
    <h3>自定義 buttonText</h3>
    <v-btn class="mb-6" color="primary" @click="openConfirm3">打開 Confirm</v-btn>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>
        &nbsp; &lt;v-btn @click="confirm.showMessage({content:
        '下方按鈕文字有更換，預設是「確定」。',buttonText: 'ok'})"&gt;
      </div>
      <div>&lt;/template&gt;</div>
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp; import { useConfirmsStore } from '@/stores/useConfirmStore';</div>
      <div>&nbsp; const confirm = useConfirmsStore();</div>
      <div>&lt;/script&gt;</div>
    </code>
    <h3>獲取使用者操作結果值</h3>
    <v-btn class="mb-6" color="primary" @click="openConfirm">打開 Confirm</v-btn>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>&nbsp; &lt;v-btn "@click="openConfirm"&gt;</div>
      <div>&lt;/template&gt;</div>
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp;import { useConfirmsStore } from '@/stores/useConfirmStore';</div>
      <br />
      <div>
        <span class="demo-high-light-color">&nbsp;async</span>
        function openConfirm() {
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;const
        <span class="demo-high-light-color">value</span>
        =
        <span class="demo-high-light-color">await</span>
        confirm.showMessage({
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;content: '測試',</div>
      <div>&nbsp;&nbsp;&nbsp;});</div>
      <div>
        &nbsp;&nbsp;
        <span class="demo-high-light-color">console.log(value); // get result</span>
      </div>
      <div>&nbsp;}</div>
      <div>&lt;/script&gt;</div>
    </code>
  </v-card>
</template>
<script setup lang="ts">
import { toRaw, reactive, ref } from 'vue'
import { useConfirmsStore } from '@/stores/useConfirmStore'
const confirm = useConfirmsStore()

async function openConfirm1() {
  const value = await confirm.showMessage({
    content: '測試',
  })
  console.log(value)
}
async function openConfirm2() {
  const value = await confirm.showMessage({
    content: '上方 title 有更換',
    title: '這是 自定義 title',
  })
  console.log(value)
}
async function openConfirm3() {
  const value = await confirm.showMessage({
    content: '下方按鈕文字有更換，預設是「確定」。',
    buttonText: 'ok',
  })
  console.log(value)
}

async function openConfirm() {
  const value = await confirm.showMessage({
    content: '選擇下方任一按鈕點擊！',
  })
  alert.showMessage({
    content: `您選擇的是：${value ? '確定' : '取消'}`,
    buttonText: 'ok',
  })
}

import { useAlertsStore } from '@/stores/useAlertsStore'
const alert = useAlertsStore()
</script>
