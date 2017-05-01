<template>
<div>
  <h1>My Profile</h1>
  <hr />

  <img :src="user.photoURL" />
  <h3>{{user.displayName}}</h3>
  <p>email: {{user.email}}</p>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="scss">

</style>
