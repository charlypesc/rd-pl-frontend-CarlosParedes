<template>
  <div>
    <h2>Agregar Jugador</h2>
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

      <button type="button" @click="agregarJugador">Guardar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import apiClient from "../../axios";

const router = useRouter();

const jugador = ref({
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

function agregarJugador() {
  apiClient
    .post("/player", jugador.value)
    .then((response) => {
      if (response.status === 201) {
        jugador.value = {
          name: "",
          country: "",
          age: 0,
          lastEnglishTeam: "",
          isRetired: false,
          position: "",
          isFACupWinner: false,
          weightInKilos: 0,
          heightInCentimeters: 0,
        };
        router.push("/jugador/list");
      }
    })
    .catch((error) => {
      console.error("Error al agregar jugador:", error);
    });
}
</script>
