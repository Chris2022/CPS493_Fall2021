/*imports most important vue function create app
we then import our own app from App.vue
and own router, we runn the function by using createApp
use router then mount the element with the id="app"
*/
import { createApp } from 'vue'
//Third party
import '@fortawesome/fontawesome-free';
import 'bulma'
//local imports
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
