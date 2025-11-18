<template>
  <div class="syrup" :style="{backgroundColor: fillColor}"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { syrupStore } from "../stores/beverage";
const syrupState = syrupStore();
const syrups = syrupState.syrups;
const currentSyrup = computed(() => syrupState.currentSyrup);

const fillColor = computed(() => {
  if (currentSyrup.value && currentSyrup.value.color) return currentSyrup.value.color;
  if (syrups && syrups.length > 0) return syrups[0].color;
  return '#c6c6c6';
});
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>