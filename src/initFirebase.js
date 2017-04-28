import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

firebase.initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'your-firebase-app.firebaseapp.com',
  databaseURL: 'https://your-firebase-app.firebaseio.com',
  storageBucket: 'your-app.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID'
})

export const ui = new firebaseui.auth.AuthUI(firebase.auth())
