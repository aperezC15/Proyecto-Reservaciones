<template>
  <v-container>
    <v-row dense>
      <v-col cols="4" lg="4" md="6" sm="12">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img height="250" :src="require('../../public/img/restaurante.jpg')" />

          <v-card-title>Las Tertulias</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                v-model="ratcomida"
                background-color="secondary"
                half-increments
                empty-icon="star_outline"
                full-icon="star_rate"
                half-icon="star_half"
                color="primary"
                large
                readonly
              ></v-rating>

              <span class="grey--text caption mr-2">({{ ratcomida }})</span>
            </v-row>

            <div>Variedad de platillos y bebidas mexicanas y exquisitos postres</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Horarios</v-card-title>

          <v-card-text>
            <v-chip-group active-class="deep-purple accent-4 white--text" column>
              <v-chip>10:00AM</v-chip>

              <v-chip>2:00PM</v-chip>

              <v-chip>8:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" dark>
              IR
              <v-icon medium>call_made</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!--Cine-->
      <v-col cols="4" lg="4" md="6" sm="12">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img height="250" :src="require('../../public/img/cine.jpg')" />

          <v-card-title>AlbaCinema</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                v-model="ratcine"
                half-increments
                background-color="secondary"
                empty-icon="star_outline"
                full-icon="star_rate"
                half-icon="star_half"
                color="primary"
                large
                readonly
              ></v-rating>

              <span class="grey--text caption mr-2">({{ ratcine }})</span>
            </v-row>

            <div>La mejor resolución, butacas reservables y una experiencia inolvidable</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Horarios</v-card-title>

          <v-card-text>
            <v-chip-group active-class="deep-purple accent-4 white--text" column>
              <v-chip>11:00AM</v-chip>

              <v-chip>1:30PM</v-chip>

              <v-chip>3:30PM</v-chip>

              <v-chip>5:30PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" dark @click="irSalas">
              IR
              <v-icon medium>call_made</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!--Gimnasio-->
      <v-col cols="4" lg="4" md="6" sm="12">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img height="250" :src="require('../../public/img/gimnasio.jpg')" />

          <v-card-title>Gold Gym</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                v-model="ratgym"
                half-increments
                background-color="secondary"
                empty-icon="star_outline"
                full-icon="star_rate"
                half-icon="star_half"
                color="primary"
                large
                readonly
              ></v-rating>

              <span class="grey--text caption mr-2">({{ ratgym }})</span>
            </v-row>

            <div>Contamos con los mejores instructores</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Horarios</v-card-title>

          <v-card-text>
            <v-chip-group active-class="deep-purple accent-4 white--text" column>
              <v-chip>6:00AM</v-chip>

              <v-chip>9:00AM</v-chip>

              <v-chip>12:00PM</v-chip>

              <v-chip>3:00PM</v-chip>

              <v-chip>6:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" dark>
              IR
              <v-icon medium>call_made</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ratcomida: 4,
    ratcine: 4.5,
    ratgym: 4.5
  }),
  props: ["dialog"],
  components: {},
  methods: {
    irSalas() {
      this.$router.push({ name: "Salas" });
    }
  }
};
</script>


