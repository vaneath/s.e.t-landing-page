<template>
  <div class="text-center">
    <div
      class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-primary rounded-full"
    >
      <NuxtImg :src="imgSrc" :alt="altText" class="h-6" />
    </div>
    <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
    <p class="text-gray-500 text-sm mt-2">{{ description }}</p>
    <a href="#" class="text-primary text-sm mt-2 inline-block"
      >Learn More &rsaquo;</a
    >
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: String,
  altText: String,
  title: String,
  description: String,
});
</script>
