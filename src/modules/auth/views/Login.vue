<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title >Iniciar sesión</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field placeholder="Correo" type="email" v-model="form.email" outlined></v-text-field>
              <v-text-field v-model="form.password" type="password" placeholder="Usuario" outlined></v-text-field>
              <v-btn :loading="loader" type="submit" color="primary">Iniciar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login.vue",
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    loader: false,
  }),
  created() {
    if (localStorage.getItem('token')) {
      this.$router.push({name: 'main'});
    }
  },
  methods: {
    login() {
      this.loader = true;
      this.$http.post('login', this.form).then(async (res) => {
        localStorage.setItem('token', res.data.accessToken);
        await this.$store.dispatch('getUser');
        await this.$router.push({name: 'main'});
      }).finally(() => this.loader = false)
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
  }
  .row {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
