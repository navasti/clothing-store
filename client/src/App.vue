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
  font-family: "Arial", "sans-serif";
  body{
    #app{
      overflow-x: hidden;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
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
  .create-account,
  .forgotten-password,
  .login{
    border: 1px solid black;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    h1{text-align: center; font-size: 3rem;}
    form{
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
      label{font-size: 2rem; padding: 1.5rem 0 1rem 0;}
      input{font-size: 1.8rem; padding: .5rem 1rem;}
      button{
        margin: 1.5rem 0; 
        padding: 0.5rem 1rem;
        font-size: 2rem;
        background-color: #fff;
        border: 1px solid #aaa;
        }
    }
  }
</style>
