<template>
  <v-container>
    <ListadoIngresos @mostrar="dialogoCrear" />

    <v-dialog v-model="dialog" max-width="800px" persistent>
      <v-card>
        <v-toolbar flat dark color="cine">
          <v-card-title>
            <span class="headline">Nuevo Ingreso</span>
          </v-card-title>
        </v-toolbar>
        <v-card-text>
          <DialogoIngresos :dialog="dialog" />
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue-grey" text @click="dialog=false">Cancelar</v-btn>
          <v-btn color="blue darken-1" text>Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ListadoIngresos from "../components/Cine/ingresos";
import DialogoIngresos from "../components/Cine/formulario-ingreso";

export default {
  components: {
    ListadoIngresos,
    DialogoIngresos
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    dialogoCrear() {
      this.dialog = true;
    }
  }
};
</script>
