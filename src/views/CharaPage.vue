<template>
  <section id="chara">
    <base href="../" />
    <div class="chara-full" :style="{
      'background-image': `url('/src/assets/image/chara/${$route.name}/fullbody.png')`
    }"></div>
    <div class="chara-content">
      <h2>{{ name }} <span v-if="alt">{{ alt }}</span></h2>
      <h3 v-if="subtitle">{{ subtitle }}</h3>
      <div class="chara-stat">
        <div class="info-item" v-for="(val, key) in basics" :key="`info-${key}`">
          <div class="stat-name">{{ key }}</div>
          <div class="stat-content">{{ val }}</div>
        </div>
        <div class="chara-break"></div>
        <div class="stat-item" v-for="(val, key) in stats" :key="`stat-${key}`">
          <div class="stat-name">{{ key }}</div>
          <div class="stat-bar"><div class="stat-bar-inner" :style="{
            width: `calc(100% * ${val})`
          }"></div>
          </div>
        </div>
      </div>
      <md-block class="chara-info">{{ desc }}</md-block>
      <div class="chara-gallery" v-if="gallery?.length">
        <gallery-item
          v-for="img, i in gallery" :key="'gal-' + i"
          :icon="`/src/assets/image/chara/${img.icon}`"
          :image="`/src/assets/image/${img.url}`"
          :desc="img.desc"
          :disable-flex="true"
          >
        </gallery-item>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import mdBlock from '@/components/mdBlock.vue';
import GalleryItem from '@/components/GalleryItem.vue';

defineProps({
  "fullbody": String,
  "name": String,
  "alt": String,
  "subtitle": String,
  "color": String,
  "basics": Object,
  "stats": Object,
  "desc": String,
  "gallery": Array
})
</script>

<style>

#chara {
  --color: v-bind(color);
  height: calc(100vh - 16rem - 40px);
  display: flex;
  position: relative;
  color: var(--text);
  transition: var(--trans);
}

#chara b, #chara strong {
  color: var(--color);
  transition: var(--trans);
}

.chara-full {
  position: absolute;
  width: calc(100% + 2rem);
  height: calc(100% + 2rem);
  margin: -1rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 80%;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 1));
  transition-property: width, height, margin, mask-image;
  transition-duration: var(--trans);
}

#content.light .chara-full {
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 1));
}

#chara h2 {
  font: 900 3rem/125% 'Poppins', 'Noto Sans JP', sans-serif;
  position: relative;
  z-index: 1;
  color: var(--text-bold);
  transition: var(--trans);
  margin: 0;
}
#chara h3 {
  font: 500 1.25rem/125% 'Poppins', 'Noto Sans JP', sans-serif;
  color: var(--text-2);
  transition: var(--trans);
  margin: 0;
}

#chara h2 span {
  position: absolute;
  width: 100%;
  text-align: right;
  right: 0;
  top: 0;
  z-index: -1;
  font-size: 4rem;
  opacity: 0.5;
  color: var(--color);
}

.chara-content {
  max-width: 600px;
  margin: auto;
  z-index: 3;
}

.chara-stat {
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;
}

.chara-break {
  width: 100%;
  height: 0.5rem;
}

.info-item, .stat-item {
  display: flex;
  flex-flow: row nowrap;
}

.info-item {
  width: calc(33% - 0.125rem);
}

.stat-item {
  width: calc(33% - 0.125rem);
}

.stat-name {
  padding: 0.25rem 0.5rem;
  text-align: center;
  border: 1px solid var(--base-2);
  background-color: var(--base-1);
  font-weight: bold;
  color: var(--text-bold);
  transition: var(--trans);
}

.stat-content {
  width: 100%;
  padding: 0.25rem 0.5rem;
  flex: 1;
}

.stat-bar {
  width: 100%;
  height: 0.25rem;
  margin: 0.725rem 1rem;
  background: var(--text);
  transition: var(--trans);
}

.stat-bar-inner {
  height: 0.25rem;
  background: var(--color);
  transition: var(--trans);
}

.chara-info {
  padding: 1rem;
  text-align: justify;
}

.chara-info p {
  text-indent: 1rem;
  margin-bottom: 1rem;
}

@media (max-width: 865px) {
  .info-item {
    width: calc(50% - 0.125rem);
  }
}

.chara-gallery {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: .5rem;
}

.chara-gallery .gallery-item {
  max-width: 5rem;
  padding: 0.25rem;
  background: var(--base-1);
  border: 1px solid var(--base-2);
  opacity: 1;
  transition: var(--trans);
  flex: auto!important;
}

.chara-gallery .gallery-item:hover {
  opacity: 0.5;
}

</style>
