<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card class="mx-auto my-12" max-width="374">
          <v-toolbar flat dark color="primary">
            <v-card-title>SALA 1</v-card-title>
            <v-spacer></v-spacer>
            <v-icon x-large>movie_filter</v-icon>
          </v-toolbar>
          <v-card-actions class="d-flex justify-end">
            <v-btn color="light-blue darken-3" dark>
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
  data: () => ({}),
  props: ["dialog"],
  components: {},
  methods: {}
};
</script>