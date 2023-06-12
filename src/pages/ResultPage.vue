<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import CommonQuestions from "@/components/CommonQuestions.vue";
import Header from "@/components/StartResultPage/Header.vue";
import Information from "@/components/StartResultPage/Information.vue";
import StartTest from "@/components/StartResultPage/StartTestButton.vue";

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="result">
    <!-- <Header :textForHeader="'Результаты теста!'" />
    <Information
      :textForShow="[
        `Скорость печати составила: ${route.query.speed} зн./мин`,
        `Точность печати составила: ${route.query.accuracy} %`,
      ]"
    />
    <StartTest
      @start-new-test="router.push({ name: 'test' })"
      :textForButton="'Попробовать ещё!'"
    /> -->
    <Header>Результаты теста!</Header>
    <Information>
      <p>Скорость печати составила: {{ route.query.speed }} зн./мин</p>
      <p>
        Точность печати составила: {{ route.query.accuracy }} %
      </p></Information
    >
    <StartTest @start-new-test="router.push({ name: 'test' })"
      >Попробовать ещё!</StartTest
    >
    <CommonQuestions />
  </div>
</template>

<style lang="scss">
.result {
  @extend %extend-page;
}
</style>
