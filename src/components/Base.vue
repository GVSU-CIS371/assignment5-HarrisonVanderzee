<template>
  <div class="baseBeverage" :style="{ backgroundColor: fillColor }"></div>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { baseStore } from "../stores/beverage";
const baseState = baseStore();
const bases = baseState.bases;
const currentBase = computed(() => baseState.currentBase);

const fillColor = computed(() => {
  if (currentBase.value && currentBase.value.color) return currentBase.value.color;
  if (bases && bases.length > 0) return bases[0].color;
  return '#c6c6c6';
});
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>