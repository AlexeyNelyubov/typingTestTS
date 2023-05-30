<script setup lang="ts">
const props = defineProps<{
  textForButton: string;
}>();

// defineEmits({ "start-new-test": null });
defineEmits<{
  (e: "start-new-test"): void;
}>();
</script>

<template>
  <button @click="$emit('start-new-test')" class="btn-start-test">
    {{ props.textForButton }}
  </button>
</template>

<style lang="scss">
.btn-start-test {
  @include button($font-size-for-sign, $color, #4caf50);
  padding: $margin-padding $margin-padding * 2;
}
</style>
