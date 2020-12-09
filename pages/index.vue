<template>
  <b-container>
    <div class="login text-center">
      <b-form @submit.prevent="login">
        <b-form-group id="form-email">
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="form-password">
          <b-form-input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  layout:'signIn',
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      var payload = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("login", payload)
        .then(() => {
          this.$bvToast.toast("Loged In successfully", {
            variant: "success",
            solid: true,
          });
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.login {
  position: relative;
  height: 100vh;
}
.login form {
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
