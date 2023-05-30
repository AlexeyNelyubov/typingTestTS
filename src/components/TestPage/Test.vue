<script setup lang="ts">
import { ref, watch } from "vue";
import { useDocumentKeyboardEvent } from "@/composable/useDocumentKeyboardEvent";

const props = defineProps<{
  randomText: string;
}>();

const emit = defineEmits<{
  (
    e: "check-one-symbol",
    curentIndex: number,
    numberOfUnvalidSymbols: number
  ): void;
  (e: "finish-test"): void;
}>();

// const emit = defineEmits({
//   "check-one-symbol": (curentIndex, numberOfUnvalidSymbols) => {
//     if (
//       typeof curentIndex === "number" &&
//       typeof numberOfUnvalidSymbols === "number"
//     ) {
//       return true;
//     } else {
//       console.warn("Invalid change-time event payload!");
//       return false;
//     }
//   },
//   "finish-test": null,
// });

const curentIndex = ref(0);
const isCurentSymbolValid = ref(true);
const numberOfUnvalidSymbols = ref(0);
const colorForValidateSymbol = ref("#fff");
const VALID_KEY = ["Shift", "Control", "Alt", "CapsLock"];

watch(
  () => props.randomText,
  () => {
    curentIndex.value = 0;
    isCurentSymbolValid.value = true;
    numberOfUnvalidSymbols.value = 0;
    colorForValidateSymbol.value = "#fff";
  }
);

useDocumentKeyboardEvent("keydown", (event: KeyboardEvent): void => {
  if (event.key === props.randomText[curentIndex.value]) {
    isCurentSymbolValid.value = true;
    curentIndex.value += 1;
    colorForValidateSymbol.value = "#fff";
    if (curentIndex.value === props.randomText.length) {
      emit("finish-test");
    }
  } else if (!VALID_KEY.includes(event.key)) {
    isCurentSymbolValid.value = false;
    numberOfUnvalidSymbols.value += 1;
    colorForValidateSymbol.value = "#ff0000";
  }
  emit("check-one-symbol", curentIndex.value, numberOfUnvalidSymbols.value);
});
</script>

<template>
  <div class="test-main-random-text">
    <span
      v-for="(symbol, index) of props.randomText"
      :key="symbol.id"
      style="white-space: pre-wrap"
      :class="{
        validSymbol: isCurentSymbolValid && index === curentIndex,
        unvalidSymbol: !isCurentSymbolValid && index === curentIndex,
        uncheckedSymbol: index > curentIndex,
        checkedSymbol: index < curentIndex,
      }"
    >
      {{ symbol }}</span
    >
  </div>
</template>

<style lang="scss">
.test-main-random-text {
  width: 60vw;
  font: $font-size-for-text $font-style-for-text;
  @include border(
    $margin-padding * 2,
    $margin-padding * 2,
    v-bind(colorForValidateSymbol),
    2rem
  );
}

.validSymbol {
  background-color: #37ff00;
  color: $background-color;
}

.unvalidSymbol {
  background-color: #ff0000;
  color: $background-color;
}
.checkedSymbol {
  color: $color;
}

.uncheckedSymbol {
  color: #7b7b7b;
}
</style>
