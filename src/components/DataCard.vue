<template lang="html">
  <div class="card text-white bg-dark mb-3"> <!-- Ez kikerül cutom componentnek és v forral végigiterálom -->
    <div class="card-body">
      <div class="row no-gutters">
        <div class="col sm-2">
          Cím
        </div>
        <div class="col sm-8">
          Absztrakt.
        </div>
        <div class="col sm-2">
          Dátum
        </div>
      </div>
      <div class="row ">
        <div class="col sm-1">
          <router-link to="/about" class="btn btn-outline-secondary">Open</router-link>

        </div>
      </div>
      <!--Vuejs fogja fetölteni ezeket megfelelő adatokkal. -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataCard'
}
</script>

<style lang="css" scoped>
</style>
