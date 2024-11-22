<template>
  <q-card class="product-card">
    <!-- <q-img :src="product.imageUrl" alt="Imagen del producto" /> -->
    <q-img
      :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
      :alt="movie.title"
    />
    <q-card-section>
      <div class="text-subtitle1 text-bold text-center">
        {{ movie.title }}
      </div>
      <div class="text-caption text-center">
        ⭐ {{ movie.vote_average }} / 🗳️ {{ movie.vote_count }}
      </div>
    </q-card-section>
  </q-card>
</template>

<style>
.product-card {
  width: 300px;
}

.product-card q-card-section {
  height: 100px;
  overflow: hidden;
}
</style>

<script>
export default {
  name: "ProductItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>
