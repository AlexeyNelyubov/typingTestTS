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

<style>
.btn-start-test {
  margin-top: 4vh;
  padding: 1.2rem 2.4rem;
  font: 2.4rem cursive;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;
  border: none;
  border-radius: 1.2rem;
}
</style>
