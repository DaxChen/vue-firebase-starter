<template>
  <mu-appbar id="my-header">
    <!--<mu-icon-button icon="menu" slot="left"/>-->
    <router-link to="/" class="logo">Logo</router-link>

    <!-- using button in appBar as link is currently not supported,
      so use the button's @click event with $router.push hack...
      see: https://github.com/museui/muse-ui/issues/39 -->
    <mu-flat-button
      label="Hello"
      slot="right"
      @click="$router.push('/hello')"
    />
    <mu-flat-button
      label="Aloha"
      slot="right"
      @click="$router.push('/aloha')"
    />
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="Menu 1"/>
      <mu-menu-item title="Menu 2"/>
      <mu-menu-item title="Menu 3"/>
      <mu-menu-item title="Menu 4"/>
      <mu-menu-item title="Menu 5"/>
    </mu-icon-menu>
  </mu-appbar>
</template>
<script>
import MuAppbar from '@muse-ui/appBar'
import MuFlatButton from '@muse-ui/flatButton'
import MuIconMenu from '@muse-ui/iconMenu'
import { menuItem as MuMenuItem } from '@muse-ui/menu'

export default {
  components: {
    MuAppbar,
    MuFlatButton,
    MuIconMenu,
    MuMenuItem
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
