<template>
  <div id="App">
    <Header />
    <div id="page-container">
      <div id="content-wrap">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template> 
 
<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script> 
 
<style>
#App {
  max-width: 1440px;
  margin: auto;
  font-family: "Poppins", sans-serif;
}
#page-container {
  position: relative;
}
#content-wrap {
  padding-bottom: auto;
}
</style>