<template>
  <main id="about">
    <div class="about-wrap">
      <div class="about-img"></div>
      <div>
        <md-block>
# Hello.
I'm **Cae Wang**!

With a lifelong passion for both art and programming, I hope to bring these two skills forward wherever I go
next,
to empower the people I work with.
        </md-block>
        <md-block>
### Education
BA Game Art ― *Columbia College Chicago*

***Resume available upon request.***
        </md-block>
        <div class="socials">
          <a v-for="soc in socials" :key="'soc-' + soc.name" :href="soc.url">
            <i :class="soc.class"></i> {{ soc.name }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import mdBlock from '@/components/mdBlock.vue';

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
    name: 'caewang.work@gmail.com',
    url: 'mailto:caewang.work@gmail.com',
    class: 'fa-solid fa-envelope'
  }
]
</script>

<style>

#about {
  min-height: calc(100vh - 16rem - 1px);
  padding: 0 1rem 4rem;
  display: flex;
}

#about .about-wrap {
  max-width: 600px;
  border: 1px solid var(--base-3);
  background: var(--base-2);
  display: flex;
  margin: auto;
  color: var(--text);
  transition: var(--trans);
}

#about .about-wrap > div {
  padding: 2rem;
}

#about .about-img {
  width: 100%;
  background-image: url('/src/assets/image/illust/hachiiiiiiiiiii.jpg');
  background-size: cover;
}

#about h1 {
  font: 900 4rem/100% 'Poppins', sans-serif;
  color: var(--accent);
  transition: var(--trans);
}

#about h3 {
  color: var(--accent);
  transition: var(--trans);
}

#about p {
  padding: 0 0 1rem 0;
}

#about .socials a {
  color: var(--text-bold);
  white-space: nowrap;
}

#about .socials a i {
  color: var(--accent);
  transition: var(--t-spd);
}

#about .socials a:hover i {
  color: var(--text-bold);
}

@media (max-width: 600px) {
  #about .about-wrap {
    flex-flow: column nowrap;
  }
  #about .about-img {
    height: 9rem;
  }
}
</style>
