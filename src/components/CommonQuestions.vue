<script setup lang="ts">
import { ref } from "vue";
import { useDocumentClick } from "@/composable/useDocumentClick";
import AnswerN1 from "@/components/Answer/AnswerN1.vue";
import AnswerN2 from "@/components/Answer/AnswerN2.vue";
import AnswerN3 from "@/components/Answer/AnswerN3.vue";
import AnswerN4 from "@/components/Answer/AnswerN4.vue";
import AnswerN5 from "@/components/Answer/AnswerN5.vue";
import AnswerN6 from "@/components/Answer/AnswerN6.vue";
import AnswerN7 from "@/components/Answer/AnswerN7.vue";
import AnswerN8 from "@/components/Answer/AnswerN8.vue";

const showQuestion = ref(false);

const allQuestions1 = [
  AnswerN1,
  AnswerN2,
  AnswerN3,
  AnswerN4,
  AnswerN5,
  AnswerN6,
  AnswerN7,
  AnswerN8,
];

useDocumentClick((event: Event): void => {
  if (
    (event.target as HTMLInputElement).className === "index" ||
    (event.target as HTMLInputElement).className === "result" ||
    (event.target as HTMLInputElement).className === "common-questions"
  ) {
    showQuestion.value = false;
  }
});
</script>

<template>
  <Transition name="common-questions">
    <div v-show="showQuestion" class="common-questions">
      <div class="common-questions-payload">
        <div
          @click="showQuestion = false"
          class="common-questions-payload__title"
        >
          Вопросы о скорости печати.
        </div>
        <ul>
          <li v-for="question in allQuestions1" :key="question.id">
            <component :is="question"></component>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
  <Transition name="common-questions">
    <button
      v-show="!showQuestion"
      @click="showQuestion = true"
      class="show-question-btn"
    >
      Вопросы о скорости печати.
    </button>
  </Transition>
</template>

<style lang="scss">
.common-questions {
  width: 100vw;
  margin: 10vh 0 4vh;
  display: flex;
  justify-content: center;
}

.common-questions-enter-active {
  animation: question-active 1.5s;
}

.common-questions-leave-active {
  animation: question-active 0.5s reverse;
}

@keyframes question-active {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.common-questions-payload {
  width: 50vw;

  &__title {
    font: $font-size-for-sign $font-style-for-sign;
    cursor: pointer;
  }
}

.show-question-btn {
  position: absolute;
  bottom: 2vh;
  right: 2vw;
  @include button($font-size-for-sign, $color, $background-color);
  @include border($margin-padding, $margin-padding * 2, $color, 2rem);
}
</style>
