/*imports most important vue function create app
we then import our own app from App.vue
and own router, we runn the function by using createApp
use router then mount the element with the id="app"
*/
import { createApp } from 'vue'
//Third party
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import {Notification, Config} from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga-next/dist/oruga-full.css';
//local imports
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .use(Notification)
    .use(Config,{
        iconPack:'fas'
    })
    .mount('#app')
