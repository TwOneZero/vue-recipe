<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">All Ingredients</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'
import axiosClient from '../axiosClient'

const ingredients = ref([])
const router = useRouter()
const keyword = ref('')

const computedIngredients = computed(() => {
  // eslint-disable-next-line vue/no-ref-as-operand
  if ((keyword.value === '') & !computedIngredients) return ingredients
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
})

const openIngredient = (ingredient) => {
  // store.commit('setIngredient', ingredient)
  router.push({
    name: 'byIngredient',
    params: { ingredient: ingredient.strIngredient }
  })
}

onMounted(() => {
  axiosClient.get('list.php?i=list').then(({ data }) => {
    ingredients.value = data.meals
  })
})
</script>

<style scoped></style>
