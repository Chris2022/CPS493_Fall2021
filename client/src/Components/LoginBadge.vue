<template>
    <div class="buttons" v-if="!name">
      <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <a class="button is-light" @click="login">Log in
        </a>
    </div>
    <div v-else>
        Hello {{name}}
    </div>
</template>

<script>
import Session, {Login} from "../services/session";

export default {
    data: ()=>({
        Session
    }),
    methods:{
        login(){
            console.log(Session);
            Login();
            console.log(Session);
        }
    },
    computed:{
        name(){
            return this.Session.user.Firstname + ' ' + this.Session.user.Lastname
        }
    }
}
</script>

<style>

</style>