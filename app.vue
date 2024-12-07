<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="flex items-center justify-between px-4 py-4 bg-white shadow-md">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <span class="text-teal-600">VEL</span>ZON
      </div>

      <!-- Hamburger Menu Button (Mobile Only) -->
      <button
        class="text-gray-600 md:hidden focus:outline-none"
        @click="menuOpen = !menuOpen"
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

      <!-- Navigation Links (Hidden on Mobile) -->
      <ul class="hidden space-x-6 text-gray-600 md:flex">
        <li
          v-for="item in menuItems"
          :key="item.label"
          :class="[
            'relative px-4 py-2 text-sm font-medium cursor-pointer',
            active === item.label ? 'text-teal-600' : 'hover:text-teal-600',
          ]"
          @mouseenter="hover = item.label"
          @mouseleave="hover = ''"
          @click="setActive(item.label)"
        >
          {{ item.label }}
          <span
            v-if="hover === item.label || active === item.label"
            class="absolute left-0 bottom-0 w-full h-[2px] bg-teal-600 transition-all duration-300"
          ></span>
        </li>
      </ul>

      <!-- Actions (Hidden on Mobile) -->
      <div class="hidden md:flex space-x-4">
        <button
          class="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded hover:bg-teal-700"
        >
          Sign In
        </button>
        <button
          class="px-4 py-2 text-sm font-medium text-teal-600 bg-white border border-teal-600 rounded hover:bg-teal-50"
        >
          Sign Up
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="flex flex-col items-center py-4 space-y-4 text-gray-600 bg-white shadow-md md:hidden"
    >
      <ul class="flex flex-col items-center space-y-4">
        <li
          v-for="item in menuItems"
          :key="item.label"
          :class="[
            'relative px-4 py-2 text-sm font-medium cursor-pointer',
            active === item.label ? 'text-teal-600' : 'hover:text-teal-600',
          ]"
          @click="setActive(item.label)"
        >
          {{ item.label }}
        </li>
      </ul>
      <div class="flex flex-col items-center space-y-4">
        <button
          class="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded hover:bg-teal-700"
        >
          Sign In
        </button>
        <button
          class="px-4 py-2 text-sm font-medium text-teal-600 bg-white border border-teal-600 rounded hover:bg-teal-50"
        >
          Sign Up
        </button>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="text-center py-20 bg-gray-50">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
        The better way to manage your website with
        <span class="text-teal-600">Velzon</span>
      </h1>
      <p class="mt-4 text-base text-gray-500 sm:text-lg">
        Velzon is a fully responsive, multipurpose and premium Bootstrap 5 Admin
        & Dashboard Template built in multiple frameworks.
      </p>
      <div class="mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          class="px-6 py-3 text-white bg-teal-600 rounded hover:bg-teal-700"
        >
          Get Started
        </button>
        <button
          class="px-6 py-3 text-teal-600 bg-white border border-teal-600 rounded hover:bg-teal-50"
        >
          View Plans
        </button>
      </div>
    </section>

    <section class="py-16 bg-white">
      <!-- Trusted by Section -->
      <div class="text-center">
        <h2 class="text-sm font-medium text-gray-400 uppercase">Trusted by</h2>
        <div class="flex justify-center gap-6 mt-4 flex-wrap">
          <!-- Logos -->
          <img src="/images/set_logo.png" alt="Lenovo" class="h-8" />
          <img src="/images/set_logo.png" alt="PayPal" class="h-8" />
          <img src="/images/set_logo.png" alt="Shopify" class="h-8" />
          <img src="/images/set_logo.png" alt="Verizon" class="h-8" />
        </div>
      </div>

      <!-- Hero Section -->
      <div class="text-center mt-12">
        <h1 class="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
          A Digital web design studio creating modern & engaging online
        </h1>
        <p class="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
          To achieve this, it would be necessary to have uniform grammar,
          pronunciation, and more common words. If several languages coalesce
          the grammar.
        </p>
      </div>

      <!-- Features Section -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 lg:px-0"
      >
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-teal-100 rounded-full"
          >
            <img src="/images/set_logo.png" alt="Creative Design" class="h-6" />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Creative Design</h3>
          <p class="text-gray-500 text-sm mt-2">
            The creative design includes designs that are unique, effective and
            memorable.
          </p>
          <a href="#" class="text-teal-600 text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-teal-100 rounded-full"
          >
            <img
              src="/images/set_logo.png"
              alt="Unlimited Colors"
              class="h-6"
            />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Unlimited Colors</h3>
          <p class="text-gray-500 text-sm mt-2">
            The collection of rules and guidelines which designers use to
            communicate with users through appealing.
          </p>
          <a href="#" class="text-teal-600 text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-teal-100 rounded-full"
          >
            <img
              src="/images/set_logo.png"
              alt="Strategy Solutions"
              class="h-6"
            />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">
            Strategy Solutions
          </h3>
          <p class="text-gray-500 text-sm mt-2">
            Business development firm that provides strategic planning, market
            research services and project.
          </p>
          <a href="#" class="text-teal-600 text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-teal-100 rounded-full"
          >
            <img src="/images/set_logo.png" alt="Awesome Support" class="h-6" />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Awesome Support</h3>
          <p class="text-gray-500 text-sm mt-2">
            Awesome Support is the most versatile and feature-rich support
            plugin for all version.
          </p>
          <a href="#" class="text-teal-600 text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-teal-100 rounded-full"
          >
            <img
              src="/images/set_logo.png"
              alt="Truly Multipurpose"
              class="h-6"
            />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">
            Truly Multipurpose
          </h3>
          <p class="text-gray-500 text-sm mt-2">
            You usually get a broad range of options to play with. This enables
            you to use a single theme across multiple.
          </p>
          <a href="#" class="text-teal-600 text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-teal-100 rounded-full"
          >
            <img
              src="/images/set_logo.png"
              alt="Easy to customize"
              class="h-6"
            />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Easy to customize</h3>
          <p class="text-gray-500 text-sm mt-2">
            Personalise your own website, no matter what theme and what
            customization options.
          </p>
          <a href="#" class="text-teal-600 text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-12 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h2>
        <p class="text-gray-600 mb-12">
          Hear from the amazing people we've worked with.
        </p>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Testimonial 1 -->
          <div class="bg-white p-6 shadow-md rounded-lg">
            <p class="text-gray-600 mb-4">
              "This team exceeded our expectations. Their designs are modern,
              functional, and highly engaging!"
            </p>
            <div class="flex items-center">
              <img
                class="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/150"
                alt="Client 1"
              />
              <div>
                <h4 class="text-gray-800 font-semibold">John Doe</h4>
                <span class="text-gray-500 text-sm">CEO, Example Co.</span>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white p-6 shadow-md rounded-lg">
            <p class="text-gray-600 mb-4">
              "Their customer support is incredible, and their attention to
              detail is unmatched!"
            </p>
            <div class="flex items-center">
              <img
                class="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/150"
                alt="Client 2"
              />
              <div>
                <h4 class="text-gray-800 font-semibold">Jane Smith</h4>
                <span class="text-gray-500 text-sm">Manager, Tech Corp.</span>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-white p-6 shadow-md rounded-lg">
            <p class="text-gray-600 mb-4">
              "I highly recommend their services. Professional, creative, and
              dedicated to delivering value."
            </p>
            <div class="flex items-center">
              <img
                class="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/150"
                alt="Client 3"
              />
              <div>
                <h4 class="text-gray-800 font-semibold">Alice Brown</h4>
                <span class="text-gray-500 text-sm">Founder, Innovate LLC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Home" },
        { label: "Services" },
        { label: "Features" },
        { label: "Plans" },
        { label: "Reviews" },
        { label: "Team" },
        { label: "Contact" },
      ],
      active: "Home",
      hover: "",
      menuOpen: false,
    };
  },
  methods: {
    setActive(label) {
      this.active = label;
      this.menuOpen = false; // Close menu on mobile after selection
    },
  },
};
</script>
