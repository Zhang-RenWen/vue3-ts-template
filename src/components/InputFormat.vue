<template>
  <div
    class="v-input v-input--horizontal v-input--center-affix v-input--density-compact v-theme--light v-locale--is-ltr v-text-field inputTextField"
  >
    <div class="v-input__control">
      <div
        class="v-field v-field--center-affix v-field--single-line v-field--no-label v-theme--light v-locale--is-ltr"
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
          <div
            ref="FormatInput"
            class="v-field__input formatInput"
            data-no-activator=""
            :class="{
              'disabled-input': !displayFormat,
            }"
          >
            <input
              v-model="localValue"
              :class="{
                hasChanged: hasChanged,
                'text-center': textCenter,
                'text-end': textEnd,
              }"
              :placeholder="localPlaceholder"
            />
          </div>
          <div
            ref="RealInput"
            class="v-field__input pa-0 realInput"
            data-no-activator=""
            :class="{
              hasChanged: hasChanged,
              'text-center': textCenter,
              'text-end': textEnd,
              'disabled-input': displayFormat,
            }"
          >
            <slot />
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
import { ref, toRefs, computed, onMounted, onBeforeUnmount } from 'vue';
import { Props, propsBase, InputFormat } from '@/model/InputModel';

const props = withDefaults(defineProps<Props>(), propsBase);
const localPlaceholder = computed(() => {
  return props.placeholder || '請輸入';
});
const localValue = computed(() => {
  if (!internalValue?.value?.value) {
    return null;
  }
  if (typeof internalValue?.value?.value?.value === 'object') {
    return format(internalValue.value.value.value.value);
  }
  return format(internalValue.value.value);
});

let internalValue = toRefs(props);
const inputFormat = new InputFormat(props);
const formatValue = inputFormat.formatValue;
function format(value: any) {
  return formatValue(value);
}

const FormatInput = ref(null);
const RealInput = ref(null);
const displayFormat = ref(true);

function show() {
  displayFormat.value = false;
}

function hide() {
  displayFormat.value = true;
}

function addInputDisplayFormatListener() {
  const elementInput = RealInput.value.querySelector('input');
  if (elementInput) {
    RealInput.value.querySelector('input').addEventListener('focus', show);
    RealInput.value.querySelector('input').addEventListener('blur', hide);
  }
}

function removeInputDisplayFormatListener() {
  const elementInput = RealInput.value.querySelector('input');
  if (elementInput) {
    RealInput.value.querySelector('input').removeEventListener('focus', show);
    RealInput.value.querySelector('input').removeEventListener('blur', hide);
  }
}

onMounted(async () => {
  addInputDisplayFormatListener();
});

onBeforeUnmount(async () => {
  removeInputDisplayFormatListener();
});
</script>
<style scoped lang="scss" src="@/assets/styles/inputBase.scss"></style>
<style scoped lang="scss">
.hasChanged :deep(input),
input.hasChanged {
  color: red;
}

.disabled-input :deep(input),
.formatInput.disabled-input .hasChanged input,
.realInput.disabled-input.hasChanged :deep(.hasChanged input) {
  color: transparent;
  pointer-events: none;
}

.formatInput {
  background-color: #ffffff;
}
.formatInput :deep(input) {
  opacity: 1;
}
.realInput {
  position: absolute;
}
.realInput :deep(input) {
  margin: 0;
}
</style>
