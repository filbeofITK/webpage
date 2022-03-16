<template>
  <div class="row">
    <div class="col">
      <h1>{{ $store.state.openInstances[this.idx].title }}</h1>
    </div>
  </div>

</template>


<script>
import  store  from "@/store/index.js"

export default {
  name: 'AboutView',
  props: ['instanceID'],
  data: function () {
    return {
      idx: 0
    }
  },
  beforeMount: function (){
    store.dispatch("dummyLoadByID",this.instanceID).then((idx) => {this.idx = idx}).catch()
  }
}


</script>
