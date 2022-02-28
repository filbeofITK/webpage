<template lang="html">

  <div class="container border position-fixed top-50 start-50 translate-middle">
    <div class="row">
      <div class="col-12">
        <DataCard />
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import DataCard from "@/components/DataCard.vue"
export default {
  name: 'HomeView',
  components: {
    DataCard,
  }
}
</script>
