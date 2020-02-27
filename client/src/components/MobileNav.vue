<template>
  <nav class="mobile-nav">
    <div class="hamburger" @click="toggleActive">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="managment">
      <router-link to="/cart">Cart</router-link>
      <router-link to="/login">Account</router-link>
      <p @click="expandSearcher">Search</p>
      <div class="menu" @click="toggleActive">
        <router-link to="/">Home</router-link>
        <router-link to="/cloths">Cloths</router-link>
        <router-link to="/sales">Sales</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="searcher">
      <input type="text">
      <router-link to="/search-results">Find</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MobileNav",
  methods: {
    toggleActive() {
      const menu = document.querySelector(".menu");
      const bars = document.querySelectorAll(".bar");
      menu.classList.toggle("active");
      bars.forEach(bar => bar.classList.toggle("active"));
    },
    expandSearcher(){
      const searcher = document.querySelector(".searcher");
      searcher.classList.toggle("active");
    }
  }
};
</script>

<style scoped lang="scss">
.mobile-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .searcher{
    &.active{
      transform: translate(0%, 100%) scale(1);
    }
    background-color: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    border: 1px solid #aaa;
    padding: .5rem;
    transform: translate(100%, 100%) scale(0);
    transition: .3s ease;
    input, a{font-size: 1.6rem; padding: .4rem .8rem;}
    input{width: 70%; border: 1px solid #555;}
    a{
      width: 30%; 
      display: block;
      text-transform: uppercase; 
      letter-spacing: 2px; 
      text-decoration: none;
      background-color: #555;
      color: #fff;
      text-align: center;
      line-height: 3rem;
      }
  }
  .hamburger {
    display: flex;
    position: relative;
    z-index: 999;
    flex-direction: column;
    width: 5.5rem;
    padding: 1.5rem 1rem;
    .bar {
      &.active {
        background-color: #fff;
      }
      width: 100%;
      height: 0.4rem;
      margin-bottom: 0.4rem;
      background-color: #222;
      border-radius: 1rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .managment {
    display: flex;
    a,
    p {
      text-decoration: none;
      font-size: 1.9rem;
      padding: 1rem;
      color: #222;
    }
  }
  .menu {
    &.active {
      transform: translateX(0%);
    }
    position: fixed;
    display: flex;
    z-index: 89;
    top: 0;
    left: 0;
    transition: .3s ease;
    transform: translateX(-100%);
    background-color: #222;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      color: #fff;
      padding: 1.5rem;
      font-size: 2.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
}
</style>