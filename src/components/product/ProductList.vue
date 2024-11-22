<template>
  <h5 class="text-h5 text-center q-mb-md">Movies</h5>
  <div class="product-list">
    <div class="product-grid">
      <div class="product-item" v-for="item in movies" :key="item.id">
        <ProductItem :movie="item" />
      </div>
    </div>
  </div>
</template>

<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>

<script>
import ProductItem from "src/components/product/ProductItem.vue";
export default {
  name: "ProductList",
  components: { ProductItem },
  props: {
    filtro: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.cargarMovies();
  },
  watch: {
    filtro: {
      handler(newFiltro, oldFiltro) {
        console.log(this.filtro);
        this.cargarMovies();
      },
      deep: true,
    },
  },
  methods: {
    cargarMovies() {
      console.log("filtro", this.filtro);
      let endpointURL = "/3/discover/movie";
      let TOKEN =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOThmMTk0ZWJhMGRkMzJjZjA0ZmQyMTE2OGQzODQyZiIsIm5iZiI6MTczMjI4MTE2Ni45MjE5MDIsInN1YiI6IjY3NDAxMmY2MzJhOWFhZjQzZDk2NzYzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amd-WNtZOtylTIfHkOV5rKZRJtueE-np3iZSmSkZJLk";
      let params = {
        include_adult: false,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
      };
      if (this.filtro != null) {
        params.include_adult = this.filtro.include_adult;
        params.page = this.filtro.page;
        params.language = this.filtro.language;
        params.sort_by = this.filtro.sort_by;
      }
      this.$api2
        .get(endpointURL, {
          headers: {
            Authorization: "Bearer " + TOKEN,
            accept: "application/json",
          },
          params,
        })
        .then((response) => {
          this.movies = response.data.results;
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener películas:", error);
        });
    },
  },
};
</script>
