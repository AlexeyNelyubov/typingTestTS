<script setup lang="ts">
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="single-question">
    <p @click="dropDown = !dropDown" class="single-question__question">
      <slot name="title"></slot>
    </p>

    <div v-show="dropDown" class="single-question__answer">
      <slot name="paragraph"></slot>
      <slot name="list"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.single-question {
  margin-top: $margin-padding * 2;
  border-bottom: $border-width $border-style $color;

  &__question {
    font: $font-size-for-sign * 0.9 $font-style-for-sign;
    cursor: pointer;
  }

  &__answer {
    font: $font-size-for-text - 0.6 $font-style-for-question;
    margin: $margin-padding * 2 0;
  }

  &__answer-paragraph {
    margin: $margin-padding 0;
    text-align: justify;
  }
}
</style>
