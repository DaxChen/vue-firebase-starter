import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import Login from '@/views/Login'
import Aloha from '@/views/Aloha'
import FourOhFour from '@/views/FourOhFour'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // TODO: should we remember scroll position?
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Landing },
    { path: '/login', component: Login },
    { path: '/aloha', component: Aloha },
    { path: '*', component: FourOhFour }
  ]
})
