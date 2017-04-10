<template>
  <div id="app">
    <my-header />

    <side-nav />

    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import SideNav from '@/components/SideNav'

export default {
  name: 'app',
  components: {
    MyHeader,
    SideNav
  }
}
</script>

<style lang="sass">
</style>
