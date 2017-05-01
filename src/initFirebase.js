import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import store from './store'

firebase.initializeApp({
  apiKey: 'AIzaSyCe4SzuYlIbQWHwDOcLzO_UZrO9kkBtYx8',
  authDomain: 'vue-boilerplate-5d1f0.firebaseapp.com',
  databaseURL: 'https://vue-boilerplate-5d1f0.firebaseio.com',
  projectId: 'vue-boilerplate-5d1f0',
  storageBucket: 'vue-boilerplate-5d1f0.appspot.com',
  messagingSenderId: '631758104620'
})

if (__DEV__) {
  window.firebase = firebase
}

export const ui = new firebaseui.auth.AuthUI(firebase.auth())

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
firebase.auth().onAuthStateChanged(user => {
  store.commit('UPDATE_USER', user)
})
