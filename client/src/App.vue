<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  font-family: "Roboto", "sans-serif";
}

// global products class
.products {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0;
    .item{
      width: 48%;
      p{font-size: 1.4rem;}
      span{font-size: 1.4rem;}
      img {width: 100%;}
    }
  }
</style>
