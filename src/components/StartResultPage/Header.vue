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

<style lang="scss">
.title {
  margin-bottom: $vertical-margin-between-block;
  font: $font-size-for-sign + 0.6rem $font-style-for-sign;
}
</style>
