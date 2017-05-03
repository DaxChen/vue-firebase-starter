<h1 align="center">vue-firebase-starter</h1>

<p align="center">
  <a href="https://github.com/feross/standard">
    <img src="https://cdn.rawgit.com/feross/standard/master/badge.svg" alt="Standard - JavaScript Style Guide">
  </a>
</p>

<p align="center">
Progressive Web App (PWA) starter-kit using vue/vuex/vue(x)-router/offline-plugin, with sass, prerendering, muse-ui, and firebase/firebaseui!
</p>



## Features

Everything in `vue-cli:webpack` (hot reloading/vue file/webpack2/eslint/postcss+sass+stylus+less/...), plus:

<!--TODO: add emoji and links and descriptions-->

- vue / vuex / vue-router / vuex-router-sync
- firebase
- vuexfire
- firebaseui
- muse-ui
- Offline Ready, Progressive Web App (PWA)
- prerendering for better SEO
<!--TODO - tracking library with offline support-->


## [Online Demo](https://vue-firebase-starter.netlify.com/)


## Build Commands

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


## Folder Structure

The folder structure is basically the same as `vue-cli`'s `webpack` template.

[Check the folder structure of the docs here.](http://vuejs-templates.github.io/webpack/structure.html)

```
├── build           # webpack config files
├── config          # project config (mainly used by webpack)
├── dist            # production bundled files when `npm run build`
├── node_modules    # npm dependencies
├── src             # the main src folder, see below for detail
├── static          # pure static assets (directly copied)
├── test            # unit tests and e2e tests
├── index.html      # the index.html template, used by html-webpack-plugin
└── package.json    # package info, build scripts and npm dependencies
```

```
src
├── assets              # module assets (processed by webpack)
├── components          # ui components
├── router              # vue-router routes
├── sass                # sass styles, _variables and _mixins
├── store               # vuex setting, store and modules
├── views               # also called `containers`, see below
├── App.vue             # main app component
├── initFirebase.js     # firebase settings, put your apiKeys here
├── main.js             # the entry point
├── muse-ui-theme.less  # muse-ui theme settings
└── pwa.js              # progressive web app (offline-plugin) runtime
```

To understand the difference between `components` and `views` (or `containers`), check out [this article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) by redux author [Dan Abramov (@gaearon)](https://github.com/gaearon).

You can rename the `views` to `containers` if you prefer : )

## Development

### Muse-UI Theme

Muse-UI currently only support theme settings using less.
Check out [the docs](http://www.muse-ui.org/#/theme) and change variables in [this file `src/muse-ui-theme.less`](https://github.com/DaxChen/vue-firebase-starter/blob/master/src/muse-ui-theme.less).

You can use [the color palette from material design colors](https://material.io/guidelines/style/color.html), watch the video to learn how to choose them.

### Webpack Settings

#### Globals Variables

##### `__DEV__`
There is a `__DEV__` variable that is defined by webpack, and will be replaced during compile time.
Therefore, you can use this in your code to separate debug code and production code.

For example, this

```js
if (__DEV__) {
  window.firebase = firebase
}
```

will make window.firebase available during development for easier debugging, but will be trimmed out when building for produciton.

#### Aliases

##### `@` = `src`

When importing, the `@` sign is aliased to `src` directory, so no need to use `../../../` in nested directories anymore, just use `@/store`, `@/components`, etc.

#### Static folder path

Different from the [default settings of vue-cli webpack template](https://vuejs-templates.github.io/webpack/static.html), I changed the `assetsSubDirectory` from `'static'` to `''`.
This means that everything you put in the `static/*` folder will be copied to the root of `dist/*`, instead of `dist/static/*`.

I did this because Netlify's `_redirects` needs to be in the root of the published directory `dist/`, see the following `Deploy/Netlify` section for more info.

### Progressive Web App (PWA)

**The offline-plugin is only used in production build.**

Thanks to the awesome [offline-plugin](https://github.com/NekR/offline-plugin), vue-firebase-starter is offline ready! It uses ServiceWorker and fallbacks to AppCache to cache webpack output assets (or other assets if specified).

[To understand the life-cycle of ServiceWorker and how it is updated, check out this awesome video.](https://youtu.be/TF4AB75PyIc)

For more information, [check out offline-plugin's docs](https://github.com/NekR/offline-plugin/#docs).

<!--TODO: explain `externals` and AppCache's FALLBACK page.-->

### Prerendering

vue-firebase-starter uses [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) to prerender html when building for production.

Because prerender will generate rendered DOM into html, and vue needs to be able to take control after, [make sure the root component has the same id as the element it's replacing](https://github.com/chrisvfritz/prerender-spa-plugin#caveats).


## Deployment

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
