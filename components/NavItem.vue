<template>
  <li
    :class="[
      'relative px-4 py-2 text-sm font-medium cursor-pointer',
      active === item.label ? 'text-primary' : 'hover:text-primary',
    ]"
  >
    <NuxtLink :to="`#${item.link}`" :external="true">{{ item.label }}</NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
  active: String,
});
</script>
