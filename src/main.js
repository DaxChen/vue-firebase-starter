/* This is the entry point */

// polyfills
import 'es6-promise/auto'
import 'weakmap' // for vuexfire, using (imports-loader)

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

// muse-ui
// import '@muse-ui/styles/base.less'
// TODO: import components separately before production
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './muse-ui-theme.less'
Vue.use(MuseUI)

// firebase
import './initFirebase'

Vue.config.productionTip = false

// Sync the router with the vuex store. This registers `store.state.route`
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
