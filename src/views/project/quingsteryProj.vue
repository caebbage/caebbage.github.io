<template>
  <main id="project">
<md-block class="intro">
# QUINGSTERY DUNGEON

Adventure as a quingee and make your way to the apex of Galinn's Peak!
</md-blocK>
<md-block style="max-width: 500px; margin: auto">
**Genre:** Roguelike, Role-playing
**Platform:** PC, single-player
**Engine:** Unity 2D
**Team:** 29 contributors + 17 writing contributors (for NPCs)
**Contributions:** Project director, Technical & VFX Artist

**Contributions:** Art Director, UI Artist, Technical Artist
**Duration:** March 2023 (1 month)
</md-block>

<section class="adjacent">
<md-block>
### **ART DIRECTION**

It was an important matter to first get the art direction for the game settled– with as large of a team as we had, we still wanted the game to have a cohesive visual direction. Gales End, as a roleplay group with visual elements, had a cohesive pixel visual direction as is, and given that we were reusing some assets from the base group for the game, it was a goal to determine a direction that blended coherently with that original content.

In addition to overall direction, I provided specific guidelines for sprite specifications for the character-related sprites within the game, ensuring coherent visual design. I also contributed sprite work for the dungeon maps, UI, and various visual effects.
</md-block>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/quingstery/art1.png" desc="General visual direction for art assets." />
  <gallery-item image="/src/assets/image/project/quingstery/art2.png" desc="Directional diagrams for character sprite assets." />
</section>
</section>


<md-block>
  ### **USER INTERFACE**

Due to being a reference to existing games like Pokemon Mystery Dungeon, there was already specific basis as for how we wanted the UI to be designed. That said, it was my task to make the UI visually appealing, and to define its structure in a way that was functional and reusable across contexts. Specific points of concern included how UI elements translated across different screens (do items line up in a way that provided visual consistency through navigation?), layerability (would the UI still make sense and be readable in combination with other elements at the same time?), and visual flow (do the menus make sense to read as a player?
</md-block>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/quingstery/ui1.png" desc="UI for bulletin board." />
  <gallery-item image="/src/assets/image/project/quingstery/ui2.png" desc="UI for weather forecast." />
  <gallery-item image="/src/assets/image/project/quingstery/ui3.png" desc="UI for character information." />
</section>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/quingstery/ui4.png" desc="UI for mountain entrance." />
  <gallery-item image="/src/assets/image/project/quingstery/ui5.gif" desc="Setup test for hunger bar." />
  <gallery-item image="/src/assets/image/project/quingstery/ui6.gif" desc="Entrance animation for UI opening during mountain exploration." />
</section>

<md-block>
  ### **VISUAL EFFECTS**

While artwork and UI are both in and of itself important, it’s the little touches of animation and VFX that help bring the moving parts together to feel alive, and breathing. The game included a weather system, so to that end, I created particle effects to support the appearance of the world, including hand-drawn and tweened VFX animations, as well as particle effects and supporting graphical setups for weather.
</md-block>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/quingstery/vfx1.gif" desc="UI and VFX for item obtainment." />
  <gallery-item image="/src/assets/image/project/quingstery/vfx2.gif" desc="Leaf particle effects for overworld." />
  <gallery-item image="/src/assets/image/project/quingstery/vfx3.gif" desc="Leaf and rain particle effects for weather." />
</section>
<md-block>
## **LESSONS LEARNED**

**What went well:** Godot’s 2D game engine is one that meshes with me well, and it felt very natural working on the UI within it. We successfully brought together a visually coherent feel for the game and coordinated this across a sizeable art team. I’m happy for what we accomplished.

**Areas of improvement:** Due to the engineering focus on getting in-town functions working, we’d lost steam by the time it came to getting the actual dungeon generation working to complete the gameplay loop. This was an issue of mismanaged focus on our part– though in the first place, the game idea in itself was rather ambitious for a 1-month project. Managing work expectations is important to be able to make a project that comes to completion.

**Closing thoughts:** Despite the project technically being unfinished, I talk of it because I’m incredibly proud of all the work I was able to do for the project, both in what I accomplished and what it taught me. UI was not a realm I’d particularly considered managing in the past, but designing and creating menu systems for this project was a lot of fun, as were other artistic aspects I contributed.
</md-block>
  </main>
</template>


<script setup>
import mdBlock from '@/components/mdBlock.vue'
import GalleryItem from '@/components/GalleryItem.vue';
</script>
