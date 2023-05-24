<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Timer from "@/components/TestPage/Timer.vue";
import Test from "@/components/TestPage/Test.vue";
import TestingParams from "@/components/TestPage/TestingParams.vue";
import { getRandomTextFromAjax } from "@/helpers/getRandomTextFromAjax";

const router = useRouter();

const randomText = ref("");
const curentIndex = ref(0);
const numberOfUnvalidSymbols = ref(0);
const isNewTest = ref(true);
const testingTime = ref(0);
const speed = ref(0);
const accuracy = ref(0);

const startNewTest = async (): Promise<void> => {
  randomText.value = await getRandomTextFromAjax();
  isNewTest.value = true;
  testingTime.value = 0;
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
    <Timer
      :isNewTest="isNewTest"
      @change-time="
        (newTestingTime: number): void => {
          (testingTime = newTestingTime), (isNewTest = false);
        }
      "
    />
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
        :testingTime="testingTime"
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

<style>
.test {
  min-height: 100vh;
  padding: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.test__main {
  display: flex;
  justify-content: center;
}
</style>
