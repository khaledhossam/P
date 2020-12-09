<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>
<script>
export default {
  middleware: "auth-user",
};
</script>
<style>
body {
  background: #111;
}
.bg-info {
  background: transparent !important;
}
.navbar-dark .navbar-nav .nav-link {
  color: #1b9e98;
  font-size: 1.3rem;
}
.form-control {
  background: transparent;
  padding: 1.8rem 1rem;
  border: 1px solid #1b9e98;
  border-radius: 5rem;
  margin: 0.5rem 0;
}
.form-control:focus {
  background: transparent;
  outline: none;
  box-shadow: none;
  border-color: #1b9e98;
}
.btn {
  padding: 1rem 2rem;
  border-radius: 2rem;
  background: #1b9e98;
  border-color: #1b9e98;
}
.btn:hover {
  background: transparent;
  border-color: #1b9e98;
}
</style>
