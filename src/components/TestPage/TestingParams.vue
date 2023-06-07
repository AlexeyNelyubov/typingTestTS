<script setup lang="ts">
import { watch, computed } from "vue";

const props = defineProps<{
  testingTime: number;
  numderOfCheckedSymbols: number;
  numberOfUnvalidSymbols: number;
}>();

const emit = defineEmits<{
  (e: "change-testing-params", speed: number, accuracy: number): void;
  (e: "start-new-test"): void;
}>();

// const emit = defineEmits({
//   "start-new-test": null,
//   "change-testing-params": (speed, accuracy) => {
//     if (typeof speed === "number" && typeof accuracy === "number") {
//       return true;
//     } else {
//       console.warn("Invalid change-time event payload!");
//       return false;
//     }
//   },
// });

const speed = computed<number>(() => {
  return props.testingTime
    ? Math.trunc((props.numderOfCheckedSymbols / props.testingTime) * 60)
    : 0;
});

const accuracy = computed<number>(() => {
  return props.numderOfCheckedSymbols
    ? props.numberOfUnvalidSymbols
      ? 100 -
        Math.trunc(
          (props.numberOfUnvalidSymbols /
            (props.numberOfUnvalidSymbols + props.numderOfCheckedSymbols)) *
            100
        )
      : 100
    : 0;
});

watch([speed, accuracy], () => {
  emit("change-testing-params", speed.value, accuracy.value);
});

const startNewTest = (): void => {
  const btn = document.querySelector(".testing-params__new-test-button");
  (btn as HTMLInputElement).blur();
  emit("start-new-test");
};
</script>

<template>
  <div class="testing-params">
    <div class="testing-params__items">
      <p class="testing-params__item">Скорость</p>
      <p class="testing-params__item-value">
        {{ speed }} <span style="font-size: 0.6em">зн./мин</span>
      </p>
      <p class="testing-params__item">Точность</p>
      <p class="testing-params__item-value">
        {{ accuracy }} <span style="font-size: 0.6em">%</span>
      </p>
    </div>
    <button class="testing-params__new-test-button" @click="startNewTest">
      Заново!
    </button>
  </div>
</template>

<style lang="scss">
.testing-params {
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: $margin-padding * 2;
  @include border($margin-padding * 2, $margin-padding * 2, $color, 2rem);

  &__items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__item {
    margin-bottom: $margin-padding * 2;
    font: $font-size-for-text $font-style-for-text;
  }

  &__item-value {
    margin-bottom: $margin-padding * 4;
    font: $font-size-for-text + 1 $font-style-for-text;
  }
}

.testing-params__new-test-button {
  padding: 0.8rem 4rem;
  @include button($font-size-for-sign - 0.4, $background-color, $color);
}
</style>
