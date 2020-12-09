<template>
  <b-container>
    <div v-for="(product, index) in products" :key="index" class="product mt-5">
      <b-row no-gutters>
        <b-col md="4">
          <div class="product_img">
            <b-img :src="product.image"></b-img>
          </div>
        </b-col>

        <b-col md="8">
          <div class="product_body">
            <h5>{{ product.name }}</h5>
            <p>{{ product.description }}</p>
            <b-button
              :to="'/products/edit/' + product.id"
              type="submit"
              variant="primary"
              size="sm"
              >Edit</b-button
            >
            <b-button
              @click="deleteProduct(product.id, index)"
              type="submit"
              variant="primary"
              size="sm"
              >Delete</b-button
            >
            <div class="price text-right">
              <span>${{ product.price }}</span>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import Cookie from "js-cookie";

export default {
  data() {
    return {
      products: [],
      user: {}
    };
  },

  async fetch() {
    this.user = JSON.parse(Cookie.get("user"));

    console.log(this.$store);
    this.$fire.firestore
      .collection(`products/${this.user.uid}/products`)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.products.push({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            image: doc.data().image
          });
        });
        console.log(this.products);
      });
  },
  methods: {
    deleteProduct(key, index) {
      console.log(key);
      this.$fire.firestore
        .collection(`products/${this.user.uid}/products`)
        .doc(key)
        .delete()
        .then(() => {
          this.products.splice(index, 1);
          console.log("Document successfully deleted!");
        })
        .catch(error => {
          console.error("Error removing document: ", error);
        });
    }
  }
};
</script>

<style scoped>
.product_body {
  padding-top: 2rem;
  padding-left: 1rem;
  height: 100%;
}
h5 {
  font-size: 1.5em;
  color: #fff;
}
p {
  color: #ccc;
}
span {
  color: #1b9e98;
}
.btn {
  padding: 0.3rem 1.5rem;
}
.product_img img {
  height: 210px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 1rem;
}
</style>
