import { createStore } from "vuex";

const databaseConnection = "http://localhost:3000/";

export default createStore({
  state: {
    Products: null,
    Product: null,
  },
  getters: {},
  mutations: {
    setProducts: (state, Products) => {
      state.Products = Products;
    },
    setProduct: (state, Product) => {
      state.Product = Product;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch(`${databaseConnection}Products`)
        .then((res) => res.json())
        .then((Products) => context.commit("setProducts", Products));
    },
    getProduct: async (context, id) => {
      fetch(`${databaseConnection}Products/` + id)
        .then((res) => res.json())
        .then((Product) => context.commit("setProduct", Product));
    },
  },
  modules: {},
});
