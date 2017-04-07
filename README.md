# vue-boilterplate
my boilerplate with vue/vuex/vue(x)-router, with sass/prerendering, optionally muse-ui

[![Standard - JavaScript Style
Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Build Setup

``` bash
# install dependencies
yarn
# or
npm install

# serve with hot reload at localhost:8080
yarn dev
# or
npm run dev

# build for production with minification and prerendering
yarn build
# or
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
yarn run unit
# or
npm run unit

# run e2e tests
yarn run e2e
# or
npm run e2e

# run all tests
yarn test
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Muse-ui
Components are loaded separately to minimize the bundle size,
therefore, you'll need to import component and register them one by one when using.

To import a component, there is a webpack alias `@muse-ui` which points to `muse-ui/src`.
So take the header component for example
(see `src/components/MyHeader.vue` for full source):
You'll need to import every muse-ui components that you want to use,
and register them in the components section:

```js
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
```

Note:
1. In order to use `<mu-flat-button />` in html, I use the name `MuFlatButton`
to register, because [vue converts camelCase in js to kebab-case in html](https://vuejs.org/v2/guide/components.html#camelCase-vs-kebab-case)
2. As you can see in the import section, the path starts with `@muse-ui` instead of just `muse-ui`, as mentioned earlier. But how do I know what the name is for each component? Well, [they're all in the `muse-ui/src` folder](https://github.com/museui/muse-ui/tree/master/src), so you have to find them in there by yourself... (see how `menuItem`'s location is so hidden...)
