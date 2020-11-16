<template>
  <v-container>
    <div class="sala.codigo">
      <h1>{{sala.codigo}}</h1>
    </div>
    <Programacion />
  </v-container>
</template>

<script>
import Programacion from "../components/Cine/programacion";

export default {
  components: {
    Programacion
  },
  data() {
    sala: null;
  },
  computed() {
    let id = this.$route.params.id;
    this.sala = this.salas.find(s => (s.id = id));
    if (this.sala) {
    }
  }
};
</script>