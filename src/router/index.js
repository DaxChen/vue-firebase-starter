import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import store from '@/store'
import Landing from '@/views/Landing'
import Login from '@/views/Login'
import Profile from '@/views/Profile'
import Aloha from '@/views/Aloha'
import FourOhFour from '@/views/FourOhFour'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // TODO: should we remember scroll position?
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Landing },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.user) {
          next(from)
        } else {
          next()
        }
      }
    },
    {
      path: '/logout',
      beforeEnter: (to, from, next) => {
        if (store.state.user) {
          firebase.auth().signOut()
          next('/')
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    { path: '/aloha', component: Aloha },
    { path: '*', component: FourOhFour }
  ]
})

/**
 * Check if a route requires authentication.
 * This is a global before hook for all routes,
 * checks if there are `meta: { requiresAuth: true }`
 * in all matched routes and sub routes.
 * If yes, redirect to `/login` and add original path to the query.
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
