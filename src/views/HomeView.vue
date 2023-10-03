<template>
  <div class="flex flex-col p-8">
    <div>
      <input
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search All Meals"
      />
    </div>
    <div class="flex justify-center flex-col items-center">
      <h1 class="font-bold text-lime-400 text-4xl pt-6">Today's Recipe!</h1>
      <div class="py-10 px-4">
        <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue'
import { onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'

const meals = ref([])

onMounted(() => {
  axiosClient.get('/random.php').then(({ data }) => {
    meals.value = data.meals
  })
})
</script>

<style scoped></style>
