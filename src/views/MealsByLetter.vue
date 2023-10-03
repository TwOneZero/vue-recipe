<template>
  <div class="flex justify-center gap-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)
const route = useRoute()

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<style scoped></style>
