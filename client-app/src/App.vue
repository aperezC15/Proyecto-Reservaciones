<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab text dark @click="irHome">
              <v-icon medium v-bind="attrs" v-on="on">home</v-icon>
            </v-btn>
          </template>
          <span>Menú Principal</span>
        </v-tooltip>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-title class="d-flex align-center">Reservaciones</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <!-- <Opciones /> -->
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  methods: {
    irHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
