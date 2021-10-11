<template>
 <div class="container">
    <Nav />
    <router-view/>
 </div>
</template>

<style lang="scss">

</style>

<script>
import Nav from './Components/Nav';
// import LoginBadge from './Components/LoginBadge';
export default {
  components: {
    Nav,

  }
}
</script>
