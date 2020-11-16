 <template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">SALA 1</h1>
        <v-card class="mx-auto my-auto">
          <v-toolbar flat dark color="cine">
            <v-card-title>Programación</v-card-title>
            <v-spacer></v-spacer>
            <v-icon x-large>movie</v-icon>
          </v-toolbar>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-col cols="3"></v-col>

              <v-col cols="3">
                <p class="font-weight-black text-center">Película</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-black text-center">Horario</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-black text-center">Fecha</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-black text-center">Precio</p>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-col cols="3">
                <v-avatar class="ma-3" size="125" tile>
                  <v-img height="250" :src="require('@/../public/img/lamomia.jpg')" />
                </v-avatar>
              </v-col>
              <v-col cols="3">
                <p class="font-weight-medium text-center">La Momia Regresa</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-medium text-center">10:00 AM</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-medium text-center">12/11/2020</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-medium text-center">Q 120.00</p>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-col cols="3">
                <v-avatar class="ma-3" size="125" tile>
                  <v-img height="250" :src="require('@/../public/img/jhon.jpg')" />
                </v-avatar>
              </v-col>
              <v-col cols="3">
                <p class="font-weight-medium text-center">Jhon Wick</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-medium text-center">12:00 PM</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-medium text-center">12/11/2020</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-medium text-center">Q 130.00</p>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            <v-row align="center" class="mx-0 mb-7">
              <v-col cols="3">
                <v-avatar class="ma-3" size="125" tile>
                  <v-img height="250" :src="require('@/../public/img/terminator.jpg')" />
                </v-avatar>
              </v-col>
              <v-col cols="3">
                <p class="font-weight-medium text-center">Terminator:Destino Oscuro</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-medium text-center">3:00 PM</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-medium text-center">12/11/2020</p>
              </v-col>

              <v-col cols="2">
                <p class="font-weight-medium text-center">Q 150.00</p>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="d-flex justify-end">
            <v-btn color="cine" dark @click="irIngresos">
              IR
              <v-icon medium>call_made</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-btn color="primary" dark @click="irSalas">
      <v-icon medium>keyboard_return</v-icon>Regresar a las salas
    </v-btn>
  </v-container>
</template>


<script>
export default {
  data: () => ({}),
  methods: {
    irSalas() {
      this.$router.push({ name: "Salas" });
    },
    irIngresos() {
      this.$router.push({ name: "Ingresos" });
    }
  }
};
</script>