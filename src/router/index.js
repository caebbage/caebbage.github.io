import {
  createRouter,
  createWebHistory
} from 'vue-router'
import AboutView from '../views/AboutView.vue'

import MasonryPage from '@/views/MasonryPage.vue'
import illustList from '@/assets/image/illust.json'
import designList from '@/assets/image/design.json'
import sketchList from '@/assets/image/sketch.json'

import ProjectList from '../views/ProjectList.vue'

import CharaView from '../views/CharaView.vue'
import charaList from '@/router/chara.json'
import CharaPage from '@/views/CharaPage.vue'

const charaRoutes = await Promise.all(charaList.map(async (char) => {
  let props = await import(`@/views/chara/${char}.json`);
  return {
    path: char,
    name: char,
    component: CharaPage,
    props: props
  }
}));


import projList from '@/router/project.json'
const projects = import.meta.glob("@/views/project/**");

const projRoutes = projList.map((proj) => {
  return {
    path: "/projects/" + proj.projpage,
    name: proj.name,
    meta: {
      parent: 'projects'
    },
    component: projects[`/src/views/project/${proj.projpage}Proj.vue`],
  }
});

import errorPage from '@/views/errorPage.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/illust',
      name: 'illust',
      props: {
        title: 'ILLUSTRATION',
        desc: 'Illustration works.',
        items: illustList
      },
      component: MasonryPage
    },
    {
      path: '/design',
      name: 'design',
      props: {
        title: 'CHARACTER DESIGN',
        desc: 'Character design works.',
        items: designList
      },
      component: MasonryPage
    },
    {
      path: '/sketch',
      name: 'sketch',
      props: {
        title: 'SKETCHBOOK',
        desc: 'Various sketch pages.<br />("Right click -> Open image in new tab" recommended on desktop.)',
        items: sketchList
      },
      component: MasonryPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectList,
      alias: '/gamedev'
    },
    ... projRoutes,
    {
      path: '/charas',
      name: 'charas',
      component: CharaView,
      children: charaRoutes
    },
    {
      path: "/:pathMatch(.*)*",
      component: errorPage
    }
  ]
})

export default router
