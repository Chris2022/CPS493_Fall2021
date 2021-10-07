<template>
 <div class="container">
    <Nav />
    <router-view123/>
 </div>
</template>

<style lang="scss">

</style>

<script>
import Nav from './Components/Nav';
import LoginBadge from './Components/LoginBadge';
export default {
  components: {
    Nav,
    LoginBadge
  }
}
</script>
