<script setup lang="ts">
import { useRouter } from "vue-router";
import CommonQuestions from "@/components/CommonQuestions.vue";
import Header from "@/components/StartResultPage/Header.vue";
import Information from "@/components/StartResultPage/Information.vue";
import StartTestButton from "@/components/StartResultPage/StartTestButton.vue";

const router = useRouter();
</script>

<template>
  <div class="index">
    <!-- <Header :textForHeader="'Привет! Хочешь проверить свою скорость печати?'" /> -->
    <Header>Привет! Хочешь проверить свою скорость печати?</Header>
    <!-- <Information
      :textForShow="[
        'Набери небольшой текст и узнай сколько знаков в минуту ты печатаешь на русском языке.',
        'Проходи тест, сколько хочешь. Ограничений нет.',
      ]"
    /> -->
    <Information>
      <p>
        Набери небольшой текст и узнай сколько знаков в минуту ты печатаешь на
        русском языке.
      </p>
      <p>Проходи тест, сколько хочешь. Ограничений нет.</p>
    </Information>
    <!-- <StartTestButton
      @start-new-test="router.push({ name: 'test' })"
      :textForButton="'Начать тест!'"
    /> -->
    <StartTestButton @start-new-test="router.push({ name: 'test' })">
      Начать тест!</StartTestButton
    >
    <CommonQuestions />
  </div>
</template>

<style lang="scss">
.index {
  @extend %extend-page;
}
</style>
