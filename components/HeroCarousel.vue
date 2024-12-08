<template>
  <div class="carousel w-full">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :id="`slide${index + 1}`"
      class="carousel-item relative w-full h-56 lg:h-96"
    >
      <NuxtImg :src="slide.img" class="aspect-video object-fill mx-auto" />
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
    img: "/images/slides/about.jpg",
  },
  {
    img: "/images/slides/about.jpg",
  },
  {
    img: "/images/slides/about.jpg",
  },
  {
    img: "/images/slides/about.jpg",
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
