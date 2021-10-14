<template>
    <div class="container">
        <div class="columns">
            <div class="column">
            </div>
        </div>
        <Nav />
        <router-view/>        
    </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from "./Components/Nav.vue";
export default {
    components: {
        Nav
    }
}
</script>