 <template>
  <v-container>
    <v-toolbar flat dark color="cine">
      <v-card-title>Listado de Ingresos</v-card-title>
      <v-spacer></v-spacer>
      <v-icon x-large>person</v-icon>
    </v-toolbar>
    <div class="d-flex justify-end">
      <v-col cols="2">
        <v-text-field value="3" label="Número de asientos Libres" readonly></v-text-field>
      </v-col>
    </div>
    <v-col>
      <!--listar-->
      <v-col>
        <v-data-table
          :headers="headers"
          :search="search"
          :page.sync="pagina"
          :items-per-page="elementosPagina"
          @page-count="cantidadPagina = $event"
          class="elevation-1"
          hide-default-footer
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <div></div>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Buscar"
                single-line
                hide-details
              ></v-text-field>

              <v-divider class="mx-12" inset vertical></v-divider>
              <!--<v-spacer></v-spacer>-->
              <botonagregar nombreboton="Nuevo Ingreso" @mostrar="dialogoIngreso" />
            </v-toolbar>
          </template>

          <template v-slot:no-data>
            <h2>No hay datos ingresados</h2>
          </template>
          <template v-slot:no-results>
            <h2>No se encontraron coincidencias</h2>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination
            v-model="pagina"
            :length="cantidadPagina"
            prev-icon="navigate_before"
            next-icon="navigate_next"
          ></v-pagination>
        </div>
      </v-col>

      <v-btn color="primary" dark @click="irPrograUno">
        <v-icon medium>keyboard_return</v-icon>Regresar a la programación
      </v-btn>
    </v-col>
  </v-container>
</template>


<script>
import BotonAgregar from "../boton-agregar";

export default {
  components: {
    botonagregar: BotonAgregar
  },
  data: () => ({
    search: "",
    pagina: 1,
    cantidadPagina: 0,
    elementosPagina: 10,
    headers: [
      { text: "Cliente", value: "cliente" },
      { text: "DPI", value: "dpi" },
      { text: "No. de Asiento", value: "asiento", sortable: false },
      { text: "Temperatura", value: "temperatura", sortable: false }
    ]
  }),
  methods: {
    irSalas() {
      this.$router.push({ name: "Salas" });
    },
    irPrograUno() {
      this.$router.push({ name: "Programacion" });
    },
    dialogoIngreso() {
      this.$emit("mostrar");
    }
  }
};
</script>