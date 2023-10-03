<template>
  <div class="max-w-[1000px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full object-cover" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div class="flex flex-col items-start">
        <strong class="font-bold">Category</strong>
        {{ meal.strCategory }}
      </div>
      <div class="flex flex-col items-start">
        <strong class="font-bold">Area</strong>
        {{ meal.strArea }}
      </div>
      <div class="flex flex-col items-start">
        <strong class="font-bold">Tags</strong>
        {{ meal.strTags }}
      </div>
    </div>
    <div class="container border-2 rounded border-gray-400">
      <p>{{ meal.strInstructions }}</p>
    </div>
    <div class="grid grid-cols1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, index) in new Array(20)" :key="index">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, index) in new Array(20)" :key="index">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="m-4">
        <YoutubeButton :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent hover:bg-orange-200 text-orange-500 hover:text-orange-600 transition-colors"
          >See other recipes</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
import YoutubeButton from '../components/YoutubeButton.vue'

const route = useRoute()
const meal = ref({})

onMounted(() => {
  axiosClient.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {}
  })
})
</script>
