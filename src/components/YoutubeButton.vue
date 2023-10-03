<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 bg-red-200 hover:bg-red-400 text-red-500 hover:text-white transition-colors"
    ><slot>Youtube</slot></a
  >
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>
