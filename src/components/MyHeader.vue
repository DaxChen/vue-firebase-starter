<template>
  <v-toolbar fixed id="header">
    <v-toolbar-side-icon
      class="hidden-sm-and-up"
      @click.native.stop="nav2 = !nav2"
    />

    <!--<v-toolbar-title router href="/">Logo</v-toolbar-title>-->
    <v-toolbar-title>
      <router-link to="/" class="logo">Logo</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-toolbar-item
        ripple
        router
        href="/hello"
        class="hidden-xs-only">
        Hello
      </v-toolbar-item>
      <v-toolbar-item
        ripple
        router
        href="/aloha"
        class="hidden-xs-only">
        Aloha
      </v-toolbar-item>

      <v-menu
        bottom
        origin="top right"
        transition="v-scale-transition"
        class="hidden-sm-and-up"
      >
        <v-btn dark icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-item>
            <v-list-tile>
              <v-list-tile-title>Hello</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Aloha</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
#header
  .logo
    color white
    text-decoration none
    padding 10px
    font-size 30px
    font-weight 500
    letter-spacing 1px
</style>
