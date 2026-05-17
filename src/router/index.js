import { createRouter, createWebHistory } from 'vue-router'
import ListarJugadores from './../components/jugadores/ListarJugadores.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
    },
    {
      path: '/jugador/add',
      component: () => import('../components/jugadores/AgregarJugador.vue'), 
    },
    {
      path: '/jugador/list',
      component: ListarJugadores, // estática
    },
    {
      path: '/jugador/update/:id',
      component: () => import('../components/jugadores/ActualizarJugador.vue'), 
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../NotFound.vue'),
    },
  ],
})

export default router
