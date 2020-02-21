<template>
  <nav class="desktop-nav">
    <div class="store">
      <router-link to="/">Home</router-link>
      <router-link to="/cloths">Cloths</router-link>
      <router-link to="/sales">Sales</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="managment">
      <router-link to="/cart">Cart</router-link>
      <router-link to="/login">Account</router-link>
      <p>Search</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DesktopNav',
}
</script>

<style scoped lang="scss">
.desktop-nav{
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
}
</style>