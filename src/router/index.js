import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import FourOhFour from '@/views/FourOhFour'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // TODO: should we remember scroll position?
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    { path: '*', component: FourOhFour }
  ]
})
