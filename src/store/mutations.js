export default {
  setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
  },
  setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || []
  },
  setMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals || []
  },
  setIngredient(state, ingredient) {
    state.ingredient = ingredient
  }
}
