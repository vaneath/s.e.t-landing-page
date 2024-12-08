<template>
  <button
    class="bg-primary text-white hover:bg-primary hover:opacity-90 px-6 py-3 rounded"
    v-text="label"
  ></button>
</template>

<script setup>
const props = defineProps({
  label: String,
});
</script>
