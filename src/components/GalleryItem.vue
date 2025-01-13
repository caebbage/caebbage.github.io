<template>
  <div :class="{'gallery-item': true, 'flex': !disableFlex}"
  :style="{flex: disableFlex ? false : ((size.w && size.h) ? size.w / size.h : 1)}"
  >
    <img :src="icon || image" draggable="false" @click="fullview = !fullview" />
  </div>
  <teleport to="body">
    <div v-if="fullview" id="modal">
    <div class="modal-wrapper">
      <div class="modal-back" @click="fullview = !fullview"></div>
      <div class="modal-content">
        <div class="modal-image"><img :src="image" draggable="false" /></div>
        <div v-if="desc" class="modal-desc" v-html="desc"></div>
      </div>
    </div>
  </div>
  </teleport>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps(['icon', 'image', 'desc', 'disableFlex']);
const fullview = ref(false);
const size = ref({w: 0, h: 0});

let galImg = new Image();
galImg.onload = () => {
  size.value.w = galImg.width;
  size.value.h = galImg.height;
}

galImg.src = props.image;

</script>

<style>
.gallery-item {
  line-height: 0;
  cursor: pointer;
  text-align: center;
}
.gallery-item img {
  width: 100%;
}

.gallery-item.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

#modal {
  position: fixed;
  top: 0; bottom: 0; left: 0; right: 0;
  background: rgba(0,0,0,0.5);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  background: var(--text-2);
  color: var(--base-2);
  width: fit-content;
  max-width: calc(100vw - 10rem);
  max-height: calc(100vh - 10rem);
}

.modal-back {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 10;
  cursor: pointer;
}

.modal-content {
  max-width: calc(100vw - 10rem);
  max-height: calc(100vh - 10rem);
  position: relative;
  z-index: 20;
}

.modal img {
  flex-shrink: 1;
}

.modal-image {line-height: 0;}

.modal-image img {
  max-width: calc(100vw - 10rem);
  max-height: calc(100vh - 10rem);
}

.modal-image + .modal-desc {
  flex: 5;
  width: 100%;
  padding: 4rem 3rem 2rem;
  position: absolute;
  bottom: 0;
  color: #EEE;
  background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%);
}

@media (max-width: 1028px) {
  .modal-content, .modal-wrapper {

  max-width: calc(100vw - 4rem);
  max-height: calc(100vh - 4rem);
  }

  .modal-content {
    flex-flow: row wrap;
  }

  .modal-image img {

    max-width: calc(100vw - 4rem);
    max-height: calc(100vh - 4rem);
  }
}


</style>
