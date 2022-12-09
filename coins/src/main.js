import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Paginate from "vuejs-paginate-next";
import axios from "axios"

// import './assets/main.css'

const app = createApp(App)

app
    .use(router)
    .mount('#app')

