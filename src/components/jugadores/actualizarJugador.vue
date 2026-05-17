<template>
  <div>
    <h2>Actualizar Jugador</h2>
    <div>
      <label>ID:</label>
      <label>{{ jugador._id }}</label>
    </div>
    <form>
      <label>Nombre</label>
      <input type="text" v-model="jugador.name" />

      <label>País</label>
      <input type="text" v-model="jugador.country" />

      <label>Edad</label>
      <input type="number" v-model="jugador.age" />

      <label>Último equipo inglés</label>
      <input type="text" v-model="jugador.lastEnglishTeam" />

      <label>¿Retirado?</label>
      <input type="checkbox" v-model="jugador.isRetired" />

      <label>Posición</label>
      <input type="text" v-model="jugador.position" />

      <label>¿Ganador de la FA Cup?</label>
      <input type="checkbox" v-model="jugador.isFACupWinner" />

      <label>Peso (kg)</label>
      <input type="number" v-model="jugador.weightInKilos" />

      <label>Altura (cm)</label>
      <input type="number" v-model="jugador.heightInCentimeters" />

      <button type="button" @click="actualizarJugador">Actualizar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import apiClient from "../../axios";

const router = useRouter();
const route = useRoute();

const jugador = ref({
  _id: "",
  name: "",
  country: "",
  age: 0,
  lastEnglishTeam: "",
  isRetired: false,
  position: "",
  isFACupWinner: false,
  weightInKilos: 0,
  heightInCentimeters: 0,
});

function obtenerJugador() {
  const id = route.params.id;
  apiClient
    .get(`/player/${id}/get`)
    .then((response) => {
      jugador.value = response.data;
    })
    .catch((error) => {
      console.error("Error al obtener jugador:", error);
    });
}

function actualizarJugador() {
  const id = route.params.id;
  apiClient
    .put(`/player/${id}/updated`, jugador.value)
    .then((response) => {
      if (response.status === 200) {
        router.push("/jugador/list");
      }
    })
    .catch((error) => {
      console.error("Error al actualizar jugador:", error);
    });
}

onMounted(() => {
  obtenerJugador();
});
</script>
