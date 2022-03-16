<template>
  <nav class="navbar fixed-top nav-pills navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
        </ul>
      </div>
      <a class="nav-link navbar-brand disabled" href="#" tabindex="-1" aria-disabled="true">Preeclampsia adatbázis</a>
    </div>
  </nav>
  <router-view/>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  padding-bottom: 80px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  padding-top: 200px;
}

</style>

<script>
import  store  from "@/store/index.js"
export default {
  name: 'App',
  created: function (){
    store.dispatch("dummyStartupLoad")
  }
}

</script>
