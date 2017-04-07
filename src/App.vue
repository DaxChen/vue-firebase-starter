<template>
  <div id="app">
    <my-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
  name: 'app',
  components: {
    MyHeader
  }
}
</script>

<style lang="sass">
#app
</style>
