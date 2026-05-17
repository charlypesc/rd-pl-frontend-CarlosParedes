<template>
  <div>
    <h2>Listado de Jugadores</h2>
    <p v-if="jugadores.length === 0">Cargando registros…</p>
    <table v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>País</th>
          <th>Edad</th>
          <th>Último equipo</th>
          <th>Retirado</th>
          <th>Posición</th>
          <th>FA Cup</th>
          <th>Peso (kg)</th>
          <th>Altura (cm)</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="j in jugadores" :key="j._id">
          <td>{{ j._id }}</td>
          <td>{{ j.name }}</td>
          <td>{{ j.country }}</td>
          <td>{{ j.age }}</td>
          <td>{{ j.lastEnglishTeam }}</td>
          <td>{{ j.isRetired ? "Sí" : "No" }}</td>
          <td>{{ j.position }}</td>
          <td>{{ j.isFACupWinner ? "Sí" : "No" }}</td>
          <td>{{ j.weightInKilos }}</td>
          <td>{{ j.heightInCentimeters }}</td>
          <td>
            <button @click="eliminarJugador(j._id)">Eliminar</button>
            <button @click="router.push(`/player/${j._id}/update/`)">
              Actualizar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import apiClient from "../../axios";

const router = useRouter();
const jugadores = ref([]);

function listarJugadores() {
  apiClient
    .get("/players")
    .then((response) => {
      jugadores.value = response.data;
    })
    .catch((error) => {
      console.error("Error al listar jugadores:", error);
    });
}

function eliminarJugador(id) {
  apiClient
    .delete(`/player/${id}/delete`)
    .then((response) => {
      if (response.status === 200) {
        listarJugadores();
      }
    })
    .catch((error) => {
      console.error("Error al eliminar jugador:", error);
    });
}

onMounted(() => {
  listarJugadores();
});
</script>
