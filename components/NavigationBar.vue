<template>
  <div class="sticky top-0">
    <nav class="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <NuxtImg
        src="/images/set_logo.png"
        alt="Logo"
        class="size-24 sm:size-32"
      />
      <button
        class="text-gray-600 md:hidden focus:outline-none"
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
      <ul class="hidden space-x-6 text-gray-600 md:flex">
        <template v-for="item in navItems" :key="item.label">
          <NavItem :item="item" :active="active" />
        </template>
      </ul>
      <button
        class="hidden sm:block px-4 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-primary"
      >
        Sign In
      </button>
    </nav>
    <div
      v-if="menuOpen"
      class="flex flex-col items-center py-4 space-y-4 text-gray-600 bg-white shadow-md md:hidden"
    >
      <ul class="flex flex-col items-center space-y-4">
        <template v-for="item in navItems" :key="item.label">
          <NavItem @click="toggleMenu" :item="item" :active="active" />
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
const navItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "about-us" },
  { label: "Services", link: "services" },
  { label: "Tutors", link: "tutors" },
  { label: "Reviews", link: "reviews" },
  { label: "Contact", link: "contact" },
];

const active = ref("Home");
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
