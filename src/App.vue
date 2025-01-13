<template>
  <div id="content" :class="{ 'dark': darkMode, 'light': !darkMode }">
    <header>
      <h1 id="site-title">
        <router-link :to="{ name: 'about' }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" xmlns:bx="https://boxy-svg.com"  preserveAspectRatio="none" width="450px" height="450px"><path d="M 244.812 400 L 246.116 245.39 C 451.099 272.371 445.001 61.715 445.001 61.715 C 371.401 32.884 242.292 57.488 225.001 133.088 C 207.709 57.488 78.6 32.884 5 61.715 C 5 61.715 -1.098 272.371 203.885 245.39 L 205.189 400 L 244.812 400 Z" id="object-0"/></svg>
          CAEBEAN.NET
        </router-link>
      </h1>

      <div id="nav-right">
        <button type="button" @click="changeMode()" class="fa-solid fa-fw fa-sun"></button>
        <button type="button" @click="menuEnabled = !menuEnabled" class="fa-solid fa-fw fa-bars"></button>
      </div>
    </header>
    <div id="wrapper">
      <nav-main :menu-enabled="menuEnabled"></nav-main>
      <div id="page">
        <nav-breadcrumb></nav-breadcrumb>
        <div class="page-container">
          <router-view v-slot="{ Component }">
            <Transition name="page">
              <component :is="Component" />
            </Transition>
          </router-view>
        </div>
        <div id="footer">
          Handmade with ❤ using Vue3. © 2025 Cae Wang.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, RouterLink, RouterView } from 'vue-router'
import { ref, watch } from 'vue'
import NavBreadcrumb from './components/NavBreadcrumb.vue';
import NavMain from './components/NavMain.vue';
import Cookies from 'js-cookie';

const route = useRoute();

function getMode() {
  // gets mode from cookies, or from user prefs if nonexistent
  if (Cookies.get('darkMode') !== undefined) return Cookies.get('darkMode') == "true"
  else return window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches || true;
}


watch(route, function () {
  // closes nav menu if menu is fullscreen rather than sidebar
  if (window.innerWidth < 800) menuEnabled.value = false
})

const darkMode = ref(getMode());

const menuEnabled = ref(window.innerWidth >= 900);

function changeMode() {
  darkMode.value = !darkMode.value
  Cookies.set('darkMode', darkMode.value)
}
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--base-2);
  z-index: 1000;
  border-bottom: 1px solid var(--base-3);
  transition: var(--trans);
}

#content {
  background: var(--base);
  transition: var(--trans);
}

#site-title svg {
  height: 2rem;
  width: 2rem;
  margin: .25rem 0 -.25rem;
}

#site-title path {
  fill: var(--text);
  transition: var(--trans);
}

header #site-title a {
  color: var(--accent);
  text-decoration: none;
  font: 700 2rem/125% "Poppins", sans-serif;
  margin: 0;
}

header #site-title a:hover {
  background: none;
  color: var(--text-bold);
}

#nav-right button {
  padding: 0;
  margin: 0.25rem;
  font-size: 1.5rem;
  background: none;
  border: 0px;
  color: var(--text);
  transition: var(--trans);
}

#nav-right button:hover {
  color: var(--text-2);
}

#wrapper {
  display: flex;
  flex-flow: row-reverse nowrap;
  width: 100%;
  overflow: hidden;
}

.page-container {
  position: relative;
  padding: 2rem 4rem;
  max-width: 100vw;
}

section {
  width: 100%;
}

#footer {
  color: var(--text-2);
  padding: 2rem;
  text-align: center;
}

.page-enter-active,
.page-leave-active {
  transition: opacity var(--trans);
}

.page-leave-active {
  position: absolute;
  max-width: calc(100% - 8rem);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@media (min-width: 1024px) {}
</style>
