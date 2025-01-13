<template>
  <nav id="breadcrumb">
    <transition-group name="crumb">
      <router-link v-if="$route.meta.parent" :key="'crumb-' + $route.meta.parent" :to="{name: $route.meta.parent}">
        {{ $route.meta.parent }}
      </router-link>
      <router-link v-for="route in $route.matched" :key="'crumb-' + route.name" :to="route.path">
        {{ route.name }}
      </router-link>
    </transition-group>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
#breadcrumb {
  margin: 1rem 0 0 2rem;
  width: 100%;
  line-height: 0;
}

#breadcrumb a {
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
  line-height: 100%;
  white-space: nowrap;
}

#breadcrumb a:not(.crumb-leave-active) + a:before {
  content: " / ";
  color: var(--text);
  padding: 0 0.5rem 0 0;
  transition: var(--trans);
}

#breadcrumb a.crumb-enter-active,
#breadcrumb a.crumb-leave-active {
  transition: var(--trans);
}

#breadcrumb a.crumb-enter-from,
#breadcrumb a.crumb-leave-to {
  opacity: 0;
  max-width: 0px;
}


</style>
