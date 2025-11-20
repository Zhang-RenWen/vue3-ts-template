<template>
  <v-card class="main-section">
    <h1>Import Images</h1>
    <code class="demo-code-block">
      <div>&lt;template&gt;</div>
      <div>&nbsp;&lt;v-img</div>
      <div>&nbsp;&nbsp;src="@/assets/images/logo.png"</div>
      <div>&nbsp;&nbsp; max-height="50"</div>
      <div>&nbsp;&nbsp;max-width="50"</div>
      <div>&nbsp;&nbsp;cover</div>
      <div>&nbsp;/&gt;</div>
      <div>&lt;/template&gt;</div>
    </code>
    <div class="d-flex">
      <v-img
        src="@/assets/images/logo.png"
        max-height="50"
        max-width="50"
        cover
        class="app-logo"
      ></v-img>
      <v-img
        src="@/assets/images/Typescript_logo_2020.svg.png"
        max-height="50"
        max-width="50"
        cover
        class="app-logo"
      ></v-img>
      <v-img
        src="@/assets/images/vuetify-logo-light-atom.svg"
        max-height="50"
        max-width="50"
        cover
        class="app-logo"
      ></v-img>
    </div>
  </v-card>
</template>
<script setup lang="ts">
// import { onMounted, reactive, ref } from 'vue';
</script>
