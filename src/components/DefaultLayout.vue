<template>
  <div class="">
    <NavBar />
    <div class="min-h-full bg-gray-100">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
</script>
