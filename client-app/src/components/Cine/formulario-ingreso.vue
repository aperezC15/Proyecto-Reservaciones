<template>
  <v-container>
    <v-row dense>
          <v-col>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" lg="6" md="6" sm="12">
                    <v-menu
                      ref="menu1"
                      v-model="menu1"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="dateFormatted"
                          label="Fecha de Factura"
                          hint="DD/MM/AAAA"
                          persistent-hint
                          outlined
                          prepend-inner-icon="today"
                          @blur="date = parseDate(dateFormatted)"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        locale="gt"
                        first-day-of-week="1"
                        v-model="date"
                        no-title
                        @input="menu1 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" lg="12" md="12" sm="12">
                    <v-text-field label="Cliente" outlined prepend-inner-icon="person" required></v-text-field>
                  </v-col>

                  <v-col cols="12" lg="6" md="6" sm="12">
                    <v-text-field label="DPI" outlined prepend-inner-icon="call_to_action" required></v-text-field>
                  </v-col>

                  <v-col cols="12" lg="6" md="6" sm="12">
                    <v-text-field label="Temperatura" outlined prepend-inner-icon="touch_app" required></v-text-field>
                  </v-col>

                  <v-col cols="12" lg="8" md="8" sm="12">
                    <v-select
                      :items="pelicula"
                      label="Película"
                      outlined
                      prepend-inner-icon="movie"
                      no-data-text="No hay películas"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" lg="4" md="4" sm="12">
                    <v-text-field label="Precio" outlined prepend-inner-icon="money" required></v-text-field>
                  </v-col>
                  
                  <v-col cols="12" lg="6" md="6" sm="12">
                    <v-select
                      :items="horario"
                      label="Horario"
                      outlined
                      prepend-inner-icon="access_time"
                      no-data-text="No hay películas"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" lg="6" md="6" sm="12">
                    <v-select
                      :items="sala"
                      label="Sala"
                      outlined
                      prepend-inner-icon="king_bed"
                      no-data-text="No hay salas"
                    ></v-select>
                  </v-col>
                  
                </v-row>

              </v-container>
            </v-form>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>
var fecha = new Date();
var hoy = String(
  fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear()
);

export default {
  props: ["dialog"],
  data: () => ({
    valid: false,
    menu1: false,
    select: null,
    pelicula: ["La momia regresa", "Jhon Wick", "Terminator: Destino Oculto"],
    horario: ["10:00 AM", "1:00 PM", "4:00 PM"],
    sala: ["1", "2", "3"],
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: hoy,
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
