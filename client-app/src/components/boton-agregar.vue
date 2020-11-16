 <template>
  <v-btn color="secondary" dark class="mb-1" @click="$emit('mostrar')">
    <v-icon class="mr-2">send</v-icon>
    {{nombreboton}}
  </v-btn>
</template>

 <script>
export default {
  props: ["nombreboton"]
};
</script>
