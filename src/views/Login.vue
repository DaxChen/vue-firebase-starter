<template>
  <div class="hello">
    <h1> this is Login page </h1>
    <div id="firebaseui-auth-container" />
  </div>
</template>
<script>
import firebase from 'firebase'
import { ui } from '../initFirebase'

const uiConfig = {
  callbacks: {
    // Called when the user has been successfully signed in
    signInSuccess (user, credential, redirectUrl) {
      console.log(user, credential, redirectUrl)
      // Do not redirect.
      return false
    }
  },
  // Opens IDP Providers sign-in flow in a popup
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/plus.login']
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ]
    },
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // Whether the display name should be displayed in Sign Up page.
      requireDisplayName: true
    }
  ]
  // Terms of service url.
  // tosUrl: 'https://www.google.com'
}

export default {
  mounted () {
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
<style lang="sass">
.hello
  text-align: center
</style>
