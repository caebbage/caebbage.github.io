<template>
  <main id="project">
<md-block class="intro">
# MOMENTS LIKE ICE

> Your childhood best friend is back from magic university for the week, and you've dearly missed her...there's some feelings you never admitted before she moved away... But you can use your magic to influence her thoughts during your chats about her time in the big city! Maybe coming home's what's best for her?
>
> As you influence her, you'll determine the ending of the story, and your friend will come to a decision about what to do.  Will she finally understand your wish to love and protect her?

Team of 10 people, made during **Global Game Jam '25** in 48 hours.
[Available to play in-browser.](https://koloquials.itch.io/moments-like-ice)

Handled technical art; shader design, VFX, post processing, and art implementation.
</md-blocK>
<md-block>
## THE DESIGN PROCESS
This year's global game jam theme was **bubble**, after our initial planning discussions, we decided we wanted a game revolving around *bubbles of memories*, using a *Pokemon Ranger*-like circling system to capture our choices. On top of this, we wanted to play with the visuals of frozen bubbles, which are [very cool looking](https://www.youtube.com/watch?v=33f8G_FnYng), if you've never seen it before. As the technical artist, it was then my task to translate these visual ideas into something that looks good.
</md-block>
<section class="adjacent">
  <md-block>
  ### THE BUBBLE
  The bubble was a key component of our gameplay, and something we needed to ensure looked good. I wanted to design something easily customizable; initially, I'd hoped to do the bubble entirely procedurally, potentially for easy support of custom shapes, but quickly came into problems as I discovered that Unity *doesn't have a blur node* within their shader graph system, which is rather unideal for what I had in mind. After finding some custom implementations of it that, to me, all left something desired, I decided to go with a sprite-based approach instead.

  For the sprite of the bubble, I wanted to compact as much of the information about the bubble's appearance into a single image. I ended up with something that was split like this;
  - **Red Channel**: The *hard highlights* of the bubble.
  - **Green Channel**: The *soft highlights* of the bubble, which get cut into somewhat by the blue channel.
  - **Blue Channel**: The *inner bubble*, which I wanted separate from the alpha at the time despite affecting the final rendered alpha; helps find the inner area of the bubble, which not only determines transparency, but where the holographic effect begins to fade off.
  - **Alpha Channel**: The hard outline of the bubble itself.

The outline of the bubble is something I added after creating this original setup, as upon feedback, there was a request for a more solid outline and a bit of wobbling shape variation (rather than a static full circle, shape-wise). There was also the matter of the freeze effect; I'd originally intended to create it with a simple voronoi, but a flower-like effect was requested for the visuals of the effect, so in the interest of time I generated a texture using [Pixel Composer](https://makham.itch.io/pixel-composer).

I also created some animations afterwards to support the bubble, including its animation on entry, a simple VFX for when it pops, and then an animation for when it freezes and then leaves the scene.
  </md-block>
  <section class="gallery-group">
    <gallery-item image="/src/assets/image/project/moments-like-ice/bubbleidle.gif" desc="Bubble in its idle state." />
    <gallery-item image="/src/assets/image/project/moments-like-ice/BubbleSprite.png" desc="The raw sprite for the bubble itself, with RGB channels separated into different components of the bubble itself. Texture was added by our Designer, Rachel Geng." />
  </section>
</section>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/moments-like-ice/bubblenodes.png" desc="The node setup for the bubble shader. The bubble base color, holographic gradient, line thickness, holographic movement, and wobble strength are all customizable, along with textures for the holographic and freeze aspects." />
  <gallery-item image="/src/assets/image/project/moments-like-ice/bubblespawn.gif" desc="The entry animation for the bubble in-game." />
</section>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/moments-like-ice/bubbleparam.gif" desc="Demonstration of freeze effect parameter." />
  <gallery-item image="/src/assets/image/project/moments-like-ice/freezenodes.png" desc="The node setup used to create the freeze effect's texture." />
  <gallery-item image="/src/assets/image/project/moments-like-ice/bubblefreeze.gif" desc="The effect in-game, freezing and then transitioning out." />
</section>
<md-block>
  ### THE LINE EFFECT
  Besides the bubble, we also wanted the line stroke for the drawing to be stylized. Our Director wanted something that looked frozen, with a vaguely brush-like stroke effect, but due to the moving nature of the stroke itself (and how the sprite is stretched across the stroke) it could cause a weird "dragging" feeling if the texture was baked into a static sprite. I got around this by applying a screen-space noise texture to the stroke effect, which would help the effect feel a bit more consistent. We also came up with a little ice shard particle shader that moved with the cursor position and whose particles were somewhat determined by cursor movement to tie it together.
</md-block>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/moments-like-ice/linecircle.gif" desc="Demonstration of the line effect in action." />
  <gallery-item image="/src/assets/image/project/moments-like-ice/linenodes.png" desc="The node setup used to create the stroke texture." />
</section>
<md-block>
  ### BRINGING IT ALL TOGETHER
  With those assets ready to go, much of the second day of development was used implementing graphics from our art team. Our art and narrative teams were not entirely familiar with in-engine implementation, so it became my task to put the final assets into our scenes, and ensuring assets worked as intended-- this included many art assets, as well as preparing the data hookups for the bubbles that appear in scene.

  A little post processing goes a long way in making the final visuals come together. We wanted to have a dreamy feel to the game, so a combination of film grain, vignette, and bloom were used to give the game a bit of a dreamy feel.
</md-block>
<section class="gallery-group">
  <gallery-item image="/src/assets/image/project/moments-like-ice/postprocess-pre.png" desc="The game prior to addition of post-processing." />
  <gallery-item image="/src/assets/image/project/moments-like-ice/postprocess-post.gif" desc="The game after addition of post-processing." />
</section>
<md-block>
## LESSONS LEARNED
**What went well:** I genuinely had a lot of fun making the node-based shaders for this project, as well as the animations, and am very pleased with the visual results of what I had made. Another engineer and I ended up spending a bit of time after to kill some final bugs present in the game after the formal end-time, which results in the current product being very close to bug-free-- which, given the general time constraints, is a pretty great achievement.

**Areas of improvement:** In retrospect, I think I could've optimized the shader setup for the bubble a bit further if I had the time: for example, the holographic texture and freeze texture, both being black-and-white, could've been combined into a single texture for less files. There were a lot of frustrations with the limitations of shader graphs, and had I more time, it would've been nice to for example make the holographic texture via a custom node and HLSL, by creating 1D noise (for stripes) and then warping it based off of a 2D noise map, rather than essentially doing the same thing but in an art program. In a game jam, these issues are minor, but knowing more optimal solutions is useful in the context of more serious production.

There were also some frustrations relating to inadequate communication of file specs, resulting in me spending about half an hour to an hour adjusting image assets so that they would work for the game. This is partially an issue of the artists not knowing implementation, so in the future, briefing art team members on how to do such would be of benefit.

**Closing thoughts:** I had a lot of fun, even with the final hours of crunch! It's really satisfying to see a vision come together, and for doing everything in just two days, we genuinely did a great job. I feel satisfied in being able to exercise myself in shader creation, and I hope to do more of it in the future.
</md-block>
  </main>
</template>

<script setup>
import mdBlock from '@/components/mdBlock.vue'
import GalleryItem from '@/components/GalleryItem.vue';
</script>
