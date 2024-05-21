<template>
  <v-card class="main-section">
    <h1>Alert</h1>
    <h3>引入/使用範例</h3>
    <v-btn
      class="mb-6"
      color="primary"
      @click="
        alert.showMessage({
          content: '測試',
        })
      "
    >
      打開 Alert
    </v-btn>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>&nbsp; &lt;v-btn @click="alert.showMessage({content:'測試'})"&gt;</div>
      <div>&lt;/template&gt;</div>
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp; import { useAlertsStore } from '@/stores/useAlertsStore';</div>
      <div>&nbsp; const alert = useAlertsStore();</div>
      <div>&lt;/script&gt;</div>
    </code>
    <h3>自定義 Title</h3>
    <v-btn
      class="mb-6"
      color="primary"
      @click="
        alert.showMessage({
          content: '上方 title 有更換',
          title: '這是 自定義 title',
        })
      "
    >
      打開 Alert
    </v-btn>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>
        &nbsp; &lt;v-btn @click="alert.showMessage({content:'上方 title 有更換',title:'這是 自定義
        title'})"&gt;
      </div>
      <div>&lt;/template&gt;</div>
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp; import { useAlertsStore } from '@/stores/useAlertsStore';</div>
      <div>&nbsp; const alert = useAlertsStore();</div>
      <div>&lt;/script&gt;</div>
    </code>
    <h3>自定義 buttonText</h3>
    <v-btn
      class="mb-6"
      color="primary"
      @click="
        alert.showMessage({
          content: '下方按鈕文字有更換，預設是「確定」。',
          buttonText: 'ok',
        })
      "
    >
      打開 Alert
    </v-btn>
    <code class="storybook-demo-code">
      <div>&lt;template&gt;</div>
      <div>
        &nbsp; &lt;v-btn @click="alert.showMessage({content:
        '下方按鈕文字有更換，預設是「確定」。',buttonText: 'ok'})"&gt;
      </div>
      <div>&lt;/template&gt;</div>
      <div>&lt;script setup lang="ts" &gt;</div>
      <div>&nbsp; import { useAlertsStore } from '@/stores/useAlertsStore';</div>
      <div>&nbsp; const alert = useAlertsStore();</div>
      <div>&lt;/script&gt;</div>
    </code>
  </v-card>
</template>
<script setup lang="ts">
import { useAlertsStore } from '@/stores/useAlertsStore';
const alert = useAlertsStore();
</script>
