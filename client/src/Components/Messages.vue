<template>
    <div class="messages">
        <div class="notification is-light" :class="`is-${message.type}`" v-for="(message, i) in messages"  :key="i">
            <button class="delete" @click.prevent="done(i)"></button>
            {{message.text}}
        </div>
    </div>
</template>

<script>
import session from "../services/session";
export default {
    data: ()=>({
        messages:session.messages,
    }),
    methods :{
        done(i){
            this.messages.splice(i,1);
            this.$oruga.notification.open('Notification Deleted')
        }
    }
}
</script>

<style>
.messages .notification{
    margin-bottom: 0%;
}
</style>