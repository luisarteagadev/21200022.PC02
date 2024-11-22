<template>
  <header>
    <div class="container">
      <div id="logo">SHOWMOVIES</div>
    </div>
  </header>

  <section class="content">
    <div class="container" style="margin-top: 10px">
      <h1>Welcome TO SHOWMOVIES!</h1>
      <p>Discover the best movies at your fingertips</p>
    </div>
    <div class="container" style="margin-top: 10px">
      <div class="product-page">
        <div class="product-filter q-ml-md q-mr-xl">
          <ProductFilter @filtrosSeleccionados="actualizarMovies" />
        </div>
        <div class="product-list">
          <ProductList :filtro="filtrosSeleccionados" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

#logo {
  float: left;
  font-size: 1.5em;
}

.content {
  padding: 50px 0;
  text-align: center;
}

.product-page {
  display: flex;
  justify-content: space-between;
}

.product-filter {
  width: 25%;
}

.product-list {
  width: 75%;
}
</style>

<script>
import ProductFilter from "src/components/product/ProductFilter.vue";
import ProductList from "src/components/product/ProductList.vue";
export default {
  name: "ProductPage",
  components: { ProductFilter, ProductList },

  data() {
    return {
      filtrosSeleccionados: null,
    };
  },
  methods: {
    actualizarMovies(filtro) {
      this.filtrosSeleccionados = filtro;
    },
  },
};
</script>
