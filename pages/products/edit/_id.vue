<template>
  <b-container>
    <div class="login text-center">
      <b-form @submit.prevent="editProduct">
        <b-img :src="this.image" width="200px"></b-img>
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
        <b-button type="submit" variant="primary">Save Changes</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import Cookie from "js-cookie";

export default {
  data() {
    return {
      user: {},
      name: "",
      description: "",
      price: "",
      image: "",
      file: "",
    };
  },
  async fetch() {
    this.user = JSON.parse(Cookie.get("user"));
    console.log(this.user);
    await this.getProductData();
  },
  methods: {
    async handleUpload(e) {
      this.file = e.target.files[0];
      console.log(this.file);
      await this.$fire.storage
        .ref("'images/'+" + this.file.lastModified)
        .put(this.file, {
          contentType: this.file.type,
        })
        .then((res) => {
          return res.ref.getDownloadURL().then((url) => {
            this.file = url;
            this.image = url;
            console.log(this.file);
          });
        });
    },
    async getProductData() {
      await this.$fire.firestore
        .collection(`products/${this.user.uid}/products/`)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            (this.id = doc.id),
              (this.name = doc.data().name),
              (this.description = doc.data().description),
              (this.price = doc.data().price);
            this.image = doc.data().image;
          });
          console.log(this.name);
        });
    },
    async editProduct() {
      this.$fire.firestore
        .collection(
          `products/${this.user.uid}/products`
        )
        .doc(this.$route.params.id)
        .update({
          name: this.name,
          description: this.description,
          price: this.price,
          image: this.file,
        })
        .then(() => {
          console.log("Document Edit successfully!");
        })
        .catch((error) => {
          console.error("Error Edit document: ", error);
        });
      this.$router.push("/products");
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
