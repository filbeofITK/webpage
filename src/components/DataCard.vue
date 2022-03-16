<template lang="html">
  <div class="card text-white bg-dark mb-3"> <!-- Ez kikerül cutom componentnek és v forral végigiterálom -->
    <div class="card-body">
      <div  @click="toggleCard" class="row no-gutters">

        <!--Passive state -->
        <template v-if="!this.activity">
          <div  class="col sm-2">
          <h4> {{ incomingData.title }} </h4>
          </div>
          <div class="col sm-8">
            {{ incomingData.abst }}
          </div>
          <div class="col sm-2">
            {{ incomingData.date }}
          </div>
        </template>


        <!--Active state -->
        <template v-else>
          <div class="col sm-2">
            <div class="row">
              <h4>{{ incomingData.title }}</h4>
            </div>
            <div class="row">
              <h4>{{ incomingData.author }}</h4>
            </div>
            <div class="row">
              <h4>{{ incomingData.source }}</h4>
            </div>
            <div class="row">
              <router-link :to="{ name: 'about', params: {instanceID: incomingData.id} }">
                <button class="btn btn-primary">Open Full</button>
              </router-link>
            </div>

          </div>
          <div  class="col sm-8">
            {{ incomingData.abst }}
          </div>
        </template>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DataCard',
  props: ["incomingData"],
  data: function () {
    return {
      activity: false
    }
  },
  methods:{
    toggleCard(){
      this.activity = !this.activity
    }
  }
}
</script>

<style lang="css" scoped>
</style>
