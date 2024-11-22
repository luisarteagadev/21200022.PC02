<template>
  <h6>Filtros</h6>
  <div class="category-filter">
    <q-form class="q-gutter-md q-px-md">
      <!-- Idioma -->
      <q-select
        label="Idioma"
        v-model="idiomaSelected"
        :options="idiomas"
        option-value="id"
        option-label="description"
        filled
        dense
        clearable
        @update:model-value="onChangeIdioma"
      />

      <!-- Ordenar -->
      <q-select
        label="Ordenar por popularidad"
        v-model="ordenSelected"
        :options="orden"
        option-value="id"
        option-label="description"
        filled
        dense
        clearable
        @update:model-value="onChangeOrdenar"
      />

      <!-- Página -->
      <q-input
        v-model="filters.page"
        type="number"
        label="Página"
        :min="1"
        filled
        dense
        clearable
      />

      <!-- Contenido adulto -->
      <q-checkbox
        v-model="filters.include_adult"
        label="Mostrar contenido adulto"
        left-label
      />

      <!-- Botón de búsqueda -->
      <q-btn
        label="Buscar"
        color="primary"
        type="submit"
        class="full-width"
        icon="search"
        @click="fetchMovies"
      />
    </q-form>
  </div>
</template>

<style></style>

<script>
export default {
  name: "ProductFilter",
  emits: ["categoriaCambiada"],
  data() {
    return {
      orden: ["Ascendente", "Descendente"],
      idiomas: ["Español", "Ingles"],
      idiomaSelected: "Ingles",
      ordenSelected: "Descendente",
      filters: {
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: false,
        page: 1,
      },
    };
  },
  methods: {
    onChangeIdioma(value) {
      if (value == "Español") {
        this.filters.language = "es-PE";
      }
      if (value == "Ingles") {
        this.filters.language = "en-US";
      }
      console.log(
        "El valor seleccionado del idioma es: " + this.filters.language
      );

      // this.$emit("categoriaCambiada", value.id);
    },
    onChangeOrdenar(value) {
      if (value == "Ascendente") {
        this.filters.sort_by = "popularity.asc";
      }
      if (value == "Descendente") {
        this.filters.sort_by = "popularity.desc";
      }
      console.log(
        "El valor seleccionado de la popularidad es: " + this.filters.sort_by
      );
    },
    fetchMovies() {
      if (this.filters.page == null) {
        this.filters.page = 1;
      }
      this.$emit("filtrosSeleccionados", this.filters);
    },
  },
};
</script>
