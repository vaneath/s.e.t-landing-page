<template>
  <div class="carousel w-full">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :id="`slide${index + 1}`"
      class="carousel-item relative w-full h-56 lg:h-96"
    >
      <img :src="slide.img" class="w-full object-cover" />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <!-- Previous Button -->
        <button
          class="btn btn-circle"
          @click.prevent="
            navigateTo(index === 0 ? slides.length - 1 : index - 1)
          "
        >
          ❮
        </button>

        <!-- Next Button -->
        <button
          class="btn btn-circle"
          @click.prevent="
            navigateTo(index === slides.length - 1 ? 0 : index + 1)
          "
        >
          ❯
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Slide data
const slides = [
  {
    img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  },
  {
    img: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  },
  {
    img: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  },
  {
    img: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  },
];

// Navigate to a specific slide
const navigateTo = (index) => {
  const target = document.getElementById(`slide${index + 1}`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
};
</script>
