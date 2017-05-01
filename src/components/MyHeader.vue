<template>
  <mu-appbar id="my-header">
    <!--<mu-icon-button icon="menu" slot="left"/>-->
    <router-link to="/" class="logo">Logo</router-link>

    <mu-flat-button
      label="Aloha"
      slot="right"
      to="aloha"
    />
    <mu-raised-button
      v-show="!user"
      label="Login"
      secondary
      slot="right"
      to="/login"
    />
    <mu-flat-button
      v-show="user"
      :label="user && user.displayName"
      slot="right"
      ref="userButton"
      @click="toggle"
    >
      <mu-avatar :src="user && user.photoURL" />
    </mu-flat-button>
    <mu-popover
      slot="right"
      :trigger="userMenuTrigger"
      :open="userMenuOpen"
      @close="handleClose"
      :anchorOrigin="{vertical: 'bottom', horizontal: 'right'}"
      :targetOrigin="{vertical: 'top', horizontal: 'right'}"
    >
      <mu-menu>
        <mu-menu-item title="Profile" to="/profile" @click.native="handleClose" />
        <mu-menu-item title="Logout" to="/logout" @click.native="handleClose" />
      </mu-menu>
    </mu-popover>

  </mu-appbar>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    userMenuOpen: false,
    userMenuTrigger: null
  }),
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  watch: {
    user (val) {
      if (val) {
        this.userMenuTrigger = this.$refs.userButton.$el
      }
    }
  },
  methods: {
    toggle () {
      this.userMenuOpen = !this.userMenuOpen
    },
    handleClose (e) {
      this.userMenuOpen = false
    }
  }
}
</script>
<style lang="sass">
#my-header
  .logo
    color: white
    text-decoration: none
    padding: 10px
</style>
