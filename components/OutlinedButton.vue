<template>
  <button
    class="px-6 py-3 text-primary bg-white border border-primary rounded hover:bg-primary hover:bg-opacity-10"
    v-text="label"
  ></button>
</template>

<script setup>
const props = defineProps({
  label: String,
});
</script>
