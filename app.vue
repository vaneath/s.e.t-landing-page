<template>
  <div>
    <NavigationBar />
    <!-- Hero Section -->
    <section class="text-center py-20 bg-gray-50">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
        The better way to manage your website with
        <span class="text-primary">Velzon</span>
      </h1>
      <p class="mt-4 text-base text-gray-500 sm:text-lg">
        Velzon is a fully responsive, multipurpose and premium Bootstrap 5 Admin
        & Dashboard Template built in multiple frameworks.
      </p>
      <div class="mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          class="px-6 py-3 text-white bg-primary rounded hover:bg-primary"
        >
          Get Started
        </button>
        <button
          class="px-6 py-3 text-primary bg-white border border-primary rounded hover:bg-primary"
        >
          View Plans
        </button>
      </div>
    </section>

    <section id="services" class="py-16 bg-white min-h-screen">
      <!-- Trusted by Section -->
      <div class="text-center">
        <h2 class="text-sm font-medium text-gray-400 uppercase">Trusted by</h2>
        <div class="flex justify-center gap-6 mt-4 flex-wrap">
          <!-- Logos -->
          <NuxtImg src="/images/set_logo.png" alt="Lenovo" class="h-8" />
          <NuxtImg src="/images/set_logo.png" alt="PayPal" class="h-8" />
          <NuxtImg src="/images/set_logo.png" alt="Shopify" class="h-8" />
          <NuxtImg src="/images/set_logo.png" alt="Verizon" class="h-8" />
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
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-primary0 rounded-full"
          >
            <NuxtImg
              src="/images/set_logo.png"
              alt="Creative Design"
              class="h-6"
            />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Creative Design</h3>
          <p class="text-gray-500 text-sm mt-2">
            The creative design includes designs that are unique, effective and
            memorable.
          </p>
          <a href="#" class="text-primary text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-primary0 rounded-full"
          >
            <NuxtImg
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
          <a href="#" class="text-primary text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-primary0 rounded-full"
          >
            <NuxtImg
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
          <a href="#" class="text-primary text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-primary0 rounded-full"
          >
            <NuxtImg
              src="/images/set_logo.png"
              alt="Awesome Support"
              class="h-6"
            />
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Awesome Support</h3>
          <p class="text-gray-500 text-sm mt-2">
            Awesome Support is the most versatile and feature-rich support
            plugin for all version.
          </p>
          <a href="#" class="text-primary text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-primary0 rounded-full"
          >
            <NuxtImg
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
          <a href="#" class="text-primary text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
        <!-- Feature Item -->
        <div class="text-center">
          <div
            class="flex items-center justify-center h-12 w-12 mx-auto mb-4 bg-primary0 rounded-full"
          >
            <NuxtImg
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
          <a href="#" class="text-primary text-sm mt-2 inline-block"
            >Learn More &rsaquo;</a
          >
        </div>
      </div>
    </section>

    <section id="reviews" class="bg-gray-50 pt-40 sm:pt-44 px-6 min-h-screen">
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
              <NuxtImg
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
              <NuxtImg
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
              <NuxtImg
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

<style>
html {
  scroll-behavior: smooth;
}
</style>
