<template>
  <div class="project-item">
    <project-carousel :projname="project.projpage" :items="project.gallery"></project-carousel>
    <div class="project-info">
      <h2>
        <a v-if="project.url" :href="project.url" v-html="project.name"></a>
        <span v-else v-html="project.name"></span>
        <router-link class="caselink" :to="{name: project.name}">→ case study</router-link>
      </h2>
      <h3 v-html="project.subtitle" />
      <div class="project-desc" v-html="project.desc" />
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="`${title} ${tag}`"># {{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCarousel from './ProjectCarousel.vue';
import { defineProps } from 'vue';

defineProps(["project"]);
</script>

<style>
.project-item {
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  padding: 1rem 0;
}

.project-item > .project-carousel {
  flex: 1 0 auto;
}

.project-carousel > .gallery-item {
  margin: 0 auto;
}

.project-info {
  display: flex;
  flex-flow: column nowrap;
  flex: 2 0;
  min-width: 400px;
}

.project-item h2 {
  font: 700 1.8rem/100% 'Poppins', sans-serif;
  color: var(--text-bold);
  margin-bottom: 0;
}

.project-item h2 .caselink {
  font-size: 1rem;
  float: right;
}

.project-item h3 {
  font: italic 1rem/150% 'Poppins', sans-serif;
  color: var(--text-1);
  margin-bottom: 0;
}

.project-desc {
  flex-grow: 5;
  border-left: 2px solid var(--text-2);
  padding: 0.5rem 1rem;
  margin: 0.75rem 0 0.75rem 1.25rem
}

.project-tags span {
  color: var(--text-1);
  font-style: italic;
  padding-right: 0.5rem;
}

@media (max-width: 1050px) {
  .project-item {
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>
