<template>
  <footer>
    <router-link to="/about">About</router-link>
    <router-link to="/faq">FAQ</router-link>
    <router-link to="/shipping-returns">Shipping & Returns</router-link>
    <router-link to="/terms-condition">Terms & Condition</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  margin-top: 3rem;
  a {
    text-transform: uppercase;
    color: #ccc;
    text-decoration: none;
    padding: 1rem 0.5rem;
    font-size: 1.2rem;
  }
}
</style>
