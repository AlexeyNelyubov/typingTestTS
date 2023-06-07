<script setup lang="ts">
const props = defineProps<{
  // textForShow: Array<string>;
  textForShow: string[];
}>();
</script>

<template>
  <div class="information">
    <div class="information__text">
      <p v-for="item in props.textForShow" :key="item.id">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.information {
  display: flex;
  justify-content: center;

  &__text {
    width: 50vw;
    margin-bottom: $vertical-margin-between-block;
    font: $font-size-for-text * 0.9 $font-style-for-text;
    text-align: center;
    @include border($margin-padding * 2, $margin-padding * 2, $color, 2rem);
  }
}
</style>
