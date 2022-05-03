<template>
  <div class="input-group bg-dark">
    <input type="search" v-model="searchATitle"
    class="form-control rounded bg-dark text-white" placeholder="Search article by title" />
    <button type="button" @click="searchArticleByTitle" class="btn rounded btn-dark">Keresés</button>
    <input type="search" v-model="searchBTitle"
    class="form-control rounded bg-dark text-white" placeholder="Search by biomarker name" />
    <button type="button" @click="searchBiomarkerByName" class="btn rounded btn-dark">Keresés</button>
  </div>

</template>

<script>
import  store  from "@/store/index.js"

  export default{
    name: "SearchBar",
    props: [],
    data () {
      return {
        extended: false,
        searchATitle: "",
        searchBTitle: ""
      }
    },
    methods:{
      toggleBar(){
        this.extended = !this.extended
      },
      searchArticleByTitle(){
        if ("" === this.searchATitle) {
          store.dispatch("dummyStartupLoad")
        }else {
          store.dispatch("dummySearchArticleByTitle",this.searchATitle)
        }
      },
      searchBiomarkerByName(){
        if ("" === this.searchBTitle) {
          store.dispatch("dummyStartupLoad")
        }else {
          store.dispatch("dummySearchArticleByTitle",this.searchBTitle)
        }

      }
    }
  }
</script>
