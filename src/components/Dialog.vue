<template>
  <v-dialog :max-width="maxWidth" v-model="internalValue">
    <vue-draggable-resizable
      w="auto"
      h="auto"
      class-name-handle="my-handle-class"
      @-resize-start="function () {}"
    >
      <template v-for="(_, slot) of $slots" #[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>

      <template #tl>😀</template>
      <template #tm>😂</template>
      <template #tr>😆</template>
      <template #mr>😉</template>
      <template #br>😎</template>
      <template #bm>😍</template>
      <template #bl>😣</template>
      <template #ml>😕</template>
    </vue-draggable-resizable>
  </v-dialog>
  <!-- 代替 WATCH 監聽/更新狀態 -->
  <!-- <div class="d-none">{{ dialogListener }}</div> -->
</template>
<!--/********************************Script-Start*********************************************/-->
<script setup lang="ts">
import { ref, toRefs, computed, nextTick, onMounted, reactive } from 'vue';
import { Props, propsBase } from '@/model/DialogModel';
const props = withDefaults(defineProps<Props>(), propsBase);
let internalValue = toRefs(props);
onMounted(async () => {});
</script>
<!--/********************************Script-End*********************************************/-->
<style>
.my-handle-class {
  position: absolute;
  border: 1px solid black;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  font-size: 1em;
  line-height: 1em;
  box-sizing: border-box;
  -webkit-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.my-handle-class-tl {
  top: -14px;
  left: -14px;
  cursor: nw-resize;
}
.my-handle-class-tm {
  top: -14px;
  left: 50%;
  margin-left: -7px;
  cursor: n-resize;
}
.my-handle-class-tr {
  top: -14px;
  right: -14px;
  cursor: ne-resize;
}
.my-handle-class-ml {
  top: 50%;
  margin-top: -7px;
  left: -14px;
  cursor: w-resize;
}
.my-handle-class-mr {
  top: 50%;
  margin-top: -7px;
  right: -14px;
  cursor: e-resize;
}
.my-handle-class-bl {
  bottom: -14px;
  left: -14px;
  cursor: sw-resize;
}
.my-handle-class-bm {
  bottom: -14px;
  left: 50%;
  margin-left: -7px;
  cursor: s-resize;
}
.my-handle-class-br {
  bottom: -14px;
  right: -14px;
  cursor: se-resize;
}
.my-handle-class-tl:hover,
.my-handle-class-tm:hover,
.my-handle-class-tr:hover,
.my-handle-class-ml:hover,
.my-handle-class-mr:hover,
.my-handle-class-bl:hover,
.my-handle-class-bm:hover,
.my-handle-class-br:hover {
  transform: scale(1.4);
}
</style>
