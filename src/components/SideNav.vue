<template>
  <md-sidenav
    id="sidenav"
    class="md-left"
    ref="sideNav"
    md-swipeable
    @close="closeSideNav"
    @open="openSideNav"
  >
    <md-toolbar class="md-large sidenav-header">
      <div class="md-toolbar-container">
        <router-link to="/">
          <h2 class="md-title">Logo</h2>
        </router-link>
      </div>
    </md-toolbar>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>

    <md-list>
      <md-list-item>
        <router-link to="/hello">Hello</router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/aloha">Aloha</router-link>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      open: 'sideNavOpen'
    })
  },
  watch: {
    open (v) {
      this.$refs.sideNav[v ? 'open' : 'close']()
    }
  },
  methods: {
    ...mapMutations({
      openSideNav: 'OPEN_SIDE_NAV',
      closeSideNav: 'CLOSE_SIDE_NAV'
    })
  }
}
</script>

<style lang="sass">
#sidenav
  .sidenav-header
    a
      text-decoration: none
    .md-title
      color: #fff
      font-size: 30px
      font-weight: 500
      padding: 10px

</style>
