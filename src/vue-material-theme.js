/**
 * Init vue-material
 */
import Vue from 'vue'

// import all:
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)

// import individual components:
// path see: https://github.com/marcosmoura/vue-material/tree/master/dist/components
// import mdCore from 'vue-material/dist/components/mdCore'
// import 'vue-material/dist/components/mdCore/index.css'
// Vue.use(mdCore)

/**
 * Themes
 *
 * color palette: https://material.io/guidelines/style/color.html#color-color-palette
 */

// first, the `default` theme! all other themes will inherit this
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'pink',
  warn: 'deep-orange',
  background: {
    color: 'grey',
    hue: 100
  }
})

Vue.material.registerTheme({
  // app: {
  //   primary: 'cyan'
  // },
  // about: {
  //   primary: 'indigo'
  // },
  // contact: {
  //   primary: 'teal'
  // }
})
