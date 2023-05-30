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
    <Header :textForHeader="'Привет! Хочешь проверить свою скорость печати?'" />
    <Information
      :textForShow="[
        'Набери небольшой текст и узнай сколько знаков в минуту ты печатаешь на русском языке.',
        'Проходи тест, сколько хочешь. Ограничений нет.',
      ]"
    />
    <StartTestButton
      @start-new-test="router.push({ name: 'test' })"
      :textForButton="'Начать тест!'"
    />
    <CommonQuestions />
  </div>
</template>

<style lang="scss">
.index {
  @extend %extend-page;
}
</style>
