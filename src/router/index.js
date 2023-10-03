import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import IngredientsView from '../views/IngredientsView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: IngredientsView
      },
      {
        path: '/by-ingredient/:ingredient',
        name: 'byIngredient',
        component: MealsByIngredient
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      }
    ]
  },
  {
    path: '/auth',
    component: GuestLayout

    /**
     * 멀티 레이아웃을 위함 -> Auth 로 나눌 수 있음
     */
    // children: [
    //   {
    //     path: '/by-name/:name?',
    //     name: 'byName',
    //     component: MealsByName
    //   }
    // ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
