<template>
  <v-app id="app">
    <my-header />

    <main id="main">
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>

    <v-footer>Footer</v-footer>
  </v-app>
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
#main
  margin-top: 64px
</style>
