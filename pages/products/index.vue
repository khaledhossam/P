<template>
  <b-container>
    <div v-for="(product, index) in products" :key="index" class="product mt-5">
      <b-card>
        <h5>{{ product.name }}</h5>
        <h5>{{ product.description }}</h5>
        <h5>{{ product.price }}</h5>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },

  async fetch() {
     console.log(this.$store);
    this.$fire.firestore
      .collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push(doc.data());
        });
        console.log(this.products);
      });
  },
};
</script>

<style scoped>
</style>