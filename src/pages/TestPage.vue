<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import { timer1 } from "@/composable/Timer";
import Timer from "@/components/TestPage/Timer.vue";
import Test from "@/components/TestPage/Test.vue";
import TestingParams from "@/components/TestPage/TestingParams.vue";
import { getRandomTextFromAjax } from "@/helpers/getRandomTextFromAjax";

const router = useRouter();

const randomText = ref("");
const curentIndex = ref(0);
const numberOfUnvalidSymbols = ref(0);
const speed = ref(0);
const accuracy = ref(0);

const timeComposable: { testingTime: Ref<number>; newTest: () => void } =
  timer1();

const startNewTest = async (): Promise<void> => {
  randomText.value = await getRandomTextFromAjax();
  timeComposable.newTest();
  curentIndex.value = 0;
  numberOfUnvalidSymbols.value = 0;
};

startNewTest();

const finishTest = (): void => {
  router.push({
    name: "result",
    query: { speed: `${speed.value}`, accuracy: `${accuracy.value}` },
  });
};
</script>

<template>
  <div class="test">
    <Timer :time="timeComposable.testingTime.value" />
    <main class="test__main">
      <Test
        :randomText="randomText"
        @check-one-symbol="
          (newCurentIndex: number, newNumberOfUnvalidSymbols: number): void => {
            (curentIndex = newCurentIndex),
              (numberOfUnvalidSymbols = newNumberOfUnvalidSymbols);
          }
        "
        @finish-test="finishTest"
      />
      <TestingParams
        :testingTime="timeComposable.testingTime.value"
        :numderOfCheckedSymbols="curentIndex"
        :numberOfUnvalidSymbols="numberOfUnvalidSymbols"
        @start-new-test="startNewTest"
        @change-testing-params="
          (speedValue: number, accuracyValue: number): void => {
            (speed = speedValue), (accuracy = accuracyValue);
          }
        "
      />
    </main>
  </div>
</template>

<style lang="scss">
.test {
  @extend %extend-page;

  &__main {
    display: flex;
    justify-content: center;
  }
}
</style>
