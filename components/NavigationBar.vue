<template>
  <div class="sticky top-0 z-50 bg-white shadow-md">
    <nav class="flex items-center justify-between px-4 py-2">
      <img src="/images/set_logo.png" alt="Logo" class="size-24 sm:size-32" />
      <button
        class="text-gray-600 lg:hidden focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul class="hidden space-x-6 text-gray-600 lg:flex">
        <template v-for="item in navItems" :key="item.label">
          <NavItem
            :item="item"
            :active="active"
            @update-active="updateActive"
          />
        </template>
      </ul>
      <PrimaryButton class="hidden lg:block" label="Enroll now" />
    </nav>
    <div
      v-if="menuOpen"
      class="flex flex-col items-center py-4 space-y-4 text-gray-600 bg-white shadow-md lg:hidden"
    >
      <ul class="flex flex-col items-center space-y-4">
        <template v-for="item in navItems" :key="item.label">
          <NavItem
            :item="item"
            :active="active"
            @update-active="updateActive"
            @click="toggleMenu"
          />
        </template>
      </ul>
      <PrimaryButton label="Enroll now" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavItem from "./NavItem.vue";

const navItems = [
  { label: "Home", link: "home" },
  { label: "About Us", link: "about-us" },
  { label: "Programs", link: "programs" },
  { label: "Tutors", link: "tutors" },
  { label: "Reviews", link: "reviews" },
  { label: "Contact", link: "contact" },
];

const active = ref("Home");
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const updateActive = (label) => {
  active.value = label;
};
</script>
