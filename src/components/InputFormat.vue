<template>
  <div
    class="v-input v-input--horizontal v-input--center-affix v-input--density-compact v-theme--light v-locale--is-ltr v-text-field inputTextField"
  >
    <div class="v-input__control">
      <div
        class="v-field v-field--center-affix v-field--single-line v-field--no-label v-theme--light v-locale--is-ltr aaa"
      >
        <div class="v-field__overlay"></div>
        <div class="v-field__loader">
          <div
            class="v-progress-linear v-theme--light v-locale--is-ltr"
            role="progressbar"
            aria-hidden="true"
            aria-valuemin="0"
            aria-valuemax="100"
            style="top: 0px; height: 0px; --v-progress-linear-height: 2px"
          >
            <div class="v-progress-linear__background" style="width: 100%"></div>
            <div class="v-progress-linear__indeterminate">
              <div class="v-progress-linear__indeterminate long"></div>
              <div class="v-progress-linear__indeterminate short"></div>
            </div>
          </div>
        </div>
        <div class="v-field__field" data-no-activator="">
          <label class="v-label v-field-label" for="input-18"></label>
          <div class="v-field__input formatInput" data-no-activator="">
            <input v-model="localValue" />
          </div>
          <div class="v-field__input pa-0 realInput" data-no-activator="">
            <slot name="format-value" />
          </div>
        </div>
        <div class="v-field__outline">
          <div class="v-field__outline__start"></div>
          <div class="v-field__outline__end"></div>
        </div>
      </div>
    </div>
    <div class="v-input__details">
      <div class="v-messages" role="alert"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs, computed } from 'vue';
import { Props, propsBase, InputFormat } from '@/model/InputModel';

const props = withDefaults(defineProps<Props>(), propsBase);

const localValue = computed(() => {
  return format(internalValue.value.value);
});

let internalValue = toRefs(props);
const inputFormat = new InputFormat(props);
const formatValue = inputFormat.formatValue;
function format(value: any) {
  return formatValue(value);
}
</script>
<style scoped lang="scss" src="@/assets/styles/inputBase.scss"></style>
<style scoped lang="scss">
.formatInput {
  pointer-events: none;
  background-color: #ffffff;
}
.realInput {
  position: absolute;
}

.realInput :deep(input) {
  opacity: 0;
  margin: 0;
}
</style>
