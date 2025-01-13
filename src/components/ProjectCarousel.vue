<template>
  <div class="project-carousel">
    <gallery-item v-if="images.length == 1" :image="`/src/assets/image/project/${projname}/${images[0].url}`"
      :desc="images[0].desc" />
    <template v-else>
      <Carousel class="carousel-gallery" v-bind="galleryConfig" v-model="currentSlide">
      <Slide v-for="image in images" :key="`${projname}-${image.url}-img`">
        <gallery-item :image="`/src/assets/image/project/${projname}/${image.url}`" alt="Gallery Image"
          :desc="image.desc"></gallery-item>
      </Slide>
    </Carousel>

    <Carousel class="carousel-thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
      <Slide v-for="image in images" :key="`${projname}-${image.url}-thumb`">
        <div class="thumb-item" @click="slideTo(image.id - 1)"
          :style="{ 'background-image': `url('/src/assets/image/project/${projname}/${image.url}')` }">
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    </template>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { ref, defineProps, computed } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import GalleryItem from './GalleryItem.vue';

const props = defineProps(["projname", "items"])

const images = computed(() => {
  return props.items.map((val, i) => {
    val.id = i;
    return val
  })
})

const currentSlide = ref(0);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 10000,
  height: 200,
  transition: 1000,
  mouseDrag: false,
  touchDrag: false,
};

const thumbnailsConfig = {
  dir: 'ttb',
  itemsToShow: 4,
  autoplay: 10000,
  transition: 1000,
  height: 200,
  wrapAround: true,
  gap: 5,
};
</script>

<style>
.project-carousel {
  max-width: calc(350px + 0.5rem);
  align-self: center;
  display: flex;
  gap: 0.5rem;
}

.project-carousel > .gallery-item {
  max-height: 200px;
  max-width: 300px;
  width: fit-content;
  text-align: center;
}

.project-carousel > .gallery-item img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
}

.carousel-gallery .gallery-item {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.carousel-gallery .gallery-item img {
  width: auto;
  max-height: 100%;
}

.carousel-gallery,
.carousel-gallery .gallery-item {
  width: 300px;
  height: 200px;
}

.carousel-thumbnails {
  width: 50px;
}

.thumb-item {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
