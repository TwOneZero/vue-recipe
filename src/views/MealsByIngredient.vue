<template>
  <MealsC :meals="meals" />
</template>

<script setup>
import MealsC from '../components/MealsC.vue'
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<style scoped></style>
