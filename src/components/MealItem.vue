<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl h-64 w-full object-cover" />
    </router-link>
    <div class="p-3">
      <h3 class="font-semibold mb-3">{{ meal.strMeal }}</h3>
      <p v-if="meal?.strInstructions" class="text-gray-600">
        {{ meal.strInstructions.slice(0, 100) }}...
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <span class="underline hover:text-gray-800 transition-colors">Read More</span>
        </router-link>
      </p>
      <div v-if="meal?.strYoutube" class="mt-3 flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue'

// -> props.meal
const { meal } = defineProps({
  meal: Object
})
</script>
