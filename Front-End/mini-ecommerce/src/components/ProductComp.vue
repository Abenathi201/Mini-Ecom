<template>
  <div class="mb-3">
    <div class="products">
      <router-link
        class="text-decoration-none text-black"
        :to="{ name: 'product', params: { id: product.productID } }"
      >
        <img :src="item.image" :alt="item.name" />
        <div class="texts text-center px-5">
          <h3 class="fs-5">{{ item.name }}</h3>
          <p>Description: {{ item.desc }}</p>
          <p>Price: R {{ item.price }}</p>
        </div>
      </router-link>
    </div>
    <div class="d-flex justify-content-center">
      <button class="button">Add To Cart</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],

  created() {
    console.log(this.item);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap");
.products {
  border: solid lightgray 1px;
  font-family: montserrat;
  margin: 10px;
  box-shadow: 0.15rem 0.15rem black;
  width: 390px;
  overflow-y: hidden;
  height: 520px;
  margin-inline: 10px;
}
@media screen and (max-width: 430px) {
  .products {
    width: 300px;
  }
  img {
    width: 299px;
    height: 240px;
  }
}
@media screen and (max-width: 350px) {
  .products {
    width: 270px;
    height: 550px;
    margin-inline: 10px;
  }
  img {
    width: 300px;
    height: 150px;
  }
}
.button {
  width: 150px;
  height: 50px;
  /* margin-top: 5%;
    margin-bottom: 5%; */
  color: white;
  border: none;
  padding: 5px;
  background-color: black;
  font-weight: bold;
}
img {
  width: 388px;
  height: 340px;
}
.texts {
  min-width: 270px;
  min-height: 200px;
}
</style>