<template>
  <main id="project">
<md-block class="intro">
# FEYWOOD

_FEYWOOD_ is a narrative-focused puzzle platformer game demo. It's your first day at your new home-- what you and your sister don't know, is that beyond the forest border lay things you could never imagine...
</md-blocK>
<md-block style="max-width: 500px; margin: auto">
**Genre:** Puzzle, Platformer, Narrative
**Platform:** PC, Single-Player
**Engine:** Unity 3D
**Team:** 6 members

**Contributions:** Project director, Technical & VFX Artist
**Duration:** Feb 2024 - May 2024; ~15 weeks
</md-blocK>
<md-block>
## **THE DESIGN PROCESS**

Feywood was a project pitched not by myself, but by our team’s leader, Alexis Hays. Hence, my goal was to take forward her initial loose pitch into a functional project.

The original idea was to have a narrative and visually-focused game akin to Little Nightmares in execution; a story which delves into horror, with a mostly side-scrolling format. Early discussions resulted in the project being 3D-based due to limitations that come with having to 2D animate brand new art for a variety of unique interactions, combined with our extremely limited art team size. From there, a couple of objectives came to mind.

### **MECHANICS**

A game needed mechanics, not only for the function of being a game, but to inform our programming team what mechanics needed to be planned and scripted, as well as how visuals look in relation to said game. I organized a team discussion tackling this topic, and in the end we game to the following conclusions:

* **Dialogue:** As a narrative-focused game with interacting characters, dialogue would be present within the game to communicate the story and move it forward.
* **Movement and climbing:** Besides the basic navigation around a fixed-camera 3D space, the game itself was envisioned to eventually traverse into more natural terrains, which opened up to thoughts of climbing up and down mossy terrain in order for a more interesting exploratory experience.
* **Object pickup and throw:** We wanted the game to be puzzle-based, and not reliant around mechanics such as battles for interest. But how do we make interesting puzzles with very few basic core mechanics? The idea became to have not only object pickup, but the potential for object throwing, to distract and lure patrolling enemies within puzzles.
* **Push and pull:** To have the character interact with more than just simple objects, push and pull was suggested as a method of having characters interact with the element to make way for new locations or block enemies.
* **Visibility and hide:** Many puzzle elements would revolve around avoiding detection by enemies. That said, we didn’t want game over to be instant upon being spotted, which then lends itself to a visibility/”aggro” system. Hiding also became a topic of discussion, wherein being within specific spaces allows you to be safe from being seen.
* **Flashlight:** Though the beginning of the game is bright and lit, the narrative was expected to eventually lead into the darkness of the forest. Hence, a flashlight would naturally come to use within these scenarios. It would likely draw enemy aggro as well, potentially creating an interesting interplay between seeing where you’re going and staying safe.
* **Unique interactions:** Beyond the puzzle elements created with a variety of the above, there would occasionally be unique interactions, where special animations played to enhance communication of the story itself. This would arguably be the most ambitious component of the mechanics, due to the necessity of custom animations.

In the end, a couple of these features had to be scrapped for the sake of accomplishing a working, whole product within the limited period of time we had. Because we’d started this project in the second semester rather than first, we had about half the time to attempt to deliver something with a focus on heavy visual polish compared to other teams.
</md-block>
<md-block>
### **VISUAL DESIGN**

Since this game was narrative-focused, visual design would have to be heavily emphasized; the gameplay is a vehicle to communicate the overall story, and the wrong visual feel could hamper the feel of the story itself. Though our team leader had a general idea of what she wanted, the nitty gritty goals were something that she was unfamiliar with identifying. As someone who has had prior experience with collaborative game creation as well as team collaboration in general, I picked up the role of direction, tasking our leader to create documentation for the overall visual feel of the game while I handled more technical aspects of visuals.

Thus, I handled design of UI elements, aspects of overhead visual design, as well as VFX and post-processing.

### **GRAPHICS**

