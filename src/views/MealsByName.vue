<template>
  <div class="p-6 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search For Meals"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import store from '../store'
import YoutubeButton from '../components/YoutubeButton.vue'
import MealItem from '../components/MealItem.vue'
import router from '../router'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

const searchMeals = () => {
  if (keyword.value) {
    router.push({
      name: 'byName',
      params: { name: keyword.value }
    })
    store.dispatch('searchMeals', keyword.value)
  } else {
    store.commit('setSearchedMeals', [])
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>

<style scoped></style>
