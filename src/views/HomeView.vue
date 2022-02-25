<template>
  <!-- Kartyak -->
  <div class="container border position-fixed top-50 start-50 translate-middle">
    <div class="row">
      <div class="col-12">
        <div class="card"> <!-- Ez kikerül cutom componentnek és v forral végigiterálom -->
          <div class="card-body">
            <h5 class="card-title">Cím</h5>
            <p calss="card-text"> Absztrakt.</p>
            <!--Kell: cim Absztrakt eleje datum -->
            <!--Hower eseten megno hogy latsszon a teljes absztrakt  -->
            <!--a szerző neve és egy link a megnyitásra -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>
