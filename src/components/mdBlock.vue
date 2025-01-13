<template>
  <section class="md" v-html="md.render(
    ($slots.default()[0].children)
    //  .replace(/^ +/gm, '')
  )" />
</template>

<script setup>
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  breaks: true
});
</script>
