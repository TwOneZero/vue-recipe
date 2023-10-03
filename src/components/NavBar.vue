<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link class="px-5 inline-flex h-full items-center" :to="{ name: 'home' }">
      Home
    </router-link>
    <div class="flex gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
      >
        Meals By Name
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
      >
        Meals By Letter
      </router-link>
      <!-- <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
      >
        Meals By Ingredents
      </router-link> -->
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-purple-100"
      >
        All Ingredients
      </router-link>
    </div>
  </header>
</template>
