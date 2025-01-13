<template>
  <main :id="'art ' + $route.name">
    <section class="intro">
      <h1>{{ title }}</h1>
      <p v-html="desc"></p>
    </section>
    <masonry-wall :items="loadedItems.length == items.length ? loadedItems : []" :min-columns="1" :max-columns="$route.name == 'sketch' ? 2 : 3" :column-width="300" :gap="16">
      <template #default="{ item }">
        <gallery-item :image="`./src/assets/image/${item.url}`" :desc="item.desc" :disable-flex="true">
        </gallery-item>
      </template>
    </masonry-wall>
  </main>
</template>

<script setup>
import MasonryWall from '@yeger/vue-masonry-wall';
import GalleryItem from '@/components/GalleryItem.vue';
import { defineProps, ref, onMounted, watch} from 'vue';

const props = defineProps({
  'title': String,
  'desc': String,
  'items': Array
});

const loadedItems = ref([])

function preloadImages(items) {
  return Promise.all(
    items.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = `./src/assets/image/${item.url}`
        img.onload = resolve
        img.onerror = reject
      })
    })
  )
}

watch(() => props.items, async (val) => {
  console.log("watch")
  await preloadImages(val)
  loadedItems.value = val
})

onMounted(async () => {
  await preloadImages(props.items)
  loadedItems.value = props.items
})

</script>
