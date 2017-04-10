import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

// vue-material
import './vue-material-theme'

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
