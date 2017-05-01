// polyfills
import 'es6-promise/auto'
import 'es6-weak-map/implement' // for vuexfire

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

// muse-ui
// import '@muse-ui/styles/base.less'
// TODO: import components separately before production
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// firebase
import './initFirebase'

Vue.config.productionTip = false

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
