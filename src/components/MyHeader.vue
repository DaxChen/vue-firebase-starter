<template>
  <md-toolbar id="my-header" class="md-dense">
    <md-button
      class="md-icon-button md-hide-small-and-up"
      @click.native="openSideNav"
    >
      <md-icon>menu</md-icon>
    </md-button>

    <div class="logo">
      <router-link to="/">
        <h2 class="md-title">Logo</h2>
      </router-link>
    </div>

    <!--this is the current hack of using md-button with router-link-->
    <router-link
      to="/hello"
      class="md-button md-hide-xsmall"
      :class="`md-theme-${$material.currentTheme}`"
    >
      Hello!
      <md-ink-ripple />
    </router-link>
    <router-link
      to="/aloha"
      class="md-button md-hide-xsmall"
      :class="`md-theme-${$material.currentTheme}`"
    >
      Aloha!
      <md-ink-ripple />
    </router-link>
    <md-button class="md-icon-button" @click.native="">
      <md-icon>favorite</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      openSideNav: 'OPEN_SIDE_NAV'
    })
  }
}
</script>

<style lang="sass">
#my-header
  .logo
    flex: 1

  a
    color: #fff
    text-decoration: none

  .md-title
    display: inline-block
    font-size: 30px
    font-weight: 500
    padding: 10px

</style>
