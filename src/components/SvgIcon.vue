<template>
  <div>
    <svg class="svg" v-bind:font-size="fonte ? fonte : 24" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path v-bind:d="props?.icon" />
    </svg>
  </div>
</template>

<script setup lang="ts">
const thema = "#FFF"; //useThema();
const props = defineProps({ icon: [String], fontsize: [String, Number] });

const fonte = Number(props?.fontsize);
</script>

<style scoped>
.svg {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: v-bind("thema");
}
</style>
