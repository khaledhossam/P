<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/products">Products</b-nav-item>
          <b-nav-item to="/products/add">Add Product</b-nav-item>
          <b-nav-item @click="logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import Cookie from "js-cookie";

export default {
  methods: {
    logout() {
      Cookie.remove("user");
      Cookie.remove("access");
      this.$router.push("/");
    },
  },
};
</script>
