<template>
  <header>
    <!-- <DesktopNav/> -->
    <MobileNav/>
  </header>
</template>

<script>
// import DesktopNav from './DesktopNav.vue';
import MobileNav from './MobileNav.vue';

export default {
  name: 'Header',
  components: {
    // DesktopNav
    MobileNav
  },
};
</script>

<style scoped lang="scss">
header {
  color: #42b983;
}
</style>
