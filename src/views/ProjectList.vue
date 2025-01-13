<template>
  <main id="projects">
    <section class="intro">
      <h1>PROJECTS</h1>
      <p>Various programming-related projects.</p>
    </section>

    <section class="projects">
      <project-item v-for="proj in project" :key="proj.projpage" :project="proj" :projname="proj.projpage"
      :title="proj.name" :subtitle="proj.subtitle" :desc="proj.desc"
      :tags="proj.tags" :gallery="proj.gallery">
      </project-item>
    </section>
  </main>
</template>

<script setup>
import ProjectItem from '@/components/ProjectItem.vue';
import project from '@/router/project.json'

</script>
<style>
.project-item+.project-item {
  margin-top: 2rem;
}

#projects > section {
  max-width: 1100px;
  margin: auto;
}
</style>