Though adjacent to the overall visual direction, the graphics were a slightly separate matter that I handled on my own. In choosing our rendering pipeline for the project, I landed upon URP in part because our stylistic choices were not high enough fidelity to warrant the extra bells and whistles of HDRP, but also because there were certain choices I want to make with the post-processing that were more difficult to accomplish in HDRP.

Within the story, you start off in a warm house your family just moved into, touched by golden afternoon sun– this would then transition into a cooly lit forest, shadowed by tree cover. Alongside use of the built-in post processing volumes and utilizing color balance, bloom, and depth of field, I created a custom post-processing effect which added a subtle gradient from the bottom of the screenspace, flattening the colors for a slightly “dreamier” look.

In addition, there was initially planned to be an extra depth to the house, with the office in the hallway being an accessible space with interactive elements. To this end, I created a node graph shader with distance-based dither fade– with this, the camera could be shifted closer when moving into further rooms, while preventing close-by objects from obstructing the player’s view.

Visual effects were also my realm of work; particle effects in the game were my doing, including the god rays present in the starting room at the beginning of the game, the item pickup sparkles, as well as the fireflies in the outdoor area.

### **USER INTERFACE**

In addition to graphical elements, I was tasked with handling the visuals of the user interface. UI design for the indicator for interactions, dialogue box, and start and pause menus were made by me, with structure created by teammates and stylized either with my direction or by myself.

In addition, I created custom script shaders to handle scene transitions as well as hide/aggro indicators. Rather than having these elements be handled by Unity animation, I wanted to manage them through scripting, and so created helper scripts to handle the manipulation of these shaders for the use of our engineers.
</md-block>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/feywood/UI1.png" desc="The dialogue UI." />
  <gallery-item image="/src/assets/image/project/feywood/shader1.gif" desc="Custom shader for distance-based fade." />
  <gallery-item image="/src/assets/image/project/feywood/shader2.gif" desc="Custom shader for screen transitions, with multiple options." />
</section>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/feywood/shader3.gif" desc="Custom sky shader with a dynamic color gradient." />
  <gallery-item image="/src/assets/image/project/feywood/shader4.gif" desc="Custom post-processing shader to give a subtle gradient glow." />
  <gallery-item image="/src/assets/image/project/feywood/shader5.PNG" desc="Modified shader to allow character visibility while behind objects." />
</section>

<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/feywood/vfx1.gif" desc="God rays particle setup." />
  <gallery-item image="/src/assets/image/project/feywood/vfx2.gif" desc="Particle VFX to attract players' attention to important items." />
  <gallery-item image="/src/assets/image/project/feywood/vfx3.gif" desc="Screen transition VFX, utilizing the custom shader via script." />
</section>
<md-block>
## **LESSONS LEARNED**

**What went well:** For a project as ambitious as this, it’s certainly a commendable feat that we were able to have a working demo made in the span of under 15 weeks. I’m very satisfied with the work I did for the project, not only on its own visual merits, but how it supports the work of my teammates.

**Areas of improvement:** Our project really was something that would have benefitted from another semester to be able to work on it. Due to many of the team members being greenhorns when it came to such a large collaborative effort, our organization as a team left a lot to be desired. Art direction was not communicated effectively across teams, so despite having visual goals, many of them were not followed through during the process of map development, and due to our time constraints, we did not have the time to fret over revising it towards that goal. The experience really brought forth my attention to the difficulty of team management, and gave me thoughts for how to organize team efforts more effectively in the future.

**Closing thoughts:** Despite the amount of troubles that I had through the project, I learned a lot about graphics, shaders, and post-processing through working on Feywood, and this is knowledge I want to bring forward into future projects I make as well. It let me experience and put to practice the skillsets I wanted to specialize in, and I hope to be able to do more work of this ilk in the future.
</md-block>
  </main>
</template>

<script setup>
import mdBlock from '@/components/mdBlock.vue'
import GalleryItem from '@/components/GalleryItem.vue';
</script>
