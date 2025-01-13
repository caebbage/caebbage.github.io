<template>
  <base href="/../" />
  <div id="menu" :class="{ 'open': menuEnabled }">
    <nav id="navigation">
      <ul>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
        <li><router-link :to="{ name: 'illust' }">Artwork</router-link>
          <ul>
            <li><router-link :to="{ name: 'illust' }">Illustration</router-link></li>
            <li><router-link :to="{ name: 'design' }">Character Design</router-link></li>
            <li><router-link :to="{ name: 'sketch' }">Sketchbook</router-link></li>
          </ul>
        </li>
        <li><router-link :to="{ name: 'projects' }">Projects</router-link></li>
        <li><router-link :to="{ name: 'charas' }">Characters</router-link></li>
        <li class="socials">
          <a v-for="soc in socials" :key="'soc-' + soc.name" :title="soc.name" :class="soc.class" :href="soc.url">
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(["menuEnabled"]);

const socials = [
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/caebbage.bsky.social',
    class: 'fa-brands fa-bluesky'
  },
  {
    name: 'Github',
    url: 'https://github.com/caebbage',
    class: 'fa-brands fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/caebean/',
    class: 'fa-brands fa-linkedin'
  },
  {
    name: 'Work Email',
    url: 'mailto:caewang.work@gmail.com',
    class: 'fa-solid fa-envelope'
  }
]
</script>

<style>
#menu {
  width: 15rem;
  position: relative;
  transition: var(--trans);
  z-index: 500;
}

#menu:not(.open) {
  width: 0rem;
}


#menu:not(.open) #navigation {
  opacity: 0;
  pointer-events: none;
}

#navigation {
  position: fixed;
  width: 15rem;
  background: var(--base-1);
  transition: var(--trans);
  border-left: 1px solid var(--base-2);
  height: 100%;
  padding: 1.5rem 2rem;
}

#navigation li {
  list-style-type: none;
  padding: 0.25rem 0;
}

#navigation ul {
  padding: 0
}

#navigation ul ul {
  padding: 0 1rem;
}

#navigation .socials {
  margin-top: 1rem;
  font-size: 1.2rem;
  text-align: center;
  transition: var(--trans);
}

#navigation .socials a:hover {
  background: none;
}

#navigation a.router-link-active {
  color: var(--text);
}

#navigation a.router-link-exact-active:hover {
  background-color: transparent;
}


#page {
  min-height: calc(100vh - 4.5rem);
  flex: 1;
  padding: 0;
  background: var(--base);
  transition: var(--trans);
}

#menu:not(.open)+#page {
  padding: 0 7.5rem;
}

@media (max-width: 900px) {

  #menu,
  #menu:not(.open) {
    width: 0rem;
  }

  #menu:not(.open)+#page {
    padding: 0!important;
  }

  #navigation {
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    opacity: 1;
    display: flex;
    border: 0;

    align-items: center;
    justify-content: center;

    text-align: center;
    font: 700 2rem/125% 'Poppins', sans-serif;
  }

  #navigation .socials {
    font-size: 2rem;
  }

  #navigation>ul {
    height: auto;
    margin-bottom: 9rem;
  }

  #navigation>ul>li {
    padding: 1rem 0;
  }

  #navigation>ul ul {
    font-size: 70%;
  }
}
</style>
