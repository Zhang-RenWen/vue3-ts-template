<template>
  <v-card class="main-section">
    <h3>About page</h3>
    <p>Pokemons list:</p>
    <p>{{ testNames }}</p>
  </v-card>
</template>

<!--/*******************************Script-Start**********************************************/-->
<script setup lang="ts">
import { useTestStore } from '@/stores/test'
import { storeToRefs } from 'pinia'
import { onMounted, reactive, ref } from 'vue'
import { useLoadingStore } from '@/stores/useLoadingStore'
const loading = useLoadingStore()

const test = useTestStore()
const { testNames } = storeToRefs(test)

onMounted(async () => {
  try {
    loading.toggleLoading(true)
    await test.getApiData()
  } catch (error) {
    console.log(error)
  } finally {
    loading.toggleLoading(false)
  }
})
</script>
<!--/********************************Script-End*********************************************/-->

<style scoped lang="scss"></style>
