<script setup lang="ts">
const props = defineProps<{
  textForHeader: string;
}>();
</script>

<template>
  <header class="title">
    {{ props.textForHeader }}
  </header>
</template>

<style>
.title {
  margin-bottom: 4vh;
  font: 3.2rem cursive;
  color: #fff;
}
</style>
