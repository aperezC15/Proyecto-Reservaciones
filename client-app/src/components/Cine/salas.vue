<template>
  <v-container>
    <v-flex xs="12" sm="6" lg="3" v-for="sala in 3" :key="sala">
      <v-card class="mx-auto my-12" max-width="400" max-height="400">
        <v-toolbar flat dark color="primary">
          <v-card-title>SALA</v-card-title>
          <v-spacer></v-spacer>
          <v-icon x-large>movie_filter</v-icon>
        </v-toolbar>

        <v-card-text class="sala-codigo d-flex justify-end"></v-card-text>
      </v-card>

      <v-card-actions class="d-flex justify-end">
        <v-btn color="light-blue darken-3" dark :to="{name: 'salair'}">
          IR
          <v-icon medium>call_made</v-icon>
        </v-btn>
      </v-card-actions>
    </v-flex>

    <v-btn color="primary" dark @click="irHome">
      <v-icon medium>keyboard_return</v-icon>Regresar
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  props: ["dialog"],
  components: {},
  methods: {
    irPrograUno() {
      this.$router.push({ name: "Programacion1" });
    },
    irHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>