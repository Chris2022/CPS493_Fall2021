<template>
    <div class="container">
        <div class="columns">
            <div class="column">
            </div>
        </div>
        <Nav />
        <messages />
        <router-view/>        
    </div>
</template>

<style lang="scss">
</style>

<script>
import Messages from './Components/Messages.vue';
import Nav from "./Components/Nav.vue";
export default {
    components: {
        Nav,
        Messages
    }
}
</script>