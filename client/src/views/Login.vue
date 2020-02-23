<template>
  <div class="login">
    <h1>Log in</h1>
    <form>
      <label for="username">Username</label>
      <input type="text" id="username">
       <label for="password">Password</label>
      <input type="password" id="password">
      <button @click="logIn">Sign in</button>
    </form>
    <div class="help">
      <router-link to="/forgotten-password">Forgot password?</router-link>
      <router-link to="/create-account">Create an account</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    logIn(e){
      e.preventDefault();
    }
  },
}
</script>

<style lang="scss" scoped>
  .help{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    a{
      color: #000;
      font-size: 1.6rem;
      text-decoration: none;
    }
  }
</style>