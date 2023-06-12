<script setup lang="ts">
import { ref, watchEffect } from "vue";

const props = defineProps<{
  time: number;
}>();

const minutes = ref("00");
const seconds = ref("00");

watchEffect(() => {
  if (props.time === 0) {
    minutes.value = "00";
    seconds.value = "00";
  }
  if (props.time < 10) {
    seconds.value = "0" + props.time;
  } else if (props.time < 60) {
    seconds.value = String(props.time);
  }
  if (props.time / 60 >= 1) {
    minutes.value = "0" + Math.trunc(props.time / 60);
    if (props.time - Math.trunc(props.time / 60) * 60 < 10) {
      seconds.value = "0" + (props.time - Math.trunc(props.time / 60) * 60);
    } else {
      seconds.value = String(props.time - Math.trunc(props.time / 60) * 60);
    }
  }
});
</script>

<template>
  <div class="test-timer">
    <span>Время</span>
    <div style="margin-left: 1rem; width: 3rem">
      {{ minutes }}
    </div>
    <span>:</span>
    <div style="width: 3rem">{{ seconds }}</div>
  </div>
</template>

<style lang="scss">
.test-timer {
  margin-bottom: $vertical-margin-between-block;
  display: flex;
  justify-content: center;
  align-items: center;
  font: $font-size-for-sign $font-style-for-sign;
  @include border($margin-padding, $margin-padding * 2, $color, 2rem);
}
</style>
