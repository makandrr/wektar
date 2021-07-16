import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/global.scss'
import QButton from './components/QButton'
import QButtonBack from './components/QButtonBack'
import QButtonIcon from './components/QButtonIcon'

createApp(App)
  .use(store)
  .use(router)
  .component('QButton', QButton)
  .component('QButtonBack', QButtonBack)
  .component('QButtonIcon', QButtonIcon)
  .mount('#app')
