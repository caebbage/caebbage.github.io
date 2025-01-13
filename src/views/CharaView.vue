<template>
  <main id="characters">
    <section class="chara-list">
      <router-link v-for="char in charas" :key="`char-` + char"
      :to="{name: char}" :style="{'background-image': `url('/src/assets/image/chara/${char}/thumb.png')`}">
      {{ char }}
      </router-link>
    </section>
    <RouterView />
  </main>
</template>


<script setup>
import { RouterView } from 'vue-router'
import charas from '@/router/chara.json'
</script>

<style>

.chara-list {
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: var(--trans);
  height: 40px;
}

.chara-list:last-child {
  height: calc(100vh - 16rem);
}

.chara-list a {
  display: block;
  width: 160px;
  height: 80px;
  text-align: center;
  font: 700 36px/80px 'Poppins', sans-serif;

  padding: 0;
  background-size: cover;
  background-color: var(--base-1);
  border: 1px solid var(--base-2);
  transition: var(--trans);
  color: var(--text-bold);
}

.chara-list a:hover {
  color: var(--accent);
}

.chara-list a.router-link-active {
  opacity: 0.3;
}


.chara-list a.router-link-active:hover {
  color: var(--text-bold);
}


.chara-list:not(:last-child) a {
 font: 700 18px/40px 'Poppins', sans-serif;
 height: 40px; width: 80px;
}
</style>
