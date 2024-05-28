<template>
  <v-app>
    <!-- Drawer -->
    <Drawer />
    <!-- Header -->
    <Header />
    <!-- Main View -->
    <v-main>
      <BreadCrumb />
      <router-view></router-view>
    </v-main>
    <!-- Loading  -->
    <Loading />
    <!-- Alert Dialog -->
    <Alert />
    <!-- Confirm Dialog -->
    <Confirm />
    <!-- 監測是否持續使用  -->
    <IdleTracker />
  </v-app>
</template>
<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
</script>
<style lang="scss" scoped>
main {
  background-color: #ddd;
  padding-top: 0;
}
</style>
<style lang="scss">
@import '@/assets/styles/layout.scss';
</style>
