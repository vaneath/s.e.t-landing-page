<template>
  <Section id="reviews">
    <div class="pt-40 sm:pt-44 px-4">
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
    </div>
  </Section>
</template>
