<template lang="html">

  <div class="container border">
    <div class="row">
      <div class="col-12">
        <SearchBar/>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-12">
        <DataCard v-for="(cardData,idx) in $store.state.cards"
        :key="idx"
        :incomingData="cardData" />
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import DataCard from "@/components/DataCard.vue"
import SearchBar from "@/components/SearchBar.vue"

export default {
  name: 'HomeView',
  components: {
    DataCard,
    SearchBar
  }
}

</script>
