<script setup lang="ts">
import { ref } from "vue";
import { useDocumentClick } from "@/composable/useDocumentClick";
import AllQuestions from "@/components/Questions/AllQuestions.vue";

const showQuestion = ref(false);

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
        <AllQuestions />
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
