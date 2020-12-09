<template>
  <b-container>
    <div class="login text-center">
      <b-form @submit.prevent="addProduct">
        <b-form-group id="form-product-name">
          <b-form-input
            id="product-name"
            v-model="name"
            type="text"
            required
            placeholder="Enter Product Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="form-product-desc">
          <b-form-input
            id="product-desc"
            v-model="description"
            type="text"
            required
            placeholder="Enter Product Description"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="form-product-desc">
          <b-form-input
            id="product-price"
            v-model="price"
            type="text"
            required
            placeholder="Enter Product Price"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="form-product-img">
          <b-form-file
            placeholder="Choose a Image or drop it here..."
            drop-placeholder="Drop Image here..."
            @change="handleUpload($event)"
            required
          ></b-form-file>
        </b-form-group>
        <b-button type="submit" variant="primary">Add product</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import Cookie from "js-cookie";

export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      file: "",
      user: {}
    };
  },
  async fetch() {
    this.user = JSON.parse(Cookie.get("user"));
  },
  methods: {
    async handleUpload(e) {
      this.file = e.target.files[0];
      console.log(this.file);
      await this.$fire.storage
        .ref("'images/'+" + this.file.lastModified)
        .put(this.file, {
          contentType: this.file.type
        })
        .then(res => {
          return res.ref.getDownloadURL().then(url => {
            this.file = url;
            console.log(this.file);
          });
        });
    },
    async addProduct() {
      const messageRef = this.$fire.firestore.collection(
        `products/${this.user.uid}/products`
      );
      try {
        await messageRef.add({
          name: this.name,
          price: this.price,
          description: this.description,
          image: this.file
        });
      } catch (e) {
        console.log(e);
        return;
      }
      this.$bvToast.toast("Product added successfuly", {
        variant: "success",
        solid: true
      });
      this.$router.push("/products");
    }
  }
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
