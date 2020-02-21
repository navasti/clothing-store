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
      <p>Search</p>
      <div class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/cloths">Cloths</router-link>
        <router-link to="/sales">Sales</router-link>
        <router-link to="/about">About</router-link>
      </div>
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
    }
  }
};
</script>

<style scoped lang="scss">
.mobile-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hamburger {
    display: flex;
    position: relative;
    z-index: 999;
    flex-direction: column;
    width: 4.5rem;
    padding: 0.5rem;
    .bar {
      &.active {
        background-color: #fff;
      }
      width: 100%;
      height: 0.5rem;
      margin-bottom: 0.3rem;
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
      font-size: 1.6rem;
      padding: 0.5rem;
      color: #222;
    }
  }
  .menu {
    &.active {
      display: flex;
    }
    position: fixed;
    top: 0;
    left: 0;
    background-color: #222;
    width: 100%;
    height: 100vh;
    display: none;
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