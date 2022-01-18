import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'
import './samples/nodejs-api'
import './samples/electron-store'
import './samples/serialport'
import store from './vuex-store/store'
import router from './router/router'

createApp(App)
  .mount('#app')
  .$nextTick(window.removeLoading)
