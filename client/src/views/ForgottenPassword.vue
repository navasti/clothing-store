<template>
<div class="forgotten-password">
    <h1>Recover your password</h1>
    <form>
        <label for="username">Username</label>
        <input type="text" id="username">
        <label for="email">Email</label>
        <input type="email" id="email">
        <button @click="recoverPassword">Recover</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'ForgottenPassword',
    methods: {
        recoverPassword(e){
            e.preventDefault();
        }
    },
}
</script>

<style lang="scss" scoped>
.forgotten-password{
  h1{margin-bottom: .5rem;}
  form{
    button{margin: 1.5rem 0 0 0; }
  }
}
</style>