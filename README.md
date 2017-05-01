# vue-firebase-starter
My boilerplate using vue/vuex/vue(x)-router, with sass/prerendering, muse-ui, and firebase/firebaseui!

## [Online Demo](https://vue-firebase-starter.netlify.com/)

[![Standard - JavaScript Style
Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Build Setup

``` bash
# install dependencies
yarn # or `npm install`

# serve with hot reload at localhost:8080
yarn dev # or `npm run dev`

# build for production with minification and prerendering
yarn build # or `npm run build`

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
yarn run unit # or `npm run unit`

# run e2e tests
yarn run e2e # or `npm run e2e`

# run all tests
yarn test # or `npm test`
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Globals

### `__DEV__`
There is a `__DEV__` variable that is defined by webpack, and will be replaced during compile time.
Therefore, you can use this in your code to separate debug code and production code.

For example, this

```js
if (__DEV__) {
  window.firebase = firebase
}
```

will make window.firebase available during development for easier debugging, but will be trimmed out when building for produciton.

## Aliases

### `@` = `src`

When importing, the `@` sign is aliased to `src` directory, so no need to use `../../../` in nested directories anymore, just use `@/store`, `@/components`, etc.

## Static folder path

Different from the [default settings of vue-cli webpack template](https://vuejs-templates.github.io/webpack/static.html), I changed the `assetsSubDirectory` from `'static'` to `''`.
This means that everything you put in the `static/*` folder will be copied to the root of `dist/*`, instead of `dist/static/*`.

I did this because Netlify's `_redirects` needs to be in the root of the published directory `dist/`, see the following `Deploy/Netlify` section for more info.

## Deploy

### favicon

I recommend http://realfavicongenerator.net/, the best favicon generator I've used!

Just follow the instruction and put the extracted files in the `static/` folder, and override the `<head></head>` section in `index.html`.

### Netlify

I highly recommend you try out [Netlify](https://www.netlify.com/) if you haven't!

Just signup, choose your `GitHub/GitLab/BitBucket` account and repo, put in two settings:

- build command: `yarn build`
- Publish directory: `dist`

And you're all set! Every time you push to the chosen branch, you're site rebuilds and deploys automatically!

#### _redirects

To use Netlify with vue-router (or any other SPA), we need to setup a `_redirects` file in the root of the published directory (NOT the root of project).

This is already done for you, check out `statics/_redirects`.

<!--## Muse-ui
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
2. As you can see in the import section, the path starts with `@muse-ui` instead of just `muse-ui`, as mentioned earlier. But how do I know what the name is for each component? Well, [they're all in the `muse-ui/src` folder](https://github.com/museui/muse-ui/tree/master/src), so you have to find them in there by yourself... (see how `menuItem`'s location is so hidden...)-->
