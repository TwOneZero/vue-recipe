import axiosClient from '../axiosClient'
export default {
  searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
  },

  searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
      commit('setMealsByLetter', data.meals)
    })
  },

  searchMealsByIngredient({ commit }, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
      commit('setMealsByIngredient', data.meals)
    })
  }
}
